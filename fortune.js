'use strict'; //エラーチェック

  const btn = document.getElementById('btn');//btn要素取得

  btn.addEventListener('click',() => {
    //const results = ['Lucky','Ordinary','Bad','ExtraOrdinary'];
      //const n = Math.floor(Math.random() * results.length)
    //btn.textContent = results[Math.floor(Math.random() * results.length)];
      //btn.textContent = results[n]; ↑定数nを代入せずにそのままぶち込むやり方。
      //より短い文章になる。
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

    //switch (n) {
    //  case 0 :
    //    btn.textContent = 'Lucky';
      //  break;
      //case 1 :
      //  btn.textContent = 'Ordinary';
      //  break;
    //  case 2 :
    //    btn.textContent = 'Bad';
    //    break;
    //  } switchを利用したケース。スペルミス注意。
  }
);
