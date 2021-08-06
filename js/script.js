var tableMain = document.getElementById("tableMain");
var lengthX = document.getElementById("lengthX");
var lengthY = document.getElementById("lengthY");
var submitGenerate = document.getElementById("submitGenerate");
var variableX = 0;
var variableY = 0;
tableMain.style.border = "none";

function fun1(x, y) {return 5*x+x*Math.pow(y,2)+6*y;}
function fun2(x, y) {return 1+Math.sin(2*Math.PI*x/10)+y;}
function fun3(x, y) {return Math.pow(Math.sin(2*Math.PI*x/10),2)+x*y;}
function fun4(x, y) {return 1+Math.pow(Math.sin(2*Math.PI*y/10),2)+x;}
function fun5(x, y) {return 5*x+x*Math.pow(y,2)+6*y;}
function fun6(x, y) {return 1+Math.cos(2*Math.PI*x/10)+y;}
function fun7(x, y) {return Math.pow(Math.sin(2*Math.PI*y/10),2)+x*y;}
function fun8(x, y) {return 1+Math.cos(2*Math.PI*x/10)+Math.pow(y,3);}
function fun9(x, y) {return 25*x+Math.pow(x,2)*y + 6*Math.pow(x,2);}
function fun10(x, y) {return Math.pow(Math.E, -(x+y))*(1+Math.cos(2*Math.PI*y/10));}
function fun11(x, y) {return Math.sin(2*Math.PI*x/10)+x*y;}
function fun12(x, y) {return x+y+Math.pow(Math.E, x+y);}
function fun13(x, y) {return 15*y+x*y+6*y;}
function fun14(x, y) {return Math.pow(x, 2)+Math.pow(y+1, 2);}
function fun15(x, y) {return Math.pow(Math.E, x+y);}
function fun16(x, y) {return Math.pow(Math.E, -x)*(1+Math.sin(2*Math.PI*y/10));}
function fun17(x, y) {return 5*x+x*y+6*Math.pow(y, 2);}
function fun18(x, y) {return 1+Math.sin(2*Math.PI*x/10)+y;}
function fun19(x, y) {return Math.pow(Math.sin(2*Math.PI*x/10),2)+x*y;}
function fun20(x, y) {return 1+Math.pow(Math.cos(2*Math.PI*y/10),2)+x;}
function fun21(x, y) {return 35*Math.pow(x,3)+Math.pow(x,2)*y+Math.pow(Math.E,x+y);}
function fun22(x, y) {return 1+Math.sin(2*Math.PI*x/10)+y;}
function fun23(x, y) {return Math.sin(2*Math.PI*x/10)+Math.pow(x,2)*y;}
function fun24(x, y) {return 1+Math.sin(2*Math.PI*y/10)+Math.pow(x,2);}
function randomize() {
	return Math.ceil(Math.random()*1000);
}

function generate() {
	tableMain.style.border = "1px solid black"
	variableX = lengthX.value;
	variableY = lengthY.value;
	var array_main = [];
	var array_sum = [];
	var i = 0;
	var j = 0;
	if (document.getElementsByTagName("tr") != 0) {
		while (tableMain.firstChild) {
    		tableMain.removeChild(tableMain.firstChild);
    	} 
    }
	for (i = 0; i < variableY; i++) {
		var tr_main = document.createElement("tr");
		array_main[i] = [];
		array_sum[i] = [];
		for (j = 0; j < variableX; j++) {
			//array_main[i][j] = Math.ceil(Math.random()*1000);
			if (document.getElementById("listvar").value == "randomize") {
				array_main[i][j] = randomize();
			}

			if (document.getElementById("listvar").value == "1var") {
				array_main[i][j] = fun1(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "2var") {
				array_main[i][j] = fun2(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "3var") {
				array_main[i][j] = fun3(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "4var") {
				array_main[i][j] = fun4(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "5var") {
				array_main[i][j] = fun5(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "6var") {
				array_main[i][j] = fun6(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "7var") {
				array_main[i][j] = fun7(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "8var") {
				array_main[i][j] = fun8(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "9var") {
				array_main[i][j] = fun9(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "10var") {
				array_main[i][j] = fun10(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "11var") {
				array_main[i][j] = fun11(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "12var") {
				array_main[i][j] = fun12(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "13var") {
				array_main[i][j] = fun13(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "14var") {
				array_main[i][j] = fun14(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "15var") {
				array_main[i][j] = fun15(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "16var") {
				array_main[i][j] = fun16(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "17var") {
				array_main[i][j] = fun17(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "18var") {
				array_main[i][j] = fun18(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "19var") {
				array_main[i][j] = fun19(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "20var") {
				array_main[i][j] = fun20(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "21var") {
				array_main[i][j] = fun21(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "22var") {
				array_main[i][j] = fun22(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "23var") {
				array_main[i][j] = fun23(variableX - 1 - i, j);
			}
			if (document.getElementById("listvar").value == "24var") {
				array_main[i][j] = fun24(variableX - 1 - i, j);
			}
			array_sum[i][j] = 0;
			var td_main = document.createElement("td");
			td_main.innerHTML = array_main[i][j];
			td_main.id = "td" + i + "-" + j;
			tr_main.appendChild(td_main);
		}
		tableMain.appendChild(tr_main);
	}

	array_sum[0][variableX - 1] = array_main[0][variableX - 1];
	for (j = variableX - 2; j >= 0; --j) {
		array_sum[0][j] = array_sum[0][j + 1] + array_main[0][j];
	}
	for (i=1; i < variableY; ++i) {
		array_sum[i][variableX - 1] = array_sum[i - 1][variableX - 1] + array_main[i][variableX - 1];
		for (j = variableX - 2; j >= 0; --j) {
			if(array_sum[i - 1][j] <= array_sum[i][j + 1]) {
				array_sum[i][j] = array_main[i][j] + array_sum[i - 1][j];
			}
			else {
				array_sum[i][j] = array_main[i][j] + array_sum[i][j + 1];
			}
		}
	}

	j = 0;
	i = variableY - 1;
	var metka = document.getElementById("td" + i + "-" + j);
	metka.style.background = "green";

	while (true) {
		if (i == 0 && j == variableX - 1) {
			break;
		}
		if (j != variableX - 1) {
			if (i != 0 && (array_sum[i - 1][j] <= array_sum[i][j + 1])) {
				i--;
				metka = document.getElementById("td" + i + "-"+ j);;
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