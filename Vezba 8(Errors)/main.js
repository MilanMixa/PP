var first = true;
console.log(first);

try {
    var myObject = {
        firstName: "Milan",
        lastName: "Stankovic",
        age: Milan
    }
} catch(error){
    console.log("Error has occured!");
};

var a = 4+2;
console.log(a);


function t(st, nd){
    throw new Error("SomeOurErorr")
};

try {
    t(1,2);
} catch(err){
    console.log(err);
};

function s(st, nd){
    throw {
        name: "SomeOurErorr",
        msg: "Do not try this again!"
    }
};

try {
    s(1,2);
} catch(err){
    console.log(err);
};
