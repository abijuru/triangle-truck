function myTriangle () {
var side1 =parseInt(document.getElementById("side1").value);
var side2 = parseInt (document.getElementById("side2").value);
var  side3 = parseInt ( document.getElementById("side3").value);

if (side1 === side2 && side1===side3 &&  side3===side2 ) {
   alert("that triangle is  equilateral ");

}
 else if(side1 === side2 && side1!==side3 && side3!==side2) 

 {
alert("that triangle is  Isosceles");

 }

else if(side1 !== side2 && side1 !==side3 && side3 !== side2 ) {

alert(" that triangle is scalene");
}

else{
alert(" that is not a triangle");
}


}

