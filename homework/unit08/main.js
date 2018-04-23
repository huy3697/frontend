function ve2(){
	var dong = document.getElementsByName('dong')[0].value;
	var cot = document.getElementsByName('cot')[0].value;
	var hinh ="";

	for (var i = 0; i <= dong; i++) {
		for (var j = 0; j <= cot; j++) {
			hinh += "*";
		}
		hinh += "<br>";
	}
	document.getElementById("text").innerHTML=hinh; //innerHTML: la thay the noi dung trong khoi do bang chuoi moi
}

function ve1(){
	var dong = document.getElementsByName('dong')[0].value;
	var cot = document.getElementsByName('cot')[0].value;
	var hinh ="";

	for (var i = 1; i <= dong; i++) {
		for (var j = 1; j <= cot; j++) {
			if(j<=i){
				hinh += "*";
			}
		}
		hinh += "<br>";
	}
	document.getElementById("text").innerHTML=hinh; //innerHTML: la thay the noi dung trong khoi do bang chuoi moi
}

function ve4(){
	var dong = document.getElementsByName('dong')[0].value;
	var cot = document.getElementsByName('cot')[0].value;
	var hinh ="";

	for (var i = 1; i <= dong; i++) {
		for (var j = cot; j >= 1; j--) {
			if(j>=i){
				hinh += "*";
			}
		}
		hinh += "<br>";
	}
	document.getElementById("text").innerHTML=hinh; //innerHTML: la thay the noi dung trong khoi do bang chuoi moi
}

function ve3(){
	var dong = document.getElementsByName('dong')[0].value;
	var cot = document.getElementsByName('cot')[0].value;
	var hinh ="";

	for (var i = 1; i <= dong; i++) {
		for (var j = 1; j <= cot; j++) {
			if(i==1 || i == dong){
				hinh += "*";
			}else{
				if(j==1 || j==cot){
					hinh+="*";
				}else{
					hinh+="&nbsp&nbsp";
				}
			}
		}
		hinh += "<br>";
	}
	document.getElementById("text").innerHTML=hinh; //innerHTML: la thay the noi dung trong khoi do bang chuoi moi
}