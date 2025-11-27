// Q5: Ride-Sharing Application (classes + error handling)

class User {
  constructor(name, rating = 5) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle; // {make, model, plate}
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (typeof this.distance !== 'number' || isNaN(this.distance)) {
      throw new Error('Invalid distance provided');
    }
    if (this.distance < 0) {
      throw new Error('Distance cannot be negative');
    }
    const baseFare = 50; // base charge in currency units
    const perKm = 10; // per km rate
    return baseFare + perKm * this.distance;
  }
}

// Demo
try {
  const trip = new Trip('A', 'B', 12.5);
  console.log('Fare:', trip.calculateFare());
  const badTrip = new Trip('X','Y', -5);
  console.log('This will throw:', badTrip.calculateFare());
} catch (err) {
  console.error('Trip error:', err.message);
}
