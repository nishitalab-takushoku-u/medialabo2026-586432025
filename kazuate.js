// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;
function hantei() {
  kaisu=kaisu+1;
  let yoso;

  let AK=document.querySelector('span#kaisu');
  AK.textContent=kaisu;
  
  let AL=document.querySelector('#left');
  let ALA=AL.value;
  yoso=Number(ALA);

  let YO=document.querySelector('#yoso');
  YO=textContent=yoso;

  let En=document.querySelector('p#result');

  if(yoso===kotae){
    En.textContent='正解です。おめでとう！';
  }
  else if(kaisu>2){
    En.textContent='まちがい。残念でした。答えは'+kotae+'です。';
  }
  else if(yoso<kotae){
    En.textContent='まちがい。答えはもっと大きいですよ';
  }
  else if(yoso>kotae){
    En.textContent='まちがい。答えはもっと小さいですよ';
  }
}
let b= document.querySelector('button#kettei');
b.addEventListener('click',hantei);
  
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録

// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
