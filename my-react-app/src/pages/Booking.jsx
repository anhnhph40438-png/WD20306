import Header from "../components/Header";
import Footer from "../components/Footer";

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="p-4">
        <h1 className="text-3xl font-bold text-blue-600 text-center my-4">
          Booking
        </h1>
        <p className="text-md font-medium text-center">Đây là trang đặt tour</p>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
