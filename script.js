//Task2
//Определить декаду

var min = 8;

if (min >= 0 && min <= 10){
		alert('в первую декаду');
		}
if (min >=11 && min <=20){
	alert('во вторую декаду');
}
if (min >=21 && min <=30){
	alert('в третюю декаду');
}


//Определить месяц



var month = 10;


if (month >= 3 && month <= 5){
		alert('Весна!');
		}
if (month >=6 && month <=8){
	alert('Лето!');
}
if (month >=9 && month <=11){
	alert('Осень');
}
if (month == 12 || month <=3){
	alert('Зима');
}


//Проверить строку на 1-й символ

var str ="abcde";

(str[0] =="a") ? alert('верно!') : alert('не верно!');

//Проверить строку на наличие 123

var str = "12345";
(str[0] == "1" || str[0] == "2" || str[0] == "3") ? alert('да') : alert ('нет');


//Сумма чисел

var str ="123";
 var num = Number(str[0]) + Number (str[1]) + Number (str[2]);
 alert(num);

// Сумма первой и второй половины


var str = "123456";

var sum = Number(str[0]) + Number (str[1]) + Number (str[2]);
var num = Number(str[3]) + Number (str[4]) + Number (str[5]);

(sum == num) ? alert('да') : alert ('нет');