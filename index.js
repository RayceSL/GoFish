class Player {
    constructor(name = "Steve", hand = [], books = 0) {
        this.name = name;
        this.hand = hand;
        this.books = books;
    }

    // Took this guy's code: https://stackoverflow.com/a/2440720/25562183
    swapCard(indexA, indexB) {
        let tmp = this.hand[indexA];
        this.hand[indexA] = this.hand[indexB];
        this.hand[indexB] = tmp;
    }

    dealRand(to) {
        let randIndex = (Math.floor(Math.random() * this.hand.length));
        this.swapCard(randIndex, 0);
        to.hand.push(this.hand[0]);
        this.hand.shift();
    }

    deal(to, index) {
        this.swapCard(index, 0);
        to.hand.push(this.hand[0]);
        this.hand.shift();
    }

    findBooks() {
        this.hand.sort((a,b) => a.rankNum - b.rankNum);
        var matchesFound = 0;
        let i = 0;
        while (i < 51 && this.hand.length >= 4) {
            if (this.hand[0].rankNum == this.hand[1].rankNum) {
                matchesFound++;

                if (this.hand[0].rankNum == this.hand[2].rankNum) {
                    matchesFound++;

                    if (this.hand[0].rankNum == this.hand[3].rankNum) {
                        matchesFound++;

                        if (matchesFound == 3) {
                            console.log(`%cBook found!\n${this.name} gets a point!`, "color:yellow");
                            this.books++;
                            this.deal(discard, 0);
                            this.deal(discard, 0);
                            this.deal(discard, 0);
                            this.deal(discard, 0);
                            matchesFound = 0;
                        }
                    } else {
                        matchesFound = 0;
                        advanceHand(this.hand);
                        i++;
                    }
                } else {
                    matchesFound = 0;
                    advanceHand(this.hand);
                    i++;
                }
            } else {
                matchesFound = 0;
                advanceHand(this.hand);
                i++;
            }
        }
    }

    giveMatches(to) {
        for (i = 0; i < this.hand.length; i++) {
            if (this.hand[0].rankNum == to.hand[0].rankNum) {
                this.deal(to, 0);
                // console.log(`${this.name} gave ${turnOrder[0].name} a card!`);
                console.log(`%c${this.name} gave ${to.name} the ${to.hand[to.hand.length-1].rankSH + to.hand[to.hand.length-1].suitSymbol}`, "color:yellow");
                getSecondTurn = true;
            } else {
                advanceHand(this.hand);
            }
        }
    }
}

// const noOfOpps = 1;
var input = prompt("How many opponents?");
var noOfOpps = parseInt(input);
var stock = new Player("Stock", deck.slice(2, 54));
var me = new Player("Rayce");
var abby = new Player("Abby");
var bob = new Player("Bob");
var cathy = new Player("Cathy");
var dolton = new Player("Dolton");
var discard = new Player("Discard");
var turnOrder;
var startingHandLen;

switch (noOfOpps) {
    case 1:
        var turnOrder = [me, abby];
        var startingHandLen = 7;
        break;
    case 2:
        var turnOrder = [me, abby, bob];
        var startingHandLen = 7;
        break;
    case 3:
        var turnOrder = [me, abby, bob, cathy];
        var startingHandLen = 5;
        break;
    case 4:
        var turnOrder = [me, abby, bob, cathy, dolton];
        var startingHandLen = 5;
        break;
    default:
        console.log("Must choose 1 to 4 opponents.");
}

var getSecondTurn = false;
var turns = 1;

// Write argument with .hand!!
function advanceHand(player) {
    player.push(player[0]);
    player.shift();
}

function advanceProfiles() {
    turnOrder.push(turnOrder[0]);
    turnOrder.shift();
}

function game() {
    console.log("%cStarted game!", "color:green");
    console.log(`${turnOrder[0].name} is the dealer.\nThey deal ${startingHandLen} cards to everyone...`);
    for (i = 1; i <= startingHandLen * turnOrder.length; i++) {
        stock.dealRand(turnOrder[0]);
        advanceProfiles();
    }

    console.log(`The play is passed to ${turnOrder[1].name}.\n`);
    advanceProfiles();

    do {
        if (getSecondTurn == false) {
            console.log(`\n%cTurn: ${turns}`, "color:red");
            console.log(`Current player: ${turnOrder[0].name}`);
        } else {
            getSecondTurn = false;
        }
        botTurn();
        if (getSecondTurn == false) {
            console.log(`\n    Cards in stock: ${stock.hand.length}`);
            for (i = 0; i < turnOrder.length; i++) {
                console.log(`    ${turnOrder[i].name}'s hand: ${turnOrder[i].hand.length} cards ... Books: ${turnOrder[i].books}`);
            }
            advanceProfiles();
            turns++;
        }
    }
    while (discard.hand.length < 52);
    console.log("%cGAME OVER!", "color:red");
}

function botTurn() {
    getSecondTurn = false;
    turnOrder[0].findBooks();
    var otherPlayer = Math.floor(Math.random() * (turnOrder.length - 1) + 1);

    if (turnOrder[0].hand.length < 1) {
        console.log(`%c${turnOrder[0].name} has an empty hand!!\nSo they must first draw from the stock...`, "color:orange");

        if (stock.hand.length < 1) {
            console.log(`%cBut the stock is empty!\n${turnOrder[0].name} ends their turn.`, "color:orange");
        } else {
            console.log(`%c${turnOrder[0].name} draws from the stock...`, "color:orange");
            stock.dealRand(turnOrder[0]);
            askForMatches();
        }

    } else if (discard.hand.length < 52) {
        askForMatches();

    } else {
        console.log(`%cThe other players have no cards! ${turnOrder[0].name} ends their turn.`, "color:orange");
    }

    function askForMatches() {
        do {
            otherPlayer = Math.floor(Math.random() * (turnOrder.length - 1) + 1);
        }
        while (turnOrder[otherPlayer].hand.length < 1);

        turnOrder[0].swapCard(0, (Math.floor(Math.random() * turnOrder[0].hand.length)))
        console.log(`${turnOrder[0].name} asks ${turnOrder[otherPlayer].name} for all their ${turnOrder[0].hand[0].rankPlural}.`);
        turnOrder[otherPlayer].giveMatches(turnOrder[0]);

        if (getSecondTurn == false) {
            console.log(`%c${turnOrder[otherPlayer].name} tells ${turnOrder[0].name} to GO FISH!`, "color:dodgerblue");

            if (stock.hand.length < 1) {
                console.log(`%cBut the stock is empty!\n${turnOrder[0].name} ends their turn.`, "color:dodgerblue");
            } else {
                console.log(`%c${turnOrder[0].name} draws from the stock...`, "color:dodgerblue");
                stock.dealRand(turnOrder[0]);
            }
        }
    }
}

game();