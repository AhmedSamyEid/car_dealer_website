import { Browsebytype } from "@/components/browseby_type/Browsebytype";
import Vehiclesavailable from "@/components/vehicles _available/Vehiclesavailable";

export default function home() {
  return (
    <div>
      <Vehiclesavailable />
      <Browsebytype />
    </div>
  );
}
