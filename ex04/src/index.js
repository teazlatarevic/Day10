// Only change code below this line
var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
};
function myFunction(myObj) {
    var playerNumber = 10;
    return playerNumber + myObj;
}
var player = myFunction("");
console.log(players[player]);
// Only change code above this line
module.exports = { players, myFunction };