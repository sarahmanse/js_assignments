//Assigment(Mathematical Shapes):
//a)
let side = 9;
let diagonalOfSquare = side * Math.sqrt(2);

//b)
let side1 = 5;
let side2 = 6;
let side3 = 7;
let s = (side1 + side2 + side3) / 2;
let areaOfTriangle = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

//c)
let radius = 4;
let circumferenceOfCircle = 2 * Math.PI * radius;
let surfaceAreaOfCircle = Math.PI * (radius * radius);

//Assignment(Conditional Statements & Loops):
//a)
if (int1 > int2) {
  console.log("The larger number is " + int1);
}
else {
  console.log("The larger number is " + int2);
}

//b)
if (number % 2 == 0) {
  console.log("The number is even");
}
else {
  console.log("The number is odd");
}