let header_wrap = document.getElementsByClassName('header_wrap')[0];
let header_profile = header_wrap.getElementsByClassName('profile_area')[0];
let header_main_tap_list = header_wrap.getElementsByClassName('main_tap_list')[0];

let header_main_tap = header_main_tap_list.getElementsByClassName('tap_item');

for (var i=0; i<header_main_tap.length; i++) {
    header_main_tap[i].addEventListener('click', function(){
        for (var j=0; j<header_main_tap.length; j++) {
            if (i != j) {
                header_main_tap[j].setAttribute('aria-selected', false);
            }
        }
        console.log(this);
        this.setAttribute('aria-selected', 'true');
    });
}