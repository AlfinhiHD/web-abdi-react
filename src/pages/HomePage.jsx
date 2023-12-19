import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Fitur1 from "../assets/Track.jpg";
import Fitur2 from "../assets/Recom.jpg";
import Fitur3 from "../assets/Carbon.jpg";
import section1 from "../assets/picture 1.jpg";
import section2 from "../assets/picture 3.jpg";
import section3 from "../assets/picture 2.jpg";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Navbar />
      <section className="Section1">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5 ps-5 pt-5 ms-5">
            <h1 className="pb-3">
              Membantu Menjaga Kalori Demi Kesehatan Tubuh
            </h1>
            <p className="pb-3">
              Program diet ini hadir untuk membantu setiap orang untuk menjaga
              kesehatan mereka berdasarkan makanan yang mereka konsumsi
            </p>
            <span>Join Us</span>
          </div>
          <div className="col-3 ms-5 ps-5">
            <img
              src={section1}
              alt="Membantu Menjaga Kalori"
              className="FotoSection1"
            />
          </div>
        </div>
      </section>
      <section className="Section2">
          <div className="">
            <h1 className="pb-3">Hidup Sehat Dengan Gizi Seimbang</h1>
            <p className="pb-3">
              Gizi seimbang diperlukan tubuh untuk tumbuh, menjaga kesehatan dan
              untuk aktivitas, juga fungsi kehidupan sehari-hari.
            </p>
          </div>
          <div>
            <img
              src={section2}
              alt="Hidup Sehat Dengan Gizi Seimbang"
              className="FotoSection1"
            />
          </div>
      </section>
      <section className="Section3 row">
        <div className="col-1"></div>
        <div className="col-5 pt-5 ms-5 ps-5">
          <h1>Track Your Calories</h1>
          <p className="pb-3">
            Mengetahui jumlah kalori makanan yang dikonsumsi dan merupakan hal
            yang penting bagi kebutuhan tubuh loh! Yuk hitung kalori harianmu.
          </p>
          <Link to="/Tracking">
            <span>Track Now</span>
          </Link>
        </div>
        <div className="col-5 ms-5">
          <img src={section3} alt="" className="FotoSection3" />
        </div>
      </section>
      <section className="Section4">
        <div>
          <h1>Layanan Kami</h1>
          <p>Program Diet hadir menjadi solusi untuk anda</p>
        </div>
        <div className="Fitur pt-4">
          <div className="FiturSection">
            <img src={Fitur1} alt="" className="FotoFitur" />
            <p className="pt-4">Tracking Calories</p>
          </div>
          <div className="FiturSection">
            <img src={Fitur2} alt="" className="FotoFitur" />
            <p className="pt-4">Food Recomendation</p>
          </div>
          <div className="FiturSection">
            <img src={Fitur3} alt="" className="FotoFitur" />
            <p className="pt-4">Carbon Offset</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default HomePage;
