import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function TourDetail() {
  const { id } = useParams();

  // Mock dữ liệu giống trang Home
  const tours = [
    {
      id: 1,
      title: "TOUR CARAVAN THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp",
      price: "12.500.000đ",
      desc: "Hành trình caravan độc đáo đưa bạn băng qua những cung đường đẹp nhất, khám phá văn hóa và thiên nhiên hoang sơ.",
    },
    {
      id: 2,
      title: "Du lịch thăm thân tại Úc - Mỹ - Canada",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250528_statue-liberty-large-american-flag-new-york-skyline-background-162323735.webp",
      price: "39.900.000đ",
      desc: "Chuyến đi thăm thân kết hợp du lịch tại các quốc gia phát triển hàng đầu thế giới.",
    },
    {
      id: 3,
      title: "Tự hào nét Việt - Ưu đãi kích cầu du lịch nội địa",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_240925_KPSP1-tour-noi-dia-kich-cau.jpg",
      price: "6.900.000đ",
      desc: "Khám phá vẻ đẹp Việt Nam qua những địa danh nổi tiếng nhất.",
    },
    {
      id: 4,
      title:
        "Tham quan sân nhà của CLB bóng đá mạnh nhất thế giới thời điểm hiện tại",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Stamford_Bridge_-_West_Stand.jpg",
      price: "136.900.000đ",
      desc: `Trải nghiệm hành trình độc quyền khám phá Stamford Bridge – thánh địa của Chelsea FC. 
      Tour đưa bạn tham quan toàn bộ sân vận động: đường hầm cầu thủ, phòng thay đồ, khu kỹ thuật, phòng họp báo và khán đài West Stand huyền thoại.
   Du khách sẽ được tận mắt chiêm ngưỡng các danh hiệu lớn, áo đấu huyền thoại và những khoảnh khắc lịch sử của The Blues tại bảo tàng CLB. 
  Đây là hành trình lý tưởng cho người yêu bóng đá và fan Chelsea muốn sống trọn vẹn trong không khí xanh bất diệt.`,
    },
    {
      id: 5,
      title: "Tour Du Lịch Đà Lạt 3N2Đ - Săn Mây",
      image:
        "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=80",
      price: "2.500.000đ",
      desc: "Tour du lịch Đà Kạt phù hợp cho các cặp đôi và nhóm bạn",
    },
    {
      id: 6,
      title: "Tour Du Lịch Nha Trang 4N3Đ - Nghỉ Dưỡng",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      price: "3.200.000đ",
      desc: `Hành trình đưa bạn khám phá thành phố biển đẹp nhất Việt Nam với bãi biển xanh, cát trắng và nắng vàng.
       Trải nghiệm nghỉ dưỡng sang trọng, tham quan VinWonders, tắm bùn khoáng nóng, thưởng thức hải sản tươi ngon
        và dạo biển về đêm đầy thơ mộng. Đây là lựa chọn lý tưởng để thư giãn sau những ngày làm việc căng thẳng.`,
    },
    {
      id: 7,
      title: "Tour Hà Giang - Mã Pí Lèng - Đồng Văn",
      image:
        "https://images.vietnamtourism.gov.vn/vn//images/2021/deo_ma_pi_leng.jpg",
      price: "4.100.000đ",
      desc: `Hành trình khám phá vùng cực Bắc Tổ quốc với những cung đường hùng vĩ và văn hóa đặc sắc. Chinh phục đèo 
      Mã Pí Lèng – một trong “tứ đại đỉnh đèo” của Việt Nam, phóng tầm mắt xuống dòng Nho Quế xanh ngọc tuyệt đẹp. Khám 
      phá phố cổ Đồng Văn, thưởng thức ẩm thực vùng cao, trải nghiệm nét văn hóa độc đáo của người H’Mông, Lô Lô, Tày… Một
      chuyến đi trọn vẹn cho những ai yêu thiên nhiên, thích phiêu lưu và mong muốn chạm vào vẻ đẹp hoang sơ của Hà Giang.`,
    },
  ];
  const tour = tours.find((t) => t.id === Number(id));
  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Header />

        <main className="p-10 text-center">
          <h1 className="text-2xl font-bold text-red-500">
            Tour không tồn tại!
          </h1>
          <a
            href="/"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Quay về trang chủ
          </a>
        </main>

        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="px-6 md:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <img
              src={tour.image}
              alt={tour.title}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-600">{tour.title}</h1>

            <p className="mt-4 text-gray-700 text-lg">{tour.desc}</p>
            <div className="mt-6 p-5 rounded-xl bg-white shadow-md">
              <p className="text-green-600 font-bold text-xl">
                Giá: {tour.price}
              </p>

              <div className="flex justify-end gap-4 mt-4">
                <a
                  href="/"
                  className="px-6 py-3 border border-gray-400 rounded-xl font-semibold hover:bg-gray-100"
                >
                  ← Quay về
                </a>

                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700">
                  Đặt Tour Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TourDetail;
