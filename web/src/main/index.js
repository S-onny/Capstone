import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [hospitlas, setHospitals] = React.useState([]);

  React.useEffect(function () {
    axios
      .get(
        "https://39f49a3a-feeb-400e-b3ae-fc9c0e5079d1.mock.pstmn.io/hospitals"
      )
      .then(function (result) {
        const hospitals = result.data.hospitals;
        setHospitals(hospitals);
      })
      .catch(function (error) {
        console.error("Error : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="image/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="image/banner.jpg" />
        </div>
        <h1>병원 리스트</h1>
        <div id="hospital-list">
          {hospitlas.map(function (hospital, index) {
            return (
              <div className="hospital-card">
                <div>
                  <img className="hospital-img" src={hospital.imageUrl} />
                </div>
                <div className="hospital-contents">
                  <span className="hospital-name">{hospital.name}</span>
                  <span className="number">{hospital.number}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
