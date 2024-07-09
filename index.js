// ♥ ♣ ♦ ♠
let stock = [
    // {"name": "Red Joker", "rank": "13", "suit": "4"},
    // {"name": "Black Joker", "rank": "13", "suit": "4"},

    {"name": "A♥",  "value": 14, "suit": "Hearts (♥)", "rank": "Ace",   "rankPlural": "Aces"},
    {"name": "2♥",  "value": 2,  "suit": "Hearts (♥)", "rank": "Two",   "rankPlural": "Twos"},
    {"name": "3♥",  "value": 3,  "suit": "Hearts (♥)", "rank": "Three", "rankPlural": "Threes"},
    {"name": "4♥",  "value": 4,  "suit": "Hearts (♥)", "rank": "Four",  "rankPlural": "Fours"},
    {"name": "5♥",  "value": 5,  "suit": "Hearts (♥)", "rank": "Five",  "rankPlural": "Fives"},
    {"name": "6♥",  "value": 6,  "suit": "Hearts (♥)", "rank": "Six",   "rankPlural": "Sixes"},
    {"name": "7♥",  "value": 8,  "suit": "Hearts (♥)", "rank": "Seven", "rankPlural": "Sevens"},
    {"name": "8♥",  "value": 7,  "suit": "Hearts (♥)", "rank": "Eight", "rankPlural": "Eights"},
    {"name": "9♥",  "value": 9,  "suit": "Hearts (♥)", "rank": "Nine",  "rankPlural": "Nines"},
    {"name": "10♥", "value": 10, "suit": "Hearts (♥)", "rank": "Ten",   "rankPlural": "Tens"},
    {"name": "J♥",  "value": 11, "suit": "Hearts (♥)", "rank": "Jack",  "rankPlural": "Jacks"},
    {"name": "Q♥",  "value": 12, "suit": "Hearts (♥)", "rank": "Queen", "rankPlural": "Queens"},
    {"name": "K♥",  "value": 13, "suit": "Hearts (♥)", "rank": "King",  "rankPlural": "Kings"},

    {"name": "A♣",  "value": 14, "suit": "Clubs (♣)", "rank": "Ace",   "rankPlural": "Aces"},
    {"name": "2♣",  "value": 2,  "suit": "Clubs (♣)", "rank": "Two",   "rankPlural": "Twos"},
    {"name": "3♣",  "value": 3,  "suit": "Clubs (♣)", "rank": "Three", "rankPlural": "Threes"},
    {"name": "4♣",  "value": 4,  "suit": "Clubs (♣)", "rank": "Four",  "rankPlural": "Fours"},
    {"name": "5♣",  "value": 5,  "suit": "Clubs (♣)", "rank": "Five",  "rankPlural": "Fives"},
    {"name": "6♣",  "value": 6,  "suit": "Clubs (♣)", "rank": "Six",   "rankPlural": "Sixes"},
    {"name": "7♣",  "value": 8,  "suit": "Clubs (♣)", "rank": "Seven", "rankPlural": "Sevens"},
    {"name": "8♣",  "value": 7,  "suit": "Clubs (♣)", "rank": "Eight", "rankPlural": "Eights"},
    {"name": "9♣",  "value": 9,  "suit": "Clubs (♣)", "rank": "Nine",  "rankPlural": "Nines"},
    {"name": "10♣", "value": 10, "suit": "Clubs (♣)", "rank": "Ten",   "rankPlural": "Tens"},
    {"name": "J♣",  "value": 11, "suit": "Clubs (♣)", "rank": "Jack",  "rankPlural": "Jacks"},
    {"name": "Q♣",  "value": 12, "suit": "Clubs (♣)", "rank": "Queen", "rankPlural": "Queens"},
    {"name": "K♣",  "value": 13, "suit": "Clubs (♣)", "rank": "King",  "rankPlural": "Kings"},

    {"name": "A♦",  "value": 14, "suit": "Diamonds (♦)", "rank": "Ace",   "rankPlural": "Aces"},
    {"name": "2♦",  "value": 2,  "suit": "Diamonds (♦)", "rank": "Two",   "rankPlural": "Twos"},
    {"name": "3♦",  "value": 3,  "suit": "Diamonds (♦)", "rank": "Three", "rankPlural": "Threes"},
    {"name": "4♦",  "value": 4,  "suit": "Diamonds (♦)", "rank": "Four",  "rankPlural": "Fours"},
    {"name": "5♦",  "value": 5,  "suit": "Diamonds (♦)", "rank": "Five",  "rankPlural": "Fives"},
    {"name": "6♦",  "value": 6,  "suit": "Diamonds (♦)", "rank": "Six",   "rankPlural": "Sixes"},
    {"name": "7♦",  "value": 8,  "suit": "Diamonds (♦)", "rank": "Seven", "rankPlural": "Sevens"},
    {"name": "8♦",  "value": 7,  "suit": "Diamonds (♦)", "rank": "Eight", "rankPlural": "Eights"},
    {"name": "9♦",  "value": 9,  "suit": "Diamonds (♦)", "rank": "Nine",  "rankPlural": "Nines"},
    {"name": "10♦", "value": 10, "suit": "Diamonds (♦)", "rank": "Ten",   "rankPlural": "Tens"},
    {"name": "J♦",  "value": 11, "suit": "Diamonds (♦)", "rank": "Jack",  "rankPlural": "Jacks"},
    {"name": "Q♦",  "value": 12, "suit": "Diamonds (♦)", "rank": "Queen", "rankPlural": "Queens"},
    {"name": "K♦",  "value": 13, "suit": "Diamonds (♦)", "rank": "King",  "rankPlural": "Kings"},

    {"name": "A♠",  "value": 14, "suit": "Spades (♠)", "rank": "Ace",   "rankPlural": "Aces"},
    {"name": "2♠",  "value": 2,  "suit": "Spades (♠)", "rank": "Two",   "rankPlural": "Twos"},
    {"name": "3♠",  "value": 3,  "suit": "Spades (♠)", "rank": "Three", "rankPlural": "Threes"},
    {"name": "4♠",  "value": 4,  "suit": "Spades (♠)", "rank": "Four",  "rankPlural": "Fours"},
    {"name": "5♠",  "value": 5,  "suit": "Spades (♠)", "rank": "Five",  "rankPlural": "Fives"},
    {"name": "6♠",  "value": 6,  "suit": "Spades (♠)", "rank": "Six",   "rankPlural": "Sixes"},
    {"name": "7♠",  "value": 8,  "suit": "Spades (♠)", "rank": "Seven", "rankPlural": "Sevens"},
    {"name": "8♠",  "value": 7,  "suit": "Spades (♠)", "rank": "Eight", "rankPlural": "Eights"},
    {"name": "9♠",  "value": 9,  "suit": "Spades (♠)", "rank": "Nine",  "rankPlural": "Nines"},
    {"name": "10♠", "value": 10, "suit": "Spades (♠)", "rank": "Ten",   "rankPlural": "Tens"},
    {"name": "J♠",  "value": 11, "suit": "Spades (♠)", "rank": "Jack",  "rankPlural": "Jacks"},
    {"name": "Q♠",  "value": 12, "suit": "Spades (♠)", "rank": "Queen", "rankPlural": "Queens"},
    {"name": "K♠",  "value": 13, "suit": "Spades (♠)", "rank": "King",  "rankPlural": "Kings"}
];

let player0 = [];
let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];
// let currentPlayer = ["Abby", "Bob", "Clara", "Dolton", "Y/N"];
let currentPlayer = ["Abby", "Bob", "Y/N"];

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

/*
███████ ████████  █████  ██████  ████████      ██████   █████  ███    ███ ███████ 
██         ██    ██   ██ ██   ██    ██        ██       ██   ██ ████  ████ ██      
███████    ██    ███████ ██████     ██        ██   ███ ███████ ██ ████ ██ █████   
     ██    ██    ██   ██ ██   ██    ██        ██    ██ ██   ██ ██  ██  ██ ██      
███████    ██    ██   ██ ██   ██    ██         ██████  ██   ██ ██      ██ ███████ 
*/

// For now, I'll proceed with 3 players only, and player0 is always the dealer
// This deals 7 cards to each player
for (i = 0; i < 14; i++) {
    dealRand(stock, player0);
    dealRand(stock, player1);
    dealRand(stock, player2);
}

console.log(`\n${currentPlayer[0]}'s hand: ${player1.length} cards.`);
console.log(`${currentPlayer[1]}'s hand: ${player2.length} cards.`);
console.log(`${currentPlayer[2]}'s hand: ${player0.length} cards.\n`);

// First turn should be player1 "Abby", then player2 "Bob", then player0 "Y/N"
/*
Stupid bot turn structure:

1. Choose a random rank from own hand and a random player to take from

2. Check the chosen player's hand for cards of the matching rank

3. Take all cards of matching rank from them, pass turn to next player

4. If they have no cards of matching rank, take one card from the stock

5. Pass turn to next player
*/

let catches = 0;

function player1Turn() {
    catches = 0;
    // Choose random rank from own hand
    let randIndex = (Math.floor(Math.random() * player1.length));

    let otherPlayers = [
        {"playerName": "Y/N", "playerArray": player0}, 
        {"playerName": "Bob", "playerArray": player2}
    ];

    // Choose random player to take from
    let randPlayerObject = (Math.floor(Math.random() * otherPlayers.length));
    // Splitting the randPlayerObject like this is uneccessary, but it makes it easier to read
    let randPlayerArray = otherPlayers[randPlayerObject].playerArray;
    let randPlayerName = otherPlayers[randPlayerObject].playerName;

    // Ask for cards
    console.log(`${currentPlayer[0]} asks ${randPlayerName} for all their ${player1[randIndex].rankPlural}.`);

    // START MATCHING FUNCTION
    for (i = 0; i < randPlayerArray.length; i++) {
        if (player1[randIndex].rank == randPlayerArray[0].rank) {
            catches++;
            player1.push(randPlayerArray[0]); // So the reference card doesn't change its index
            randPlayerArray.shift(); // removes the card from fromPlayer's hand
            //               ↓ Taking from                  ↓ Card just taken                   ↓ current player
            console.log(`${randPlayerName} gives up the ${player1[player1.length-1].name} to ${currentPlayer[0]}.`);
        } else {
            // If the matching card isn't found at index 0, move it to the back and keep checking
            randPlayerArray.push(randPlayerArray[0]);
            randPlayerArray.shift();
            if (i == randPlayerArray.length-1 && catches < 1) {
                console.log(`${randPlayerName} tells ${currentPlayer[0]} to go fish!\n`);
                catches = 0;
                console.log(`\n${currentPlayer[0]}'s hand: ${player1.length} cards.`);
                console.log(`${currentPlayer[1]}'s hand: ${player2.length} cards.`);
                console.log(`${currentPlayer[2]}'s hand: ${player0.length} cards.\n`);
            }
        }
    }
    if (catches >= 1) {
        console.log(`${currentPlayer[0]} gets to go again!\n`);
        catches = 0;
        player1Turn();
    }
    // END MATCHING FUNCTION
}

player1Turn();

