document.addEventListener('DOMContentLoaded', function() {
    let list = document.querySelector('.anhchuyen .list');
    let items = document.querySelectorAll('.anhchuyen .list .item');
    let dots = document.querySelectorAll('.anhchuyen .dots li')
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    
    
    if (next == null) {
        console.log('memay');
    } else {
        console.log('thanhcong');
    }
    let active = 0;
    let lengthItems = items.length - 1;
    prev.onclick = function(){
        if (active <= 0){
            active = lengthItems;
        } else {
            active = active - 1;
        }
        reloadAnhchuyen();
    }
    
    next.onclick = function () {
        if (active >= lengthItems) {
            active = 0;
        } else {
            active = active + 1;
        }
        reloadAnhchuyen();
    }
    let refreshSlider = setInterval(()=>{next.click()},5000);
    function reloadAnhchuyen() {
        let checkLeft = items[active].offsetLeft;
        console.log(checkLeft);
        list.style.left= -checkLeft + 'px';
        let lastActivedot = document.querySelector('.anhchuyen .dots li.active');
        lastActivedot.classList.remove('active');
        dots[active].classList.add('active');
        clearInterval(refreshSlider);
        refreshSlider = setInterval(()=>{next.click()},5000);
    }
    
    dots.forEach((li, key)=>{
        li.addEventListener('click', function(){
            active=key;
            reloadAnhchuyen();
        })
    })
    
  });