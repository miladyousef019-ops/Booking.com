import React from 'react';

// 1. مكوّن الفنادق المقترحة (Recommended Hotels)
const HotelCard = ({ image, name, type, rating, ratingText, reviews, oldPrice, currentPrice, isGenius }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
      <div className="relative h-48 w-full bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-gray-500">{type}</span>
            {isGenius && (
              <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Genius</span>
            )}
          </div>
          <h3 className="font-bold text-gray-900 text-sm line-clamp-2 mb-2">{name}</h3>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-900 text-white text-xs font-bold px-1.5 py-1 rounded">{rating}</span>
            <span className="text-xs font-semibold text-gray-800">{ratingText}</span>
            <span className="text-xs text-gray-500">· {reviews} evaluation</span>
          </div>
        </div>

        <div className="text-right mt-auto">
          {oldPrice && (
            <span className="text-xs text-red-600 line-through mr-2">EGP {oldPrice}</span>
          )}
          <p className="text-sm font-bold text-gray-900">
            Starting from <span className="text-base text-blue-700">EGP {currentPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. مكوّن بنر التسجيل (Genius Promo Banner)
const GeniusBanner = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 my-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-white shadow-sm">
      <div className="text-center md:text-left">
        <h3 className="font-bold text-lg text-gray-900 mb-1">Sign in, save money</h3>
        <p className="text-sm text-gray-600">
          Save 10% or more at participating properties - Just look for the blue Genius label
        </p>
        <div className="flex gap-4 mt-4 justify-center md:justify-start">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded transition-colors">
            Sign in
          </button>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold py-2 px-4 transition-colors">
            Register
          </button>
        </div>
      </div>
      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-3xl">🎁</span>
      </div>
    </div>
  );
};

// 3. مكوّن روابط التنقل والوجهات (Popular Destinations Tabs)
const DestinationsSection = () => {
  const categories = ["Domestic cities", "International cities", "Regions", "Countries", "Places to stay"];
  const cities = ["Cairo hotels", "Hurghada hotels", "Abu Simbel hotels", "Dahab hotels", "Madina hotels"];

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Popular with travelers from Egypt</h2>
      
      <div className="flex gap-2 border-b border-gray-200 overflow-x-auto pb-2 scrollbar-none mb-6">
        {categories.map((tab, idx) => (
          <button 
            key={idx} 
            className={`whitespace-nowrap px-4 py-2 text-sm rounded-full transition-colors ${
              idx === 0 ? 'border border-blue-600 bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-xs text-blue-600">
        {cities.map((city, idx) => (
          <a key={idx} href="#" className="hover:underline hover:text-blue-800">{city}</a>
        ))}
      </div>
    </div>
  );
};

// 4. مكوّن تذييل الصفحة الرئيسي (Footer)
const Footer = () => {
  const footerSections = [
    {
      title: "Support",
      links: ["Manage your trips", "Contact Customer Service", "Safety Resource Center"]
    },
    {
      title: "Discover",
      links: ["Genius loyalty program", "Seasonal and holiday deals", "Travel articles", "Booking.com for Business", "Traveller Review Awards", "Car rental", "Flight finder", "Restaurant reservations", "Booking.com for Travel Agents"]
    },
    {
      title: "Terms and settings",
      links: ["Privacy Notice", "Terms of Service", "Accessibility Statement", "Partner dispute", "Modern Slavery Statement", "Human Rights Statement"]
    },
    {
      title: "Partners",
      links: ["Extranet login", "Partner help", "List your property", "Become an affiliate"]
    },
    {
      title: "About",
      links: ["About Booking.com", "How We Work", "Sustainability", "Press center", "Careers", "Investor relations", "Corporate contact", "Content guidelines and reporting"]
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12 pt-10 pb-6 text-xs text-gray-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-gray-900 mb-3 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="hover:underline text-blue-600 hover:text-blue-800">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6 flex items-center gap-2 mb-6">
          <span className="text-base">🇪🇬</span>
          <span className="font-bold text-gray-900">EGP</span>
        </div>

        <div className="text-center border-t border-gray-200 pt-6 space-y-4">
          <p className="text-[11px] text-gray-500">
            Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
          </p>
          <p className="text-[10px] text-gray-400">
            Copyright © 1996–2026 Booking.com™. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-2 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-blue-900 text-sm">Booking.com</span>
            <span className="font-semibold text-blue-500 text-sm">priceline</span>
            <span className="font-bold text-orange-500 text-sm">KAYAK</span>
            <span className="font-medium text-purple-600 text-sm">agoda</span>
            <span className="font-light text-red-500 text-sm">OpenTable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 5. المكوّن الرئيسي
function Main3() {
  const hotelsData = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
      name: "Bachar House - FATTAL COLORS",
      type: "Hotel",
      rating: "9.1",
      ratingText: "Wonderful",
      reviews: "582",
      currentPrice: "17,539",
      isGenius: true
    },
    {
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500",
      name: "Market House - An Atlas Boutique Hotel",
      type: "Hotel",
      rating: "9.0",
      ratingText: "Wonderful",
      reviews: "621",
      oldPrice: "19,302",
      currentPrice: "13,125",
      isGenius: true
    },
    {
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500",
      name: "Hotel Jacob Samuel by Prima Hotels",
      type: "Hotel",
      rating: "9.0",
      ratingText: "Wonderful",
      reviews: "431",
      oldPrice: "18,261",
      currentPrice: "16,435",
      isGenius: false
    },
    {
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500",
      name: "Play Levontin",
      type: "Hotel",
      rating: "8.9",
      ratingText: "Excellent",
      reviews: "127",
      oldPrice: "14,064",
      currentPrice: "13,377",
      isGenius: true
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased text-gray-900 w-full px-3 lg:w-[1100px] lg:mx-auto pt-2 " dir="ltr">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        
        {/* قسم الفنادق المقترحة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {hotelsData.map((hotel, idx) => (
            <HotelCard key={idx} {...hotel} />
          ))}
        </div>

        {/* بنر العروض */}
        <GeniusBanner />

        {/* قسم الوجهات الشائعة */}
        <DestinationsSection />

      </div>

      {/* التذييل */}
      <Footer />
    </div>
  );
}

export default Main3;