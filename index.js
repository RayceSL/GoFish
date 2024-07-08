/*
♥ = 0
♣ = 1
♦ = 2
♠ = 3
*/

let stock = [
    // {"name": "Red Joker", "rank": "13", "suit": "4"},
    // {"name": "Black Joker", "rank": "13", "suit": "4"},

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

let books0 = [];
let books1 = [];
let books2 = [];
let books3 = [];
let books4 = [];
let bookNames = ["Your books", "Abby's books", "Bob's books", "Clara's books", "Dolton's books"];

// Swaps two cards' positions in an index
// Took this guy's code: https://stackoverflow.com/a/2440720/25562183
function swapCard(array, indexA, indexB) {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
}

// Deals a specific card from one player to another
function deal(fromPlayer, fromIndex, toPlayer) {
    swapCard(fromPlayer, fromIndex, 0);
    toPlayer.unshift(fromPlayer[0]);
    fromPlayer.shift();
}

// Deals a random card from one player to another
function dealRand(fromPlayer, toPlayer) {
    let randIndex = (Math.floor(Math.random() * fromPlayer.length));
    swapCard(fromPlayer, randIndex, 0);
    toPlayer.unshift(fromPlayer[0]);
    fromPlayer.shift();
}

// Finds books in a player's hand
// Only works if a player has 4 or more cards!!
// Input the player and where they should put their books
function findBooks(player, books) {
    player.sort((a,b) => a.rank - b.rank);
    let i = 0
    while(i < 51 && player.length >= 4) {
        let total = 0;
        if (player[0].rank == player[1].rank) {
            total++;
            if (player[0].rank == player[2].rank) {
                total++;
                if (player[0].rank == player[3].rank) {
                    total++;
                    if (total == 3) {
                        deal(player, 0, books);
                        deal(player, 0, books);
                        deal(player, 0, books);
                        deal(player, 0, books);
                    }
                } else {
                    player.push(player[0]);
                    player.shift();
                    total = 0;
                    i++;
                }
            } else {
                player.push(player[0]);
                player.shift();
                total = 0;
                i++;
            }
        } else {
            player.push(player[0]);
            player.shift();
            total = 0;
            i++;
        }
    }
}

function test() {
    console.log("Dealing cards...")
    deal(stock, 0, player0);
    deal(stock, 13-1, player0);
    deal(stock, 38-2, player0);
    deal(stock, 51-3, player0);
    deal(stock, 2, player0);
    console.log("\nYour hand:")
    console.log(player0);
    console.log("\nFinding books...")
    findBooks(player0, books0);
    console.log("\nYour hand:");
    console.log(player0);
    console.log("\nYour books:")
    console.log(books0);
}

test();