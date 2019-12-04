const APP_OVERVIEW = document.getElementById('appOverview');
const MYWORK_FANTASY = document.getElementById('myWorkFantasy');
const MYWORK_WEREWOLF = document.getElementById('myWorkWerewolf');
const MYWORK_WORDCOUNT = document.getElementById('myWorkWordCount');

//ファンタジー創作キャラ製造機
//ON
MYWORK_FANTASY.addEventListener('mouseover', () => {
    APP_OVERVIEW.innerHTML = "構想からコーディングまで、初めて一人で制作し、無事に完成まで持っていくことができたWebアプリ。<br>N予備校 動くWebページコンテスト2018夏に応募した物。近い内に追加したい機能がある。";
}, false);

//OUT
MYWORK_FANTASY.addEventListener('mouseout', () => {
    APP_OVERVIEW.innerHTML = "";
}, false);


//人狼GMサポートWebアプリ
//ON
MYWORK_WEREWOLF.addEventListener('mouseover', () => {
    APP_OVERVIEW.innerHTML = "学校内で人狼ゲームのGMを務めることが多く、役職をもっと視覚的にメモできないか、と思ったのがきっかけで制作したWebアプリ。<br>制作期間は2日間。土日を利用して制作した。";
}, false);

//OUT
MYWORK_WEREWOLF.addEventListener('mouseout', () => {
    APP_OVERVIEW.innerHTML = "";
}, false);


//文字カウント
//ON
MYWORK_WORDCOUNT.addEventListener('mouseover', () => {
    APP_OVERVIEW.innerHTML = "特筆するべきことが何もない、ただ文字数をカウントしてくれるだけのサイト。";
}, false);

//OUT
MYWORK_WORDCOUNT.addEventListener('mouseout', () => {
    APP_OVERVIEW.innerHTML = "";
}, false);

