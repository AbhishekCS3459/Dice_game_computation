
window.onload = function(){
   
    get_names();
}
var player1;
var player2;
function get_names(){
    player1 = prompt(" Enter Player 1 Game Name")
    player2 = prompt(" Enter Player 2 Game Name")
   document.getElementsByClassName("player1")[0].innerHTML=player1; 
   document.getElementsByClassName("player2")[0].innerHTML=player2; 
}
function img_changer() {
    var x = Math.floor(Math.random() * 6) + 1;
    var y = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src","images/dice"+x+".png");  
     document.querySelector(".img2").setAttribute("src","images/dice"+y+".png"); 
     if (x>y) {
        document.getElementsByClassName("winner")[0].innerHTML=player1+" Wins the match🎉🎉🎉"; 
     }
     else if(x==y){
        document.getElementsByClassName("winner")[0].innerHTML="Match Tie 😢"; 
     }
     else{
     
        document.getElementsByClassName("winner")[0].innerHTML=player2+" Wins the match🎉🎉🎉"; 
     } 
  
}