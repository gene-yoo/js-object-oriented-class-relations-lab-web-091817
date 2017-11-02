let driverId = 0;
let tripId = 0;
let passengerId = 0;

let store = {
  drivers: [],
  passengers: [],
  trips: []
};

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    });
  }

  passengers() {
    let passengerIds = this.trips().map(trip => {
      return trip.passengerId;
    });
    return passengerIds.map(passengerId => {
      return store.passengers.find(passenger => {
        return passenger.id === passengerId;
      });
    });
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    });
  }

  drivers() {
    let driverIds = this.trips().map(trip => {
      return trip.driverId;
    });
    return driverIds.map(driverId => {
      return store.drivers.find(driver => {
        return driver.id === driverId;
      });
    });
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    store.trips.push(this);
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
}
