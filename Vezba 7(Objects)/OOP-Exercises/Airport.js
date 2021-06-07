'use strict';

(function(){
    
    function Person(name, surname){
        if(!name || !surname){
            throw new Error("Please fill out all the fields")
        }
        this.name = name;
        this.surname = surname;
        this.getData = function(){
            return this.name + " " + this.surname;
        }
    };

    function Seat(number, category){
        this.category = category || 'e';
        this.number;
        if(!isNaN(number)){
            this.number = number;
        }else{
            this.number = Math.floor(Math.random() * (100 - 10) + 10);
        }
        if(!["e", "b"].includes(this.category)){
            throw new Error("Invalid category input")
         }
        this.getData = function(){
            return this.number + ", " + this.category.toUpperCase();
         }
     };

    function Passenger(person, seat){
        if(!person || !(person instanceof Person)){
            throw new Error("Invalid person input")
        }
        if(!seat || !(seat instanceof Seat)){
            throw new Error("Invalid seat input")
        }
        this.person = person;
        this.seat = seat;

        this.getData = function (){
            return this.seat.getData() + ", " + this.person.getData(); 
         }
    };

    function Flight(relation, date){
        if(!relation || !date){
            throw new Error("Please fill out relation and date fields")
        }
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.addPassenger = function(passenger){
             if(!passenger || !(passenger instanceof Passenger)){
                  throw new Error("Invalid passenger input");   
              }
            this.listOfPassengers.push(passenger);
        }
        this.getData = function(){
            var output;
            var day = this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear() + ", ";
            output = day + this.relation + "\n";
            this.listOfPassengers.forEach(function(passenger){
                output += "\t\t" + passenger.getData() + "\n";
            });
            return output;
        }
    };

    function Airport(){
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function(flight){
            this.listOfFlights.push(flight)
        }
        this.getData = function(){
            var sum = 0;
            this.listOfFlights.forEach(function(flight){
                sum += flight.listOfPassengers.length;
            });
            var output = "Airport: " + this.name + ", total passengers: " + sum + "\n";
            this.listOfFlights.forEach(function(flight){
                output += "\t" + flight.getData();
            });
            return output;
        }
    };

    function createFlight(relation, date){
        return new Flight(relation, date);
    };

    function createPassenger(name, surname, number, category){
        var person = new Person(name, surname);
        var seat = new Seat(number, category);
        return new Passenger(person, seat);
    };


    // test

    try{
      var passenger = createPassenger("John", "Snow", 1,"b");
      var passenger1 = createPassenger("Cersei", "Lannister", 2,"b");
      var passenger2 = createPassenger("Daenerys", "Targaryen", 14);
      var passenger3 = createPassenger("Tyrion", "Lannister");
      var flight = createFlight("Belgrade - New York", "Oct/25/2017");
      var flight1 = createFlight("Barcelona - Belgrade", "Nov/11/2017")
      var airport = new Airport();
      flight.addPassenger(passenger);
      flight.addPassenger(passenger1);
      flight1.addPassenger(passenger2);
      flight1.addPassenger(passenger3);
      airport.addFlight(flight);
      airport.addFlight(flight1);
    
     console.log(airport.getData());
    } catch (error){
        console.log("Error: " + error.message);
    }
})();