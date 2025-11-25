import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="p-4">
        <h1 className="text-3xl font-bold text-blue-600 text-center my-4">
          Contact
        </h1>
        <p className="text-md font-medium text-center">
          Hãy liên hệ với chúng tôi để đặt tour sớm nhất với giá ưu đãi
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
