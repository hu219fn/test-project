// varaibles of img:
var stars1 = document.getElementById("stars1");
var moon2 = document.getElementById("moon2");
var mountains3 = document.getElementById("mountains3");
var mountains4 = document.getElementById("mountains4");
var river5 = document.getElementById("river5");
var boat6 = document.getElementById("boat6");
var mountains7 = document.getElementById("mountains7");
var fatima = document.getElementById("fatima");

window.onscroll = function () {
    var value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    fatima.style.fontSize = value + 'px';
    if (scrollY >= 67){
        fatima.style.fontSize = 67 + 'px';
        fatima.style.position = 'fixed';
        if (scrollY >= 455){
            fatima.style.display = 'none';
        }else {
            fatima.style.display = 'block';
        }
    }if (scrollY >= 127) {
        document.querySelector('section').style.background = 'linear-gradient(#376281,#10001f)';
    }
    else{
        document.querySelector('section').style.background = 'linear-gradient(#200016,#10001f)';
    }
}