let score=JSON.parse(localStorage.getItem('score'))||{
    Win: 0,
    Lose:0,
    Tie:0
    };
    updateScoreEle();
    let isAutoplaying=false;
    let intervalId;
    function autoplay(playerMove){
        if(!isAutoplaying){
            intervalId=setInterval(function(){
            const playerMove=pickCompMove();
            playGame(playerMove);
            isAutoplaying = true;
        },1000)
       } else{
           clearInterval(intervalId);
           isAutoplaying = false;
       }  
       const button=document.querySelector('.js-change-auto-play');
       setTimeout(function(){
        button.innerHTML='Stop Play';
       },)
    }
    function playGame(playerMove){
            const compMove = pickCompMove();

            let result = '';

                if(playerMove === 'Scissors'){
                    if(compMove ==='Rock'){
                        result='You Lose';
                    }
                    else if(compMove ==='Paper'){
                        result='You Win';
                    }
                    else if(compMove ==='Scissors')
                    {
                        result='Tie';
                    }
                  }else if(playerMove ==='Paper'){
                    if(compMove ==='Rock'){
                        result='You Win';
                    }
                    else if(compMove ==='Paper'){
                    result='Tie';
                    }
                    else if(compMove ==='Scissors')
                    {
                    result='You Lose';
                    } 
                    }else if(playerMove === 'Rock'){  
                   if(compMove ==='Rock'){
                    result='Tie';
                   }
                   else if(compMove ==='Paper'){
                    result='You Lose';
                   }
                   else if(compMove ==='Scissors')
                   {
                    result='You Win';
                   }  }
                   if(result ==='You Win'){
                       score.Win += 1;
                   } else if (result ==='You Lose') {
                       score.Lose += 1;  
                   } else if(result ==='Tie'){
                       score.Tie += 1;
                   }
                   localStorage.setItem('score',JSON.stringify(score));
                   updateScoreEle();
                   document.querySelector('.js-result').innerHTML= result;
                   document.querySelector('.js-move').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="moveicon">
                   <img src="images/${compMove}-emoji.png" class="moveicon"> Computer `;
               }
               function updateScoreEle(){
                document.querySelector('.js-score').innerHTML=`Wins : ${score.Win} Lose : ${score.Lose} Tie : ${score.Tie}`;
             }
            function pickCompMove(){
                    const randomNumber = Math.random();
                    let compMove = '';
                        if(randomNumber >= 0 && randomNumber < 1/3){
                            compMove='Rock';
                        } else if (randomNumber >= 1/3 && randomNumber < 2/3){
                            compMove='Paper';
                        } else if (randomNumber >=2/3 && randomNumber < 1){
                            compMove='Scissors';
                    }
                    return compMove;
            }
                  