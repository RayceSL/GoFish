// The cards that will be used in the game
// Aces are high, even though "Go Fish" counts the number of books a player has
// as their score, I'm just trusting Bicycle on this one
// The two jokers are also removed
var stock = [
    {"name": "2♥",     "value": "2"    },
    {"name": "3♥",     "value": "3"    },
    {"name": "4♥",     "value": "4"    },
    {"name": "5♥",     "value": "5"    },
    {"name": "6♥",     "value": "6"    },
    {"name": "7♥",     "value": "7"    },
    {"name": "8♥",     "value": "8"    },
    {"name": "9♥",     "value": "9"    },
    {"name": "10♥",    "value": "10"   },
    {"name": "J♥",     "value": "11"   },
    {"name": "Q♥",     "value": "12"   },
    {"name": "K♥",     "value": "13"   },
    {"name": "A♥",     "value": "14"   },

    {"name": "2♣",     "value": "2"    },
    {"name": "3♣",     "value": "3"    },
    {"name": "4♣",     "value": "4"    },
    {"name": "5♣",     "value": "5"    },
    {"name": "6♣",     "value": "6"    },
    {"name": "7♣",     "value": "7"    },
    {"name": "8♣",     "value": "8"    },
    {"name": "9♣",     "value": "9"    },
    {"name": "10♣",    "value": "10"   },
    {"name": "J♣",     "value": "11"   },
    {"name": "Q♣",     "value": "12"   },
    {"name": "K♣",     "value": "13"   },
    {"name": "A♣",     "value": "14"   },

    {"name": "2♦",     "value": "2"    },
    {"name": "3♦",     "value": "3"    },
    {"name": "4♦",     "value": "4"    },
    {"name": "5♦",     "value": "5"    },
    {"name": "6♦",     "value": "6"    },
    {"name": "7♦",     "value": "7"    },
    {"name": "8♦",     "value": "8"    },
    {"name": "9♦",     "value": "9"    },
    {"name": "10♦",    "value": "10"   },
    {"name": "J♦",     "value": "11"   },
    {"name": "Q♦",     "value": "12"   },
    {"name": "K♦",     "value": "13"   },
    {"name": "A♦",     "value": "14"   },

    {"name": "2♠",     "value": "2"    },
    {"name": "3♠",     "value": "3"    },
    {"name": "4♠",     "value": "4"    },
    {"name": "5♠",     "value": "5"    },
    {"name": "6♠",     "value": "6"    },
    {"name": "7♠",     "value": "7"    },
    {"name": "8♠",     "value": "8"    },
    {"name": "9♠",     "value": "9"    },
    {"name": "10♠",    "value": "10"   },
    {"name": "J♠",     "value": "11"   },
    {"name": "Q♠",     "value": "12"   },
    {"name": "K♠",     "value": "13"   },
    {"name": "A♠",     "value": "14"   }
];

var player0 = [];
var player1 = [];
var player2 = [];

var profiles = [
    {"name": "Rayce",   "hand": player0 },
    {"name": "Abby",    "hand": player1 },
    {"name": "Bob",     "hand": player2 }
]

// Swaps two cards' positions in an index
// Took this guy's code: https://stackoverflow.com/a/2440720/25562183
function swapCard(array, indexA, indexB) {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
}

// Deals a random card from one player to another at the TOP of their hand
// (start of their array)
function deal(fromPlayer, toPlayer) {
    let randIndex = (Math.floor(Math.random() * fromPlayer.length));
    swapCard(fromPlayer, randIndex, 0);
    toPlayer.unshift(fromPlayer[0]);
    fromPlayer.shift();
}

// Deals a specific card from one player to another at the BOTTOM of their hand
// (end of their array)
function dealBottom(index, fromPlayer, toPlayer) {
    swapCard(fromPlayer, index, 0);
    toPlayer.push(fromPlayer[0]);
    fromPlayer.shift();
}


