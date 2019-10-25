
let links = document.querySelectorAll('link');

if(window.innerWidth < 640){
    document.getElementById('mobile').style.display = "none";
    document.getElementById('desktop').style.display = "none";
}

document.getElementById('mobile').addEventListener('click', function(){
    if(window.innerWidth > 640){
        links[3].setAttribute('href', 'style_mob1.css');
        this.style.display = "none";
        document.getElementById('desktop').style.display = "block";
    }
 }
 )
 document.getElementById('desktop').addEventListener('click', function(){
        links[3].setAttribute('href', 'style1.css');
        this.style.display = "none";
        document.getElementById('mobile').style.display = "block";
 }
 )

