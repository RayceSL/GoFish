<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Go Fish</title>
</head>
<body>
    <h1>Go Fish 🎣</h1>

    <h2>How To Play</h2>

    <ol>
        <li>Shuffle a 52-card deck.</li>
        <li>Each player draws a card from the deck, whoever draws the lowest rank (aces are high) will be the dealer.</li>
        <li>The dealer then shuffles the deck, the player to their right cuts it, and then the dealer completes the cut.</li>
        <li>Now the dealer will deal the appropriate ammount of cards to each player, one card at a time, face down, going clockwise around the table.</li>
        <li>For two or three players: seven cards; for four or five players: five cards.</li>
        <li>The remaining cards, now called "the stock," should be placed in the middle of the table, face down.</li>
        <li>The first player clockwise to the dealer goes first, and play proceeds clockwise.</li>
        <li>During a player's turn, they can ask any other player for all their cards of a certain rank, and the addressed player must give them. But, a player cannot ask for a rank that they don't already have.</li>
        <li>If the chosen player has no matching cards, they say "go fish!" Then the current player takes a single card from the stock and ends their turn.</li>
        <li>But, if they do recieve at least one card after asking, they can go again!</li>
        <li>Once a player has four cards of the same rank, called a "book" or "four-of-a-kind," they take them out of their hand and place them in front of them, face up, on the table.</li>
        <li>If a player starts their turn without any cards, they must first take a card from the stock, then they continue with their turn normally.</li>
        <li>But, if the stock is empty, then they are out of the game and lose!</li>
        <li>Once all the cards are matched up in books, whoever has the most books wins!</li>
    </ol>

    <form>
        <h2>Game Set-Up</h2>
        <label>Select how many opponents:</label><br>

        <input type="radio" name="playerNum" id="1opp">
        <label for="1opp">One opponent</label><br>

        <input type="radio" name="playerNum" id="2opp">
        <label for="2opp">Two opponents</label><br>

        <input type="radio" name="playerNum" id="3opp">
        <label for="3opp">Three opponents</label><br>

        <input type="radio" name="playerNum" id="4opp">
        <label for="4opp">Four opponents</label><br>


        <br>
        <label>Select difficulty:</label><br>

        <input type="radio" name="difficulty" id="easy">
        <label for="easy">Easy</label><br>

        <input type="radio" name="difficulty" id="medium">
        <label for="medium">Medium</label><br>

        <input type="radio" name="difficulty" id="hard">
        <label for="hard">Hard</label><br>


        <br>
        <input type="submit">

    </form>

    <script src="full_deck.js"></script>
    <script src="index.js"></script>
</body>
</html>
