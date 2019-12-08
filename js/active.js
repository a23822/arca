let nav_wrap = document.getElementsByClassName('nav_wrap')[0];
let nav_btn = document.getElementById('nav_btn');
let nav_btn_txt = nav_btn.getElementsByClassName('btn_txt')[0];
let nav_bg = nav_wrap.getElementsByClassName('bg')[0];

// 해상도 분기
var pc_media = matchMedia("screen and (min-width: 1024px)").matches;
var check_nav_wrap_is_opened = false;

if (pc_media) {
    // pc 해상도 >= 1024px
    // nav_btn
    // - 버튼 호버 시 이벤트
    nav_btn.addEventListener('mouseover', function(){
        nav_btn_txt_change(check_nav_wrap_is_opened);

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
            check_nav_wrap_is_opened = false;
        } else {
            nav_wrap.classList.add('is_opened');
            check_nav_wrap_is_opened = true;
        }
    });
} else {
    // m  해상도 < 1024px
    // nav_btn
    var nav_btn_checked_second_click = false;
    
    // - 클릭 시 이벤트
    nav_btn.addEventListener('click', function(){
        if (nav_btn_checked_second_click) {
            check_nav_wrap_is_opened = nav_btn_second_click(check_nav_wrap_is_opened);
            nav_btn_checked_second_click = false;
        } else {
            nav_btn_txt_change(check_nav_wrap_is_opened);
            nav_btn.classList.add('is_expanded');
            nav_btn_checked_second_click = true;
        }
    });
}

function nav_btn_txt_change(flag) {
    if (flag) {
        nav_btn_txt.innerHTML = 'CLOSE';
    } else {
        nav_btn_txt.innerHTML = 'OPEN';
    }
}

function nav_btn_second_click(flag) {
    if (flag) {
        nav_wrap.classList.remove('is_opened');
        setTimeout(function() {
            nav_btn.classList.remove('is_expanded');
            nav_btn_txt.innerHTML = 'OPEN';
        }, 800);

        return flag = false;
    } else {
        nav_wrap.classList.add('is_opened');
        setTimeout(function() {
            nav_btn.classList.remove('is_expanded');
            nav_btn_txt.innerHTML = 'CLOSE';
        }, 800);

        return flag = true;
    }
    
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