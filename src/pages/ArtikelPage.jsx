import "./ArtikelPage.css";
import ArtikelCard from "../component/ArtikelCard";
import ArtikelHeading from "../component/ArtikelHeading";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getArtikel } from "../redux/artikelSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ArtikelPage.css";
import { dummyArtikelData } from "../dummy/dummyData";
import { Link } from "react-router-dom";

function ArtikelPage() {

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const [dummyArtikel, setDummyArtikel] = useState(dummyArtikelData);
  return (
    <>
      <Navbar />
      <div className="ContainerArtikel">
        <div className="border border-4 rounded-3 mb-5">
          <Slider className="p-3" {...sliderSettings}>
            {dummyArtikel.artikel.allArticle?.map((artikel) => (
              <div key={artikel.id} className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={artikel.image}
                      alt={artikel.judul}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 carousel-text">
                    <h3>{artikel.judul}</h3>
                    <small>{artikel.tanggal}</small>
                    <p className="mt-3">
                      {artikel.konten.length > 150
                        ? `${artikel.konten.substring(0, 150)}...`
                        : artikel.konten}
                    </p>
                    {artikel.konten.length > 150 && (
                      <Link className="link" to={`/Artikel/detail/${artikel.id}`}>
                        Selengkapnya
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="ArtikelCard">
          {dummyArtikel.artikel.allArticle?.map((artikel) => (
            <ArtikelCard
              key={artikel.id}
              id={artikel.id}
              title={artikel.judul}
              tanggal={artikel.tanggal}
              konten={artikel.konten}
              image={artikel.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ArtikelPage;
