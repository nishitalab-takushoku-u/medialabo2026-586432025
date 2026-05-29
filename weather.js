
// 課題3-2 のプログラムはこの関数の中に記述すること
let kazu=0;

function print(data) {
   console.log("1件目の検索結果");
   console.log("緯度:", data.coord.lat);
   console.log("経度:", data.coord.lon);
   console.log("天気:", data.weather[0].description);
   console.log("最低気温:", data.main.temp_min);
   console.log("最高気温:", data.main.temp_max);
   console.log("湿度:", data.main.humidity);
   console.log("風速:", data.wind.speed);
   console.log("風向:", data.wind.deg);
   console.log("都市名:", data.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
    let d=document.createElement('div');
    d.setAttribute('id','result');
    let b=document.querySelector('body');
    b.insertAdjacentElement('beforeend',d);

    kazu=kazu+1;

    let u=document.createElement('ul');
    u.classList.add('tenkiii');
    u.style.fontSize='20px';
    let l;

    l=document.createElement('li');
    l.textContent=kazu+"件目の検索結果";
    l.style.fontSize='30px'
    u.insertAdjacentElement('beforeend', l);

    l=document.createElement('li');
    l.textContent="緯度："+data.coord.lat;
    u.insertAdjacentElement('beforeend', l);

    l=document.createElement('li');
    l.textContent="経度："+data.coord.lon;
    u.insertAdjacentElement('beforeend', l);

    l=document.createElement('li');
    l.textContent="天気："+data.weather[0].description;
    u.insertAdjacentElement('beforeend', l);

    l=document.createElement('li');
    l.textContent="最低気温："+data.main.temp_min;
    l.classList.add('samui');
    u.insertAdjacentElement('beforeend', l);

    l=document.createElement('li');
    l.textContent="最高気温："+data.main.temp_max;
    l.classList.add('atui');
    u.insertAdjacentElement('beforeend', l);

    l=document.createElement('li');
    l.textContent="湿度："+data.main.humidity;
    l.classList.add('shitudo');
    u.insertAdjacentElement('beforeend', l);

    l=document.createElement('li');
    l.textContent="風速："+data.wind.speed;
    u.insertAdjacentElement('beforeend', l);

    l=document.createElement('li');
    l.textContent="風向："+data.wind.deg;
    u.insertAdjacentElement('beforeend', l);

    l=document.createElement('li');
    l.textContent="都市名："+data.name;
    u.insertAdjacentElement('beforeend', l);


    if(data.weather[0].description==='曇りがち'){
      let i = document.querySelector('img#tenki');
    i.setAttribute('src', 'kumori.png');
    }
    else if(data.weather[0].description==='厚い雲'){
      let i = document.querySelector('img#tenki');
    i.setAttribute('src', 'kumori.png');
    }
    else if(data.weather[0].description==='雲'){
      let i = document.querySelector('img#tenki');
    i.setAttribute('src', 'kumori.png');
    }
    else if(data.weather[0].description==='晴天'){
      let i = document.querySelector('img#tenki');
    i.setAttribute('src', 'taiyou.png');
    }
    else if(data.weather[0].description==='小雨'){
      let i = document.querySelector('img#tenki');
    i.setAttribute('src', 'ame.png');
    }
    else if(data.weather[0].description==='霧'){
      let i = document.querySelector('img#tenki');
    i.setAttribute('src', 'kiri.png');
    }


    d.insertAdjacentElement('beforeend', u);

   }

   let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let kk = document.querySelector('ul');      // 削除したい要素を検索
kk.remove();

  let pid=document.querySelector('input[name="ran"]');
let kensaku = pid.value;


if(kensaku==='カイロ'){
 id=360630;//カイロのid
}

else if(kensaku==='モスクワ'){
 id=524901;//モスクワid
}

else if(kensaku==='ヨハネスブルク'){
 id=993800;//ヨハネスブルクid
}

else if(kensaku==='北京'){
 id=1816670;//北京id
}

else if(kensaku==='東京'){
 id=1850147;//東京id
}

else if(kensaku==='シンガポール'){
 id=1880252;//シンガポールid
}

else if(kensaku==='シドニー'){
 id=2147714;//シドニーid
}

else if(kensaku==='ロンドン'){
 id=2643743;//ロンドンid
}

else if(kensaku==='パリ'){
 id=2968815;//パリid
}

else if(kensaku==='リオデジャネイロ'){
 id=3451189;//リオデジャイロid
}

else if(kensaku==='ニューヨーク'){
 id=5128581;//ニューヨークid
}

else if(kensaku==='ロサンゼルス'){
 id=5368361;//ロサンゼルス id
}


let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

    axios.get(url)
        .then(showResult)
        .catch(showError)  
        .then(finish);     
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
let data = resp.data;

    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    printDom(data);

    console.log(data.x);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
