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


});
