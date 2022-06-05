export interface PlanetsInterface {
  name: string;
  distance: number;
  filter: () => {};
}

export interface VehiclesInterface {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
  map: any;
}

export interface HeaderPropsInterface {
  text: string;
}

export interface TablePropsInterface {
  vehicles: VehiclesInterface[];
}

export interface PlanetsPropsInterface {
  index: number;
  planets: {
    name: string;
    distance: number;
    filter: () => {};
  }[];
  handlePlanetChange: any;
  selectedDestinations: string[];
  setShowDestination: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export interface VehiclePropsInterface {
  vehicle: string;
  vehicles: VehiclesInterface[];
  setVehicles: React.Dispatch<React.SetStateAction<VehiclesInterface[]>>;
  setVehicle: React.Dispatch<React.SetStateAction<string>>;
  setSelectedVehicles: React.Dispatch<React.SetStateAction<String[]>>;
  setSpeed: React.Dispatch<React.SetStateAction<number[]>>;
  index: number;
}

export interface SuccessPropsInterface {
  result: any;
  totalTimeTaken: any;
}
