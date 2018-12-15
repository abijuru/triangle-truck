function myTruck () {
var side1=parseInt(document.getElementById("1st side").value);
var side2=parseInt(document.getElementById("2and side").value);
var  side3=parseInt(document.getElementById("3rd side").value);

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




