import { useState } from "react";
import FeaturedTours from "../components/FeaturedTours";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  // mock data
  const tours = [
    {
      id: 1,
      title: "TOUR CARAVAN THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp",
    },
    {
      id: 2,
      title: "Du lịch thăm thân tại Úc - Mỹ - Canada",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250528_statue-liberty-large-american-flag-new-york-skyline-background-162323735.webp",
    },
    {
      id: 3,
      title: "Tự hào nét Việt - Ưu đãi kích cầu du lịch nội địa",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_240925_KPSP1-tour-noi-dia-kich-cau.jpg",
    },
    {
      id: 4,
      title:
        "Tham quan sân nhà của CLB bóng đá mạnh nhất thế giới thời điểm hiện tại ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Stamford_Bridge_-_West_Stand.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="relative w-full h-[350px]">
        <img
          src="https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp"
          alt="hero banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Khám Phá Những Hành Trình Tuyệt Vời
          </h1>
          <p className="mt-3 text-lg max-w-2xl drop-shadow">
            Trải nghiệm du lịch chuyên nghiệp – tận hưởng từng khoảnh khắc theo
            cách đẳng cấp nhất.
          </p>
        </div>
      </div>
      <FeaturedTours />
      <main className="px-6 md:px-16 mt-8">
        <h2 className="text-3xl font-bold text-blue-600 text-center">
          Sản phẩm của Hoàng Anh
        </h2>

        <p className="text-md font-medium text-center mt-3 text-gray-700">
          Chúng tôi mang đến những chương trình du lịch đẳng cấp, an toàn và đầy
          cảm hứng.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">
                  {tour.title}
                </h3>
                <Link
                  to={`/tour/${tour.id}`}
                  className="block mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition"
                >
                  Xem Chi Tiết
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
