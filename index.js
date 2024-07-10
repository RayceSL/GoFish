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

var startingCardCount = 7;

var getSecondTurn = false;

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
    while (i < 51 && profiles[0].hand.length >= 4) {

        if (profiles[0].hand[0].value == profiles[0].hand[1].value) {
            matchesFound++;
            //console.log(`Matches found: ${matchesFound}`);

            if (profiles[0].hand[0].value == profiles[0].hand[2].value) {
                matchesFound++;
                //console.log(`Matches found: ${matchesFound}`);

                if (profiles[0].hand[0].value == profiles[0].hand[3].value) {
                    matchesFound++;
                    //console.log(`Matches found: ${matchesFound}`);

                    if (matchesFound == 3) {
                        console.log("Book found!");
                        profiles[0].score++;
                        console.log(`Score: ${profiles[0].score}`);
                        profiles[0].hand.shift();
                        profiles[0].hand.shift();
                        profiles[0].hand.shift();
                        profiles[0].hand.shift();
                        matchesFound = 0;
                        // findBooks();
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
            // console.log("This wasn't a match");
        }
        if (i == 51) {
            console.log(`${fromPlayer.name} couldn't find any (more) matches`);
        }
    }
}

// Debugging purposes
// Deals a book and some random cards to the first player
/* 
function win() {
    var randomCardsAdded = 40;
    console.log(`Dealing cards to ${profiles[0].name}...`);
    
    for (suit = 1; suit <= 4; suit++) {
        // Each iteration, the array gets smaller---this compensates for that
        //                    ____/\____
        //                   /          \
        deal((13 * suit - 1) - (suit - 1), stock, profiles[0].hand);
    }

    for (i = 0; i < randomCardsAdded; i++) {
        dealRand(stock, profiles[0].hand);
    }
    console.log(`Dealt ${profiles[0].hand.length} cards to ${profiles[0].name}.`);
    console.log("Their hand:");
    profiles[0].hand.sort((a,b) => a.value - b.value);
    console.log(profiles[0].hand);
    console.log(`${profiles[0].name} looks for books...`);
    findBooks();
    console.log(`Found ${profiles[0].score} books!`);
    console.log("Their hand:");
    console.log(profiles[0].hand);
}
 */

// TASK I: Deals seven cards to each player
function startGame() {
    console.log("%cStarted game!", "color:green");
    console.log(`${profiles[0].name} is the dealer.\nThey deal ${startingCardCount} cards to everyone...`);
    for (i = 1; i <= startingCardCount * profiles.length; i++) {
        // console.log(`Dealing to: ${profiles[0].name}`);
        dealRand(stock, profiles[0].hand);
        advanceProfiles();
    }
    advanceProfiles();
    console.log(`The play is passed to ${profiles[0].name}.`);
    botTurn();
}

function nextTurn() {
    console.log("NEXT TURN");
}

function botTurn() {
    console.log(`Current player: ${profiles[0].name}.`);

    // TASK I: Check for books
    profiles[0].hand.sort((a,b) => a.value - b.value);
    findBooks();

    // TASK II: Choose a random player
    var randProfileIndex = Math.floor(Math.random() * (profiles.length - 1) + 1);
    console.log(`${profiles[0].name} chooses to take from: ${profiles[randProfileIndex].name}.`);

    // TASK III: Choose a random card, bring it to the top
    swapCard(profiles[0].hand, 0, (Math.floor(Math.random() * profiles[0].hand.length)));
    console.log(`${profiles[0].name} wants ${profiles[0].hand[0].value}s.`);

    // TASK IV: Take all matching cards from the player
    console.log(`${profiles[randProfileIndex].name} looks through their cards...`);
    takeMatches(profiles[randProfileIndex], profiles[0]);
    
    // TASK V: If player got at least 1 match, they get to go again
    if (getSecondTurn == true) {
        getSecondTurn = false;
        botTurn();
    } else {
        // GO FISH PROTOCOL
        console.log(`${profiles[0].name} goes fishing!`);
        dealRand(stock, profiles[0].hand);
        // TASK OMEGA: Check for books
        profiles[0].hand.sort((a,b) => a.value - b.value);
        findBooks();
        nextTurn();
    }
}

startGame();

