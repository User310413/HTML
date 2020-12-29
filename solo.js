CountDownTimer('12/25/2021', 'countdown');

 CountDownTimer('12/29/2020 10:00 PM', 'HourCountdown');

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

<script>
    var audio = new Audio('https://user310413.github.io/HTML/chms.mp3');

    /*추가된 부분: 종료되면 처음부터 다시 재생*/
    audio.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false);
    
</script>

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
