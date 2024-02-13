$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

function change(){
    window.location = "index2.html";
}

var i = 0;
var txt = "Hii, See TBH i dont have much to say but i'll just say a few things. I know that am not perfect nor am that caring but i promise abh se i'll pakka improve myself and just wanna say, YOU ARE THE BEST GF IN THIS WHOLE WORLD WHO CARES ALOT FOR ME, I DON'T HAVE WORDS TO DEFINE YOU BUT YOU ARE THE BEST! and i'll never ever leave you, i promise and i'll never ever make my baccha let cry cause of me. Sometimes we'll even face many hard times but i promise you that whatever the condition is i'll never leave my baccha alone in this world... I Love You soo Much!";
var speed = 50;
var time;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("para").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
