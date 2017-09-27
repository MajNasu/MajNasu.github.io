$(()=>{
  count = 0;
  welcomeArray = ["HELLO!", "안녕하세요!"];
  setInterval(function(){
    count++;
    $('#welcome').fadeOut(400, function(){
      $(this).text(welcomeArray[count % welcomeArray.length]).fadeIn(400);
    });
  }, 4000);

  $('#carouselExampleIndicators').carousel();

  const arrayTitles = ["Ultimate Card Battle", "craftli", "choiceVIP", "Green Pages", "Paymint", "Add Your Project"];

  const arrayDescriptions = [
    "Client-side game application loosely based on popular trading card games using only jQuery.",
    "Full stack website designed in MVC structure for users to create, retrieve, update, and delete mock Linked-In profiles.",
    "Pair-programmed MEAN stack application allowing users to find and connect with user-created events with the ability to vet potential participants.",
    "Pair-programmed Ruby on Rails application allowing users to seek a specific strain near them to alleviate their physical ailments.",
    "A MEAN stack application that allows users to input receipts to be divided among other users.",
    "Contact me so I may craft your project to your desires!"
  ]

  const $msgTitle = $('#projtitle').find('h1');
  const $msgDescription = $('#projtitle').find('h4');

  $('#carouselExampleIndicators').on('slid.bs.carousel', function(){
    const text = "";
    const $active = $('div.active');
    const index = $('div.item').index($active);

    $msgTitle.text(arrayTitles[index] || "error'd out lol");
    $msgDescription.text(arrayDescriptions[index] || "error'd out lol2")
  })
});
