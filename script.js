var customerOrder = {
    name: "Coffee",
    sugar: ",3 sugars",
    orderReady: true,
};
 
if (customerOrder.orderReady) {
        console.log("Ready for pick-up!");
}
else {
    console.log("Still in order queue.")
};

console.log(customerOrder.name, customerOrder.sugar)
