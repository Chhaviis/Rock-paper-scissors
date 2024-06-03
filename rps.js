let score = JSON.parse(localStorage.getItem('score')) || {
  Wins:0,
  Losses:0,
  Ties:0
};
updatescore();

console.log(localStorage.getItem('score'));

let isautoplaying = false;
let intervalid;

function autoPlay(){
  if(!isautoplaying){
    intervalid = setInterval(function(){
      const playermove = pickcompmove();
      playgame(playermove);
    },1000);
    isautoplaying=true;
  } else{
    clearInterval(intervalid);
    isautoplaying=false;
  }

}

function playgame(playermove){
  const compmove = pickcompmove();

  let result='';
  if (playermove==='rock'){
    if(compmove==='rock'){
      result='Tie';
    }
    else if (compmove==='paper'){
      result='Computer wins';
    }
    else if (compmove==='scissors'){
      result='You win';
    }
  }
  
  else if (playermove==='scissors'){
    if(compmove==='rock'){
       result='Computer wins';
    }
    else if (compmove==='paper'){
      result='You win';
    }
    else if (compmove==='scissors'){
      result='Tie';
    }
  }  
  else if (playermove==='paper') {
      if(compmove==='rock'){
        result='You win';
      }
      else if (compmove==='paper'){
        result='Tie';
      }
      else if (compmove==='scissors'){
        result='Computer wins';
      }
  }
  else if(playermove==='Reset Score') {
      result='Score was Reset';
  }
  if(result==='You win'){
    score.Wins ++ ;
  }
  else if (result==='Computer wins'){
    score.Losses ++;
  }
  else if (result==='Tie'){
    score.Ties ++;
  }

  localStorage.setItem('score',JSON.stringify(score));
  updatescore();

  document.querySelector('.js-result')
   .innerHTML = result;

  document.querySelector('.js-moves')
   .innerHTML = `You <img src="images/${playermove}-emoji.png" class="move-button"><img src="images/${compmove}-emoji.png" class="move-button"> Computer`;}

  
  

function updatescore(){
  document.querySelector('.js-score')
    .innerHTML = `Wins:${score.Wins},  Losses:${score.Losses},  Ties:${score.Ties}`;

}

function pickcompmove(){
  const rn=Math.random();
  if (rn>=0 && rn<1/3){
    compmove='rock';
  }
  else if( rn>=1/3 && rn<2/3){
    compmove='paper';
  }
  else if (rn>=2/3 && rn<1){
    compmove='scissors';
  }
  return compmove;
}