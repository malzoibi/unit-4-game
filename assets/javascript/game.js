//Choosing random target score that ranges from 30-120
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    
    
    $('#randomNumber').text(Random);
    
//Choosing random values that range from 1-12 for each crystal
    var c1= Math.floor(Math.random()*11+1)
    var c2= Math.floor(Math.random()*11+1)
    var c3= Math.floor(Math.random()*11+1)
    var c4= Math.floor(Math.random()*11+1)
   

    var totalScore= 0; 
    var wins= 0;
    var losses = 0;


  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        c1= Math.floor(Math.random()*11+1);
        c2= Math.floor(Math.random()*11+1);
        c3= Math.floor(Math.random()*11+1);
        c4= Math.floor(Math.random()*11+1);
        totalScore= 0;
        $('#finalTotal').text(totalScore);
        } 

// Functions that increments wins and losses 
function won(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  function lost(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

  //Specifiying that clicking on the crystal will yield a value and that exceeding the target score will = loss
  $('#one').on ('click', function(){
      totalScore = totalScore + c1;
      console.log("New totalScore= " + totalScore);
      $('#finalTotal').text(totalScore); 

      if (totalScore == Random){
            won();
          }
          else if ( totalScore > Random){
            lost();
          }   
    })  
    $('#two').on ('click', function(){
      totalScore = totalScore + c2;
      console.log("New totalScore= " + totalScore);
      $('#finalTotal').text(totalScore); 
          if (totalScore == Random){
            won();
          }
          else if ( totalScore > Random){
            lost();
          } 
    })  
    $('#three').on ('click', function(){
      totalScore = totalScore + c3;
      console.log("New totalScore= " + totalScore);
      $('#finalTotal').text(totalScore);

      if (totalScore == Random){
            won();
          }
          else if ( totalScore > Random){
            lost();
          } 
    })  
    $('#four').on ('click', function(){
      totalScore = totalScore + c4;
      console.log("New totalScore= " + totalScore);
      $('#finalTotal').text(totalScore); 
        
            if (totalScore == Random){
            won();
          }
          else if ( totalScore > Random){
            lost();
          }
    });   
  }); 