let header_wrap = document.getElementsByClassName('header_wrap')[0];

// 해상도 분기
var pc_media = matchMedia("screen and (min-width: 1024px)").matches;
var check_nav_wrap_is_opened = false;

if (pc_media) {
    // pc 해상도 >= 1024px

} else {
    // m  해상도 < 1024px

}

// 메뉴 관련
let menu_btn = header_wrap.getElementsByClassName('menu_btn')[0];

menu_btn.addEventListener('click', function(){
    console.log(header_wrap.getAttribute('aria-expanded'))
    if (header_wrap.getAttribute('aria-expanded') == 'true') {
        header_wrap.setAttribute('aria-expanded', 'false');
    } else {
        header_wrap.setAttribute('aria-expanded', 'true');
    }
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