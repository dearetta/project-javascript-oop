class airplaneType {
  constructor(name = "Boeing 777", destination = "Japan") {
    this.name = name;
    this.destination = destination;
  }

  travelDistance(distance) {
    console.log(
      `This aircraft ${this.name} has travelled ${distance} to ${
        this.destination
      }`
    );
  }
  travelTime(departure) {
    let departureTime = new Date();
    let arrivalTime = departureTime.getHours();
    let timeTravelled = arrivalTime - departure;

    // console.log(arrivalTime)

    console.log(`This aircraft ${this.name} travelled to ${
        this.destination} in ${timeTravelled} hours`);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getDestination(){
      return this.destination;
  }
  
  setDestination(newDestination){
      this.destination = newDestination
  }
}

const airbus = new airplaneType("Airbus");

console.log(airbus);

airbus.travelDistance('19 km');
airbus.travelTime('8')

class airplaneMaintenance extends airplaneType{
    constructor(name, pic){
    super(name)
    this.pic = pic
    }

    maintenancePic(){
        console.log(`The ${this.name} airplane is maintained by ${this.pic}`);
    }
}

const manager = new airplaneMaintenance('Boeing','Dea')
console.log(manager);
manager.getName()
manager.maintenancePic()



