// Q8: Movie Ticket Booking System (prototype + inheritance)

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  console.log(`Ticket - Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ${this.price}`);
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee = 20) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Demo
const t = new OnlineTicket('Inception', 'A10', 250, 30);
t.printTicket(); // from prototype chain
console.log('Total amount:', t.getTotalAmount());
