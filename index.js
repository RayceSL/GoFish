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

var turns = 0;

var skipRestOfTurn = false;

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
                        console.log("Book found!");
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
    console.log(" > takeMatches called");
    let i = 0;
    while (i < 51 && fromPlayer.hand.length >= 1) {
        if (toPlayer.hand[0].value == fromPlayer.hand[0].value) {
            console.log("    Match found");
            deal(0, fromPlayer.hand, toPlayer.hand);
            console.log(`    ${fromPlayer.name} gave ${toPlayer.name} the ${toPlayer.hand[(toPlayer.hand.length)-1].name}.`);
            console.log(`    ${profiles[0].name} gets a second turn...`);
            getSecondTurn = true;
        } else {
            console.log("    Cycling their hand...");
            advanceHand(fromPlayer.hand);
            i++;
        }
    }
    console.log(" > takeMatches exited");
}

function startGame() {
    console.log("%cStarted game!", "color:green");
    console.log(`${profiles[0].name} is the dealer.\nThey deal ${startingCardCount} cards to everyone...`);
    for (i = 1; i <= startingCardCount * profiles.length; i++) {
        dealRand(stock, profiles[0].hand);
        advanceProfiles();
    }
    console.log(`The play is passed to ${profiles[1].name}.`);
    advanceProfiles();
    botTurn();
    while (stock.length + player0.length + player1.length + player2.length > 0) {
        nextTurn();
        i++;
    }
    console.log("hello :-)");
}

function nextTurn() {
    console.log(`Current player: ${profiles[0].name}.`);
    botTurn();
}

function botTurn() {
    console.log(`%cTurn: ${turns}`, "color:red");

    console.log("%cStep 1", "color:yellow");
    // 1
    console.log("    Sorting hand...");
    profiles[0].hand.sort((a,b) => a.value - b.value);

    console.log("%cStep 2", "color:yellow");
    // 2
    console.log("    Checking for books...");
    findBooks();

    console.log("%cStep 3", "color:yellow");
    // 3
    console.log("    Choosing a player...");
    var randProfileIndex = Math.floor(Math.random() * (profiles.length - 1) + 1);
    
    console.log("%cStep 4", "color:yellow");
    // 4
    if (profiles[1].hand.length + profiles[2].hand.length < 1) {
        console.log("%c    The other players have no cards!", "color:orange");
    } else if (profiles[randProfileIndex].hand.length < 1) {
        console.log("%c    The chosen player has no cards!", "color:orange");
        console.log("%c    SCENARIO A: Restarting turn...", "color:green");
        skipRestOfTurn = true;
        botTurn();
    } else {
        console.log("    The other players have cards.");
    }

    console.log("%cStep 5", "color:yellow");
    // 5
    // Sometimes players can get down to 0 cards in the middle of their turn by making books
    console.log(`    Checking if ${profiles[0].name} has cards...`);
    if (profiles[0].hand.length < 1) {
        console.log(`%c    ${profiles[0].name} has an empty hand!!`, "color:orange");
        if (stock.length < 1) {
            console.log("%cThe stock is empty!", "color:orange");
        } else {
            console.log(`    %c${profiles[0].name} draws from the stock...`);
            dealRand(stock, profiles[0].hand);
            console.log("%c    SCENARIO B: Restarting turn...", "color:green");
            skipRestOfTurn = true;
            botTurn();
        }
    } else {
        console.log(`    ${profiles[0].name} has cards in their hand...`);
        console.log("%cStep 6", "color:yellow");
        // 6
        console.log("    Choosing a rank to pick...");
        swapCard(profiles[0].hand, 0, (Math.floor(Math.random() * profiles[0].hand.length)));
        // console.log(`${profiles[0].name} wants ${profiles[0].hand[0].value}s.`);

        console.log("%cStep 7", "color:yellow");
        // 7
        console.log("    Taking matches...");
        takeMatches(profiles[randProfileIndex], profiles[0]);
    }
    
    console.log("%cStep 8", "color:yellow");
    // 8
    if (getSecondTurn == true) {
        console.log("Second turn allowed;\ngetSecondTurn = false;");
        getSecondTurn = false;
        console.log("%c    SCENARIO C: Restarting turn...", "color:green");
        skipRestOfTurn = true;
        botTurn();
    } else {
        console.log("%cGO FISH PROTOCOL", "color:blue");
        if (stock.length < 1) {
            console.log("%c    The stock is empty!", "color:blue");
        } else {
            console.log(`    %c${profiles[0].name} goes fishing!`, "color:blue");
            dealRand(stock, profiles[0].hand);
        }
    }

    if (skipRestOfTurn == false && getSecondTurn == false) {
        console.log("%cStep 9", "color:yellow");
        // 9
        console.log("%c    END OF TURN: Sorting hand...", "color:purple");
        profiles[0].hand.sort((a,b) => a.value - b.value);

        console.log("%cStep 10", "color:yellow");
        // 10
        console.log("%c    END OF TURN: Checking for books...", "color:purple");
        findBooks();

        console.log("%cStep 11", "color:yellow");
        // 11
        console.log("%c    END OF TURN: Incrementing turns...", "color:purple");
        turns++;

        console.log("%cStep 12", "color:yellow");
        // 12
        if (stock.length + player0.length + player1.length + player2.length > 0) {
            console.log("%c    END OF TURN: Cards are still in play...", "color:purple");
            console.log(`Cards in stock: ${stock.length}`);
            console.log(`${profiles[0].name}'s hand: ${profiles[0].hand.length}`);
            console.log(`${profiles[1].name}'s hand: ${profiles[1].hand.length}`);
            console.log(`${profiles[2].name}'s hand: ${profiles[2].hand.length}`);

        } else if (stock.length + player0.length + player1.length + player2.length == 0) {
            console.log("%cEND OF GAME: There are no cards in play!!", "color:red");
            skipRestOfTurn = true;
            
            console.log(`${profiles[0].name}'s score: ${profiles[0].score}`);
            console.log(`${profiles[1].name}'s score: ${profiles[1].score}`);
            console.log(`${profiles[2].name}'s score: ${profiles[2].score}`);
        }

        console.log("%cEND OF TURN\nAdvancing turn order...", "color:purple");
        advanceProfiles();
        console.log("%cPlay is passed on", "color:green");
        //botTurn();
    }
    skipRestOfTurn = false;
}

console.log("%cGAME INITIALIZED", "color:green");
startGame();
