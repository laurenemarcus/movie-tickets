var Ticket = {
  cost: 10,
  price: function() {
    if (this.movie === "Jurassic World 3D") {
      this.cost += 5;
    } else if (this.movie === "Half Baked") {
      this.cost -= 2;
    }

    if (this.time === "Morning") {
      this.cost -= 3;
    } else if (this.time === "Afternoon") {
      this.cost -= 2;
    } else if (this.time === "Evening"){
      this.cost += 3;
    }

    if (this.age === "Adult") {
      this.cost += 2;
    } else if (this.age === "Child") {
      this.cost -= 3;
    } else if (this.age === "Senior") {
      this.cost -= 5;
    }

    return this.cost;
  }
};
