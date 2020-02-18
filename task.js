//Task 1.
// for (var i = 0; i < 10; i++) {
//   setTimeout(function() {
//       console.log(i);
//   }
// };
//Task 2.1.
function showDate(){
  var today = new Date();
  var day = today.getDay();
  var week = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    console.log("Today is : " + week[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12) ? hour - 12: hour;
      if (hour === 0 && prepand === ' PM ') { 
        if (minute === 0 && second === 0) { 
          hour = 12;
          prepand =' Noon';
        } else { 
          hour = 12;
          prepand =' PM';
        } 
      } 
      if (hour === 0 && prepand === ' AM ') { 
        if (minute===0 && second===0) { 
          hour=12;
          prepand=' Midnight';
        } else { 
            hour=12;
            prepand=' AM';
          } 
      } 
document.querySelector('.task2_1').innerHTML ="Current Time is : "+ hour + prepand + " : " + minute + " : " + second;
}

// Task 2.2.
function reverseNumber() {
  var number = prompt("Введите число");    
	// let reversed = "";
  number = parseInt(number.toString().split('').reverse().join('')) * Math.sign(number)
  document.querySelector('.task_2_2').innerHTML = number;
}

// Task 2.3.
function factorial() { 
  var num = parseInt(prompt("Введите число:",num));
	var fact = num;
	for(var i = num-1;i > 1; i--){
		num *= i;
	}
	document.querySelector('.task_2_3').innerHTML = fact + "! = " + num;
}

// // Task 2.4.
function biggerNum() {
var num1 = prompt("Введите первое число", "0");
var num2 = prompt("Введите второе число", "0");
var answer;
                                                 
if (parseInt(num1) > parseInt(num2)) { 
  answer = ("Наибольшее из "+ num1 + " и "+ num2 + " это "+ num1 + ".");
  }   
else
  if (parseInt(num2) > parseInt(num1)) {
    answer = ("Наибольшее из "+ num1+" и "+ num2+ " это "+ num2+ ".");
  }                  
  else {
    answer = ("Значения "+ num1+ " и "+num2+ " равны.");
  }
  document.querySelector('.task_2_4').innerHTML = answer;

}

// Task 2.5.
function arrayToString() {
  myColor = ["Red", "Green", "White", "Black"];
  var ans = myColor.toString();
  var plus = myColor.join('+');
  document.querySelector('.task_2_6').innerHTML = ans + "<br>" + plus;
}

// // Task 2.6.

  function monthName(){
    monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var date1 = new Date("10/11/2009");
    var date2 = new Date("11/13/2014");
      var ans1 = monthList[date1.getMonth()];
      var ans2 = monthList[date2.getMonth()];
      document.querySelector('.task_2_7').innerHTML = ans1 + "<br>" + ans2;
    };
      
// Task 2.7. 
function upperCase(str) {
  var word = prompt("Введите слово");
   alphabet = /^[A-Z]/;
   if (alphabet.test(word)) {
      ans = ("String's first character is uppercase");
    } else {
      ans = ("String's first character is not uppercase");
    }
    document.querySelector('.task_2_8').innerHTML = ans;
}

//Task 2.8
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // Внешняя окружность
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);  // рот (по часовой стрелке)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // Левый глаз
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Правый глаз
    ctx.stroke();
  }
}
//Task 1.1.
function toOrder() {
  var string1 = document.getElementById('string-1');
  var string2 = document.getElementById('string-2');
  var string3 = document.getElementById('string-3');
  var string4 = document.getElementById('string-4');
  var string5 = document.getElementById('string-5');
  var string6 = document.getElementById('string-6');

  console.log(string3.textContent);
  console.log(string5.textContent);
  console.log(string2.textContent);
  console.log(string6.textContent);
  console.log(string4.textContent);
  console.log(string1.textContent);

}

//Task 1.2.
function myFunction() {
  var color = document.getElementsByClassName('element');
  for (i = 0; i < color.length; i++) {
    if (i < 3) {
      color[i].style.color = 'red';
    } else {
      color[i].style.color = 'green';
    }
  }
}
//Task 3
function myContainer() {
  var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
  var todo = document.getElementById('todolist');
  for (i = 0; i < tasks.length; i++) {
    var li = document.createElement('li');
    li.innerText = tasks[i];
    li.className = "task";
    todo.appendChild(li);
  }
}

//Task 4.
function hrline() {
  var text = document.getElementsByClassName('task_4')[0];
  var p = text.getElementsByTagName('p');
  for (i =0; i < p.length; i++) {
    var hr = document.createElement('hr');
    p[i].after(hr);
  }
}

//Task 5
function Remove() {
  var item = document.getElementsByClassName('item');
  item[1].firstChild.remove();
  var text = document.createTextNode('Canned Fish ');
  var qnt = document.createElement('span');
  qnt.textContent = 'x 4';
  item[4].replaceChild(text, item[4].firstChild);
  item[4].replaceChild(qnt, item[4].lastChild);
}

//Task 6
function todoList() {
  var ul = document.createElement('ul');
  document.body.appendChild(ul);
  while (true) {
  var task = prompt("Введите задачу");
  if (task === null || task === 0) {
     break;
  }
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(task));
  ul.appendChild(li);
}
}




