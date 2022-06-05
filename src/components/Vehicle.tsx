import React from "react";
// import { v4 } from "uuid";
import { Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { VehiclePropsInterface } from "../Interfaces/interfaces";

const Vehicle = ({
  vehicle,
  vehicles,
  setVehicle,
  setVehicles,
  setSelectedVehicles,
  setSpeed,
  index,
}: VehiclePropsInterface): JSX.Element => {
  const rocketChange = (event: any) => {
    let x = vehicles.map((e: any) => {
      if (vehicle === e.name) {
        return { ...e, total_no: e.total_no + 1 };
      }
      if (e.name === event.target.value) {
        return { ...e, total_no: e.total_no - 1 };
      } else {
        return e;
      }
    });
    setVehicle(event.target.value);

    setSelectedVehicles((prevVehicles: any) => {
      prevVehicles[index] = event.target.value;
      return [...prevVehicles];
    });

    setVehicles(x);
  };
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <FormControl>
          <RadioGroup
            name="row-radio-buttons-group"
            value={vehicle}
            onChange={(e) => {
              rocketChange(e);
            }}
          >
            {vehicles.map((val: any) => {
              return (
                <div key={val.name}>
                  <>
                    <FormControlLabel
                      value={val.name}
                      disabled={val.total_no > 0 ? false : true}
                      control={<Radio />}
                      label={`${val.name} (${val.total_no})`}
                      onChange={() =>
                        setSpeed((prevSpeed) => {
                          prevSpeed[index] = val.speed;
                          return [...prevSpeed];
                        })
                      }
                    />
                  </>
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
      </Stack>
    </>
  );
};

export default Vehicle;
