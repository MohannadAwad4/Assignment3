
let object={
    items:new Array,//item object
    quan:new Array,
    cost:new Array
}
//Adds an item with a specified quantity to the shopping cart.
function addToCart(item, quantity,costs)
{
object.items.push(item);
object.quan.push(quantity);
object.cost.push(costs);

return object
}
//Removes a specified quantity of an item from the shopping cart.
function  removeFromCart(item, quantity)
{
    for(i in object.items)
    {
    if(object.items[i]==item){
        object.quan[i]-=quantity;
    }
    }
return object
}


//Calculates and returns the total cost of all items in the shopping cart.
function calculateTotal()
{let sum=0;
for(c in object.cost)
{sum+=(object.quan[c]*object.cost[c]);
}
return sum
}
module.exports={addToCart,removeFromCart,calculateTotal,object}
