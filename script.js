function myTriangle () {
var side1 =parseInt(document.getElementById("side1").value);
var side2 = parseInt (document.getElementById("side2").value);
var  side3 = parseInt ( document.getElementById("side3").value);

if(side1+side2>side3 &&
    side1+side3>side2 &&
    side2+side3>side1){

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
    

    }
else{
alert(" that is not a triangle");
}


}



varmyTriangle=["Equilateral","Scalene", "Isosceles"]
var myEquilateral=[("2,2,2") ("10,10,10")]
var myScalene=[("10,5,8") ("")]
var myIsosceles=[("12,12,13") ("9,8,8")]
var myNottriangle=["1,2,3"]




