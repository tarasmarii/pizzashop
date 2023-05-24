function playVideo() {
    document.querySelector('.video').classList.remove('display-none');
    document.querySelector('.video-content').classList.add('show');
    document.querySelector('.video-preview').classList.add('display-none');
    document.querySelector('video').play();
}

function closeVideo() {
    document.querySelector('.video').classList.add('display-none');
    document.querySelector('.video-content').classList.remove('show');
    document.querySelector('.video-preview').classList.remove('display-none');
    document.querySelector('video').pause();
}
function switcher() {
    let leftBtn = document.querySelector('.switch-left');
    let rightBtn = document.querySelector('.switch-right');
    leftBtn.classList.toggle("switch-on");
    rightBtn.classList.toggle("switch-on");
}
let playBtn = document.querySelector('.play');
playBtn.addEventListener("click", function () {
    playVideo();

});

let closeBtn = document.querySelector('.close');
closeBtn.addEventListener("click", function () {
    closeVideo();
});

let switchBtn = document.querySelector('.main__btns');
switchBtn.addEventListener("click", function () {
    switcher()
});
function mobileNav(btn) {
    let headerNav = document.querySelector('.nav');
    btn.classList.toggle("active");
    headerNav.classList.toggle("mobile");
}
let mobileBtn = document.querySelector('.mobile_btn');
mobileBtn.addEventListener("click", function () {
    mobileNav(mobileBtn)
});