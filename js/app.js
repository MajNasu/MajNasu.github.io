$(() => { //jQuery Window Onload intialization.
  //
  // $('body').dialog({
  //   autoOpen: true
  // });

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

  //Create specific cards
    //Create 1 legendary per character deck.
    const kiljaeden = new Legendary ("Kil'Jaeden the Deceiver", 10, 10, $('<img src="images/cards/kilj.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'}));

    const emra = new Legendary ("Emrakul, the Aeons Torn", 10, 10, $('<img src="images/cards/emrakul.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'}));

    const exodia = new Legendary ("Exodia the Forbidden One", 10, 10, $('<img src="images/cards/exodia.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'}));

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

  const player1Choose = prompt("Player 1: Pick your hero", "sargeras / nicol / ra / arceus");

  switch(player1Choose.toLowerCase()){

    case "sargeras":
      player1 = new Player(
        "Sargeras",
        $('#player1Hero').text("HP: " + 30),
        "Dark God of Chaotic Magic, Creator of the Burning Legion", $('#player1Hero').prepend($("<img src='images/hero/sargeras.jpg'/>").css({'width': '100%', 'height': '50%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player1.deck.push(new Card ("Kil'Jaeden the Deceiver", 10, 10, $('<img src="images/cards/kilj.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player1.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player1.deck);
      break;

    case "nicol":
      player1 = new Player(
        "Nicol Bolas",
        $('#player1Hero').text("HP: " + 30),
        "Forever Serpent, the Horned One, God-Pharaoh of Amonkhet",
        $('#player1Hero').prepend($("<img src='images/hero/nicol.jpg'/>").css({'max-width': '100%', 'max-height': '100%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player1.deck.push(new Card ("Emrakul, the Aeons Torn", 10, 10, $('<img src="images/cards/emrakul.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player1.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player1.deck);
      break;

    case "ra":
      player1 = new Player(
        "Winged Dragon of Ra",
        $('#player1Hero').text("HP: " + 30),
        "Egyptian Sun God, Almighty Protector of the Sun and Sky",
        $('#player1Hero').prepend($("<img src='images/hero/ra.png'/>").css({'width': '100%', 'height': '45%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player1.deck.push(new Card ("Exodia the Forbidden One", 10, 10, $('<img src="images/cards/exodia.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player1.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player1.deck);
      break;

    case "arceus":
      player1 = new Player(
        "Arceus",
        $('#player1Hero').text("HP: " + 30),
        "The Original One, God Pokemon",
        $('#player1Hero').prepend($("<img src='images/hero/arceus.png'/>").css({'width': '100%', 'height': '45%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player1.deck.push(new Card ("Mew, the Original", 10, 10, $('<img src="images/cards/mew.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player1.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player1.deck);
      break;
  }

  const player2Choose = prompt("Player 2: Pick your hero", "sargeras / nicol / ra / arceus");

  switch(player2Choose.toLowerCase()){

    case "sargeras":
      player2 = new Player(
        "Sargeras",
        $('#player2Hero').text("HP: " + 30),
        "Dark God of Chaotic Magic, Creator of the Burning Legion", $('#player2Hero').prepend($("<img src='images/hero/sargeras.jpg'/>").css({'max-width': '100%', 'max-height': '75%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player2.deck.push(new Card ("Kil'Jaeden the Deceiver", 10, 10, $('<img src="images/cards/kilj.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player2.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player2.deck);
      break;

    case "nicol":
      player2 = new Player(
        "Nicol Bolas",
        $('#player2Hero').text("HP: " + 30),
        "Forever Serpent, the Horned One, God-Pharaoh of Amonkhet",
        $('#player2Hero').prepend($("<img src='images/hero/nicol.jpg'/>").css({'max-width': '100%', 'max-height': '100%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player2.deck.push(new Card ("Emrakul, the Aeons Torn", 10, 10, $('<img src="images/cards/emrakul.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player2.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player2.deck);
      break;

    case "ra":
      player2 = new Player(
        "Winged Dragon of Ra",
        $('#player2Hero').text("HP: " + 30),
        "Egyptian Sun God, Almighty Protector of the Sun and Sky",
        $('#player2Hero').prepend($("<img src='images/hero/ra.png'/>").css({'width': '100%', 'height': '45%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
        player2.deck.push(new Card ("Exodia the Forbidden One", 10, 10, $('<img src="images/cards/exodia.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        for(let i = 0; i < 19; i++){
          player2.deck.push(new Card ("Voidwalker", 1, 2, $('<img src="images/cards/voidwalker.jpg"/>').css({'height': '80%', 'width': '100%', 'margin': '0 auto'})));
        };
        shuffle(player2.deck);
      break;

    case "arceus":
      player2 = new Player(
        "Arceus",
        $('#player2Hero').text("HP: " + 30),
        "The Original One, God Pokemon",
        $('#player2Hero').prepend($("<img src='images/hero/arceus.png'/>").css({'width': '100%', 'height': '45%', 'display': 'block', 'margin': '0 auto', 'border-bottom': '2px solid black', 'border-radius': '6px'})));
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


//   //Prompt Players to choose their Hero
//     //Player 1 Prompt
//     //Player 2 Prompt
//     //IF user input = sargeras/nicol/ra/arceus
//       //shuffle the chosen decks
//
// //testing ground
//   //Player 1 Goes first
//   //Player 1 can put up minions on the board
//   //Player 1 can use ability
//   //Player 1 can end turn

//

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
        {'width': '12%',
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
      $('#player1Hand').append($('<div/>').attr('id', 'player1Deck').text("Cards Remaining: ").css(
        {'width': '15%',
        'height': '75%',
        'margin': 'auto',
        'text-align': 'center'}))

    //Create player 1's playing field div(player1Field)
    $('#player1Container').append($('<div/>').attr('id', 'player1Field').css(
      {'width': '100%',
      'height': '50%',
      'display': 'flex'}));

      //Create 5 slots div(slots) for playable cards
        // for(let i = 0; i < 5; i++){
        // $('#player1Field').append($('<div/>').addClass( 'player1Slots').css(
        //   {
        //   'margin': 'auto',
        //   'max-width': '100%',
        //   'max-height': '75%'}))
        // }

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

      //Create 5 slots div(slots) for playable cards
      // for(let i = 0; i < 5; i++){
      // $('#player2Field').append($('<div/>').addClass('player2Slots').css(
      //   {'width': '10%',
      //   'height': '100%',
      //   'margin': 'auto'}));
      // }

    //Create player 2's hand+deck field div(player2Hand)
    $('#player2Container').append($('<div/>').attr('id', 'player2Hand').css(
      {'width': '100%',
      'height': '50%',
      'display': 'flex'}));

      //Create 1 slot for Player Hero + display HP
      $('#player2Hand').append($('<div/>').attr('id', 'player2Hero').css(
        {'width': '12%',
        'height': '75%',
        'margin': 'auto',
        'text-align': 'center'}))

      //Create 5 slots divs(player2CardSlots) for hand cards
      for(let j = 0; j < 7; j++){
        $('#player2Hand').append($('<div/>').addClass( 'player2CardSlots').css(
          {'width': '10%',
          'height': '75%',
          'margin': 'auto',
          'background-color': 'white',
          'max-width': '100%',
          'max-height': '75%'}));

        }

      //Create 1 slot for Deck + cards remaining
      $('#player2Hand').append($('<div/>').attr('id', 'player2Deck').text("Cards Remaining: ").css(
        {'width': '15%',
        'height': '75%',
        'margin': 'auto',
        'text-align': 'center'}))

    // Deal Cards Function ---------------------->
    const dealCards = () => {
      for(let i = 0; i < 7; i++){

        $('.player1CardSlots').eq(i).append(player1.deck[i].img).append($('<div>HP: ' + player1.deck[i].hp + '</div>').append($('<div>ATT: ' + player1.deck[i].attack + '</div>')));
        player1.deck.shift();

        $('.player2CardSlots').eq(i).append(player2.deck[i].img).append($('<div>HP: ' + player2.deck[i].hp + '</div>').append($('<div>ATT: ' + player2.deck[i].attack + '</div>')));;
        player2.deck.shift();
      }
    }

//at the end of every attack, checkWin
    const checkWin = () => {
      if(player1.hp <= 0 && player2.hp <= 0){
        return "Tie";
      } else if(player1.hp <= 0){
        return "Player 2 Wins!";
      } else if(player2.hp <= 0){
        return "Player 1 Wins!";
      }
    }

//binary 0 = player 1's turn
//create Turns
    const gameTurn = () => {
      if(binary === 0){
        $('.player1CardSlots').on('click', (e) =>{
          $(e.currentTarget).remove();
          $('#player1Field').append(e.currentTarget).prop('disabled', false);
        })

        $('.player1CardSlots').on('click', (e) =>{
          $(e.currentTarget).remove();
          $('#player1Field').append(e.currentTarget).prop('disabled', true);
        binary++;
      })

      } else if(binary === 0){
        $('.player1CardSlots').on('click', (e) =>{
          $(e.currentTarget).remove();
          $('#player2Field').append(e.currentTarget).prop('disabled', true);
        })

        $('.player2CardSlots').on('click', (e) =>{
          $(e.currentTarget).remove();
          $('#player2Field').append(e.currentTarget).prop('disabled', false);
        binary--;
      })
      }
    }


startGame(); //Start Game function called

}) //Closing jQuery Window Onload.
