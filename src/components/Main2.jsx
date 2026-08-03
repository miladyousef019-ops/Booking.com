import React, { useState, useRef, useEffect } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';

// 1. صور الأماكن/المدن
import s1 from '../assets/costal/s1.jpg';
import s2 from '../assets/costal/s2.jpg';
import s3 from '../assets/costal/s3.jpg';
import s4 from '../assets/costal/s4.jpg';
import s5 from '../assets/costal/s5.jpg';
import s6 from '../assets/costal/s6.jpg';
import s7 from '../assets/costal/s7.jpg';
import s8 from '../assets/costal/s8.jpg';
import s9 from '../assets/costal/s9.jpg';
import s10 from '../assets/costal/s10.jpg';
import s11 from '../assets/costal/s11.jpg';
import s12 from '../assets/costal/s12.jpg';

// 2. صور العقارات / Homes
import d1 from '../assets/d/d1.jpg';
import d2 from '../assets/d/d2.jpg';
import d3 from '../assets/d/d3.jpg';
import d4 from '../assets/d/d4.jpg';
import d5 from '../assets/d/d5.jpg';
import d6 from '../assets/d/d6.jpg';
import d7 from '../assets/d/d7.jpg';
import d9 from '../assets/d/d9.jpg';
import d10 from '../assets/d/d10.jpg';
import d11 from '../assets/d/d11.jpg';
import d12 from '../assets/d/d12.jpg';

// 3. صور عروض الويك إند
import st1 from '../assets/stay/st1.jpg';
import st2 from '../assets/stay/st2.jpg';
import st3 from '../assets/stay/st3.jpg';
import st4 from '../assets/stay/st4.jpg';
import st5 from '../assets/stay/st5.jpg';
import st6 from '../assets/stay/st6.jpg';
import st7 from '../assets/stay/st7.jpg';
import st8 from '../assets/stay/st8.jpg';
import st9 from '../assets/stay/st9.jpg';
import st10 from '../assets/stay/st10.jpg';

// مكون زِر المفضلة التفاعلي مع تلوين أزرق ورسالة مؤقتة
const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // منع التأثير على العناصر المجاورة عند الضغط
    const nextState = !isFavorite;
    setIsFavorite(nextState);

    if (nextState) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000); // إخفاء الرسالة بعد ثانيتين
    } else {
      setShowToast(false);
    }
  };

  return (
    <div className="absolute top-2 right-2 z-10 flex flex-col items-end">
      <button
        onClick={toggleFavorite}
        className="p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white transition-all duration-200"
      >
        <Heart
          className={`w-4 h-4 transition-colors duration-200 ${
            isFavorite
              ? 'text-blue-600 fill-blue-600'
              : 'text-gray-700 hover:text-blue-600'
          }`}
        />
      </button>

      {/* الرسالة المؤقتة تحت زر القلب */}
      {showToast && (
        <div className="mt-1 bg-gray-900/90 text-white text-[10px] font-medium px-2 py-1 rounded shadow-md whitespace-nowrap animate-fade-in">
          Added to favorite
        </div>
      )}
    </div>
  );
};

// component فرعي مخصص للتحكم في السلايدر وإظهار/إخفاء الأزرار
const CarouselSection = ({ children }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstCard = container.firstElementChild;
      
      let scrollAmount = 280;
      if (firstCard) {
        const gap = parseFloat(window.getComputedStyle(container).gap) || 16;
        scrollAmount = firstCard.offsetWidth + gap;
      }

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative group/carousel">
      {/* سهم اليسار */}
      {canScrollLeft && (
        <button
          onClick={() => handleScroll('left')}
          className="absolute -left-4 top-[35%] -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* الحاوية القابلة للتمرير */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>

      {/* سهم اليمين */}
      {canScrollRight && (
        <button
          onClick={() => handleScroll('right')}
          className="absolute -right-4 top-[35%] -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

const Main2 = () => {
  // 1. المدن
  const destinations = [
    { name: 'Cairo', properties: '11,522 properties', img: s1 },
    { name: 'Hurghada', properties: '5,217 properties', img: s2 },
    { name: 'Alexandria', properties: '1,945 properties', img: s3 },
    { name: 'Ain Sokhna', properties: '1,525 properties', img: s4 },
    { name: 'Sharm El Sheikh', properties: '1,291 properties', img: s5 },
    { name: 'El Alamein', properties: '3,325 properties', img: s6 },
    { name: 'Cairo', properties: '3,325 properties', img: s7 },
    { name: 'El Alamein', properties: '3,325 properties', img: s8 },
    { name: 'Alexandria', properties: '3,325 properties', img: s9 },
    { name: 'Hurghada', properties: '3,325 properties', img: s10 },
    { name: 'Sokhna', properties: '3,325 properties', img: s11 },
    { name: 'El Alamein', properties: '3,325 properties', img: s12 },
  ];

  // 2. العقارات الفريدة
  const uniqueProperties = [
    { title: 'The Smallville Hotel', location: 'Beirut, Lebanon', rating: 9.0, reviews: 480, ratingText: 'Wonderful', type: 'Hotel', oldPrice: 'EGP 13,611', price: 'EGP 11,739', genius: true, stars: 5, img: d1 },
    { title: 'The American Colony Hotel', location: 'Jerusalem, Israel', rating: 8.9, reviews: 357, ratingText: 'Excellent', type: 'Hotel', price: 'EGP 22,051', genius: true, stars: 5, img: d2 },
    { title: 'The Post Hostel Jerusalem', location: 'Jerusalem, Israel', rating: 7.7, reviews: 1010, ratingText: 'Good', type: 'Hostel', price: 'EGP 5,981', genius: true, stars: 0, showSavedBadge: true, img: d3 },
    { title: 'The Vera', location: 'Tel Aviv, Israel', rating: 9.4, reviews: 840, ratingText: 'Wonderful', type: 'Hotel', price: 'EGP 13,580', genius: false, stars: 0, img: d4 },
    { title: 'Boutique Hotel Stay', location: 'Cairo, Egypt', rating: 8.7, reviews: 230, ratingText: 'Excellent', type: 'Hotel', price: 'EGP 9,400', genius: true, stars: 4, img: d5 },
  ];

  // 3. منازل يعشقها الضيوف
  const homesGuestsLove = [
    { title: 'Aparthotel Stare Miasto', location: 'Old Town, Poland, Krakow', rating: 8.9, ratingText: 'Excellent', reviews: 3054, price: 'EGP 8,173', img: d1 },
    { title: 'NĒRO Boutique Hotel', location: 'Greece, Imerovigli', rating: 9.7, ratingText: 'Exceptional', reviews: 130, price: 'EGP 29,176', img: d2 },
    { title: '7Seasons Apartments Budapest', location: '06. Terézváros, Hungary, Budapest', rating: 8.8, ratingText: 'Excellent', reviews: 9966, price: 'EGP 8,474', img: d3 },
    { title: 'The Apartments by The Sloane Club', location: 'Kensington and Chelsea, London', rating: 9.0, ratingText: 'Wonderful', reviews: 260, price: 'EGP 48,281', img: d4 },
    { title: 'Luxury Sloane Residence', location: 'London, UK', rating: 9.1, ratingText: 'Wonderful', reviews: 410, price: 'EGP 52,100', img: d5 },
    { title: 'Grand Central Apartment', location: 'Krakow, Poland', rating: 8.9, ratingText: 'Excellent', reviews: 1200, price: 'EGP 7,500', img: d6 },
    { title: 'Seaside Villa Stay', location: 'Athens, Greece', rating: 9.5, ratingText: 'Exceptional', reviews: 890, price: 'EGP 18,300', img: d7 },
    { title: 'Historical City Home', location: 'Budapest, Hungary', rating: 9.2, ratingText: 'Wonderful', reviews: 540, price: 'EGP 11,200', img: d9 },
    { title: 'Modern Downtown Suite', location: 'Vienna, Austria', rating: 8.8, ratingText: 'Excellent', reviews: 310, price: 'EGP 14,800', img: d10 },
    { title: 'Cozy River View Flat', location: 'Prague, Czech Republic', rating: 9.3, ratingText: 'Wonderful', reviews: 760, price: 'EGP 12,900', img: d11 },
    { title: 'Classic Heritage Resort', location: 'Rome, Italy', rating: 9.6, ratingText: 'Exceptional', reviews: 1450, price: 'EGP 22,400', img: d12 },
  ];

  // 4. عروض الويك إند
  const weekendDeals = [
    { title: 'Middle east pyramids jacuzzi & spa', location: 'Cairo, Egypt', rating: 7.0, reviewsCount: 26, reviewStatus: 'Good', price: 'EGP 1,148', oldPrice: 'EGP 6,752', nights: 2, genius: true, img: st1 },
    { title: 'Alex inn Rooms', location: 'Alexandria, Egypt', rating: 6.1, reviewsCount: 184, reviewStatus: 'Review score', price: 'EGP 1,355', oldPrice: 'EGP 1,841', nights: 2, getawayDeal: true, img: st2 },
    { title: 'Porto Sokhna Pyramids Residence', location: 'Ain Sokhna, Egypt', rating: 9.4, reviewsCount: 7, reviewStatus: 'Wonderful', price: 'EGP 10,588', oldPrice: 'EGP 11,765', nights: 2, genius: true, img: st3 },
    { title: 'Sun Hotel', location: 'Cairo, Egypt', rating: 9.5, reviewsCount: 152, reviewStatus: 'Exceptional', price: 'EGP 2,046', oldPrice: 'EGP 10,239', nights: 2, genius: true, img: st4 },
    { title: 'Royal Beach Resort', location: 'Hurghada, Egypt', rating: 8.6, reviewsCount: 412, reviewStatus: 'Excellent', price: 'EGP 4,200', oldPrice: 'EGP 6,100', nights: 2, getawayDeal: true, img: st5 },
    { title: 'Red Sea View Hotel', location: 'Sharm El Sheikh, Egypt', rating: 8.9, reviewsCount: 680, reviewStatus: 'Excellent', price: 'EGP 5,800', oldPrice: 'EGP 7,500', nights: 2, genius: true, img: st6 },
    { title: 'Marina Promenade Suites', location: 'El Alamein, Egypt', rating: 9.1, reviewsCount: 95, reviewStatus: 'Wonderful', price: 'EGP 8,900', oldPrice: 'EGP 10,500', nights: 2, getawayDeal: true, img: st7 },
    { title: 'Nile Breeze Hotel', location: 'Cairo, Egypt', rating: 8.3, reviewsCount: 210, reviewStatus: 'Very Good', price: 'EGP 2,900', oldPrice: 'EGP 3,800', nights: 2, genius: true, img: st8 },
    { title: 'Coastal Bay Resort', location: 'Ain Sokhna, Egypt', rating: 8.8, reviewsCount: 340, reviewStatus: 'Excellent', price: 'EGP 6,400', oldPrice: 'EGP 8,200', nights: 2, getawayDeal: true, img: st9 },
    { title: 'Corniche View Inn', location: 'Alexandria, Egypt', rating: 7.9, reviewsCount: 180, reviewStatus: 'Good', price: 'EGP 2,100', oldPrice: 'EGP 2,900', nights: 2, genius: true, img: st10 },
  ];

  return (
    <div className="max-w-[1140px] mx-auto p-4 font-sans bg-white text-[#1a1a1a]" dir="ltr">
      

      {/* 2. قسم العقارات الفريدة */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-1">Stay at our top unique properties</h2>
        <p className="text-sm text-gray-600 mb-4">From castles and villas to boats and igloos, we have it all</p>

        <CarouselSection>
          {uniqueProperties.map((prop, i) => (
            <div key={i} className="flex-shrink-0 w-[260px] sm:w-[270px] flex flex-col bg-white rounded-lg overflow-hidden group cursor-pointer relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                <img src={prop.img} alt={prop.title} className="w-full h-full object-cover" />
                
                {/* زِر المفضلة التفاعلي */}
                <FavoriteButton />

                {prop.showSavedBadge && (
                  <div className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded shadow-md flex items-center gap-1 border border-blue-100">
                    <Bookmark className="w-3 h-3 text-blue-600 fill-blue-600" />
                    <span className="text-gray-700">Saved to: <span className="text-blue-600 font-bold">My next trip</span></span>
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <span className="font-medium">{prop.type}</span>
                  {prop.stars > 0 && (
                    <div className="flex text-yellow-500">
                      {[...Array(prop.stars)].map((_, s) => <Star key={s} className="w-3 h-3 fill-current" />)}
                    </div>
                  )}
                  {prop.genius && (
                    <span className="bg-blue-600 text-white font-bold px-1 rounded-[3px] text-[10px] tracking-wider ml-1">Genius</span>
                  )}
                </div>

                <h3 className="font-bold text-sm text-[#1a1a1a] mt-1 line-clamp-1 group-hover:text-blue-600 transition">{prop.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{prop.location}</p>

                <div className="flex items-center gap-2 mt-2">
                  <div className="bg-[#003580] text-white font-bold text-xs px-1.5 py-0.5 rounded-t-md rounded-br-md">
                    {prop.rating.toFixed(1)}
                  </div>
                  <span className="text-xs font-bold text-[#1a1a1a]">{prop.ratingText}</span>
                  <span className="text-xs text-gray-500">· {prop.reviews} reviews</span>
                </div>

                <div className="mt-auto pt-3 text-right">
                  {prop.oldPrice && (
                    <span className="text-xs text-red-600 line-through mr-2">Starting from {prop.oldPrice}</span>
                  )}
                  <p className="text-sm font-bold text-[#1a1a1a]">Starting from <span className="text-base font-extrabold">{prop.price}</span></p>
                </div>
              </div>
            </div>
          ))}
        </CarouselSection>
      </div>

      {/* 3. قسم منازل يعشقها الضيوف */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">Homes guests love</h2>
        <CarouselSection>
          {homesGuestsLove.map((home, idx) => (
            <div key={idx} className="flex-shrink-0 w-[260px] sm:w-[270px] flex flex-col group cursor-pointer relative">
              <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-gray-100">
                <img src={home.img} alt={home.title} className="w-full h-full object-cover" />
                
                {/* زِر المفضلة التفاعلي */}
                <FavoriteButton />
              </div>
              <h3 className="font-bold text-sm mt-2 line-clamp-1 group-hover:text-blue-600">{home.title}</h3>
              <p className="text-xs text-gray-500">{home.location}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-[#003580] text-white font-bold text-xs px-1.5 py-0.5 rounded-t-md rounded-br-md">{home.rating.toFixed(1)}</span>
                <span className="text-xs font-bold">{home.ratingText}</span>
                <span className="text-xs text-gray-500">· {home.reviews} reviews</span>
              </div>
              <p className="text-sm font-bold mt-2 text-right">Starting from <span className="font-extrabold">{home.price}</span></p>
            </div>
          ))}
        </CarouselSection>
      </div>

      {/* 4. قسم عروض الويك إند */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-[#1a1a1a]">Deals for the weekend</h2>
        <p className="text-sm text-gray-500 mt-0.5 mb-4">Save on stays for August 7 - August 9</p>

        <CarouselSection>
          {weekendDeals.map((deal, idx) => (
            <div key={idx} className="flex-shrink-0 w-[260px] sm:w-[270px] relative group cursor-pointer flex flex-col justify-between">
              <div className="relative rounded-md overflow-hidden aspect-[4/3] bg-gray-100">
                <img src={deal.img} alt={deal.title} className="w-full h-full object-cover" />
                
                {/* زِر المفضلة التفاعلي */}
                <FavoriteButton />
              </div>

              <div className="mt-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 min-h-[14px]">
                    {deal.genius && (
                      <span className="bg-[#003b95] text-white text-[9px] font-extrabold px-1 rounded-[3px] tracking-wide">Genius</span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-[#1a1a1a] leading-snug mt-1 hover:text-blue-700 line-clamp-2">{deal.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{deal.location}</p>
                </div>

                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#003b95] text-white font-bold text-xs px-1.5 py-0.5 rounded-t-md rounded-br-md">{deal.rating.toFixed(1)}</span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#1a1a1a] leading-tight">{deal.reviewStatus}</span>
                      <span className="text-[11px] text-gray-500">{deal.reviewsCount} reviews</span>
                    </div>
                  </div>

                  {deal.getawayDeal && (
                    <span className="inline-block bg-[#008009] text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-2">Getaway Deal</span>
                  )}

                  <div className="mt-3 text-right">
                    <p className="text-[11px] text-gray-500">{deal.nights} nights</p>
                    <p className="text-sm font-bold text-[#1a1a1a]">
                      {deal.oldPrice && <span className="line-through text-red-600 text-xs font-normal mr-1">{deal.oldPrice}</span>}
                      <span className="text-base text-[#1a1a1a] font-extrabold">{deal.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CarouselSection>
      </div>

    </div>
  );
};

export default Main2;