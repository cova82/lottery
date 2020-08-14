'use strict'; 

  const btn = document.getElementById('btn');

  btn.addEventListener('click',() => {

    const n = Math.random();
    if(n < 0.05){
      btn.textContent = 'Lucky'; //5%の確立でLucky
    } else if (n < 0.1){
      btn.textContent = 'Bad'; //10%
    } else if (n < 0.3){
      btn.textContent = 'Extremely Ordinary'; //30%
    } else {
      btn.textContent = 'Ordinary'; //残り55%
    }
    
  }
);
