"use strict";

(function(){
    function Country(countryName, odds, continent){
        if(!countryName || !odds){
            throw new Error("Please fill out all fields")
        }
        this.countryName = countryName;
        this.odds = odds;
        if(!continent){
            throw new Error ("Please fill out continent name!")
        }
        this.continent = continent;
        this.getAbbrevation = function(){
            var abbrevation = this.countryName[0];
            var vowels = ["a", "e", "i", "o", "u"];
            for (var i = 1; i < this.countryName.length; i++) {
                if (!(vowels.includes(this.countryName[i].toLowerCase()))) {
                    abbrevation += this.countryName[i];
                }
            }
            return abbrevation.toUpperCase().slice(0, 2);
        };
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
        this.info = function(){
            var age = Math.floor((new Date() - this.dob) / 31536000000);
            return this.name + " " + this.surname + ", " + age + " years";
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
        this.winAmmount = (this.country.odds * this.bet).toFixed(2);
        this.getMethod = function(){
            return this.country.getAbbrevation() + ", " + this.winAmmount + " eur, " + this.person.info();
        }
    }

    function Address (country, city, postalCode, street, number){
        if (!country || !(country instanceof Country)) {
            throw new Error("Invalid input");
        }
        if (!city || !postalCode || !street || !number) {
            throw new Error("Please fill out all the required fields!");
        }
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = number;
        this.getMethod = function () {
            return this.street + " " + this.streetNumber + ", " + this.postalCode + " " + this.city + ", " + this.country.getAbbrevation(); 
        }
    };

    function BettingPlace (address){
        if (!address || !(address instanceof Address)) {
            throw new Error("Invalid input");
        }
        this.address = address;
        this.listOfPlayers = [];
        this.getMethod = function(){
            return this.address.street + ", " + this.address.postalCode + ", " + this.address.city + ", sum of all bets: " + this.getAllBets();
        }
        this.getAllBets = function (){
            var sum = 0;
            this.listOfPlayers.forEach(function(el){
                sum+= parseFloat(el.winAmmount);
            })
            return sum;
        }
        this.addPlayer = function(player){
            this.listOfPlayers.push(player)
        }
    };

    function BettingHouse (competition) {
        if (!competition) {
            throw new Error("This field is required!");
        }
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers;
        this.addPlace = function(place){
            this.listOfBettingPlaces.push(place)
        }
        this.getAllBets = function (){
            var sum = 0;
            this.listOfBettingPlaces.forEach(function(el){
                sum+= parseFloat(el.getAllBets());
            })
            return sum;
        }
        this.getNumberOfAllBets = function(){
            var sum = 0;
            this.listOfBettingPlaces.forEach(function(el){
                sum+= el.listOfPlayers.length;
            })
            return sum;
        }
        this.getMethod = function(){
            var country = [];
            var output = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.getNumberOfAllBets() + " bets \n";
            this.listOfBettingPlaces.forEach(function(el){
                output += "\t" + el.getMethod() + " eur \n";
                el.listOfPlayers.forEach(function(element){
                    output += "\t\t" + element.getMethod() + "\n";
                    country.push(element.country);
                })
            })
            var max = this.getMaxBet(country);
            output+= "There are " + max.bets + " bets on " + max.country.countryName;
            return output;
        }
        this.getMaxBet = function(country){
            var max = country[0];
            var maxNumber = -Infinity;
            for(var i = 0; i < country.length; i++){
                var counter = 1;
                for(var j = i + 1; j < country.length; j++){
                    if(country[i].countryName === country[j].countryName){
                        counter++;
                    }
                }
                if(counter > maxNumber){
                    maxNumber = counter;
                    max = country[i];
                }
            }
            return {
                country: max,
                bets: maxNumber,
            };
        }
    };

    function createPlayer(name, surname, date, bet, countryName, odds, continent){
        var person = new Person(name, surname, date);
        var country = new Country(countryName, odds, continent);
        return new Player(person, bet, country)
    }

    function createBettingPlace(countryName, odds, continent, city, postalCode, street, number){
        var country = new Country(countryName, odds, continent);
        var address = new Address(country, city, postalCode, street, number);
        return new BettingPlace (address);
    }

    //test

    try{
        var continent = new Continent();
         
        var player = createPlayer("Milan", "Stankovic", "Oct 23 1990", 250, "Serbia", 20, continent.EUROPE);
        var player1 = createPlayer("Marko", "Stankovic", "Aug 28 1992", 370, "Serbia", 7.5, continent.EUROPE);
        var player2 = createPlayer("Joyce", "Cabales", "Apr 09 1992", 70, "Phillipines", 13.5, continent.ASIA);
        var player3 = createPlayer("John", "Terry", "Dec 28 1980", 1370, "America", 2.5, continent.NORTHAMERICA);


        var bettingPlace = createBettingPlace("Serbia", 5,continent.EUROPE, "Belgrade", 11000, "Nemanjina", 5);
        var bettingPlace1 = createBettingPlace("Italy", 5,continent.EUROPE, "Venice", 21000, "Carigradska", 5);

        var betting = new BettingHouse("World Cup Winner");

        bettingPlace.addPlayer(player);
        bettingPlace.addPlayer(player1);
        bettingPlace1.addPlayer(player2);
        bettingPlace1.addPlayer(player3);

        betting.addPlace(bettingPlace);
        betting.addPlace(bettingPlace1);

        console.log(betting.getMethod());
    }catch(error){
        console.log(error.message);
    }
})();