javascript:
 
 
var thanks ="Thank you for using A.S.I.S.S.S.T.\n\n\t\t\t\t\t-$carface\n\nExiting. . .";
var error = "Error! Please input number from 1-5 :)";
do{
var check=0,flag1=0,flag2=0;
var score;
var input1,input2;
score = prompt("[+] ASISSST v2017.1 [+]\n\nEnter score from 1-5 \nOr Combo Number(45)\nRemember that: \n5 is the highest grade and \n1 is the lowest grade","");
 if (score.length < 1) {
    check=1;
   alert('Error no input');}
 else if(score.length < 2){
    input1 = score.substring(0,1);
    if(input1 <= 0 || input1 >= 6){check=1}
    if(input1==5){input1=1;}else if(input1==4){input1=2;}else if(input1==3){input1=3;}else if(input1==2){input1=4;}else if(input1==1){input1=5;}
    flag1=1;
    if(check==1){alert(error);}
}
 else if(score.length < 3){
    input1 = score.substring(0,1);
    input2 = score.substring(1,2);
    if(input1 <= 0 || input1 >= 6 || input2 <= 0 || input2 >= 6){check=1}
    if(input1==5){input1=1;}else if(input1==4){input1=2;}else if(input1==3){input1=3;}else if(input1==2){input1=4;}else if(input1==1){input1=5;}
    if(input2==5){input2=1;}else if(input2==4){input2=2;}else if(input2==3){input2=3;}else if(input2==2){input2=4;}else if(input2==1){input2=5;}
    flag2=2;
    if(check==1){alert(error);}
}
else{
    alert('Error combo length!');check=1;
}
}
while(check==1);
 
  var radios = document.querySelectorAll('input[type=radio]');
  var nameCount = {};
  for (var i = 0, name; i < radios.length; i++) {
    name = radios[i].name;
    if (!(name in nameCount)) nameCount[name] = 0;
    nameCount[name]++;
  }
  var radioToCheck;
  var x=0;  var z=1;
 
if(flag1 === 1){
 
  for (name in nameCount) {
    if (nameCount[name] === 5) {
 
        radioToCheck = document.getElementsByName(name)[input1-1];
        radioToCheck.checked = true;
    }
  }}else if(flag2 === 2){
 
  for (name in nameCount) {
    if (nameCount[name] === 5) {
 
        radioToCheck = document.getElementsByName(name)[input1-1];z+=1;
        if(z%2==0){radioToCheck = document.getElementsByName(name)[input2-1];}
        radioToCheck.checked = true;
    }
  }
}
/*
    for(x=0;x<=19;x++){
        document.getElementsByClassName('btn btn-success next')[x].click();
}
*/
 
alert("Script done executing :)\n"+thanks);
document.getElementsByName('btnSave')[0].click();
