import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PlanetsInterface,
  VehiclesInterface,
} from "../../Interfaces/interfaces";
import Planets from "../../components/Planets";
import Vehicle from "../../components/Vehicle";
import "./MainPage.css";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import Table from "../../components/VehicleTable/Table";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const MainPage = (): JSX.Element => {
  const navigate = useNavigate();

  const [planets, setPlanets] = useState<PlanetsInterface[]>([]);
  const [vehicles, setVehicles] = useState<VehiclesInterface[]>([]);
  const [loadingVehicles, setLoadingVehicles] = useState<boolean>(true);
  const [vehicle1, setVehicle1] = useState<string>("");
  const [vehicle2, setVehicle2] = useState<string>("");
  const [vehicle3, setVehicle3] = useState<string>("");
  const [vehicle4, setVehicle4] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [selectedVehicles, setSelectedVehicles] = useState<String[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    []
  );
  const [showDestination, setShowDestination] = useState<boolean[]>(
    new Array(4).fill(false)
  );
  const [distance, setDistance] = useState<number[]>([0, 0, 0, 0]);
  const [speed, setSpeed] = useState<number[]>([0, 0, 0, 0]);
  const [timeTaken, setTimeTaken] = useState<number[]>([]);

  const config = {
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
  };
  const getToken = async () => {
    const { data } = await axios.post(
      "https://findfalcone.herokuapp.com/token",
      {},
      config
    );
    setToken(data.token);
  };

  const getPlanetsOrVehicles = async (url: string) => {
    setLoadingVehicles(true);
    const { data } = await axios.get(url);
    url === "https://findfalcone.herokuapp.com/planets" && setPlanets(data);
    url === "https://findfalcone.herokuapp.com/vehicles" && setVehicles(data);
    setLoadingVehicles(false);
  };

  const findFalcone = async () => {
    const { data } = await axios.post(
      "https://findfalcone.herokuapp.com/find",
      {
        token: token,
        planet_names: selectedDestinations,
        vehicle_names: selectedVehicles,
      },
      config
    );
    localStorage.setItem("result", JSON.stringify(data));
    const totalTimeTaken = timeTaken.reduce((a, b) => a + b, 0);
    localStorage.setItem("time taken", JSON.stringify(totalTimeTaken));
    navigate("/result");
  };

  useEffect(() => {
    getPlanetsOrVehicles("https://findfalcone.herokuapp.com/planets");
    getPlanetsOrVehicles("https://findfalcone.herokuapp.com/vehicles");
    getToken();
  }, []);

  useEffect(() => {
    const timeArray = distance
      .map((d, i) => (speed[i] !== 0 ? d / speed[i] : 0))
      .filter((t) => !isNaN(t));
    setTimeTaken(timeArray);
  }, [speed, distance]);

  const handlePlanetChange = (planet: any, i: number) => {
    setSelectedDestinations((prevState: any) => {
      prevState[i] = planet.name;
      return [...prevState];
    });
    setDistance((prevDistance: any) => {
      prevDistance[i] = planet.distance;
      return [...prevDistance];
    });
  };

  const reset = () => {
    setShowDestination([false, false, false, false]);
    setSelectedDestinations([]);
    setSpeed([0, 0, 0, 0]);
    setDistance([0, 0, 0, 0]);
    getPlanetsOrVehicles("https://findfalcone.herokuapp.com/planets");
    getPlanetsOrVehicles("https://findfalcone.herokuapp.com/vehicles");
  };

  return (
    <div className="mainContainer">
      <Header text="history" />
      <div className="subContainer">
        {" "}
        <h1 className="heading">Start your mission now !</h1>
        <div className="destinationContainer">
          <div className="selectDestinationContainer">
            <h3>Select Destination 1</h3>{" "}
            <Planets
              index={0}
              handlePlanetChange={handlePlanetChange}
              planets={planets}
              selectedDestinations={selectedDestinations}
              setShowDestination={setShowDestination}
            />
            {showDestination[0] && (
              <Vehicle
                vehicle={vehicle1}
                vehicles={vehicles}
                setVehicle={setVehicle1}
                setVehicles={setVehicles}
                setSelectedVehicles={setSelectedVehicles}
                setSpeed={setSpeed}
                index={0}
              />
            )}
          </div>
          <div className="selectDestinationContainer">
            <h3>Select Destination 2</h3>{" "}
            <Planets
              index={1}
              handlePlanetChange={handlePlanetChange}
              planets={planets}
              selectedDestinations={selectedDestinations}
              setShowDestination={setShowDestination}
            />
            {showDestination[1] && (
              <Vehicle
                vehicle={vehicle2}
                vehicles={vehicles}
                setVehicle={setVehicle2}
                setVehicles={setVehicles}
                setSelectedVehicles={setSelectedVehicles}
                setSpeed={setSpeed}
                index={1}
              />
            )}
          </div>
          <div className="selectDestinationContainer">
            <h3>Select Destination 3</h3>{" "}
            <Planets
              index={2}
              handlePlanetChange={handlePlanetChange}
              planets={planets}
              selectedDestinations={selectedDestinations}
              setShowDestination={setShowDestination}
            />
            {showDestination[2] && (
              <Vehicle
                vehicle={vehicle3}
                vehicles={vehicles}
                setVehicle={setVehicle3}
                setVehicles={setVehicles}
                setSelectedVehicles={setSelectedVehicles}
                setSpeed={setSpeed}
                index={2}
              />
            )}
          </div>
          <div className="selectDestinationContainer">
            <h3>Select Destination 4</h3>{" "}
            <Planets
              index={3}
              handlePlanetChange={handlePlanetChange}
              planets={planets}
              selectedDestinations={selectedDestinations}
              setShowDestination={setShowDestination}
            />
            {showDestination[3] && (
              <Vehicle
                vehicle={vehicle4}
                vehicles={vehicles}
                setVehicle={setVehicle4}
                setVehicles={setVehicles}
                setSelectedVehicles={setSelectedVehicles}
                setSpeed={setSpeed}
                index={3}
              />
            )}
          </div>
        </div>
        <div className="btn_container">
          <button
            className={
              selectedDestinations.length !== 4 || selectedVehicles.length !== 4
                ? "findDisabled"
                : "find"
            }
            disabled={
              selectedDestinations.length !== 4 || selectedVehicles.length !== 4
            }
            onClick={findFalcone}
          >
            Find Falcone !
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
        <div className="timeContainer">
          {" "}
          <div className="table_container">
            <h2>
              Time taken ={" "}
              {timeTaken.length === 0 ? (
                <span>0</span>
              ) : (
                <span className="timeSpan">
                  {timeTaken.reduce((a, b) => a + b, 0)}
                </span>
              )}
            </h2>
            {loadingVehicles ? <Loader /> : <Table vehicles={vehicles} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
