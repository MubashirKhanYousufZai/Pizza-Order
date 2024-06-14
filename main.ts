import inquirer from "inquirer";
console.log("Welcome to our Pizza shop🍕");

let order = await inquirer.prompt([
    {
        name: "Order",
        message: "Sir What's your order?",
        type: "text",
    }
]);



 let flavour = await inquirer.prompt([
    {
        name: "Flavour",
        message: "Sir in which Flovour?",
        type: "list",
        choices: ["Chicken Tikka" , "Cheese Burst" , "Malai Boti" , "Fajita" , "Afghani Boti" , "Paproni"]
    }
 ]);

 let size = await inquirer.prompt([
    {
        name: "Size",
        message: "Sir in which size?",
        type: "list",
        choices: ["Small" , "Medium" , "Large"]
    }
 ]);

 console.log(`Your order is ${order.Order} in ${flavour.Flavour} and size is ${size.Size}`);
 console.log("Your order is Placed");

 let preparing = setTimeout(() => {
    console.log("Your Order Is Being Prepared...");
 },1000);

 let prepared = setTimeout(() => {
    console.log("Your order is prepared.");
 },2000);

 let rider = setTimeout(() => {
    console.log("Your order is picked by our rider.");
 },3000);
 
 let reached = setTimeout(() => {
    console.log("Your order is reached at your address.");
 },4000);

