import ReactDOM from 'react-dom'; //'react-dom'이라는 패키지에서 디폴트값으로 import한 객체를 ReactDOM이라는 이름 으로 import해서 render라는 메서드 실행

// render 메서드는 첫 번째 argument요소로 html 태그를 만들어서 두 번째 argument 요소에 집어 넣어주는 역할

//render 메서드로 html code를 만들어줌 (render 메서드는 보통 index.js에서 한번사용됨)
ReactDOM.render( // 첫번째 argument 요소인 h1태그를 바탕으로 새로운 html 요소를 만들고 두번째 argument값인 'document~('root')값에 넣는 방식으로 동작 
  <h1>안녕 리액트!</h1>,
  document.getElementById('root')
);

