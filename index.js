//var sound=new Audio('sounds/tom-1.mp3');
function play(identity){
  switch (identity) {
    case 'w':
      var sound=new Audio('sounds/crash.mp3');
      sound.play();
      break;
    case 'a':
      var sound=new Audio('sounds/kick-bass.mp3');
      sound.play();
      //this.style.color="blue";
      break;
    case 's':
      var sound=new Audio('sounds/snare.mp3');
      sound.play();
      //this.style.color="green";
      break;
    case 'd':
      var sound=new Audio('sounds/tom-1.mp3');
      sound.play();
      //this.style.color="yellow";
      break;
    case 'j':
      var sound=new Audio('sounds/tom-2.mp3');
      sound.play();
      //this.style.color="yellow";
      break;
    case 'k':
      var sound=new Audio('sounds/tom-3.mp3');
      sound.play();
      //this.style.color="yellow";
      break;
    case 'l':
      var sound=new Audio('sounds/tom-4.mp3');
      sound.play();
      //this.style.color="yellow";
      break;
    default:

  }
}
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    //sound.play();
    var identity=this.innerHTML;
    play(identity);
    highlight("."+identity);

  });
}

document.addEventListener("keydown",function(a){
  var temp=a.key;
  play(temp);
  highlight("."+temp);
})
function highlight(clss){
  document.querySelector(clss).classList.add("pressed");
  setTimeout(function(){
    document.querySelector(clss).classList.remove("pressed");
  },100);
}
