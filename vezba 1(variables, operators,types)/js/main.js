
// PRVA VEZBA
// var 1milan = 'red';


// DRUGA VEZBA
var feelings = 'I feel great';
console.log(feelings);

// CETVRTA VEZBA
var a = 5;
var b = 10;
var c = 15;
var d = a+b;
console.log(d);

var e = d*c;
console.log(e);


// PETA VEZBA
var gram = 1000;
var kilogram = 1.2;
var banane = gram*kilogram;
console.log(banane);

// ILI OVAJ NACIN
var gram = 1;
var kilogram = gram*1000;
var banane = kilogram*1.2;
console.log(banane);


// SESTA VEZBA
var sec = 60;
var min = sec*1;
var Anna = min*5;
console.log(Anna);
var Tom = min*30;
console.log(Tom);


// SEDMA VEZBA

var GB = 1;
var MB = 1000;
var KB = MB*10;
var USB = (4*GB)*MB;
console.log(USB);
var articles = (USB*KB/98);
console.log(articles);

var KB = 4000000;
var MB = KB/1000;
var GB = MB/1000;
console.log(GB);
console.log(KB/98);



// DEVETA VEZBA
var a = 5;
a*=2;
console.log(a);
var b = 10;
b+=3;
console.log(b);
var c = 20;
c /=5;
console.log(c);
var d = 27; 
d -=7;
console.log(d);


// DESETA VEZBA
var name = 'Milan';
var age = 30;
var cat = false;
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(cat));

// JEDENAESTA VEZBA
var jedan = "number"
console.log(typeof(jedan));
var dva = true;
console.log(typeof(dva));
var tri = null;
console.log(typeof(tri));
var cetri = "false";
console.log(typeof(cetri));
var pet = 56;
console.log(typeof(pet));

// ILI OVAKO
console.log(typeof("number"));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof("false"));
console.log(typeof(56));


//DVANAESTA VEZBA
var a = 10;
var b = 10;
console.log(a==b);
a = 5;
console.log(a==b);

// TRINAESTA VEZBA
var p = true;
var q = true;
console.log(p&&q);
console.log(p||q);
q = false;
console.log(p&&q);
console.log(p||q);
p = false;
q = true;
console.log(p&&q);
console.log(p||q);
q = false;
console.log(p&&q);
console.log(p||q);


// CETRNAESTA VEZBA

var age = 121;
if(age < 0 || age > 120){
console.log('Incorect age value');
} else {
 console.log('Correct age value');
}
// // ILI OVAKO

if(age>120){
     console.log('Tacno');
}
if(age<120){
    console.log('Greska');
}


// PETNAESTA VEZBA

var speed = 61;
if(speed >= 60 && speed <= 120){
    console.log(true)
} else {console.log(false)};




