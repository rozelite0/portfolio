const APP_OVERVIEW = document.getElementById('appOverview');
const MYWORK_FANTASY = document.getElementById('myWorkFantasy');
const MYWORK_WEREWOLF = document.getElementById('myWorkWerewolf');
const MYWORK_WORDCOUNT = document.getElementById('myWorkWordCount');

//ファンタジー創作キャラ製造機
MYWORK_FANTASY.addEventListener('mouseover', () => {
    APP_OVERVIEW.innerHTML = "構想からコーディングまで、初めて一人で制作し、無事に完成まで持っていくことができたWebアプリ。";
}, false);

MYWORK_FANTASY.addEventListener('mouseout', () => {
    APP_OVERVIEW.innerHTML = "";
}, false);


//人狼GMサポートWebアプリ
MYWORK_WEREWOLF.addEventListener('mouseover', () => {
    APP_OVERVIEW.innerHTML = "学校内で人狼ゲームのGMを務めることが多く、役職をもっと視覚的にメモできないか、と思ったのがきっかけで制作したWebアプリ。<br>制作期間は2日間。土日を利用して制作した。";
}, false);

MYWORK_WEREWOLF.addEventListener('mouseout', () => {
    APP_OVERVIEW.innerHTML = "";
}, false);


//文字カウント
MYWORK_WORDCOUNT.addEventListener('mouseover', () => {
    APP_OVERVIEW.innerHTML = "ただ文字数をカウントしてくれるだけのサイト。";
}, false);

MYWORK_WORDCOUNT.addEventListener('mouseout', () => {
    APP_OVERVIEW.innerHTML = "";
}, false);

//メニューバー
$(function() {
    var offset = $('#globalNavi').offset();

    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $('#globalNavi').addClass('fixed');
        } else {
            $('#globalNavi').removeClass('fixed');
        }
    });
});

//メニューバーの目次
$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 550;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

//Top image
$(window).on('scroll', function() {

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 5;

    if (bgPosition) {
        $('#imageScroll').css('background-position', 'center top -' + bgPosition + 'px');
    }
});