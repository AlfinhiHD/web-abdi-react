import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "./TrackingPage.css";
import { Link, Navigate } from "react-router-dom";
import DeleteIcon from "../assets/close-circle.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteTrack, getTrack } from "../redux/trackSlice";
import { dummyTrackingData } from "../dummy/dummyData";

function TrackingPage() {
  const token = localStorage.getItem("token");
  if (token == null) {
    return <Navigate to="/Login" />;
  }
  const usercalori = 2000; // Variabel dummy untuk keperluan contoh
  const dispatch = useDispatch();
  const [track, setTrack] = useState(dummyTrackingData);

  let TotKarbon = track.track?.allTracking.reduce(function (prev, current) {
    return prev + +current.nama_makanan.karbon;
  }, 0);
  let TotKarb = track.track?.allTracking.reduce(function (prev, current) {
    return prev + +current.nama_makanan.karbohidrat;
  }, 0);
  let TotProtein = track.track?.allTracking.reduce(function (prev, current) {
    return prev + +current.nama_makanan.protein;
  }, 0);
  let TotFat = track.track?.allTracking.reduce(function (prev, current) {
    return prev + +current.nama_makanan.lemak;
  }, 0);
  let TotCal = track.track?.allTracking.reduce(function (prev, current) {
    return prev + +current.nama_makanan.kalori;
  }, 0);

  return (
    <>
      <Navbar />
      <div className="ContainerTrack">
        <div className="ContainerNutrisi">
          <div className="Calori">
            <div>
              <h2>Kalori Dibutuhkan</h2>
              <p>{usercalori} kkal</p>
              <hr></hr>
            </div>
            <div>
              <h2>Kalori Terpenuhi</h2>
              <p>{TotCal} kkal</p>
            </div>
          </div>
          <div className="Nutrisi">
            <div>
              <h2>Karbohidrat</h2>
              <p>{TotKarb} gram</p>
              <hr></hr>
            </div>
            <div>
              <h2>Protein</h2>
              <p>{TotProtein} gram</p>
              <hr></hr>
            </div>
            <div>
              <h2>Lemak</h2>
              <p>{TotFat} gram</p>
              <hr></hr>
            </div>
            <div>
              <h2>Karbon</h2>
              <p>{TotKarbon} gram</p>
            </div>
          </div>
        </div>
        <div className="FoodToday">
          <h3 className="mb-4">Makanan Hari ini</h3>
          <div className="tabel">
            <table className="TabelFoodToday">
              <thead>
                <tr>
                  <th className="TrackFoodName">Nama</th>
                  <th className="TrackFoodCarb">Karbohidrat</th>
                  <th className="TrackFoodProtein">Protein</th>
                  <th className="TrackFoodFat">Lemak</th>
                  <th className="TrackFoodCarbon">Karbon</th>
                  <th className="TrackFoodCalori">Calori</th>
                  <th className="TrackFoodAction">Action</th>
                </tr>
              </thead>
              <tbody>
                {track.track?.allTracking.map((track) => (
                  <tr key={track.id}>
                    <td className="TrackNameTd">{track.nama_makanan.nama}</td>
                    <td className="TrackCarbTd">
                      {track.nama_makanan.karbohidrat} g
                    </td>
                    <td className="TrackProteinTd">
                      {track.nama_makanan.protein} g
                    </td>
                    <td className="TrackFatTd">{track.nama_makanan.lemak} g</td>
                    <td className="TrackCarbonTd">
                      {track.nama_makanan.karbon} g
                    </td>
                    <td className="TrackCalTd">
                      {track.nama_makanan.kalori} kkal
                    </td>
                    <td className="TrackActionTd">
                      <img
                        src={DeleteIcon}
                        alt=""
                        onClick={() => {
                          dispatch(deleteTrack(track.id)),
                            window.location.reload(false);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="mt-3">
              <Link className="" to="/Tracking/AddFood"> Add Food</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default TrackingPage;
