// function Declare... 
function func ()
{
    console.log("i'm function")
}

func();



// function Expression.
var func2 = function book(a)
{
    return(`i'm backtick ${a}`);
    // return a;
//    undefined if i don't return
}

console.log(func2 (1));



// undefined Function.
var func3 = function book(a,b)
{
    if (b == undefined)
    {
        b = 10;
    }


    // NAN is this
    console.log(a + b);
    // return a;
//    undefined if i don't return
}

func3(3);

// Arrow Function will work without parameter when one parameter...
const imArrowFunction = value=> {
    console.log(value);
}
imArrowFunction(`i'm really arrow function!`);



// Arrow function also work without third bracket....
const withOutBracket = a => console.log(a);


withOutBracket(`i'm without bracket function`);




// arrow also anonymous function...
const anonymousFunc = function (){
    console.log("arrow and and normal function without Name are anonymous Function.");
}


anonymousFunc();





// object in function...
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },

    // ! Arrow function doesn't work with this...
    fullName2 : ()=> {
      return this.firstName + " " + this.lastName;
    }
  };



  console.log(person.fullName());
  console.log(person.fullName2());