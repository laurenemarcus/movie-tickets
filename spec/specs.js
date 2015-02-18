describe("Ticket", function() {
  describe("cost", function () {
    it("will return a cost of 10", function() {
    var testTicket = Object.create(Ticket);
    expect(testTicket.cost).to.equal(10);
    });
  });
  describe("price", function() {
    it("will return a higher cost if the movie selected is 3D", function() {
      var testTicket = Object.create(Ticket);
      testTicket.movie = "Jurassic World 3D";
      expect(testTicket.price()).to.equal(15);
    });
    it("will return a lower cost if the movie selected is old", function() {
      var testTicket = Object.create(Ticket);
      testTicket.movie = "Half Baked";
      expect(testTicket.price()).to.equal(8);
    });
    it("will return a lower cost if the movie time is in the morning", function() {
      var testTicket = Object.create(Ticket);
      testTicket.time = "Morning";
      expect(testTicket.price()).to.equal(7);
    });
    it("will return a lower cost if the movie time is in the afternoon", function() {
      var testTicket = Object.create(Ticket);
      testTicket.time = "Afternoon";
      expect(testTicket.price()).to.equal(8);
    });
    it("will return a higher cost if the movie time is in the night", function() {
      var testTicket = Object.create(Ticket);
      testTicket.time = "Evening";
      expect(testTicket.price()).to.equal(13);
    });
    it("will return a lower cost if the movie goer is a child", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age = "Child";
      expect(testTicket.price()).to.equal(7);
    });
    it("will return a higher cost if the movie goer is an adult", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age = "Adult";
      expect(testTicket.price()).to.equal(12);
    });
    it("will return a lower cost if the movie goer is a senior", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age = "Senior";
      expect(testTicket.price()).to.equal(5);
    });
  });
});
