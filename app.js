

let scoreStr = localStorage.getItem('score'); 
let score;
resetscore(scoreStr);
function resetscore(scoreStr){
    score = scoreStr ?JSON.parse(scoreStr) :{
        win : 0 ,
        lost : 0,
        tie: 0 , 
    }   ;  

    
    score.displayScore = 

  function(){
    return `
    Score : Won:${score.win} Lost:${score.lost} Tie:${score.tie}`
}

showResult(); 

}
 

function generateComputerChoose(){
let computerChoose;
    
    let randomNo = Math.random() * 3;
    if(randomNo > 0 && randomNo <= 1){
         computerChoose = 'Bat';
        // console.log('computerChoose is bat');
    } else if(randomNo > 1 && randomNo <= 2)
    {
         return 'Ball'
        // console.log('computer choose Ball');
    }else{
        return 'Stump'
        // console.log('conmputer choose Stump');
    }
  return computerChoose;
}


function getresult(uesrmove , computerMove){

 if(uesrmove === 'Bat'){

    let resultMsg = '';

if(computerMove === 'Ball'){
    score.win++
    return 'User won'

}else if(computerMove === 'Bat'){
    score.tie++

    return `It's A tie`
}else if (computerMove === 'Stump'){
    
    score.lost++
   return 'computer has won '
}

 }  else if (uesrmove === 'Ball'){

    
    resultMsg  = '';

    if(computerMove === 'Ball'){
        score.tie++
        return  (`It's a tie`)
    }
    else if(computerMove === 'Bat'){
        score.lost++
        return ('computer  has won ')

    } else if (computerMove === 'Stump'){
        score.win++
        return  'User   won'
    }
    
    } else{
        resultMsg  = '';

    if(computerChoose === 'Ball'){
        score.lost++
        return ('computer  has won ')
    }
    else if(computerChoose === 'Bat'){
        score.win++
        return  'User   won'
        
    } else if (computerChoose === 'Stump'){
        score.tie++
        return  (`It's a tie`)
    }
    }
        
    
    }

    function showResult(uesrmove, computerMove,result){ 
localStorage.setItem('score',JSON.stringify(score)) ;

document.querySelector('#User-move').innerText = uesrmove ? ` You have choose ${uesrmove}`
 :' ';

document.querySelector('#computer-move').innerText = 
computerMove ? `computerChoose is ${computerMove}  ` : ' ';

document.querySelector('#result').innerText =  result   || ' ';


document.querySelector('#score').innerText = score.displayScore();


 

    }

