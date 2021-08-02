var tableMain = document.getElementById("tableMain");
var lengthX = document.getElementById("lengthX");
var lengthY = document.getElementById("lengthY");
var submitGenerate = document.getElementById("submitGenerate");
var variableX = 0;
var variableY = 0;

function fun(x, y){
	return Math.pow(Math.E, (-(x + y))) * (1 + Math.cos(2 * Math.PI * (y / 10)));
}

function generate() {
	variableX = lengthX.value;
	variableY = lengthY.value;
	var array_main = [];
	var array_sum = [];
	var i = 0;
	var j = 0;
	var flag = document.getElementsByTagName("tr");
	if (flag != 0) {
		while (tableMain.firstChild) {
    		tableMain.removeChild(tableMain.firstChild);
    	} 
    }
	for (i = 0; i < variableX; i++) {
		var tr_main = document.createElement("tr");
		array_main[i] = [];
		array_sum[i] = [];
		for (j = 0; j < variableY; j++) {
			array_main[i][j] = Math.ceil(Math.random()*1000);
			//array_main[i][j] = fun(variableX - 1 - i, j);

			array_sum[i][j] = 0;
			var td_main = document.createElement("td");
			td_main.innerHTML = array_main[i][j];
			td_main.id = "td" + i + "-" + j;
			tr_main.appendChild(td_main);
		}
		tableMain.appendChild(tr_main);
	}

	array_sum[0][variableY - 1] = array_main[0][variableY - 1];
	for (j = variableY - 2; j >= 0; --j) {
		array_sum[0][j] = array_sum[0][j + 1] + array_main[0][j];
	}

	for (i=1; i < variableX; ++i) {
		array_sum[i][variableY - 1] = array_sum[i - 1][variableY - 1] + array_main[i][variableY - 1];
		for (j = variableY - 2; j >= 0; --j) {
			if(array_sum[i - 1][j] <= array_sum[i][j + 1]) {
				array_sum[i][j] = array_main[i][j] + array_sum[i - 1][j];
			}
			else {
				array_sum[i][j] = array_main[i][j] + array_sum[i][j + 1];
			}
		}
	}

	j = 0;
	i = variableX - 1;
	var metka = document.getElementById("td" + i + "-" + j);
	metka.style.background = "green";

	while (true) {
		if (i == 0 && j == variableY - 1) {
			break;
		}
		if (j != variableY - 1) {
			if (i != 0 && (array_sum[i - 1][j] <= array_sum[i][j + 1])) {
				i--;
				metka = document.getElementById("td" + i + "-" + j);;
				metka.style.background = "green";
			}
			else {
				j++;
				metka = document.getElementById("td" + i + "-" + j);;
				metka.style.background = "green";
			}
		}
		else {
			if( j != variableY - 1) {
				j--;
				metka = document.getElementById("td" + i + "-" + j);;
				metka.style.background = "green";
			}
			else {
				i--;
				metka = document.getElementById("td" + i + "-" + j);;
				metka.style.background = "green";
			}
		}
	}
}

submitGenerate.addEventListener("click", generate);
