import { airplaneType, airplaneMaintenance, airplaneFare } from "./flightSchedule.js"

const airbus = new airplaneType("Airbus");
console.log(airbus);

airbus.travelDistance("19");
airbus.travelTime("9");

const manager = new airplaneMaintenance("Boeing", "Dea");

console.log(manager);
manager.getName();
manager.maintenancePic();

const ticketTotal = new airplaneFare();
ticketTotal.ticket(8);
