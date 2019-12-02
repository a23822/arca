let header_wrap = document.getElementsByClassName('header_wrap')[0];
let header_profile = header_wrap.getElementsByClassName('profile_area')[0];
let header_main_tap_list = header_wrap.getElementsByClassName('main_tap_list')[0];

let header_main_tap = header_main_tap_list.getElementsByClassName('tap_item');
let alliance_wrap = document.getElementById('alliance_wrap');
let kow_wrap = document.getElementById('kow_wrap');
let tip_wrap = document.getElementById('tip_wrap');
var tap_check = 0;

for (var i=0; i<header_main_tap.length; i++) {
    header_main_tap[i].addEventListener('click', function(){
        for (var j=0; j<header_main_tap.length; j++) {
            if (i != j) {
                header_main_tap[j].setAttribute('aria-selected', false);
            }
        }
        var tap_id = this.id;
        this.setAttribute('aria-selected', 'true');
        
        if (tap_id == 'alliance_tap') {
            alliance_wrap.style.display = 'block';
            kow_wrap.style.display = 'none';
            tip_wrap.style.display = 'none';
        } else if (tap_id == 'kow_tap') {
            alliance_wrap.style.display = 'none';
            kow_wrap.style.display = 'block';
            tip_wrap.style.display = 'none';
        } else if (tap_id == 'tip_tap') {
            alliance_wrap.style.display = 'none';
            kow_wrap.style.display = 'none';
            tip_wrap.style.display = 'block';
        }
<<<<<<< HEAD
    });
}

let alliance_info = alliance_wrap.getElementsByClassName('info');

for (var i=0; i<alliance_info.length; i++) {
    alliance_info[i].addEventListener('click', function(){
        var flag = this.classList.contains('info_hidden');
        this.classList.toggle('info_hidden');
        this.classList.toggle('info_opened');
=======
>>>>>>> 9c846dc064f9b14dcdad30e41c61b1b378562b87
    });
}
