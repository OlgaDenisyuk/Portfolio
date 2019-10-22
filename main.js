 
 let items = document.querySelectorAll('.item');
 let currentItem = 0;
 let isInable = true;

 function changeCurrentItem(n) {
     currentItem = (n + items.length) % items.length;
 }

 function hideItem(direction) {
    isInable = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('active', direction);
    })
 }
 function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('next', direction);
        this.classList.add('active');
        isInable = true;
    })
 }

 function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
 }
 function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
 }

 document.querySelector('.control.left').addEventListener('click', function() {
    if(isInable){
        previousItem(currentItem);
    }
 })

 document.querySelector('.control.right').addEventListener('click', function() {
    if(isInable){
        nextItem(currentItem);
    }
 })

 const swipedetect = (el) => {

 }
 let el = document.querySelector('.carousel');
 swipedetect(el);