import React from 'react';

// Feature Icons
import one from '../assets/FreeCancellation.png';
import tow from '../assets/Reviews.png';
import three from '../assets/TripsGlobe.png';
import fore from '../assets/CustomerSupport.png';
import five from '../assets/649262209.jpeg';

// Property Type Images
import im1 from '../assets/45450090.jpeg';
import im2 from '../assets/595548591.jpeg';
import im3 from '../assets/595550000.jpeg';
import im4 from '../assets/595550178.jpeg';
import im5 from '../assets/595550229.jpeg';
import im6 from '../assets/595550306.jpeg';
import im7 from '../assets/595550862.jpeg';
import im8 from '../assets/595551044.jpeg';
import im9 from '../assets/595551195.jpeg';
import im10 from '../assets/620168315.jpeg';
import im11 from '../assets/649262209.jpeg';

// Destination Images
import n1 from '../assets/n/644365.jpg';
import n2 from '../assets/n/1000476.jpg';
import n3 from '../assets/n/1000581.jpg';
import n4 from '../assets/n/1008231.jpg';
import n5 from '../assets/n/1008250.jpg';

// Swiper Components & Styles
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const properties = [
  { id: 1, title: 'Farm stays', img: im1 },
  { id: 2, title: 'Boats', img: im2 },
  { id: 3, title: 'Luxury', img: im3 },
  { id: 4, title: 'Self-Catering Accommodations', img: im4 },
  { id: 5, title: 'Hotels', img: im5 },
  { id: 6, title: 'Apartment', img: im6 },
  { id: 7, title: 'Resorts', img: im7 },
  { id: 8, title: 'Villas', img: im8 },
  { id: 9, title: 'Cabins', img: im9 },
  { id: 10, title: 'Cottages', img: im10 },
  { id: 11, title: 'Motels', img: im11 },
];

const Home = () => {
  return (
    <div className="w-full px-3 lg:w-[1100px] lg:mx-auto pt-2">
      {/* Features Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:p-7">
        <div className="flex gap-3 border p-3 rounded-md">
          <div className="h-[60px] w-[60px] flex-shrink-0">
            <img src={one} alt="Free Cancellation" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">Book now, pay at the property</h3>
            <h4 className="text-xs text-gray-600">FREE cancellation on most rooms</h4>
          </div>
        </div>

        <div className="flex gap-3 border p-3 rounded-md">
          <div className="h-[60px] w-[60px] flex-shrink-0">
            <img src={tow} alt="Reviews" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">300M+ reviews from fellow travelers</h3>
            <h4 className="text-xs text-gray-600">Get trusted information from guests like you</h4>
          </div>
        </div>

        <div className="flex gap-3 border p-3 rounded-md">
          <div className="h-[60px] w-[60px] flex-shrink-0">
            <img src={three} alt="Global Trips" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">2+ million properties worldwide</h3>
            <h4 className="text-xs text-gray-600">Hotels, guest houses, apartments, and more…</h4>
          </div>
        </div>

        <div className="flex gap-3 border p-3 rounded-md">
          <div className="h-[60px] w-[60px] flex-shrink-0">
            <img src={fore} alt="Customer Support" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">Trusted 24/7 customer service</h3>
            <h4 className="text-xs text-gray-600">We're always here to help</h4>
          </div>
        </div>
      </div>

      {/* Offers Header */}
      <div className="pt-6 px-3 pb-4">
        <h1 className="text-2xl font-bold">Offers</h1>
        <h2 className="text-gray-600">Promotions, deals, and special offers for you</h2>
      </div>

      {/* Banner Deal */}
      <div className="flex sm:flex-row items-start sm:items-center justify-between mx-3 my-4 p-6 border rounded-lg gap-4">
        <div>
          <h3 className="text-sm mb-1 text-gray-600">Escape for less with our Getaway Deals</h3>
          <h2 className="text-xl font-bold">No catch. Just getaways.</h2>
          <h3 className="text-sm mt-1 mb-4 text-gray-600">At least 15% off select stays worldwide – just book and go.</h3>
          <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition-all duration-200 rounded-sm font-medium">
            Save With a Getaway Deal
          </button>
        </div>
        <div className="flex-shrink-0">
          <img className="h-[100px] w-[100px] rounded-md object-cover" src={five} alt="Deal" />
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="px-3 py-6">
        <h1 className="text-2xl font-bold mb-4">Browse by Property type</h1>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.2}
          navigation={true}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="flex flex-col gap-2 cursor-pointer group">
                <div className="overflow-hidden rounded-2xl aspect-[4/3] w-full bg-gray-100">
                  <img
                    src={property.img}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-800 tracking-tight">
                  {property.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Trending Destinations */}
      <div className="w-full flex flex-col gap-4 px-3 pb-12">
        <div>
          <h1 className="text-2xl font-bold">Trending destinations</h1>
          <h2 className="text-gray-600">Most popular choices for travelers from Egypt</h2>
        </div>

        <div className="flex flex-col gap-4">
          {/* Top Row: 2 Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[100px] md:h-[200px] lg:h-[300px] border border-transparent hover:border-[#cda41e] transition duration-100 rounded-2xl  overflow-hidden cursor-pointer">
              <img src={n1} alt="Cairo" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent rounded-2xl p-3">
                <h3 className="text-white text-lg md:text-lg font-bold">Cairo</h3>
              </div>
            </div>

            <div className="relative h-[100px] md:h-[200px] lg:h-[300px] border border-transparent hover:border-[#cda41e] transition duration-100 rounded-2xl  overflow-hidden cursor-pointer">
              <img src={n2} alt="Hurghada" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent rounded-2xl p-3">
                <h3 className="text-white text-lg md:text-lg font-bold">Hurghada</h3>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Images */}
          <div className="grid grid-cols-3 gap-4">
            <div className="relative h-[100px] md:h-[200px] lg:h-[300px] border border-transparent hover:border-[#cda41e] transition duration-100 rounded-2xl  overflow-hidden cursor-pointer">
              <img src={n3} alt="Alexandria" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent rounded-2xl p-3">
                <h3 className="text-white text-lg md:text-lg font-bold">Alexandria</h3>
              </div>
            </div>

            <div className="relative h-[100px] md:h-[200px] lg:h-[300px] border border-transparent hover:border-[#cda41e] transition duration-100 rounded-2xl overflow-hidden cursor-pointer">
              <img src={n4} alt="Sharm El Sheikh" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent rounded-2xl p-3">
                <h3 className="text-white text-lg md:text-lg font-bold">Aswan</h3>
              </div>
            </div>

            <div className="relative h-[100px] md:h-[200px] lg:h-[300px] border border-transparent hover:border-[#cda41e] transition duration-100 rounded-2xl overflow-hidden cursor-pointer">
              <img src={n5} alt="Luxor" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent rounded-2xl p-3">
                <h3 className="text-white text-lg md:text-lg font-bold">Luxor</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;