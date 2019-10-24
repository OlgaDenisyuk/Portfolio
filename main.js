 
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

   let surface = el; 
   let startX = 0;
   let startY = 0;
   let distX = 0;
   let distY = 0;
   let dist = 0;

   let startTime = 0;
   let elapsedTime = 0;

   let threshold = 150;
   let restraint = 100;
   let allowedTime = 300;

   surface.addEventListener('mousedown', function(e){
      startX = e.pageX;
      startY = e.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
   })

   surface.addEventListener('mouseup', function(e){
      distX = e.pageX - startX;
      distY = e.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;
      
      if(elapsedTime <= allowedTime){
         if( Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
            if(distX > 0){
               if(isInable){
                  previousItem(currentItem);
               }
            }
            else{
               if(isInable){
                  nextItem(currentItem);
               }
            }
         }
      }
      e.preventDefault();
   })

   surface.addEventListener('touchstart', function(e){
      if(e.target.classList.contains('arrow') || e.target.classList.contains('control')){
         if(e.target.classList.contains('left')){
            if(isInable){
               previousItem(currentItem);
            }
            else if(e.target.classList.contains('right')){
               if(isInable){
                  nextItem(currentItem);
               }
            }
         }
      }

      let touchObj = e.changedTouches[0];
      startX = touchObj.pageX;
      startY = touchObj.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
   })

   surface.addEventListener('touchmove', function(e){
      e.preventDefault();
   })

   surface.addEventListener('touchend', function(e){
      let touchObj = e.changedTouches[0];
      distX = touchObj.pageX - startX;
      distY = touchObj.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;
      
      if(elapsedTime <= allowedTime){
         if( Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
            if(distX > 0){
               if(isInable){
                  previousItem(currentItem);
               }
            }
            else{
               if(isInable){
                  nextItem(currentItem);
               }
            }
         }
      }
      e.preventDefault();
   })

 }
 let el = document.querySelector('.carousel');
 swipedetect(el);