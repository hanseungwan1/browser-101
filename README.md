# 드림코딩 브라우저 101 - 2.3 실습1. 원도우 사이즈 표기

## 새롭게 배운것 (까먹었다가 다시 배운것들 😙)

- display: inline-block;
  div태그에 사용시 block 레벨 이지만 inline 형태로써 크기가 div 안에 있는 내용만큼 맞춰집니다.

- 브라우저의 창(window) 사이즈는 여러 가지 종류로 나눌 수 있습니다 :
  Inner Width와 Inner Height: window.innerWidth와 window.innerHeight는 브라우저 창의 내부 너비와 높이를 나타냅니다. 즉, 브라우저의 스크롤바를 제외한 실제 컨텐츠 영역의 너비와 높이를 의미합니다.

Outer Width와 Outer Height: window.outerWidth와 window.outerHeight는 브라우저 창의 전체 너비와 높이를 나타냅니다. 이는 브라우저 창의 가장자리를 포함하여 전체 창의 너비와 높이를 말합니다.

Client Width와 Client Height: document.documentElement.clientWidth와 document.documentElement.clientHeight는 문서의 루트 요소인 <html>의 클라이언트 영역의 너비와 높이를 나타냅니다. 뷰포트의 크기와 동일하지만 스크롤바가 있는 경우 스크롤바를 제외한 크기를 보여줍니다.

Scroll Width와 Scroll Height: document.documentElement.scrollWidth와 document.documentElement.scrollHeight는 문서의 루트 요소인 <html>의 스크롤 가능한 전체 영역의 너비와 높이를 나타냅니다. 페이지의 크기가 뷰포트보다 크면 스크롤바를 사용하여 볼 수 있는 영역의 크기를 말합니다.

Offset Width와 Offset Height: element.offsetWidth와 element.offsetHeight는 특정 요소의 레이아웃 크기를 나타냅니다. 요소의 너비와 높이를 테두리(border)를 포함한 크기로 반환합니다.

screen.width, screen.height: 사용자의 모니터의 가로/세로 해상도를 픽셀 단위로 나타냅니다. 이 값은 사용자의 시스템 설정에 따라 모니터의 가로/세로 해상도를 나타냅니다.

- addEventListener('resize') : 'resize' 이벤트는 브라우저 창의 크기가 변경될 때 발생합니다.
  창 크기가 변경되면 resize 이벤트가 계속해서 발생하므로, 이벤트 핸들러는 매우 빈번하게 호출될 수 있습니다. 이 경우에는 성능을 고려하여 적절한 처리를 해주는 것이 중요합니다. 대규모 렌더링 작업이나 비용이 큰 작업은 이벤트 핸들러에서 직접 처리하지 않고, 디바운싱(Debouncing)이나 스로틀링(Throttling) 등의 기법을 활용하여 적절하게 제어하는 것이 좋습니다. 이러한 기법을 사용하면 이벤트 핸들러의 불필요한 반복 호출을 방지하여 성능을 개선할 수 있습니다.
