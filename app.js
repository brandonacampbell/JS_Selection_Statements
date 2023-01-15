
let guessedNumber = 10;

let answer = prompt ("guess a number between 1 - 20");

if (answer){
  console.log(`The number you guessed is ${answer}`); 
    if (answer < guessedNumber) {
  console.log("too low");
  } else if (answer > guessedNumber) {
    console.log ("too high");
  } else if (answer == guessedNumber) {
    console.log ("Congratulations!!!");
  }
}


let birthMonth = prompt ("what is your birth month?");

switch (birthMonth.toLowerCase()) {
  case "march":
  case "april" :
  case "may":
conosle.log ("you where born in the spring.")
break;
case "june":
case "july":
case "august":
console.log ("you where born in the summer")
break;
case "september":
case "october":
case "november":
console.log("you where born in the fall")
break; 
case "december" :
case "january":
case "febuary": 
console.log("you where born in the winter")
break;
default: 
console.log("I dont know that one.....")
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01" :
  type = "Tank Top";
  break; 
  case "02" : 
  type = "T-Shirt";
    break;
    case "03" : 
    type = "Long Sleeve";
    break; 
    case "04":
      type = "Sweat Shirt";
      break;
      default: "other"
}

switch (colorId) {
  case "BL": 
  color = "black";
    break;
    case "RD" :
      color = "red";
      break;
      case "PU" :
      color = "purple";
      break; 
      default: "white"

}

switch (sizeId) {
  case "S" :
    size = "Small";
  break;
  case "M" :
    size = "Medium";
  break; 
  case "L" :
  size = "Large";
  break;
  case "XL" :
  type = "Extra Large";
  break;
  default: "One Size Fits All"
}

console.log(`Product: ${size} ${color} ${type}`);