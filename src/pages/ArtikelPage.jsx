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

function ArtikelPage() {
  // const dispatch = useDispatch();
  // const artikel = useSelector((state) => state.artikel)
  // useEffect(() => {
  //     dispatch(getArtikel());
  // },[]);
  // console.log()

  const dummyArtikelData = {
    artikel: {
      allArticle: [
        {
          id: 1,
          judul: "Contoh Artikel 1",
          tanggal: "2023-01-01",
          konten:
            "Ini adalah konten dari artikel 1 Ini adalah konten dari artikel 1 Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1Ini adalah konten dari artikel 1v.",
          image:
            "https://awsimages.detik.net.id/community/media/visual/2022/11/20/rijsttafel-indonesia-2.jpeg?w=600&q=90",
        },
        {
          id: 3,
          judul: "Contoh Artikel 3",
          tanggal: "2023-01-02",
          konten: "Ini adalah konten dari artikel 2.",
          image:
            "https://awsimages.detik.net.id/community/media/visual/2022/11/20/rijsttafel-indonesia-2.jpeg?w=600&q=90",
        },
        {
          id: 4,
          judul: "Contoh Artikel 4",
          tanggal: "2023-01-02",
          konten: "Ini adalah konten dari artikel 2.",
          image:
            "https://awsimages.detik.net.id/community/media/visual/2022/11/20/rijsttafel-indonesia-2.jpeg?w=600&q=90",
        },
        {
          id: 5,
          judul: "Contoh Artikel 5",
          tanggal: "2023-01-02",
          konten: "Ini adalah konten dari artikel 2.",
          image:
            "https://awsimages.detik.net.id/community/media/visual/2022/11/20/rijsttafel-indonesia-2.jpeg?w=600&q=90",
        },
        {
          id: 6,
          judul: "Contoh Artikel 6",
          tanggal: "2023-01-02",
          konten: "Ini adalah konten dari artikel 2.",
          image:
            "https://awsimages.detik.net.id/community/media/visual/2022/11/20/rijsttafel-indonesia-2.jpeg?w=600&q=90",
        },
        // ... tambahkan artikel dummy lainnya sesuai kebutuhan
      ],
    },
  };

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
    // <>
    // <Navbar/>
    // <div className='ContainerArtikel'>
    //     <div className='ArtikelHeading'>
    //         <ArtikelHeading
    //         title ={artikel.artikel.allArticle?.[0].judul}
    //         img ={artikel.artikel.allArticle?.[0].image}
    //         tanggal ={artikel.artikel.allArticle?.[0].tanggal}/>
    //     </div>
    //     <hr />
    //     <div className='ArtikelCard'>
    //         {artikel.artikel.allArticle?.map((artikel) => (
    //             <ArtikelCard id={artikel.id} title={artikel.judul} tanggal={artikel.tanggal} konten={artikel.konten} image={artikel.image}/>
    //         ))}

    //     </div>
    // </div>
    // <Footer/>
    // </>

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
                    <p className="mt-3">{artikel.konten}</p>
                    {/* Add any additional information you want to display */}
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
