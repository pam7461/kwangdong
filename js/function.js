//============ 함수 ============
  // 비디오를 뒤로 보내는 함수
  function videoBack(){
    $('.media-box').removeClass('active');
  }
  // 비디오 앞으로 가져오기 함수
  function videoFront(el){
    el.addClass('active');
  }
  // 비디오 멈춤 함수
  function videoStop(){      
    $('video')[0].pause();
    $('video')[1].pause();
    $('video')[2].pause();
    $('#btn-video').text('재생');
  }
  // 비디오 재생 함수
  function videoPlay(){
    $('.active video')[0].play();
    $('#btn-video').text('멈춤');
  }
  // 오디오 재생 함수
  function audioPlay(){
    $('.active video').prop('muted',false);      
    $('#btn-audio').text('멈춤');
  }
  // 오디오 멈춤 함수
  function audioStop(){
    $('video').prop('muted',true);      
    $('#btn-audio').text('켜기');
  }
  // 비디오 루프()
  function videoLoop(){
    $('video').prop('loop',false);
    $('.active video').prop('loop',true);      
  }
    
    