// Variables & arrays


// I DO NOT KNOW WHY, BUT PLAYER'S HANDS
// MUST BE SORTED BEFORE THE findBooks()
// FUNCTION IS CALLED
/**/
// The cards that will be used in the game
// Aces are high, even though "Go Fish" counts the number of books a player has
// as their score, I'm just trusting Bicycle on this one
// The two jokers are also removed
var stock = [
    {"name": "2♥",     "value": "2"    }, // index: 0
    {"name": "3♥",     "value": "3"    }, // index: 1
    {"name": "4♥",     "value": "4"    }, // index: 2
    {"name": "5♥",     "value": "5"    }, // index: 3
    {"name": "6♥",     "value": "6"    }, // index: 4
    {"name": "7♥",     "value": "7"    }, // index: 5
    {"name": "8♥",     "value": "8"    }, // index: 6
    {"name": "9♥",     "value": "9"    }, // index: 7
    {"name": "10♥",    "value": "10"   }, // index: 8
    {"name": "J♥",     "value": "11"   }, // index: 9
    {"name": "Q♥",     "value": "12"   }, // index: 10
    {"name": "K♥",     "value": "13"   }, // index: 11
    {"name": "A♥",     "value": "14"   }, // index: 12

    {"name": "2♣",     "value": "2"    }, // index: 13
    {"name": "3♣",     "value": "3"    }, // index: 14
    {"name": "4♣",     "value": "4"    }, // index: 15
    {"name": "5♣",     "value": "5"    }, // index: 16
    {"name": "6♣",     "value": "6"    }, // index: 17
    {"name": "7♣",     "value": "7"    }, // index: 18
    {"name": "8♣",     "value": "8"    }, // index: 19
    {"name": "9♣",     "value": "9"    }, // index: 20
    {"name": "10♣",    "value": "10"   }, // index: 21
    {"name": "J♣",     "value": "11"   }, // index: 22
    {"name": "Q♣",     "value": "12"   }, // index: 23
    {"name": "K♣",     "value": "13"   }, // index: 24
    {"name": "A♣",     "value": "14"   }, // index: 25

    {"name": "2♦",     "value": "2"    }, // index: 26
    {"name": "3♦",     "value": "3"    }, // index: 27
    {"name": "4♦",     "value": "4"    }, // index: 28
    {"name": "5♦",     "value": "5"    }, // index: 29
    {"name": "6♦",     "value": "6"    }, // index: 30
    {"name": "7♦",     "value": "7"    }, // index: 31
    {"name": "8♦",     "value": "8"    }, // index: 32
    {"name": "9♦",     "value": "9"    }, // index: 33
    {"name": "10♦",    "value": "10"   }, // index: 34
    {"name": "J♦",     "value": "11"   }, // index: 35
    {"name": "Q♦",     "value": "12"   }, // index: 36
    {"name": "K♦",     "value": "13"   }, // index: 37
    {"name": "A♦",     "value": "14"   }, // index: 38

    {"name": "2♠",     "value": "2"    }, // index: 39
    {"name": "3♠",     "value": "3"    }, // index: 40
    {"name": "4♠",     "value": "4"    }, // index: 41
    {"name": "5♠",     "value": "5"    }, // index: 42
    {"name": "6♠",     "value": "6"    }, // index: 43
    {"name": "7♠",     "value": "7"    }, // index: 44
    {"name": "8♠",     "value": "8"    }, // index: 45
    {"name": "9♠",     "value": "9"    }, // index: 46
    {"name": "10♠",    "value": "10"   }, // index: 47
    {"name": "J♠",     "value": "11"   }, // index: 48
    {"name": "Q♠",     "value": "12"   }, // index: 49
    {"name": "K♠",     "value": "13"   }, // index: 50
    {"name": "A♠",     "value": "14"   }  // index: 51
];

var player0 = [];
var player1 = [];
var player2 = [];

var profiles = [
    {"name": "Rayce",   "hand": player0,    "score": 0},
    {"name": "Abby",    "hand": player1,    "score": 0},
    {"name": "Bob",     "hand": player2,    "score": 0}
];

// 2--3 players: 7 cards
// 4--5 players: 5 cards
var startingCardCount = 7;

var getSecondTurn = false;

var turns = 1;

// Other functions
// Swaps two cards' positions in an index
// Took this guy's code: https://stackoverflow.com/a/2440720/25562183
function swapCard(array, indexA, indexB) {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
}

// Deals a random card from one player to another to the BOTTOM of their hand
// (end of their array)
function dealRand(fromPlayer, toPlayer) {
    let randIndex = (Math.floor(Math.random() * fromPlayer.length));
    swapCard(fromPlayer, randIndex, 0);
    toPlayer.push(fromPlayer[0]);
    fromPlayer.shift();
}

// Deals a specific card from one player to another to the BOTTOM of their hand
// (end of their array)
function deal(index, fromPlayer, toPlayer) {
    swapCard(fromPlayer, index, 0);
    toPlayer.push(fromPlayer[0]);
    fromPlayer.shift();
}

function advanceProfiles() {
    profiles.push(profiles[0]);
    profiles.shift();
}

// remember to format as profiles[x].hand
function advanceHand(player) {
    player.push(player[0]);
    player.shift();
}

// locates fours-of-a-kind (called "books") in the current player's hand,
// Adds a point to the player's score
function findBooks() {
    profiles[0].hand.sort((a,b) => a.value - b.value);
    var extraTurn = false;
    var matchesFound = 0;
    let i = 0;
    while (i < 51 && profiles[0].hand.length >= 4) {

        if (profiles[0].hand[0].value == profiles[0].hand[1].value) {
            matchesFound++;

            if (profiles[0].hand[0].value == profiles[0].hand[2].value) {
                matchesFound++;

                if (profiles[0].hand[0].value == profiles[0].hand[3].value) {
                    matchesFound++;

                    if (matchesFound == 3) {
                        console.log(`%cBook found!\n${profiles[0].name} gets a point!`, "color:yellow");
                        profiles[0].score++;
                        profiles[0].hand.shift();
                        profiles[0].hand.shift();
                        profiles[0].hand.shift();
                        profiles[0].hand.shift();
                        matchesFound = 0;
                    }
                } else {
                    matchesFound = 0;
                    advanceHand(profiles[0].hand);
                    i++;
                }
            } else {
                matchesFound = 0;
                advanceHand(profiles[0].hand);
                i++;
            }
        } else {
            matchesFound = 0;
            advanceHand(profiles[0].hand);
            i++;
        }
    }
}

// takeMatches(profiles[randProfileIndex], profiles[0]);
function takeMatches(fromPlayer, toPlayer) {
    let i = 0;
    while (i < 51 && fromPlayer.hand.length >= 1) {
        if (toPlayer.hand[0].value == fromPlayer.hand[0].value) {
            deal(0, fromPlayer.hand, toPlayer.hand);
            console.log(`${fromPlayer.name} gave ${toPlayer.name} the ${toPlayer.hand[(toPlayer.hand.length)-1].name}.`);
            getSecondTurn = true;
        } else {
            advanceHand(fromPlayer.hand);
            i++;
        }
    }
    if (getSecondTurn == true) {
        console.log(`%c${profiles[0].name} gets a second turn!`, "color:green");
    }
}

function game() {
    console.log("%cStarted game!", "color:green");
    console.log(`${profiles[0].name} is the dealer.\nThey deal ${startingCardCount} cards to everyone...`);
    for (i = 1; i <= startingCardCount * profiles.length; i++) {
        dealRand(stock, profiles[0].hand);
        advanceProfiles();
    }
    console.log(`The play is passed to ${profiles[1].name}.\n\n`);
    advanceProfiles();
    do {
        console.log(`%cTurn: ${turns}`, "color:red");
        console.log(`Current player: ${profiles[0].name}`);
        botTurn();
        console.log(`\n    Cards in stock: ${stock.length}`);
        console.log(`    ${profiles[0].name}'s hand: ${profiles[0].hand.length} ... Points: ${profiles[0].score}`);
        console.log(`    ${profiles[1].name}'s hand: ${profiles[1].hand.length} ... Points: ${profiles[1].score}`);
        console.log(`    ${profiles[2].name}'s hand: ${profiles[2].hand.length} ... Points: ${profiles[2].score}\n\n`);
        advanceProfiles();
        turns++;
    }
    while (player0.length + player1.length + player2.length + stock.length > 0)
}

function botTurn() {
    var skipTurn = false;
    profiles[0].hand.sort((a,b) => a.value - b.value);
    findBooks();
    var randProfileIndex = Math.floor(Math.random() * (profiles.length - 1) + 1);
    if (profiles[1].hand.length + profiles[2].hand.length < 1) {
        console.log("%cThe other players have no cards!", "color:orange");
    } else if (profiles[randProfileIndex].hand.length < 1) {
        botTurn();
    }

    if (profiles[0].hand.length < 1) {
        console.log(`%c${profiles[0].name} has an empty hand!!\nSo they must first draw from the stock...`, "color:orange");
        if (stock.length < 1) {
            console.log("%cThe stock is empty!", "color:orange");
            skipTurn = true;
        } else {
            console.log(`%c${profiles[0].name} draws from the stock...`);
            dealRand(stock, profiles[0].hand);
            botTurn();
        }
    } else {
        swapCard(profiles[0].hand, 0, (Math.floor(Math.random() * profiles[0].hand.length)));
        console.log(`${profiles[0].name} asks ${profiles[randProfileIndex].name} for all their ${profiles[0].hand[0].value}s.`);
        takeMatches(profiles[randProfileIndex], profiles[0]);
    }
    
    if (skipTurn == false) {
        if (getSecondTurn == true) {
            getSecondTurn = false;
            botTurn();
        } else {
            if (stock.length < 1) {
                console.log(`%c${profiles[randProfileIndex].name} tells ${profiles[0].name} to GO FISH!\nbut the stock is empty!`, "color:blue");
            } else {
                console.log(`%c${profiles[randProfileIndex].name} tells ${profiles[0].name} to GO FISH!`, "color:blue");
                dealRand(stock, profiles[0].hand);
            }
        }
    } else {
        console.log(`${profiles[0].name} passes.`);
    }
}

game();
