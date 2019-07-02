class airplaneType {
  constructor(name = "Boeing 777", destination = "Japan", distance = "8") {
    this.name = name;
    this.destination = destination;
    this.distance = distance
  }

  travelDistance() {
    console.log(
      `This aircraft ${this.name} has travelled ${this.distance} to ${
        this.destination
      }`
    );
  }
  travelTime(departure) {
    let departureTime = new Date();
    let arrivalTime = departureTime.getHours();
    let timeTravelled = arrivalTime - departure;

    // console.log(arrivalTime)

    console.log(
      `This aircraft ${this.name} travelled to ${
        this.destination
      } in ${timeTravelled} hours`
    );
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getDestination() {
    return this.destination;
  }

  setDestination(newDestination) {
    this.destination = newDestination;
  }
}

const boeing = new airplaneType();
console.log(boeing);

const airbus = new airplaneType("Airbus");
console.log(airbus.getName());
console.log(airbus);

airbus.travelDistance("19");
airbus.travelTime("9");

class airplaneMaintenance extends airplaneType {
  constructor(name, pic) {
    super(name);
    this.pic = pic;
  }

  maintenancePic() {
    console.log(`The ${this.name} airplane is maintained by ${this.pic}`);
  }
}

const manager = new airplaneMaintenance("Boeing", "Dea");
console.log(manager);
manager.getName();
manager.maintenancePic();

class airplaneFare extends airplaneType {
  constructor(name, distance) {
    super(name, distance);
  }

  ticket(price) {
    const amountTicket = prompt("Enter amount of tickets :");
    const ticket =
      parseInt(price) *
      parseInt(this.distance) *
      parseInt(amountTicket);

    console.log(`The price of the ticket is ${ticket} USD`);
  }
}

const ticketTotal = new airplaneFare();
ticketTotal.ticket(8);
