/*
♥ = 0
♣ = 1
♦ = 2
♠ = 3
*/

let stock = [
    {"name": "Red Joker", "rank": "13", "suit": "4"},
    {"name": "Black Joker", "rank": "13", "suit": "4"},

    {"name": "A♥", "rank": "0", "suit": "0"},
    {"name": "2♥", "rank": "1", "suit": "0"},
    {"name": "3♥", "rank": "2", "suit": "0"},
    {"name": "4♥", "rank": "3", "suit": "0"},
    {"name": "5♥", "rank": "4", "suit": "0"},
    {"name": "6♥", "rank": "5", "suit": "0"},
    {"name": "7♥", "rank": "6", "suit": "0"},
    {"name": "8♥", "rank": "7", "suit": "0"},
    {"name": "9♥", "rank": "8", "suit": "0"},
    {"name": "10♥", "rank": "9", "suit": "0"},
    {"name": "J♥", "rank": "10", "suit": "0"},
    {"name": "Q♥", "rank": "11", "suit": "0"},
    {"name": "K♥", "rank": "12", "suit": "0"},

    {"name": "A♣", "rank": "0", "suit": "1"},
    {"name": "2♣", "rank": "1", "suit": "1"},
    {"name": "3♣", "rank": "2", "suit": "1"},
    {"name": "4♣", "rank": "3", "suit": "1"},
    {"name": "5♣", "rank": "4", "suit": "1"},
    {"name": "6♣", "rank": "5", "suit": "1"},
    {"name": "7♣", "rank": "6", "suit": "1"},
    {"name": "8♣", "rank": "7", "suit": "1"},
    {"name": "9♣", "rank": "8", "suit": "1"},
    {"name": "10♣", "rank": "9", "suit": "1"},
    {"name": "J♣", "rank": "10", "suit": "1"},
    {"name": "Q♣", "rank": "11", "suit": "1"},
    {"name": "K♣", "rank": "12", "suit": "1"},

    {"name": "K♦", "rank": "12", "suit": "2"},
    {"name": "Q♦", "rank": "11", "suit": "2"},
    {"name": "J♦", "rank": "10", "suit": "2"},
    {"name": "10♦", "rank": "9", "suit": "2"},
    {"name": "9♦", "rank": "8", "suit": "2"},
    {"name": "8♦", "rank": "7", "suit": "2"},
    {"name": "7♦", "rank": "6", "suit": "2"},
    {"name": "6♦", "rank": "5", "suit": "2"},
    {"name": "5♦", "rank": "4", "suit": "2"},
    {"name": "4♦", "rank": "3", "suit": "2"},
    {"name": "3♦", "rank": "2", "suit": "2"},
    {"name": "2♦", "rank": "1", "suit": "2"},
    {"name": "A♦", "rank": "0", "suit": "2"},

    {"name": "K♠", "rank": "12", "suit": "3"},
    {"name": "Q♠", "rank": "11", "suit": "3"},
    {"name": "J♠", "rank": "10", "suit": "3"},
    {"name": "10♠", "rank": "9", "suit": "3"},
    {"name": "9♠", "rank": "8", "suit": "3"},
    {"name": "8♠", "rank": "7", "suit": "3"},
    {"name": "7♠", "rank": "6", "suit": "3"},
    {"name": "6♠", "rank": "5", "suit": "3"},
    {"name": "5♠", "rank": "4", "suit": "3"},
    {"name": "4♠", "rank": "3", "suit": "3"},
    {"name": "3♠", "rank": "2", "suit": "3"},
    {"name": "2♠", "rank": "1", "suit": "3"},
    {"name": "A♠", "rank": "0", "suit": "3"}
];

let player0 = [];
let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];
let playerNames = ["Y/N", "Abby", "Bob", "Clara", "Dolton"];

// Swaps two cards' positions in an index
// Took this guy's code: https://stackoverflow.com/a/2440720/25562183
function swapCard(array, indexA, indexB) {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
}

// Deals a random card from one player to another
function deal(fromPlayer, toPlayer) {
    let randIndex = (Math.floor(Math.random() * fromPlayer.length));
    swapCard(fromPlayer, randIndex, 0);
    toPlayer.unshift(fromPlayer[0]);
    fromPlayer.shift();
}