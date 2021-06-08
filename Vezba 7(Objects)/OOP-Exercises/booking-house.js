"use strict";

(function(){
    function Country(name, odds, continent){
        if(!name || !odds){
            throw new Error("Please fill out all fields")
        }
        this.countryName = name;
        this.odds = odds;
        if(!continent){
            throw new Error ("Please fill out continent name!")
        }
        this.continent = continent;
    }

    function Continent(){
        this.EUROPE = "EU";
        this.ASIA = "AS";
        this.AFRICA = "AF";
        this.SOUTHAMERICA = "SA";
        this.NORTHAMERICA = "NA";
        this.AUSTRALIA = "AU"

    };

    function Person (name, surname, date){
        if(!name || !surname || !date){
            throw new Error("Please fill out the required fields")
        }
        this.name = name;
        this.surname = surname;
        this.dob = new Date(date);
        this.getMethod = function(){
            var day = this.dob.getDate();
            var month = this.dob.getMonth() + 1;
            var year = this.dob.getFullYear();
            return this.name + " " + this.surname + ", " + day +"." + month + "." + year + ".";
        }
    };

    function Player(person, bet, country){
        if(!person || !bet){
            throw new Error("Please fill out the required fields")
        }
        this.person = person;
        this.bet = bet;
        if(!country || !(country instanceof Country)){
            throw new Error("country field is required")
        }
        this.country = country;
  
    }

    function Address (country, city, postalCode, street, number){
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = number;
        this.getMethod = function () {
            var abbrevation = this.country[0];
            var vowels = ["a", "e", "i", "o", "u"];
            for (var i = 1; i < this.country.length; i++) {
                if (!(vowels.includes(this.country[i].toLowerCase()))) {
                    abbrevation += this.country[i];
                }
            }
            return this.street + " " + this.streetNumber + ", " + this.postalCode + " " + this.city + ", " + abbrevation.toUpperCase().slice(0, 2); 
        }
    };

    function BettingPlace (address){
        this.address = address;
        this.listOfPlayers = [];
    };

    function BettingHouse (competition, numbers) {
        this.competition = competition;
        this.listOfPlayers = [];
        this.numberOfPlayers = numbers;
    };



    //test
    try{
        var continent = new Continent();
        var country = new Country("Serbia", 20, continent.EUROPE);
        var person = new Person("Milan", "Stankovic", "Oct 23 2021")
        var player = new Player("Milan Stankovic", 500, country);
        var address = new Address("Serbia", "Venice", 21000, "Carigradska", 5)
        console.log(address.getMethod());
    }catch(error){
        console.log(error.message);
    }
})();