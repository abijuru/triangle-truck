function myTruck () {
var side1=parseInt(document.getElementById("first side").value);
var side2=parseInt(document.getElementById("second side").value);
var  side3=parseInt(document.getElementById("thrid side").value);

if (side1 === side2 && side1===side3 &&  side3===side2 ) {
   alret("equilateralTruck!");

}
 else if(side1 === side2 || side1===side3 || side3===side2) 

 {
alret("Isosceles");

 }

else if(side1 !== side2 && side1 !==side3 && side3 !== side2 ) {

alert("scalene");
}

else{
alret("not a triangle");
}




