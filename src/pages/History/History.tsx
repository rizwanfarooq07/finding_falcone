import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import {
  PlanetsInterface,
  VehiclesInterface,
} from "../../Interfaces/interfaces";
// import minus from '../../../../Asests/Images/circle-minus.png';
import Jebing from "../../assets/Planets/Jebing.png";
import Donlon from "../../assets/Planets/Donlon.png";
import Enchai from "../../assets/Planets/Enchai.png";
import Lerbin from "../../assets/Planets/Lerbin.png";
import Pingasor from "../../assets/Planets/Pingasor.png";
import Sapir from "../../assets/Planets/Sapir.png";
import SpacePod from "../../assets/Vehicles/SpacePod.png";
import SpaceRocket from "../../assets/Vehicles/SpaceRocket.png";
import SpaceShip from "../../assets/Vehicles/SpaceShip.png";
import SpaceShuttle from "../../assets/Vehicles/SpaceShuttle.png";
import "./History.css";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";

const History = (): JSX.Element => {
  const navigate = useNavigate();

  const [planets, setPlanets] = useState<PlanetsInterface[]>([]);
  const [vehicles, setVehicles] = useState<VehiclesInterface[]>([]);

  const getPlanetsOrVehicles = async (url: string) => {
    const { data } = await axios.get(url);
    url === "https://findfalcone.herokuapp.com/planets" && setPlanets(data);
    url === "https://findfalcone.herokuapp.com/vehicles" && setVehicles(data);
  };
  useEffect(() => {
    getPlanetsOrVehicles("https://findfalcone.herokuapp.com/planets");
    getPlanetsOrVehicles("https://findfalcone.herokuapp.com/vehicles");
  }, []);
  return (
    <div className="history">
      <Header text="start mission" />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div className="history_container">
          <h1 className="headings">History !</h1>

          <h2>
            The story is about the planet of Lengaburu in the distant galaxy of
            Tara B. After the recent war with neighbouring planet Falicornia,
            King Shan has exiled the Queen of Falicornia for 15 years.
          </h2>
          <h2>
            Queen Al Falcone is now in hiding. But if King Shan can find her
            before the years are up, she will be exiled for another 15 years.
          </h2>
          <h2>
            King Shan has received intelligence that Al Falcone is hiding in one
            of these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin &
            Pingasor. However he has limited resources at his disposal & can
            send his army to only 4 of these planets.
          </h2>
          <h1 className="headings">Potential Hideouts</h1>
          <div className="planets">
            {planets.length === 0 ? (
              <Loader />
            ) : (
              planets.map((planet) => (
                <div className="planets_container" key={planet.name}>
                  <img
                    className="planet_images"
                    src={
                      planet.name === "Jebing"
                        ? Jebing
                        : planet.name === "Donlon"
                        ? Donlon
                        : planet.name === "Enchai"
                        ? Enchai
                        : planet.name === "Lerbin"
                        ? Lerbin
                        : planet.name === "Pingasor"
                        ? Pingasor
                        : planet.name === "Sapir"
                        ? Sapir
                        : null
                    }
                    alt={planet.name}
                  />
                  <h3>{planet.name}</h3>
                  <h3 style={{ fontWeight: "normal" }}>
                    Distance: {planet.distance}
                  </h3>
                </div>
              ))
            )}
          </div>
          <h1 className="headings">Available Vehicles</h1>
          <div className="vehicles">
            {vehicles.length === 0 ? (
              <Loader />
            ) : (
              vehicles.map((vehicle) => (
                <div className="vehicles_container" key={vehicle.name}>
                  <img
                    className="vehicle_images"
                    src={
                      vehicle.name === "Space pod"
                        ? SpacePod
                        : vehicle.name === "Space rocket"
                        ? SpaceRocket
                        : vehicle.name === "Space shuttle"
                        ? SpaceShuttle
                        : vehicle.name === "Space ship"
                        ? SpaceShip
                        : null
                    }
                    alt={vehicle.name}
                  />
                  <h3>{vehicle.name}</h3>
                  <h3 style={{ fontWeight: "normal" }}>
                    Max Distance: {vehicle.max_distance}
                  </h3>
                  <h3 style={{ fontWeight: "normal" }}>
                    Speed: {vehicle.speed}
                  </h3>
                  <h3 style={{ fontWeight: "normal" }}>
                    Available: {vehicle.total_no}
                  </h3>
                </div>
              ))
            )}
          </div>
          <button className="start" onClick={() => navigate("/mission")}>
            Start Mission
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
