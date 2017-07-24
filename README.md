PLAY HERE: https://majnasu.github.io/

Welcome to Ultimate Card Battle!

If you've ever played a trading card game, or more commonly known as TCG, you'll have some vague familiarity with this game. The point of the game is to destroy the enemy hero by depleting his/her life points.

Upon landing the page, two players are prompted to choose their hero. Each hero provides their own respective decks from their universe. After picking, players may click on the cards in their hand to put them into play.

Once the minion cards are in play, the player who possesses the minion card may click on his/her minion to initiate attack mode. Then he/she may click an opponent minion or opponent hero. The attacking minion also receives damage equal to the opponent minion's attack value. Minions may only begin attacking after resting on the turn in which they are played.

Players lose when their HP reaches zero.

KNOWN BUGS:
1. A minion can attack another minion and die in the process. Though dead, the attacking player may keep clicking on opponent minions/hero and continuously deplete HP. (Possible fix: unbind click event after attacking minion is removed.)
-fixed, each minion can only attack up to one target per turn.

2. Drawing cards! Because the hand cards were created as 7 divs with the card info being appended, constructing a draw card function is a lot more difficult than naturally believed.
-fixed, each player can only draw 1 card per turn.

3. Can't play the card that was drawn in the same turn. Maybe I'll just say it's an intended mechanic of the game.

4. Upon drawing a card, a random card in your hand/field may lose its image for some reason.

THINGS TO ADD:
1. More cards, currently 1 unique card per deck, 19 lemmings otherwise.
-added

2. Specific card backs for each hero from their respective games.
-added

3. Hero abilities

4. Card abilities

5. Landing page for more information regarding game, playable heroes, and provided decks.

6. Random background or "map" per game.
