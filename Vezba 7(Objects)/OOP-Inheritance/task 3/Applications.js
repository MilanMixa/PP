function App(name, licence, stars){
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

App.prototype.getData = function() {
    return this.name + " " + this.licence + " " + this.stars;
}

App.prototype.isCCLicence = function(){
    return (this.licence === "CC");
}

App.prototype.like = function(){
    this.stars ++;
}

App.prototype.showStars = function(){
    return this.stars;
}

function WebApp(name, url, technologies, licence, stars){
    App.call(this, name, licence, stars)
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.reactBased = function(){
    var result = false;
    this.technologies.forEach(function(el){
        if(el === "React"){
            result = true;
        }
    })
    return result;
}

WebApp.prototype.getData = function(){
    return this.name + " " + this.url +  " " + this.technologies + " " + this.licence + " " + this.stars; 
}

function MobileApp(name, platforms, licence, stars){
    App.call(this,name, licence, stars)
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function(){
    return this.name + " " + this.platforms + " " + this.licence + " " + this.stars;
}

MobileApp.prototype.forAndroid = function(){
    var result = false;
    this.platforms.forEach(function(el){
        if(el === "Android"){
            result = true;
        }
    })
    return result;
}

var web = new WebApp("flashcore", "www.flashscore.com", ["Java", "Python", "Django", "React"], "CC", 3.7);
console.log(web.getData());
var mobile = new MobileApp("shazam", ["Android", "Windows", "iOS"], "ST");





