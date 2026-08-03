import React, { useState, useRef, useEffect, useCallback } from 'react';

import na1 from '../assets/nature/740830.jpg';
import na2 from '../assets/nature/1000476.jpg';
import na3 from '../assets/nature/1008231.jpg';
import na4 from '../assets/nature/740830.jpg';
import na5 from '../assets/nature/1008242.jpg';
import na6 from '../assets/nature/1008250.jpg';
import na7 from '../assets/nature/1008251.jpg';
import na8 from '../assets/nature/1008270.jpg';

import ga1 from '../assets/gastronomic/g1.jpg';
import ga2 from '../assets/gastronomic/g2.jpg';
import ga3 from '../assets/gastronomic/g3.jpg';
import ga4 from '../assets/gastronomic/g4.jpg';
import ga5 from '../assets/gastronomic/g5.jpg';
import ga6 from '../assets/gastronomic/g6.jpg';
import ga7 from '../assets/gastronomic/g7.jpg';
import ga8 from '../assets/gastronomic/g8.jpg';

import f1 from '../assets/fastival/f1.jpg';
import f2 from '../assets/fastival/f2.jpg';
import f3 from '../assets/fastival/f3.jpg';
import f4 from '../assets/fastival/f4.jpg';
import f5 from '../assets/fastival/f5.jpg';
import f6 from '../assets/fastival/f6.jpg';
import f7 from '../assets/fastival/f7.jpg';

const PrevArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const NextArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);


const ScrollableSlider = ({ data, renderItem }) => {
  const scrollContainerRef = useRef(null);
 
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);


  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // إظهار السهم الأيسر فقط إذا تحركنا من نقطة الصفر
      setShowLeftArrow(scrollLeft > 1); 
      
      // إظهار السهم الأيمن فقط إذا لم نصل للنهاية
      // نستخدم -1 للتغلب على مشاكل التقريب في بعض المتصفحات
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
      setShowRightArrow(!isAtEnd);
    }
  }, []);

  // إضافة مستمع لحدث التمرير عند تحميل المكون
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // التحقق الأولي (في حال كانت البيانات قليلة ولا تحتاج سكرول)
      checkScrollPosition(); 
      container.addEventListener('scroll', checkScrollPosition);
      // إعادة التحقق عند تغيير حجم النافذة
      window.addEventListener('resize', checkScrollPosition); 
      
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, [checkScrollPosition, data]); // إعادة التشغيل إذا تغيرت البيانات

  // دالة تحريك السلايدر
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = 192; // عرض البطاقة + الـ gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? cardWidth : -cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative group">
      {/* زر التمرير إلى اليسار - يظهر شرطياً */}
      {showLeftArrow && (
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-[-16px] top-12 bg-white border border-gray-200 rounded-full p-2 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all z-10"
          aria-label="Previous"
        >
          <PrevArrow />
        </button>
      )}

      {/* الحاوية الرئيسية للتمرير */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {data.map((item, index) => renderItem(item, index))}
      </div>

      {/* زر التمرير إلى اليمين - يظهر شرطياً */}
      {showRightArrow && (
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-[-16px] top-12 bg-white border border-gray-200 rounded-full p-2 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all z-10"
          aria-label="Next"
        >
          <NextArrow />
        </button>
      )}
    </div>
  );
};

// --- المكون الرئيسي ---
const Main = () => {
  const [activeTab, setActiveTab] = useState('nature');

  const tabs = [
    { id: 'nature', label: 'Nature Photography' },
    { id: 'coastal', label: 'Coastal Relaxation' },
    { id: 'festivals', label: 'Festivals & Events' },
    { id: 'gastronomic', label: 'Gastronomic Experiences' },
  ];

  // (بياناتك كما هي...)
  const destinationsData = {
    nature: [
      { name: 'Port Said', distance: '169 km away', image: na1 },
      { name: 'Dahab', distance: '361 km away', image: na2 },
      { name: 'Hurghada', distance: '399 km away', image: na3 },
      { name: 'Luxor', distance: '503 km away', image: na4 },
      { name: 'Marsa Alam City', distance: '562 km away', image: na5 },
      { name: 'Aswan', distance: '562 km away', image: na6 },
      { name: 'Abu Simbel', distance: '562 km away', image: na7 },
      { name: 'Sharm El Sheikh', distance: '500 km away', image: na8 },
    ],
    coastal: [
      { name: 'Sharm El Sheikh', distance: '500 km away', image: ga1 },
      { name: 'Marsa Alam', distance: '660 km away', image: ga2 },
      { name: 'North Coast', distance: '280 km away', image: ga3 },
      { name: 'Luxor', distance: '220 km away', image: ga4 },
      { name: 'Alexandria', distance: '220 km away', image: ga5 },
    ],
    festivals: [
      { name: 'Cairo Opera', distance: '15 km away', image: f1 },
      { name: 'Aswan Sun Festival', distance: '850 km away', image: f2 },
      { name: 'Sharm El Sheikh', distance: '850 km away', image: f3 },
    ],
    gastronomic: [
      { name: 'El Hussein (Khan)', distance: '5 km away', image: ga1 },
      { name: 'Zamalek Cafes', distance: '2 km away', image: ga2 },
    ],
  };

  const exploreEgyptData = [
    { name: 'Giza', distance: '15 km away', image: na1 },
    { name: 'Cairo', distance: '10 km away', image: na2 },
    { name: 'Alexandria', distance: '220 km away', image: na3 },
    { name: 'Siwa Oasis', distance: '560 km away', image: na4 },
    { name: 'Fayoum', distance: '100 km away', image: na5 },
    { name: 'Nuweiba', distance: '460 km away', image: na6 },
    { name: 'Ras Mohammed', distance: '490 km away', image: na7 },
    { name: 'White Desert', distance: '500 km away', image: na8 },
  ];

  // دالة لرسم كارت الوجهة (لإعادة استخدامها)
  const renderDestinationCard = (dest, index) => (
    <div key={index} className="flex-shrink-0 w-44 snap-start cursor-pointer group/card">
      <div className="w-full h-28 rounded-xl overflow-hidden mb-3 bg-gray-100 relative">
        <img 
          src={dest.image} 
          alt={dest.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
          loading="lazy"
        />
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover/card:text-blue-600 transition-colors">
          {dest.name}
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          {dest.distance}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full px-3 lg:w-[1100px] lg:mx-auto pt-2">
      <div className="w-full max-w-6xl mx-auto px-4 py-8 font-sans select-none" dir="ltr">
        
        {/* العنوان الرئيسي */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Quick and easy trip planner</h1>
          <p className="text-sm text-gray-500">Pick a vibe and explore the top destinations in Egypt</p>
        </div>

        {/* أزرار التصفح (Tabs) */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border
                  ${isActive 
                    ? 'border-blue-600 bg-blue-50 text-blue-600 font-semibold shadow-sm' 
                    : 'border-gray-200 text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-300'
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 1. السلايدر العلوي الخاص بالـ Tabs باستخدام المكون الجديد */}
        <ScrollableSlider 
          data={destinationsData[activeTab]} 
          renderItem={renderDestinationCard}
        />

        {/* 2. قسم Explore Egypt باستخدام المكون الجديد */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Explore Egypt</h2>
          <p className="text-sm text-gray-500 mb-6">These popular destinations have a lot to offer</p>
          
          <ScrollableSlider 
            data={exploreEgyptData} 
            renderItem={renderDestinationCard}
          />
        </div>

      </div>
    </div>
  );
};

export default Main;