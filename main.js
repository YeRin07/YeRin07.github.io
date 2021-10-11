// 스크롤이 최상단에서 벗어나면 navbar 내림 (768px 이상)
window.onscroll = function() {
    if(window.matchMedia("(min-width: 1315px)").matches) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-200px";
        }
    }
};

// 창 크기 조절 시 width가 768px 이하면 nav바 고정
window.onresize = function(){
    if(window.matchMedia("(max-width: 1315px)").matches) {
        document.getElementById("navbar").style.top = "0";
    }
};

// 토글버튼
const toggleBtn = document.querySelector('.navbar__toogleBtn');

// 메뉴 아이콘
const btn = document.getElementById("menu-icon");
const burger_class = "fas fa-bars";
const close_class = "fas fa-times";

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    btn.className = btn.className ==
        burger_class ? close_class : burger_class;
});

const menuBtns = document.querySelectorAll('.container #navbar li');
const nav = document.querySelector('.container #navbar');

for(var menuBtn of menuBtns) {
    menuBtn.addEventListener('click', () => {
        nav.classList.remove('active');
        btn.className = burger_class;
    })
}

//타이핑 애니메이션
const content = "'소통하며 채워나가는 개발자입니다.'\u00A0";
const text = document.querySelector(".contents");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt;
    if (i > content.length) {
        text.textContent = '\u00A0';
        i = 0;
    }
}
setInterval(typing, 200);

/* function navOn() {
    var nowTop = $(window).scrollTop();
    var sec1_offset = $('#main').offset().top - 120;
    var sec2_offset = $('#about-me').offset().top - 120;
    var sec3_offset = $('#portfolio').offset().top - 120;
    var sec4_offset = $('#contact').offset().top - 120;

    $('#gnb > li').removeClass('on');

    if (nowTop >= 0 && nowTop < sec2_offset) {
        $('#main > li').eq(0).addClass('on');
    } else if (nowTop >= sec2_offset && nowTop < sec3_offset) {
        $('#about-me > li').eq(2).addClass('on');
    } else if (nowTop >= sec3_offset && nowTop < sec4_offset) {
        $('#portfolio > li').eq(3).addClass('on');
    } else if (nowTop >= sec4_offset) {
        $('#contact > li').eq(5).addClass('on');
        
    }
};
navOn();

/* // 스크롤 위치에 맞게 헤더 활성화
$(window).scroll(function() {
    let scroll = $(window).scrollTop();

    for (let i = 0; i < $(".navbar li").length; i++) {
        let articleTop = $(".navbar li").eq(i).offset().top;
        let articleBottom = articleTop + $(".navbar li").eq(i).outerHeight();
        let winHeight = $(window).height();
        let scrollBottom = $(".container").height() - winHeight - 50;

        if (scroll >= articleTop - 51 && scroll < articleBottom) {
            $(".navbar li a").removeClass("active");
            $(".navbar li a").eq(i).addClass("active");
        }

        if (scroll >= scrollBottom) {
            $(".navbar li a").eq(2).removeClass("active");
            $(".navbar li a").eq(3).addClass("active");
        }
    } */


