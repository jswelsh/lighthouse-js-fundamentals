var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// Write your if/else code here
if (((shirtWidth>=18)&&(shirtWidth<20))&&((shirtLength>=28)&&(shirtLength<29))&&((shirtSleeves>=8.13)&&(shirtSleeve<8.38))){
  console.log("S");
} else if (((shirtWidth>=20)&&(shirtWidth<20))&&((shirtLength>=29)&&(shirtLength<30))&&((shirtSleeve>=8.38)&&(shirtSleeve<8.63))){
  console.log("M");
} else if (((shirtWidth>=22)&&(shirtWidth<24))&&((shirtLength>=30)&&(shirtLength<31))&&((sshirtSleeve>=8.63)&&(shirtSleeve<8.88))){
  console.log("L");
} else if (((shirtWidth>=24)&&(shirtWidth<26))&&((shirtLength>=31)&&(shirtLength<33))&&((shirtSleeve>=8.88)&&(shirtSleeve<9.63))){
  console.log("XL");
} else if (((shirtWidth>=26)&&(shirtWidth<28))&&((shirtLength>=33)&&(shirtLength<34))&&((shirtSleeve>=9.63)&&(shirtSleeve<10.13))){
  console.log("XXL");
} else if ((shirtWidth<28)&&(shirtLength<34)&&(shirtSleeve<10.13)){
  console.log("XXXL");
} else console.log("N/A");