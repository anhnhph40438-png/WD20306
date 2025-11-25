
import { Link } from "react-router-dom";
import Button from "./Button";

export default function FeaturedTours() {
  const featuredTours = [
    {
      id: 5,
      title: "Tour Du Lịch Đà Lạt 3N2Đ - Săn Mây",
      image:
        "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=80",
      price: "2.500.000đ",
    },
    {
      id: 6,
      title: "Tour Du Lịch Nha Trang 4N3Đ - Nghỉ Dưỡng",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      price: "3.200.000đ",
    },
    {
      id: 7,
      title: "Tour Hà Giang - Mã Pí Lèng - Đồng Văn",
      image:
        "https://images.vietnamtourism.gov.vn/vn//images/2021/deo_ma_pi_leng.jpg",
      price: "4.100.000đ",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600">Tour Nổi Bật</h2>
          <p className="text-md font-medium mt-3 text-gray-700">
            Những hành trình được nhiều khách hàng yêu thích
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{tour.title}</h3>
                <p className="text-blue-600 font-semibold mt-2">{tour.price}</p>
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

        <div className="flex justify-center mt-12">
          <Button label="Khám Phá Thêm Tour" />
        </div>
      </div>
    </section>
  );
}
