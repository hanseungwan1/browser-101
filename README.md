# 드림코딩 브라우저 101 - 3.1 좌표 찾아 007

## 새롭게 배운것 (까먹었다가 다시 배운것들 😙)

offsetHeight, offsetWidth : `offsetHeight`와 `offsetWidth`는 DOM 요소의 속성(property)으로, 해당 요소의 높이와 너비를 픽셀 단위로 가져올 수 있는 값입니다. 이 속성들은 요소의 내용(content)의 크기와 여백(padding), 테두리(border), 그리고 수평 스크롤바 등의 크기를 모두 포함합니다.

간단히 말하면, `offsetHeight`는 요소의 전체 높이(콘텐츠 높이 + 여백 + 테두리)를 나타내며, `offsetWidth`는 요소의 전체 너비(콘텐츠 너비 + 여백 + 테두리)를 나타냅니다.

예를 들어, 다음과 같은 HTML과 CSS가 있다고 가정해봅시다:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #box {
        width: 200px;
        height: 100px;
        padding: 10px;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div id="box">This is a box</div>
  </body>
</html>
```

위 코드에서 `<div id="box">`는 가로 너비 200px, 세로 높이 100px를 갖는 사각형 박스를 나타냅니다. `padding`은 상하좌우 모두 10px이고, `border`는 1px의 두께를 갖습니다.

JavaScript에서 해당 요소의 `offsetHeight`와 `offsetWidth`를 가져오면 다음과 같이 됩니다:

```javascript
const boxElement = document.getElementById("box");
console.log(boxElement.offsetHeight); // 결과: 122 (100px(콘텐츠 높이) + 20px(여백) + 2px(테두리))
console.log(boxElement.offsetWidth); // 결과: 222 (200px(콘텐츠 너비) + 20px(여백) + 2px(테두리))
```

따라서 `boxElement.offsetHeight`는 122px이며, `boxElement.offsetWidth`는 222px입니다. 이 값들은 요소의 크기를 동적으로 계산해야 할 때 유용하게 사용될 수 있습니다.

left, top 같은 속성으로 요소를 조작하는 것 보다
transform에 있는 translate를 사용하면 랜더링 과정을 줄일수있어서 성능개선에 더 좋다.
