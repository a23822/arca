let nav_wrap = document.getElementsByClassName('nav_wrap')[0];
let nav_btn = document.getElementById('nav_btn');
var nav_btn_txt = nav_btn.getElementsByClassName('btn_txt')[0];

// nav_btn
// - 버튼 호버 시 이벤트
nav_btn.addEventListener('mouseover', function(){
    var flag = nav_wrap.classList.contains('is_opened');
    if (flag) {
        nav_btn_txt.innerHTML = 'CLOSE';
    } else {
        nav_btn_txt.innerHTML = 'OPEN';
    }
    this.classList.add('is_expanded');
});

// - 호버 끝날 시 이벤트
nav_btn.addEventListener('mouseout', function(){
    this.classList.remove('is_expanded');
});

// - 클릭 시 이벤트
nav_btn.addEventListener('click', function(){
    var flag = nav_wrap.classList.contains('is_opened');
    if (flag) {
        nav_wrap.classList.remove('is_opened');
    } else {
        nav_wrap.classList.add('is_opened');
    }
});

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