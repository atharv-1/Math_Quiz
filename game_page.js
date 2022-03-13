player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;


document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;


document.getElementById("player1_name").innerHTML=player1_name+"=";
document.getElementById("player2_name").innerHTML=player2_name+"=";


document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;


function send(){
  get_word = document.getElementById("word").value;
  word=get_word.toLowerCase();
  console.log(word);  


  letter1=word.charAt(1);
  console.log(letter1);


  length_middle_letter=Math.floor(word.length/2);
  letter2=word.charAt(length_middle_letter);
console.log(letter2);


last_letter_number=word.length-1;
letter3=word.charAt(last_letter_number);
console.log(letter3);


replace_letter1=word.replace(letter1,"_");
console.log(replace_letter1);


replace_letter2=replace_letter1.replace(letter2,"_");
console.log(replace_letter2);


replace_letter3=replace_letter2.replace(letter3,"_");
console.log(replace_letter3);


question_word="<h4 id='word_display'> Q: "+replace_letter3+"</h4>";
input_box="<br>Answer: <input id='input_check_box'type='text'>";
check_button="<br><br><button class='btn btn-info'onclick='check()'>check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}


Question_turn="player1";
Answer_turn="player2";



function check(){
  get_answer=document.getElementById("input_check_box").value;
  final_answer=get_answer.toLowerCase();
  console.log(final_answer);



  if(final_answer == word){
if(Answer_turn == "player1"){
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
}
else{
  player2_score=player2_score+1;
  document.getElementById("player2_score").innerHTML=player2_score;
}
  }
  
  if(Question_turn == "player1"){
Question_turn="player2";
document.getElementById("player_question").innerHTML="Question Turn: "+player2_name;
  }
else{
  Question_turn="player1";
  document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
}

if(Answer_turn == "player1"){
Answer_turn="player2";
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
} 

else{
  Answer_turn="player1";
  document.getElementById("player_answer").innerHTML="Answer Turn: "+player1_name;
  
}
document.getElementById("output").innerHTML="";
}
