import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="p-4">
        <h1 className="text-3xl font-bold text-blue-600 text-center my-4">
          About Us
        </h1>
        <p className="text-md font-medium text-center">
          This is the about page. Here you can learn more about our mission,
          vision, and the services we provide.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default About;
