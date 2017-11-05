javascript:
 
var thanks ="Thank you for using A.S.I.S.S.S.T.\n\n\t\t\t\t\t-$carface\n\nExiting. . .";
var score = 5;
do{
if (score<=0 || score >=6){alert("Error! Please input number from 1-5 :)");}
score = prompt("[+] ASISSST v2017.1 [+]\n\nEnter score from 1-5 \nRemember that: \n5 is the highest grade and \n1 is the lowest grade","");
if (score === null || score === false){break;}
}
while(score<=0 || score >=6 );                
 
  if(score==5){score=1;}
  else if(score==4){score=2;}
  else if(score==3){score=3;}
  else if(score==2){score=4;}
  else if(score==1){score=5;}  var radios = document.querySelectorAll('input[type=radio]');
  var nameCount = {};
  for (var i = 0, name; i < radios.length; i++) {
    name = radios[i].name;
    if (!(name in nameCount)) nameCount[name] = 0;
    nameCount[name]++;
  }
  var radioToCheck;
  var x=0;
  for (name in nameCount) {
    if (nameCount[name] === 5) {
      radioToCheck = document.getElementsByName(name)[score-1];
      radioToCheck.checked = true;  
      document.getElementsByClassName('btn btn-success next')[x].click();
      x+=1;
    }
  }
alert("Script done executing :)\n"+thanks);
f0=document.forms[0];
f0['btnSave'].click();
