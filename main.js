/*global $*/
$(function() {

  var time = 0;
  var mid = 0;
  var now;
  
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
    now = new Date();
    count = setInterval(counter, 100);//100msつまり、0.1sごとに呼び出したいので、setIntervalの第二引数は100にしている
    toggle();
  });
  
  //stopボタンが押された時の処理
  stop.click(function() {
    mid += (new Date() - now)/1000;//new Dataはミリ秒単位なので、秒単位に変換したい場合は1000で割る
    clearInterval(count);
    toggle();
  });
  
  //resetボタンが押された時の処理
  reset.click(function() {
    mid = 0;
    hour.html("0");
    min.html("0");
    sec.html("0");
    ten_m_sec("0");
    $("#reset").prop("disabled", true);
  });
  
  //時間の計算
  function counter() {
    
    time = mid + ((new Date() - now)/1000);
    
    //60秒経過した時の処理
    if(time > 60) {
      mid = 0;
      min_time ++;
      now = new Date();
      time = 0;
      sec.html();
    }
    
    sec.html(time);
    min.html(min_time);
  }
  
  //ボタンの切り替え
  function toggle(){
    if(!start.prop("disabled")){
        start.prop("disabled", true);
        stop.prop("disabled", false);
        reset.prop("disabled", true);
    }else{
        start.prop("disabled", false);
        stop.prop("disabled", true);
        reset.prop("disabled", false);
    }
  }
  
  /*jsファイルがよみこまれているかのサンプルコード
  $("#start").click(function() {
    $("button").css("font-size", "50px");
  });
  */
});