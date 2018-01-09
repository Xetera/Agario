const Consumable = require('./Consumables');
const util = require('./Utility');

exports.summonFood = function(size){
    let maxFood = 200;
    for (let i=0; i < maxFood; i++){
        if (foods.length >= maxFood) return;
        let [x, y] = util.randomCanvasPositions(size);
        console.log(x, y);
        foods.push(
            new Consumable.Food(x, y)
        );
    }
};