
let links = document.querySelectorAll('link');

if(window.innerWidth < 375){
    document.getElementById('mobile').style.display = "none";
    document.getElementById('desktop').style.display = "none";
}
document.getElementById('mobile').addEventListener('click', function(){
    if(window.innerWidth > 640){
        links[1].setAttribute('href', 'sass/style_mob.css');
        this.style.display = "none";
        document.getElementById('desktop').style.display = "block";
    }
 }
 )
 document.getElementById('desktop').addEventListener('click', function(){
        links[1].setAttribute('href', 'sass/style.css');
        this.style.display = "none";
        document.getElementById('mobile').style.display = "block";
 }
 )

