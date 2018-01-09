const Consumable = require('./Consumables');
const util = require('./Utility');

exports.summonFood = function(size){
    let maxFood = 200;
    for (let i=0; i < maxFood; i++){
        let [x, y] = util.randomCanvasPositions(size);
        foods.push(
            new Consumable.Food(x, y)
        );
    }
};