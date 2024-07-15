
// I DO NOT KNOW WHY, BUT PLAYER'S HANDS
// MUST BE SORTED BEFORE THE findBooks()
// FUNCTION IS CALLED

var stock = deck.slice(2, 54);

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
    profiles[0].hand.sort((a,b) => a.rankNum - b.rankNum);
    var matchesFound = 0;
    let i = 0;
    while (i < 51 && profiles[0].hand.length >= 4) {

        if (profiles[0].hand[0].rankNum == profiles[0].hand[1].rankNum) {
            matchesFound++;

            if (profiles[0].hand[0].rankNum == profiles[0].hand[2].rankNum) {
                matchesFound++;

                if (profiles[0].hand[0].rankNum == profiles[0].hand[3].rankNum) {
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
        
        if (toPlayer.hand[0].rankNum == fromPlayer.hand[0].rankNum) {
            deal(0, fromPlayer.hand, toPlayer.hand);
            console.log(`${fromPlayer.name} gave ${toPlayer.name} the ${toPlayer.hand[(toPlayer.hand.length)-1].rankSH + toPlayer.hand[(toPlayer.hand.length)-1].suitSymbol}.`);
            getSecondTurn = true;

        } else {
            advanceHand(fromPlayer.hand);
            i++;

        }

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
        if (getSecondTurn == false) {
            console.log(`\n%cTurn: ${turns}`, "color:red");
            console.log(`Current player: ${profiles[0].name}`);

        } else {
            getSecondTurn = false;

        }

        if (profiles[0].name == "Rayce") {
            //console.log("HUMAN'S TURN NOW");
            botTurn();

        } else {
            botTurn();

        }

        if (getSecondTurn == false) {
            console.log(`\n    Cards in stock: ${stock.length}`);

            for (i = 0; i < profiles.length; i++) {
                console.log(`    ${profiles[i].name}'s hand: ${profiles[i].hand.length} ... Points: ${profiles[i].score}`);

            }

            advanceProfiles();
            turns++;

        }

    }
    while (player0.length + player1.length + player2.length + stock.length > 0);

    console.log("%cGAME OVER!", "color:red");

}

function botTurn() {
    getSecondTurn = false;
    profiles[0].hand.sort((a,b) => a.value - b.value);
    findBooks();
    var randProfileIndex = Math.floor(Math.random() * (profiles.length - 1) + 1);

    if (profiles[0].hand.length < 1) {
        console.log(`%c${profiles[0].name} has an empty hand!!\nSo they must first draw from the stock...`, "color:orange");

        if (stock.length < 1) {
            console.log(`%cBut the stock is empty!\n${profiles[0].name} ends their turn.`, "color:orange");

        } else {
            console.log(`%c${profiles[0].name} draws from the stock...`, "color:orange");
            dealRand(stock, profiles[0].hand);
            askForMatches();

        }

    } else if (profiles[1].hand.length + profiles[2].hand.length > 0) {
        askForMatches();

    } else {
        console.log(`%cThe other players have no cards! ${profiles[0].name} ends their turn.`, "color:orange");

    }

    function askForMatches() {
        do {
            randProfileIndex = Math.floor(Math.random() * (profiles.length - 1) + 1);

        }
        while (profiles[randProfileIndex].hand.length < 1);

        swapCard(profiles[0].hand, 0, (Math.floor(Math.random() * profiles[0].hand.length)));
        console.log(`${profiles[0].name} asks ${profiles[randProfileIndex].name} for all their ${profiles[0].hand[0].rankPlural}.`);
        takeMatches(profiles[randProfileIndex], profiles[0]);
        
        if (getSecondTurn == false) {
            console.log(`%c${profiles[randProfileIndex].name} tells ${profiles[0].name} to GO FISH!`, "color:dodgerblue");

            if (stock.length < 1) {
                console.log(`%cBut the stock is empty!\n${profiles[0].name} ends their turn.`, "color:dodgerblue");

            } else {
                console.log(`%c${profiles[0].name} draws from the stock...`, "color:dodgerblue");
                dealRand(stock, profiles[0].hand);

            }

        }

    }

}

game();