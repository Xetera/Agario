const Consumable = require('./Consumables');
const util = require('./Utility');
const handler = require('./Handler');

exports.summonFood = function(size){
    let maxFood = 200;
    let newFood = [];
    for (let i=0; i < maxFood; i++) {
        if (foods.length >= maxFood) break;

        let [x, y] = util.randomCanvasPositions(size);
        let food = new Consumable.Food(x, y, 1);
        foods.push(food);

        newFood.push(food);
    }
    if (newFood.length)
        handler.emitAll('addFood', newFood);
};