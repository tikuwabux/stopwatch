/*global $*/
$(function() {

  var time = 0;
  var mid = 0;
  var measure_start;
  
  var hour_time = 0;
  var min_time = 0;
  var sec_time = 0;
  var ten_m_sec_time = 0;
  
  var count;
  
  var hour = $("#hour");
  var min = $("#min");
  var sec = $("#sec");
  var ten_m_sec = $("#ten_m_sec");
  
  var start = $("#start")
  var stop = $("#stop")
  var reset = $("#reset")
  
  //startボタンが押された時の処理
  start.click(function() {
    measure_start = new Date();
    count = setInterval(counter, 100);//100msつまり、0.1sごとに呼び出したいので、setIntervalの第二引数は100にしている
    toggle();
    
    
  });
  
  //stopボタンが押された時の処理
  stop.click(function() {
    mid += (new Date() - measure_start)/100;//new Dataはms(0.001s)単位なので、100ms(0.1s)単位に変換したい場合は100で割る
    clearInterval(count);
    toggle();
  });
  
  //resetボタンが押された時の処理
  reset.click(function() {
    mid = 0;
    
    time = 0;
    ten_m_sec.html(time);
    
    sec_time = 0;
    sec.html(sec_time);
    
    min_time = 0;
    min.html(min_time);
    
    hour_time = 0;
    hour.html(hour_time);
    
    reset.prop("disabled", true);
  });
  
  //時間の計算
  function counter() {
    
    time = mid + ((new Date() - measure_start)/100);　//単位を0.1sつまり100msとする
    
    //1秒(100ms * 10)経過した時の処理
    if(time > 9) {
      time = 0;
      mid = 0;
      measure_start = new Date();
      sec_time ++;
    }
    
    //60秒経過した時の処理
    if(sec_time > 59) {
      sec_time = 0;
      min_time ++;
    }
    
    //60分経過した時の処理
    if(min_time > 59) {
      min_time = 0;
      hour_time ++;
    }
    
    //上記で各々の値を代入した変数をhtml表記に反映する//
    ten_m_sec.html(time.toFixed(0));
    sec.html(sec_time);
    min.html(min_time);
    hour.html(hour_time);
  }
  
  //ボタンの切り替え
  function toggle(){
    if(!start.prop("disabled")) {
        start.prop("disabled", true);
        stop.prop("disabled", false);
        reset.prop("disabled", true);
    }else{
        start.prop("disabled", false);
        stop.prop("disabled", true);
        reset.prop("disabled", false);
    }
  }
});

