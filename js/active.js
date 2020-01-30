let header_wrap = document.getElementsByClassName('header_wrap')[0];

// 해상도 분기
var pc_media = matchMedia("screen and (min-width: 1024px)").matches;
var check_nav_wrap_is_opened = false;

if (pc_media) {
    // pc 해상도 >= 1024px

} else {
    // m  해상도 < 1024px

}

//메뉴 관련
let menu_btn = document.getElementsByClassName('menu_btn')[0];
let nav_wrap = document.getElementsByClassName('nav_wrap')[0];

// - 메뉴 펼침 접음
menu_btn.addEventListener('click', function(){
    if (!nav_wrap.classList.contains('ani_on')) {
        nav_wrap.classList.add('ani_on');
    }
    if (nav_wrap.getAttribute('aria-expanded') == 'true') {
        menu_btn.setAttribute('aria-pressed', 'false');
        nav_wrap.setAttribute('aria-expanded', 'false');
    } else {
        menu_btn.setAttribute('aria-pressed', 'true');
        nav_wrap.setAttribute('aria-expanded', 'true');
    }
});

// 메뉴 프로필 관련
let profile_area = header_wrap.getElementsByClassName('profile_area')[0];
let thumb_wrap = profile_area.getElementsByClassName('thumb_wrap')[0];
let thumb_btn = profile_area.getElementsByClassName('thumb_btn')[0];
let profile_layer = profile_area.getElementsByClassName('profile_layer')[0];
let profile_back_btn = profile_layer.getElementsByClassName('back_btn')[0];


thumb_btn.addEventListener('click', function(){
    if (thumb_btn.getAttribute('aria-pressed') == 'false') {
        thumb_btn.setAttribute('aria-pressed', 'true');
        profile_layer.classList.add('show');
        profile_back_btn.setAttribute('aria-pressed', 'false');
    }
});

profile_back_btn.addEventListener('click', function(){
    if (profile_back_btn.getAttribute('aria-pressed') == 'false') {
        profile_back_btn.setAttribute('aria-pressed', 'true');
        profile_layer.classList.remove('show');
        thumb_btn.setAttribute('aria-pressed', 'false');
    }
});

// 로그인 관련
let btn_sign_in = profile_area.getElementsByClassName('btn_sign_in')[0];

btn_sign_in.addEventListener('click', function(){
    btn_sign_in.setAttribute('aria-pressed', 'true');
    thumb_wrap.classList.add('is_login');
});

// 로그아웃 관련
let btn_sign_out = profile_layer.getElementsByClassName('btn_sign_out')[0];

btn_sign_out.addEventListener('click', function(){
    btn_sign_out.setAttribute('aria-pressed', 'true');
    thumb_wrap.classList.remove('is_login');
    profile_layer.classList.remove('show');
    thumb_btn.setAttribute('aria-pressed', 'false');
});


// 팝 버튼 관련
// function menu_btn_pop_up() {
//     pop_btn_area.style.display = 'block';
//     for (var i = 0; i<pop_btn.length; i++) {
//         var anim_delay = 1.0 + 0.15 * i;
//         pop_btn[i].style['animation'] = "menu_btn_pop_up " + String(anim_delay) + "s ease-in-out forwards";
//     }
// }

// function menu_btn_pop_down() {
//     for (var i = 0; i<pop_btn.length; i++) {
//         var j = pop_btn.length - i -1;
//         var anim_delay = (0.5 + 0.15 * pop_btn.length) - 0.15 * j;
//         pop_btn[j].style['animation'] = "menu_btn_pop_down " + String(anim_delay) + "s ease-in-out forwards";
//     }
// }

// 딜레이
function delay(time) {
    var date = Date.now();
    let temp = null;
    do {
        temp = Date.now();
    } while (temp - date < time);
}



// let header_main_tap = header_main_tap_list.getElementsByClassName('tap_item');
// let alliance_wrap = document.getElementById('alliance_wrap');
// let kow_wrap = document.getElementById('kow_wrap');
// let tip_wrap = document.getElementById('tip_wrap');
// var tap_check = 0;

// for (var i=0; i<header_main_tap.length; i++) {
//     header_main_tap[i].addEventListener('click', function(){
//         for (var j=0; j<header_main_tap.length; j++) {
//             if (i != j) {
//                 header_main_tap[j].setAttribute('aria-selected', false);
//             }
//         }
//         var tap_id = this.id;
//         this.setAttribute('aria-selected', 'true');
        
//         if (tap_id == 'alliance_tap') {
//             alliance_wrap.style.display = 'block';
//             kow_wrap.style.display = 'none';
//             tip_wrap.style.display = 'none';
//         } else if (tap_id == 'kow_tap') {
//             alliance_wrap.style.display = 'none';
//             kow_wrap.style.display = 'block';
//             tip_wrap.style.display = 'none';
//         } else if (tap_id == 'tip_tap') {
//             alliance_wrap.style.display = 'none';
//             kow_wrap.style.display = 'none';
//             tip_wrap.style.display = 'block';
//         }
//     });
// }