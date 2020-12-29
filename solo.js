CountDownTimer('12/25/2021', 'countdown');

 CountDownTimer('12/29/2020 10:05 PM', 'HourCountdown');

 CountDownTimer('12/25/2021', 'countExpire');



 function CountDownTimer(dt, id) {

     var end = new Date(dt);



     var _second = 1000;

     var _minute = _second * 60;

     var _hour = _minute * 60;

     var _day = _hour * 24;

     var timer;



     function showRemaining() {

         var now = new Date();

         var distance = end - now;



         // 시간 종료 시 뜨는 문구

         if (distance < 0) {

             clearInterval(timer);

             document.getElementById(id).innerHTML = '솔크 축';

<html>
 <audio autoplay controls> <source src="https://user310413.github.io/HTML/chms.mp3" type="audio/mp3"> </audio>
          </html>

</body>
          
          
          
             return;

         }

         var days = Math.floor(distance / _day);

         var hours = Math.floor((distance % _day) / _hour);

         var minutes = Math.floor((distance % _hour) / _minute);

         var seconds = Math.floor((distance % _minute) / _second);



         document.getElementById(id).innerHTML = days + '일 ';

         document.getElementById(id).innerHTML += hours + '시간 ';

         document.getElementById(id).innerHTML += minutes + '분 ';

         document.getElementById(id).innerHTML += seconds + '초';

     }

     timer = setInterval(showRemaining, 1000);

 }
