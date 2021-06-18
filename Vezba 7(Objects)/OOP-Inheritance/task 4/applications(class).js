class App{
    constructor(name, licence, stars){
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }
    getData() {
        return this.name + ", " + this.licence + ", " + this.stars;
    }

    isCCLicence() {
        return (this.licence === "CC");
    }

    like() {
        this.stars ++;
    }

    showStars() {
        return this.stars;
    }
}

class WebApp extends App{
    constructor(name, url, techologies, licence, stars){
        super(name, licence, stars)

        this.url = url;
        this.technologies = techologies;
    }

    reactBased() {
        var result = false;
        this.technologies.forEach(function(el){
            if(el === "React"){
                result = true;
            }
        })
        return result;
    }

    getData() {
        return super.getData()+ ", " + this.technologies + ", " + this.url;
    }
}

class MobileApp extends App{
    constructor(name, platforms, licence, stars){
        super(name, licence, stars)

        this.platforms = platforms;
    }

    getData() {
        return super.getData() + ", " + this.platforms;
    }

    forAndroid() {
        var result = false;
        this.platforms.forEach(function(el){
            if(el === "Android"){
                result = true;
            }
        })
        return result;
    }
}

var web = new WebApp("flashcore", "www.flashscore.com", ["Java", "Python", "Django", "React"], "CC", 3.7);
console.log(web.getData());
var mobile = new MobileApp("shazam", ["Android", "Windows", "iOS"], "ST", 3);
// console.log(mobile.getData())