const weekday = 5 // agar yaha pe string diya ho toh vo string ko hi hum case ke aage likh denge 

switch (weekday) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
            console.log("wednesday");
            break;
    case 4:
            console.log("thrusday");
            break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
      // agar break nhi lgate h toh jo value match hui h uske baad ki saari value print ho jaati h default ko chod kr
    default:
        console.log("enter a valid number")
        break;
}