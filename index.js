#!/usr/bin/env node

import chalk from "chalk";
import {createSpinner} from "nanospinner";
import inquirer from "inquirer";

// const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

var urName;
var turnOrder;
var startingHandLen;
var noOfOpps;

async function askName() {
    const answers = await inquirer.prompt({
        name: "_urName",
        type: "input",
        message: "What's your name?",
        default() {
            return "Steve";
        }
    });

    urName = answers._urName;
}

async function howManyOpps() {
    const answers = await inquirer.prompt({
        noOfOpps: "_noOfOpps",
        type: "list",
        message: "How many opponents?",
        choices: [
            "2",
            "3",
            "4",
            "5"
        ]
    });

    noOfOpps = answers._noOfOpps;
}

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
                            console.log(`%cBook found!\n${this.name} gets a point!`, "color:lime");
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
                if (this.name == urName) {
                    console.log(`%cYou gave ${to.name} the ${to.hand[to.hand.length-1].rankSH + to.hand[to.hand.length-1].suitSymbol}`, "color:lime");
                } else if (to.name == urName) {
                    console.log(`%c${this.name} gave you the ${to.hand[to.hand.length-1].rankSH + to.hand[to.hand.length-1].suitSymbol}`, "color:lime");
                } else {
                    console.log(`%c${this.name} gave ${to.name} the ${to.hand[to.hand.length-1].rankSH + to.hand[to.hand.length-1].suitSymbol}`, "color:lime");
                }
                getSecondTurn = true;
            } else {
                advanceHand(this.hand);
            }
        }
    }
}


var deck = [
	{"rankNum": 1,	"rankSpell": "red joker",	"suitValue": 0,	"suitName": "jokers"	},
	{"rankNum": 2,	"rankSpell": "black joker",	"suitValue": 0,	"suitName": "jokers"	},
	
	{"rankNum": 1,	"rankSH": "A",	"rankSpell": "ace",		"rankPlural": "aces",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 2,	"rankSH": "2",	"rankSpell": "two",		"rankPlural": "twos",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 3,	"rankSH": "3",	"rankSpell": "three",	"rankPlural": "threes",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 4,	"rankSH": "4",	"rankSpell": "four",	"rankPlural": "fours",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 5,	"rankSH": "5",	"rankSpell": "five",	"rankPlural": "fives",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 6,	"rankSH": "6",	"rankSpell": "six",		"rankPlural": "sixes",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 7,	"rankSH": "7",	"rankSpell": "seven",	"rankPlural": "sevens",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 8,	"rankSH": "8",	"rankSpell": "eight",	"rankPlural": "eights",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 9,	"rankSH": "9",	"rankSpell": "nine",	"rankPlural": "nines",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 10,	"rankSH": "10",	"rankSpell": "ten",		"rankPlural": "tens",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 11,	"rankSH": "J",	"rankSpell": "jack",	"rankPlural": "jacks",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 13,	"rankSH": "Q",	"rankSpell": "queen",	"rankPlural": "queens",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 14,	"rankSH": "K",	"rankSpell": "king",	"rankPlural": "kings",		"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	
	{"rankNum": 1,	"rankSH": "A",	"rankSpell": "ace",		"rankPlural": "aces",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 2,	"rankSH": "2",	"rankSpell": "two",		"rankPlural": "twos",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 3,	"rankSH": "3",	"rankSpell": "three",	"rankPlural": "threes",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 4,	"rankSH": "4",	"rankSpell": "four",	"rankPlural": "fours",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 5,	"rankSH": "5",	"rankSpell": "five",	"rankPlural": "fives",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 6,	"rankSH": "6",	"rankSpell": "six",		"rankPlural": "sixes",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 7,	"rankSH": "7",	"rankSpell": "seven",	"rankPlural": "sevens",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 8,	"rankSH": "8",	"rankSpell": "eight",	"rankPlural": "eights",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 9,	"rankSH": "9",	"rankSpell": "nine",	"rankPlural": "nines",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 10,	"rankSH": "10",	"rankSpell": "ten",		"rankPlural": "tens",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 11,	"rankSH": "J",	"rankSpell": "jack",	"rankPlural": "jacks",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 13,	"rankSH": "Q",	"rankSpell": "queen",	"rankPlural": "queens",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 14,	"rankSH": "K",	"rankSpell": "king",	"rankPlural": "kings",		"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	
	{"rankNum": 1,	"rankSH": "A",	"rankSpell": "ace",		"rankPlural": "aces",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 2,	"rankSH": "2",	"rankSpell": "two",		"rankPlural": "twos",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 3,	"rankSH": "3",	"rankSpell": "three",	"rankPlural": "threes",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 4,	"rankSH": "4",	"rankSpell": "four",	"rankPlural": "fours",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 5,	"rankSH": "5",	"rankSpell": "five",	"rankPlural": "fives",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 6,	"rankSH": "6",	"rankSpell": "six",		"rankPlural": "sixes",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 7,	"rankSH": "7",	"rankSpell": "seven",	"rankPlural": "sevens",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 8,	"rankSH": "8",	"rankSpell": "eight",	"rankPlural": "eights",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 9,	"rankSH": "9",	"rankSpell": "nine",	"rankPlural": "nines",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 10,	"rankSH": "10",	"rankSpell": "ten",		"rankPlural": "tens",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 11,	"rankSH": "J",	"rankSpell": "jack",	"rankPlural": "jacks",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 13,	"rankSH": "Q",	"rankSpell": "queen",	"rankPlural": "queens",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 14,	"rankSH": "K",	"rankSpell": "king",	"rankPlural": "kings",		"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	
	{"rankNum": 1,	"rankSH": "A",	"rankSpell": "ace",		"rankPlural": "aces",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 2,	"rankSH": "2",	"rankSpell": "two",		"rankPlural": "twos",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 3,	"rankSH": "3",	"rankSpell": "three",	"rankPlural": "threes",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 4,	"rankSH": "4",	"rankSpell": "four",	"rankPlural": "fours",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 5,	"rankSH": "5",	"rankSpell": "five",	"rankPlural": "fives",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 6,	"rankSH": "6",	"rankSpell": "six",		"rankPlural": "sixes",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 7,	"rankSH": "7",	"rankSpell": "seven",	"rankPlural": "sevens",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 8,	"rankSH": "8",	"rankSpell": "eight",	"rankPlural": "eights",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 9,	"rankSH": "9",	"rankSpell": "nine",	"rankPlural": "nines",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 10,	"rankSH": "10",	"rankSpell": "ten",		"rankPlural": "tens",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 11,	"rankSH": "J",	"rankSpell": "jack",	"rankPlural": "jacks",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 13,	"rankSH": "Q",	"rankSpell": "queen",	"rankPlural": "queens",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	{"rankNum": 14,	"rankSH": "K",	"rankSpell": "king",	"rankPlural": "kings",		"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},

	{"rankNum": 12,	"rankSH": "C",	"rankSpell": "cavalier",	"rankPlural": "cavaliers",	"suitValue": 1,	"suitSymbol": "♥",	"suitName": "hearts"	},
	{"rankNum": 12,	"rankSH": "C",	"rankSpell": "cavalier",	"rankPlural": "cavaliers",	"suitValue": 1,	"suitSymbol": "♣",	"suitName": "clubs"		},
	{"rankNum": 12,	"rankSH": "C",	"rankSpell": "cavalier",	"rankPlural": "cavaliers",	"suitValue": 1,	"suitSymbol": "♦",	"suitName": "diamonds"	},
	{"rankNum": 12,	"rankSH": "C",	"rankSpell": "cavalier",	"rankPlural": "cavaliers",	"suitValue": 1,	"suitSymbol": "♠",	"suitName": "spades"	},
	
	{"rankNum": 0,	"rankSpell": "the fool",			"rankRom": "0",		"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 1,	"rankSpell": "the magician",		"rankRom": "I",		"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 2,	"rankSpell": "the high priestess",	"rankRom": "II",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 3,	"rankSpell": "the empress",			"rankRom": "III",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 4,	"rankSpell": "the emperor",			"rankRom": "IV",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 5,	"rankSpell": "the hierophant",		"rankRom": "V",		"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 6,	"rankSpell": "the lovers",			"rankRom": "VI",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 7,	"rankSpell": "the chariot",			"rankRom": "VII",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 8,	"rankSpell": "strength",			"rankRom": "VIII",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 9,	"rankSpell": "the hermit",			"rankRom": "IX",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 10,	"rankSpell": "wheel of fortune",	"rankRom": "X",		"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 11,	"rankSpell": "justice",				"rankRom": "XI",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 12,	"rankSpell": "the hanged man",		"rankRom": "XII",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 13,	"rankSpell": "death",				"rankRom": "XIII",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 14,	"rankSpell": "temperance",			"rankRom": "XIV",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 15,	"rankSpell": "the devil",			"rankRom": "XV",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 16,	"rankSpell": "the tower",			"rankRom": "XVI",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 17,	"rankSpell": "the star",			"rankRom": "XVII",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 18,	"rankSpell": "the moon",			"rankRom": "XVIII",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 19,	"rankSpell": "the sun",				"rankRom": "XIX",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 20,	"rankSpell": "judgement",			"rankRom": "XX",	"suitValue": 5,	"suitName": "trumps"	},
	{"rankNum": 21,	"rankSpell": "the world",			"rankRom": "XXI",	"suitValue": 5,	"suitName": "trumps"	}
];
var stock = new Player("Stock", deck.slice(2, 54));
var me = new Player(urName);
var abby = new Player("Abby");
var bob = new Player("Bob");
var cathy = new Player("Cathy");
var dolton = new Player("Dolton");
var discard = new Player("Discard");
var getSecondTurn = false;
var turns = 1;

switch (noOfOpps) {
    case 1:
        turnOrder = [me, abby];
        startingHandLen = 7;
        break;
    case 2:
        turnOrder = [me, abby, bob];
        startingHandLen = 7;
        break;
    case 3:
        turnOrder = [me, abby, bob, cathy];
        startingHandLen = 5;
        break;
    case 4:
        turnOrder = [me, abby, bob, cathy, dolton];
        startingHandLen = 5;
        break;
}

// Write argument with .hand!!
function advanceHand(player) {
    player.push(player[0]);
    player.shift();
}

function advanceTurnOrder() {
    turnOrder.push(turnOrder[0]);
    turnOrder.shift();
}

function game() {
    console.log("%cStarted game!", "color:lime");
    console.log(`${me.name} is the dealer.\nThey deal ${startingHandLen} cards to everyone...`);
    for (let i = 1; i <= startingHandLen * turnOrder.length; i++) {
        stock.dealRand(turnOrder[0]);
        advanceTurnOrder();
    }

    console.log(`The play is passed to ${turnOrder[1].name}.\n`);
    advanceTurnOrder();

    do {
        if (getSecondTurn == false) {
            console.log(`%c\nTurn: ${turns}`, "color:red");
            console.log(`Current player: ${turnOrder[0].name}`);
        } else {
            getSecondTurn = false;
        }

        switch (turnOrder[0].name) {
            case urName:
                // humanTurn();
                botTurn();
                break;
            default:
                botTurn();
                // let _continueGame = prompt("Press enter to continue");
                // continueGame = parseInt(_continueGame);
                // switch (continueGame) {
                //     case undefined:
                //         botTurn();
                //         break;
                //     default:
                //         botTurn();
                //         break;
                // }
        }

        if (getSecondTurn == false) {
            console.log(`\n    Cards in stock: ${stock.hand.length}`);
            for (i = 0; i < turnOrder.length; i++) {
                console.log(`    ${turnOrder[i].name}'s hand: ${turnOrder[i].hand.length} cards ... Books: ${turnOrder[i].books}`);
            }
            advanceTurnOrder();
            turns++;
        }
    }
    while (discard.hand.length < 52);

    // Took this other guys' code: https://stackoverflow.com/a/36941425/25562183
    let winner = turnOrder.reduce((max, player) => max.books > player.books ? max : player);
    console.log(`%cWinner: ${winner.name}!`, "color:lime");
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

        turnOrder[0].swapCard(0, Math.floor(Math.random() * turnOrder[0].hand.length))

        if (turnOrder[otherPlayer].name == urName) {
            console.log(`%c${turnOrder[0].name} asks you for all your ${turnOrder[0].hand[0].rankPlural}.`, "color:yellow");
        } else {
            console.log(`%c${turnOrder[0].name} asks ${turnOrder[otherPlayer].name} for all their ${turnOrder[0].hand[0].rankPlural}.`, "color:yellow");
        }
        turnOrder[otherPlayer].giveMatches(turnOrder[0]);

        if (getSecondTurn == false) {

            if (turnOrder[otherPlayer].name == urName) {
                console.log(`%cYou tell ${turnOrder[0].name} to GO FISH!`, "color:dodgerblue");
            } else {
                console.log(`%c${turnOrder[otherPlayer].name} tells ${turnOrder[0].name} to GO FISH!`, "color:dodgerblue");
            }

            if (stock.hand.length < 1) {
                console.log(`%cBut the stock is empty!\n${turnOrder[0].name} ends their turn.`, "color:dodgerblue");
            } else {
                console.log(`%c${turnOrder[0].name} draws from the stock...`, "color:dodgerblue");
                stock.dealRand(turnOrder[0]);
            }
        }
    }
}

function humanTurn() {
    getSecondTurn = false;
    me.findBooks();
    
    if (me.hand.length < 1) {
        console.log("%cYour hand is empty, start your turn by drawing from the stock.", "color:orange");

        if (stock.hand.length < 1) {
            console.log("%cBut the stock is empty, so your turn is skipped...", "color:orange")
        } else {
            stock.dealRand(me);
            console.log(`You drew the ${me.hand[me.hand.length-1].rankSH + me.hand[me.hand.length-1].suitSymbol}`, "color:orange");
        }

    } else if (discard.hand.length < 52) {
        displayHand = [];
        for (i = 0; i < me.hand.length; i++) {
            displayHand.push(me.hand[i].rankSH);
        }
        console.log("%cYour hand:", "color:magenta");
        console.log(displayHand.join(", "));
        
        askForMatches();
    }

    function askForMatches() {
        for (i = 1; i < turnOrder.length; i++) {
            console.log(`%cType ${i} to choose ${turnOrder[i].name}`, "color:magenta");
        }
    
        var _otherPlayer = prompt("Who do you want to take cards from?", Math.floor(Math.random() * (turnOrder.length - 1) + 1));

        var otherPlayer = parseInt(_otherPlayer);
        console.log(`%cYou chose: ${turnOrder[otherPlayer].name}`, "color:magenta");

        for (i = 0; i < me.hand.length; i++) {
            console.log("Type '" + i + "' for:" + me.hand[i].rankPlural);
        }

        let _chosenRank = prompt("What rank do you want?", Math.floor(Math.random() * me.hand.length));
        chosenRank = parseInt(_chosenRank);

        me.swapCard(0, chosenRank)
        console.log(`%cYou ask ${turnOrder[otherPlayer].name} for all their ${me.hand[0].rankPlural}.`, "color:yellow");
        turnOrder[otherPlayer].giveMatches(me);

        if (getSecondTurn == false) {
            console.log(`%c${turnOrder[otherPlayer].name} tells you to GO FISH!`, "color:dodgerblue");

            if (stock.hand.length < 1) {
                console.log(`%cBut the stock is empty!\nYou end your turn.`, "color:dodgerblue");
            } else {
                stock.dealRand(me);
                console.log(`%cYou drew the ${me.hand[me.hand.length-1].rankSH + me.hand[me.hand.length-1].suitSymbol}`, "color:dodgerblue");
            }
        }
    }
}

await askName();
await howManyOpps();
await game();