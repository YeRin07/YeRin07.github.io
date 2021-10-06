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

/* for(var i=0; i<4; i++) {
    const menuBtn = document.querySelector('.container #navbar .active' + (i+1));
    menuBtn.addEventListener('click', () => {
        nav.classList.remove('active');
        btn.className = burger_class;
    })
} */

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

// 4. scroll function을 넣어 scroll을 트리거로 이벤트를 발생시킨다.
$(window).scroll(function() {
    navOn();
}); */

// Active
/* var targetLink = document.querySelectorAll('.navbar a');{
    for( var j=0; j<targetLink.length; j++){
    targetLink[j].classList.remove('active');
    document.getElementById('tab-content').classList.add('active');
    }
} */


