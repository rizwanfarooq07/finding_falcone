import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import {
  PlanetsInterface,
  PlanetsPropsInterface,
} from "../Interfaces/interfaces";

const Planets = ({
  index,
  handlePlanetChange,
  planets,
  selectedDestinations,
  setShowDestination,
}: PlanetsPropsInterface): JSX.Element => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={selectedDestinations[index] ? selectedDestinations[index] : ""}
        label="Select Planet"
      >
        {planets.length > 0 &&
          planets.map((planet: PlanetsInterface) => (
            <MenuItem
              disabled={selectedDestinations.includes(planet.name)}
              key={planet.name}
              value={planet.name}
              onClick={() => {
                handlePlanetChange(planet, index);
                setShowDestination((prevState: any) => {
                  prevState[index] = true;
                  return [...prevState];
                });
              }}
            >
              {`${planet.name} (${planet.distance})`}
            </MenuItem>
          ))}
      </Select>{" "}
    </FormControl>
  );
};

export default Planets;
