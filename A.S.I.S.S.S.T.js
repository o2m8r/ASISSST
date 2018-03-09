javascript:

var thanks ="Thank you for using A.S.I.S.S.S.T.\n\n\t\t\t\t\t-Scarface\n\nExiting. . .";
asissst();

function cancel(){
			document.body.lastChild.setAttribute('style','display:none');
			asissstdiv.innerHTML='';
}
function show(){
	document.getElementById('message').style.display = 'block';
	document.getElementById('message').style.visibility = 'visible';
	document.getElementById('addNote').style.display = 'none';
	document.getElementById('addNote').style.visibility = 'hidden';
	document.getElementById('letEmNo').style.display = 'block';
	document.getElementById('letEmNo').style.visibility = 'visible';
}
function shooter(){
		var score = document.getElementById("score").value;
		var btn = document.getElementById("btnPressed").value;
		var message = document.getElementById("message").value;
		var gunShot = document.getElementById("fireSound"); 
		var noBullet = document.getElementById("noAmmo");

		document.getElementById('CM').value = message;
		
		if (score.length > 0 && btn == "true") {
			gunShot.play();
			clearInterval(bulletGrabber);
			
			var radios = document.querySelectorAll('input[type=radio]');
			var nameCount = {};
			for (var i = 0, name; i < radios.length; i++) {
			name = radios[i].name;
			if (!(name in nameCount)) nameCount[name] = 0;
				nameCount[name]++;
			}
			var radioToCheck;
			for (name in nameCount) {
				if (nameCount[name] === 5) {

					radioToCheck = document.getElementsByName(name)[score-1];
					radioToCheck.checked = true;
				}
			}
			alert("Script done executing :)\n"+thanks);
			cancel();
			document.getElementsByName('btnSave')[0].click();
		}else if(score == "" && btn == "true"){
			noBullet.play();
			document.getElementById("btnPressed").value = "false";
			alert("Please select your bullet.");		
		}
}

function asissst(){
		asissstdiv = document.createElement('div');
		asissstdiv.setAttribute('id', 'popup');
		asissstdiv.setAttribute('style', 'position:absolute; top:15%; left:27.5%;z-index:56; background-color:#ffffff;');
		asissstdiv.style.backgroundImage = "url('https://raw.githubusercontent.com/theykneel/ASISSST/master/sniper-silhouette.jpg')"; 
		asissstdiv.style.backgroundRepeat = 'round';
		document.body.appendChild(asissstdiv);

		var fireSound = 'https://raw.githubusercontent.com/theykneel/ASISSST/master/Sniper_Rifle.mp3';
		var noAmmo = 'https://raw.githubusercontent.com/theykneel/ASISSST/master/Out-Of-Ammo.mp3';
		var windowStyle = 'style="height:375px;width:600px;padding:3px;border: 3px solid red;color:brown;"';
		var windowTitle = 'style="text-align:center;font-size:40px;"';
		var windowSubTitle = 'style="text-align:center;font-size:10px;color:brown;"';
		var windowLeft = 'style="width:50%;float:left;text-indent:10px;"';
		var windowRight = 'style="width:50%;float:right;"';
		var facultyStyle = 'style=""';
		var copyright = 'style="text-align:center;color:lime;"';
		var btnFire = 'style="color:white;background-color:red;margin-left:10px;"';
		var faculty = document.getElementsByTagName('h3')[1].innerHTML;
		var textArea = 'style="visibility: hidden;display: none;resize:vertical;margin-left:10px;"';
		var btnAddNote = 'style="color:white;background-color:red;margin-left:10px;"';
		var hide = 'style="visibility: hidden;display: none;"';
		
		asissstdiv.innerHTML= '<div '+ windowStyle +'>'+
		'<button style="float:right;color:white;background-color:red;" onclick="cancel();">X</button><br><p '+ windowTitle +'><b>A.S.I.S.S.S.T.</b><br>'+
		'<a '+ windowSubTitle +'>Automated SIS Survey ScripT</a></p>'+
		'<div '+ windowLeft +'>Faculty Name:<div><a style="text-indent:10px;color:red;">├┘</a></div>'+
		'<div '+ facultyStyle +'><a style="text-indent:10px;color:red;">└─-</a> '+ faculty +'</div>'+
		'<br><button onclick="show();" id="addNote" '+ btnAddNote +'>Add note</button>'+
		'<p id="letEmNo" '+ hide +'>Let \'em kno wat u feel ;)</p>'+
		'<textarea name="message" rows="4" cols="33" id="message" '+ textArea +'></textarea>'+
		'</div><div '+ windowRight +'>Choose your bullet:<br>'+
		'<a style="text-indent:10px;color:red;">'+
		' ├─-</a><input type="radio" id="score5" name="score" value="1" onchange="document.getElementById(\'score\').value=1" onkeydown="document.getElementById(\'btnPressed\').value=\'true\'"/>Outstanding Bullet<br>'+
		'<a style="text-indent:10px;color:red;">'+
		' ├─-</a><input type="radio" id="score4" name="score" value="2" onchange="document.getElementById(\'score\').value=2" onkeydown="document.getElementById(\'btnPressed\').value=\'true\'"/>Very Satisfactory Bullet<br>'+
		'<a style="text-indent:10px;color:red;">'+
		' ├─-</a><input type="radio" id="score3" name="score" value="3" onchange="document.getElementById(\'score\').value=3" onkeydown="document.getElementById(\'btnPressed\').value=\'true\'"/>Satisfactory Bullet<br>'+
		'<a style="text-indent:10px;color:red;">'+
		' ├─-</a><input type="radio" id="score2" name="score" value="4" onchange="document.getElementById(\'score\').value=4" onkeydown="document.getElementById(\'btnPressed\').value=\'true\'"/>Fair Bullet<br>'+
		'<a style="text-indent:10px;color:red;">'+
		' ├─-</a><input type="radio" id="score1" name="score" value="5" onchange="document.getElementById(\'score\').value=5" onkeydown="document.getElementById(\'btnPressed\').value=\'true\'"/>Poor Bullet<br>'+
		'<a style="text-indent:10px;color:red;">'+
		' └─-</a><input type="button" name="btnSubmit" value="Fire!" onclick="document.getElementById(\'btnPressed\').value=\'true\'" '+ btnFire +'/></div></div>'+
		'<input type="hidden" id="btnPressed" name="btnPressed" value="false" />'+
		'<div '+ copyright +'>&copyScarface</div><input type="hidden" id="score" value=""><audio id="fireSound">'+
		'<source src="'+ fireSound +'" type="audio/mp3"></audio>'+
		'<audio id="noAmmo"><source src="'+ noAmmo +'" type="audio/mp3"></audio>';

		bulletGrabber = setInterval(shooter,1000);
		
	  var options = options || {};
	  var zindex = options.zindex || 50;
	  var opacity = options.opacity || 70;
	  var opaque = (opacity / 100);
	  var bgcolor = options.bgcolor || '#000000';
	  var dark=document.getElementById('darkenScreenObject');

	    var pageBody = document.getElementsByTagName("body")[0];
	    var pageBG = document.createElement('div');           
	        pageBG.style.position='absolute';
	        pageBG.style.top='0px';
	        pageBG.style.left='0px';
	        pageBG.style.overflow='hidden';        
	        pageBG.style.display='none';
	        pageBG.id='darkenScreenObject';
	    pageBody.appendChild(pageBG);
	    dark=document.getElementById('darkenScreenObject');
	  

	    dark.style.opacity=opaque;
	    dark.style.MozOpacity=opaque;
	    dark.style.filter='alpha(opacity='+opacity+')';
	    dark.style.zIndex=zindex;
	    dark.style.backgroundColor=bgcolor;
	    dark.style.width= '100%';
	    dark.style.height= '8000px';
	    dark.style.display='block';

}

