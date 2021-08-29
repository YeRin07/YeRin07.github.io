// 스크롤이 최상단에서 벗어나면 navbar 내림 (768px 이상)
window.onscroll = function() {
    if(window.matchMedia("(min-width: 768px)").matches) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
    }
};

// 창 크기 조절 시 width가 768px 이하면 nav바 고정
window.onresize = function(){
    if(window.matchMedia("(max-width: 768px)").matches) {
        document.getElementById("navbar").style.top = "0";
    }
};

// 토글버튼
const toggleBtn = document.querySelector('toogleBtn');
const menu = document.querySelector('#navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


