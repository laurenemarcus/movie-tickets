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

$(document).ready(function() {
  $("form#film").submit(function(event) {
    event.preventDefault();

    var movie = $("input[name=name]:checked").val();
    var time = $("input[name=time]:checked").val();
    var age = $("input[name=age]:checked").val();

    var newTicket = Object.create(Ticket);

    newTicket.movie = movie;
    newTicket.airtime = time;
    newTicket.age = age;

    $(".price-display").text(newTicket.price());
debugger;
  });
});
