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

//JQuery

$(function () {
    //グローバルナビの座標を取得
    var offset = $('#globalNavi').offset();

    /* スクロールイベント */
    $(window).scroll(function () {
        //scrollTopで現在のスクロールの縦位置を取得
        //現在の縦位置とグローバルの縦座標位置を比較して、スクロール位置がグローバルナビより下になった場合、addclass
        if ($(window).scrollTop() > offset.top) {
            $('#globalNavi').addClass('fixed');
            //グローバルナビより上だったらclassを削除    
        } else {
            $('#globalNavi').removeClass('fixed');
        }
    });
    /* */
});

//ナビのリンクをクリックしたとき、スムーススクロールする
$(function () {
    //#で始まるリンクをクリックしたとき実行される
    $('a[href^="#"]').click(function () {
        //数字が増えるほど遅くなる
        var speed = 550;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

//スクロールすると画像も少し動く
$(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 5; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

    if (bgPosition) {
        $('#imageScroll').css('background-position', 'center top -' + bgPosition + 'px');
    }
});

//
$(function () {
    $('.blue-line').each(function () {
        var $win = $(window),
            $winH = $win.height(),
            $connect = $(this),
            position = $connect.offset().top,
            current = 0,
            scroll;
        $win.on('load scroll', function () {
            scroll = $win.scrollTop();
            current = (1 - (position - scroll) / $winH) * 2 * 100;
            if (current > 99.9) {
                current = 100;
            }
            if (scroll > position - $winH) {
                $connect.css({ width: current + '%' });
            }
        });
    });
});

