$(() => { //jQuery Window Onload intialization.

//Global Variables
let player1;
let player2;
let binary = 0;

//Create Player Heroes ------------------------->
//Create basic players and basic card structure
  class Player {
    constructor(name, hp, info, img, deck){
      this.name = name;
      this.hp = 30;
      this.info = info;
      this.img = img;
      this.deck = [];
    }
  }

//Create Cards --------------------------------->
//Create basic card structure
  class Card {
    constructor(name, hp, attack, img){
      this.name = name;
      this.hp = hp;
      this.attack = attack;
      this.img = img;
    }
  }

//Create Legendary card structure
  class Legendary extends Card {
    constructor(name, hp, attack){
      super(name, hp, attack);
      // this.ability = ability;
    }
  }

//Create 1 legendary per character deck.
  const kiljaeden = new Legendary (
  "Kil'Jaeden the Deceiver", 10, 10, $('<img src="images/cards/kilj.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'}));

  const emra = new Legendary ("Emrakul, the Aeons Torn", 10, 10, $('<img        src="images/cards/emrakul.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'}));

  const exodia = new Legendary ("Exodia the Forbidden One", 10, 10, $('<img     src="images/cards/exodia.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'}));

  const mew = new Legendary ("Mew, the Original", 10, 10, $('<img src="images/cards/mew.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'}));

//Create neutral cards (19 of these for testing)
  const voidwalker = new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'}));

//Shuffle decks using Durstenfeld + Fisher-Yates shuffle
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  return arr;
  }

//Start Game Function ---------------------------->
const startGame = () => {

//Player 1 Chooses
  const player1Choose = prompt("Player 1: Pick your hero", "sargeras / nicol / ra / arceus");
  switch(player1Choose.toLowerCase()){

    case "sargeras":
      player1 = new Player(
        "Sargeras",
        $('#player1Hero').append($('<div>30</div>').attr('id', 'hp')),
         "Dark God of Chaotic Magic, Creator of the Burning Legion", $('#player1Hero').prepend($("<img src='images/hero/sargeras.jpg'/>").css({'max-width': '100%', 'max-height': '100%','height': '80%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player1.deck.push(new Card ("Kil'Jaeden the Deceiver", 10, 10, $('<img src="images/cards/kilj.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player1.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player1.deck);
      break;

    case "nicol":
      player1 = new Player(
        "Nicol Bolas",
        $('#player1Hero').append($('<div>30</div>').attr('id', 'hp')),
        "Forever Serpent, the Horned One, God-Pharaoh of Amonkhet",
        $('#player1Hero').prepend($("<img src='images/hero/nicol.jpg'/>").css({'max-width': '100%', 'max-height': '100%','height': '80%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player1.deck.push(new Card ("Emrakul, the Aeons Torn", 10, 10, $('<img src="images/cards/emrakul.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player1.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player1.deck);
      break;

    case "ra":
      player1 = new Player(
        "Winged Dragon of Ra",
        $('#player1Hero').append($('<div>30</div>').attr('id', 'hp')),
        "Egyptian Sun God, Almighty Protector of the Sun and Sky",
        $('#player1Hero').prepend($("<img src='images/hero/ra.png'/>").css({'max-width': '100%', 'max-height': '100%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player1.deck.push(new Card ("Exodia the Forbidden One", 10, 10, $('<img src="images/cards/exodia.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player1.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player1.deck);
      break;

    case "arceus":
      player1 = new Player(
        "Arceus",
        $('#player1Hero').append($('<div>30</div>').attr('id', 'hp')),
        "The Original One, God Pokemon",
        $('#player1Hero').prepend($("<img src='images/hero/arceus.png'/>").css({'max-width': '100%', 'max-height': '100%', 'height': '80%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player1.deck.push(new Card ("Mew, the Original", 10, 10, $('<img src="images/cards/mew.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player1.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player1.deck);
      break;
  }

//Player 2 chooses
  const player2Choose = prompt("Player 2: Pick your hero", "sargeras / nicol / ra / arceus");
  switch(player2Choose.toLowerCase()){

    case "sargeras":
      player2 = new Player(
        "Sargeras",
        $('#player2Hero').append($('<div>30</div>').attr('id', 'hp')),
        "Dark God of Chaotic Magic, Creator of the Burning Legion", $('#player2Hero').prepend($("<img src='images/hero/sargeras.jpg'/>").css({'max-width': '100%', 'max-height': '100%', 'height': '80%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player2.deck.push(new Card ("Kil'Jaeden the Deceiver", 10, 10, $('<img src="images/cards/kilj.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player2.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player2.deck);
      break;

    case "nicol":
      player2 = new Player(
        "Nicol Bolas",
        $('#player2Hero').append($('<div>30</div>').attr('id', 'hp')),
        "Forever Serpent, the Horned One, God-Pharaoh of Amonkhet",
        $('#player2Hero').prepend($("<img src='images/hero/nicol.jpg'/>").css({'max-width': '100%', 'max-height': '100%', 'height': '80%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player2.deck.push(new Card ("Emrakul, the Aeons Torn", 10, 10, $('<img src="images/cards/emrakul.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player2.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player2.deck);
      break;

    case "ra":
      player2 = new Player(
        "Winged Dragon of Ra",
        $('#player2Hero').append($('<div>30</div>').attr('id', 'hp')),
        "Egyptian Sun God, Almighty Protector of the Sun and Sky",
        $('#player2Hero').prepend($("<img src='images/hero/ra.png'/>").css({'max-width': '100%', 'max-height': '100%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player2.deck.push(new Card ("Exodia the Forbidden One", 10, 10, $('<img src="images/cards/exodia.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player2.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player2.deck);
      break;

    case "arceus":
      player2 = new Player(
        "Arceus",
        $('#player2Hero').append($('<div>30</div>').attr('id', 'hp')),
        "The Original One, God Pokemon",
        $('#player2Hero').prepend($("<img src='images/hero/arceus.png'/>").css({'max-width': '100%', 'max-height': '100%', 'height': '80%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player2.deck.push(new Card ("Mew, the Original", 10, 10, $('<img src="images/cards/mew.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player2.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player2.deck);
        break;

  }
  gameTurn();
  dealCards();
};

//Let's start creating the board---------------->
//Create container div(container) on body
  $('body').append($('<div/>').attr('id', 'container').css(
    {'width': '100%',
    'height': '100%',
    'position': 'fixed'}));

//PLAYER ONE ----------------------------------->
//Create Player 1 board

//Create Player 1's container div(player1Container)
  $('#container').append($('<div/>').attr('id', 'player1Container').css(
    {'width':'100%',
    'height': '50%'}));

//Create player 1's hand+deck field div(player1Hand)
  $('#player1Container').append($('<div/>').attr('id', 'player1Hand').css(
    {'width': '100%',
    'height': '50%',
    'display': 'flex'}));

//Create 1 slot for Player Hero + display HP
  $('#player1Hand').append($('<div/>').attr('id', 'player1Hero').css(
    {'width': '10%',
    'height': '75%',
    'margin': 'auto',
    'text-align': 'center'}))

//Create 5 slots divs(player1CardSlots) for hand cards
  for(let j = 0; j < 7; j++){
    $('#player1Hand').append($('<div/>').addClass( 'player1CardSlots').css(
      {'width': '10%',
      'height': '75%',
      'margin': 'auto',
      'background-color': 'white',
      'max-width': '100%',
      'max-height': '75%'}));
  }

//Create 1 slot for Deck + cards remaining
  $('#player1Hand').append($('<div/>').attr('id', 'player1Deck').css(
    {'width': '10%',
    'height': '75%',
    'margin': 'auto',
    'text-align': 'center'}))

//Create player 1's playing field div(player1Field)
  $('#player1Container').append($('<div/>').attr('id', 'player1Field').css(
    {'width': '100%',
    'height': '50%',
    'display': 'flex'}));

//Add End button for player 1
  $('#player1Deck').append($('<div>End Turn</div>').css(
    {'height': '40%',
    'width': '60%',
    'margin': '0 auto',
    'border': '1px solid black'}).attr('id', 'end-turn1'));

//Add Draw Card button to the Deck for Player 2
  $('#player1Deck').append($('<div>Draw Card</div>').css({
    'height': '40%',
    'width': '60%',
    'margin': '0 auto',
    'border': '1px solid black'}).attr('id', 'drawCard1'));

//PLAYER TWO ----------------------------------->
//Create Player 2's board

//Create Player 2's container div(player2Container)
  $('#container').append($('<div/>').attr('id', 'player2Container').css(
    {'width': '100%',
    'height': '50%'}));

//Create player 2's playing field div(player2Field)
  $('#player2Container').append($('<div/>').attr('id', 'player2Field').css(
    {'width': '100%',
    'height': '50%',
    'display': 'flex'}));

//Create player 2's hand+deck field div(player2Hand)
  $('#player2Container').append($('<div/>').attr('id', 'player2Hand').css(
    {'width': '100%',
    'height': '50%',
    'display': 'flex'}));

//Create 1 slot for Player Hero + display HP
  $('#player2Hand').append($('<div/>').attr('id', 'player2Hero').css(
    {'width': '10%',
    'height': '75%',
    'margin': 'auto',
    'text-align': 'center'}));

//Create 5 slots divs(player2CardSlots) for hand cards
  for(let j = 0; j < 7; j++){
    $('#player2Hand').append($('<div/>').addClass('player2CardSlots').css(
      {'width': '10%',
      'height': '75%',
      'margin': 'auto',
      'background-color': 'white',
      'max-width': '100%',
      'max-height': '75%'}));
  }

//Create 1 slot for Deck + cards remaining
  $('#player2Hand').append($('<div/>').attr('id', 'player2Deck').css(
    {'width': '10%',
    'height': '75%',
    'margin': 'auto',
    'text-align': 'center'}))

//Add End button to the Deck for Player 2
  $('#player2Deck').append($('<div>End Turn</div>').css(
    {'height': '40%',
    'width': '60%',
    'margin': '0 auto',
    'border': '1px solid black'}).attr('id', 'end-turn2'));

//Add Draw Card button to the Deck for Player 2
  $('#player2Deck').append($('<div>Draw Card</div>').css({'height': '40%', 'width': '60%', 'margin': '0 auto', 'border': '1px solid black'}).attr('id', 'drawCard2'));

// Deal Cards Function ---------------------->
  const dealCards = () => {
    for(let i = 0; i < 7; i++){
      $('.player1CardSlots').eq(i).append(player1.deck[i].img).append($('<div>' + player1.deck[i].hp + '</div>').attr('id', 'hp')).append($('<div>' + player1.deck[i].attack + '</div>').attr('id', 'attack'));
      player1.deck.shift();

      $('.player2CardSlots').eq(i).append(player2.deck[i].img).append($('<div>' + player2.deck[i].hp + '</div>').attr('id', 'hp')).append($('<div>' + player2.deck[i].attack + '</div>').attr('id', 'attack'));
      player2.deck.shift();
    }
  };

//at the end of every attack, checkWin
    const checkWin = () => {
      if(eval($('#player1Hero').find('#hp').text()) <= 0 && eval($('#player2Hero').find('#hp').text()) <= 0){
        alert("Tie");
      } else if(eval($('#player1Hero').find('#hp').text()) <= 0){
        alert("Player 2 Wins!");
      } else if(eval($('#player2Hero').find('#hp').text()) <= 0){
        alert("Player 1 Wins!");
      } else {
        console.log("No one died yet!");
      }
    }

//Draw Cards for each player
//     const player1Draw = () => {
//       $('#player1Hand').append($('<div/>').addClass('player1CardSlots').css(
//         {'width': '10%',
//         'height': '75%',
//         'margin': 'auto',
//         'background-color': 'white',
//         'max-width': '100%',
//         'max-height': '75%'}));
//
//       $('.player1CardSlots').append(player1.deck[0].img).append($('<div>' + player1.deck[0].hp + '</div>').attr('id', 'hp')).append($('<div>' + player1.deck[0].attack + '</div>').attr('id', 'attack'));
//       player1.deck.shift();
// }
//
//     const player2Draw = () => {
//       $('#player1Hand').append(player2.deck[0].img).append($('<div>' + player2.deck[0].hp + '</div>').attr('id', 'hp')).append($('<div>' + player2.deck[0].attack + '</div>').attr('id', 'attack'));
//       player2.deck.shift();
//     }

//create Turns
  const gameTurn = () => {

//Player 1's turn
    if(binary === 0){
      $('#player2Hand > .player2CardSlots').off('click');
      $('#end-turn2').off('click');

      $('.player1CardSlots').on('click', (z) =>{
        $(z.currentTarget).remove();
        $('#player1Field').append(z.currentTarget);
      });

//Field cards get ability to choose and attack their enemy MINION
      $('#player1Field > .player1CardSlots').on('click', (e)=>{
        console.log("Who do you want to attack");

//Click the minion you want to attack
        $('#player2Field > .player2CardSlots').on('click', (m) =>{

//target receives damage
          console.log("I wanna attack this guy");
          $(m.currentTarget).find('#hp').html(eval($(m.currentTarget).find('#hp').text() - $(e.currentTarget).find('#attack').text()));

//turn off minion clicks, minions may only attack once per turn
          $('#player2Field > .player2CardSlots').off('click');

//attacker receives damage
          $(e.currentTarget).find('#hp').html(eval($(e.currentTarget).find('#hp').text() - $(m.currentTarget).find('#attack').text()));

//If either of them die, remove them.
          if(eval($(m.currentTarget).find('#hp').text()) <= 0 && eval($(e.currentTarget).find('#hp').text()) <= 0){
            $(m.currentTarget).remove();
            $(e.currentTarget).remove();
          } else if(eval($(m.currentTarget).find('#hp').text()) <= 0){
            $(m.currentTarget).remove();
          } else if(eval($(e.currentTarget).find('#hp').text()) <= 0){
            $(e.currentTarget).remove();
          }
        });

//Click the player Hero
          $('#player2Hero').on('click', (h) => {
            $(h.currentTarget).find('#hp').html(eval($(h.currentTarget).find('#hp').text()) - $(e.currentTarget).find('#attack').text());
            checkWin();
            $('#player2Hero').off('click');
          })
        });

        $('#end-turn1').on('click', (e) =>{
            binary++;
            gameTurn();
        });

//Player 2's turn
    } else if(binary === 1){
      $('#player1Hand > .player1CardSlots').off('click');
      $('#end-turn1').off('click');

      $('.player2CardSlots').on('click', (e) =>{
        $(e.currentTarget).remove();
        $('#player2Field').append(e.currentTarget);
      });

//Field cards get ability to choose and attack their enemy MINION
      $('#player2Field > .player2CardSlots').on('click', (f)=>{
        console.log("Who do you want to attack");

//Click the minion you want to attack
        $('#player1Field > .player1CardSlots').on('click', (n) =>{

//target receives damage
          console.log("I wanna attack this guy");
          $(n.currentTarget).find('#hp').html(eval($(n.currentTarget).find('#hp').text() - $(f.currentTarget).find('#attack').text()));

//turn off minion clicks, minions may only attack once per turn
          $('#player1Field > .player1CardSlots').off('click');

//attacker receives damage
          $(f.currentTarget).find('#hp').html(eval($(f.currentTarget).find('#hp').text() - $(n.currentTarget).find('#attack').text()));

//If either of them die, remove them.
          if(eval($(n.currentTarget).find('#hp').text()) <= 0 && eval($(f.currentTarget).find('#hp').text()) <= 0){
            $(n.currentTarget).remove();
            $(f.currentTarget).remove();
          } else if(eval($(n.currentTarget).find('#hp').text()) <= 0){
            $(n.currentTarget).remove();
          } else if(eval($(f.currentTarget).find('#hp').text()) <= 0){
            $(f.currentTarget).remove();
          }
          });

//Attack the player Hero
          $('#player1Hero').on('click', (h) => {
            $(h.currentTarget).find('#hp').html(eval($(h.currentTarget).find('#hp').text()) - $(f.currentTarget).find('#attack').text());
            checkWin();
            $('#player1Hero').off('click');
          })
        });

        $('#end-turn2').on('click', (e) =>{
            binary--;
            gameTurn();
        });
    }
  };


startGame(); //Start Game function called

}) //Closing jQuery Window Onload.
