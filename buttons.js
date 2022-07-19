function cifraUp(){
	document.getElementById("preCifra").innerHTML = transpose_up(parseInt(document.getElementById("buttonSteps").value)+1, document.getElementById("text").value);
	document.getElementById("buttonSteps").value++;
	ajustaStep();
}

function cifraDown(){
	document.getElementById("preCifra").innerHTML = transpose_up(parseInt(document.getElementById("buttonSteps").value)-1, document.getElementById("text").value);
	document.getElementById("buttonSteps").value--;
	ajustaStep();
}

function cifraReset(){
	document.getElementById("preCifra").innerHTML =  document.getElementById("text").value;
	document.getElementById("buttonSteps").value=0;
}

function ajustaStep(){
	let a = parseInt(document.getElementById("buttonSteps").value);
	if (a >= 12) a -= 12;
	if (a <= -12) a += 12;
	document.getElementById("buttonSteps").value=a;
}