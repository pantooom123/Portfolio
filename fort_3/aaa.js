$(function () {
  let wheelDelta = 0; //휠이벤트 발생시 반환값 확인 변수
  let browser = 0; //파이어폭스 브라우저 판별
  //9개의 섹션 클래스 배열 처리
  //마우스 휠을 아래로(-120)
  //다음(next) 섹션으로 스크롤이벤트
  //마우스 휠을 위로(120)
  //이전(prev) 섹션으로 스크롤이벤트
  //Browser[Event - mousewheel] : 크롬, 익스, 사파리, 오페라 등... //쓰면 120의 값이 나오는데
  //Browser[Event - DOMMouseScroll] : 파이어폭스...
  //파이어폭스 : 휠을 아래(3) 위(-3) 다른 브라우저 반대로 수행
  //브라우저 판별 : window.navigator.userAgent // 이 작업을 해야함

  $(".section").each(function (index) {
    $(this).on("mousewheel DOMMouseScroll", function (event) {
      event.preventDefault();
      console.log(event);

      //사용자가 사용중인 브라우저 종류 뭔지 판별하기 위한
      browser = window.navigator.userAgent.toLowerCase().indexOf("firefox");
      console.log(browser);
      if (browser >= 0) {
        //이 조건은 숫자 0~양수를 가지면 브라우저가 firefox임
        wheelDelta = -event.detail * 40;
        //파이어폭스는 위(-3)아래(3) 이고
        //크롬은 반대로 위(120)아래(-120) 이기 때문에
        //if문으로 같게 만들어주기 위해 -값*40으로 만든다.
      } else {
        //마이너스 값을 가지면 브라우저가 firefox가 아님
        //(즉-1값을 가지면 파이어폭스브라우저가 아님을 뜻함)
        wheelDelta = event.originalEvent.wheelDelta;
      }
      console.log(wheelDelta);

      if (wheelDelta < 0) {
        // 0보다 작다는건 -120 아래로 내리면
        if (index < $(".section").length - 1) {
          $("html,body")
            .stop()
            .animate({ scrollTop: $(this).next().offset().top }, 500);
        }
      } else {
        //120 위로 올리면
        if (index > 0) {
          $("html,body")
            .stop()
            .animate({ scrollTop: $(this).prev().offset().top }, 500);
        }
      }
    });
  });
});
