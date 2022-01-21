import ReactDOM from 'react-dom';         //'react-dom'이라는 패키지에서 디폴트값으로 import한 객체를 ReactDOM이라는 이름 으로 import해서 render라는 메서드 실행
import { Fragment } from 'react/cjs/react.production.min';

// render 메서드는 첫 번째 argument요소로 html 태그를 만들어서 두 번째 argument 요소에 집어 넣어주는 역할

// 아래와 같이 .js 파일 안에 html 태그를 사용하는 문법을 리액트에서 지원하는 'JSX 문법'(JS와 html 섞어 쓸 수 있는 JS 확장된 문법)이라 함, 하지만 html 문법을 완전히 그대로 사용할 수는 없음 ex)for, class,  또한 두번째 단어부터 대문자를 사용하는 '카멜케이스' 적용해야함 
//render 메서드로 html code를 만들어줌 (render 메서드는 보통 index.js에서 한번사용됨)
ReactDOM.render(          // 첫번째 argument 요소인 h1태그를 바탕으로 새로운 html 요소를 만들고 두번째 argument값인 'document~('root')값에 넣는 방식으로 동작 
  <>          {/* 리액트에서 JSX문법을 사용하기 위해서는 반드시 하나의 태그로 감싸줘야함(아니면 오류 발생) -> 오류를 막기 위해 <Fragment></Fragment> 사용 -> 간단히 사용하기 위해 <></> 이와 같이 이름 없는 태그로 축약형 문법으로 자주 사용 */}
    <h1 className='hello'>안녕 리액트!</h1>         {/* JS에서 class는 객체지향의 개념으로 사용되기 때문에 html 문법과는 다르게 className을 사용 */}
    <p>안녕하세요 !</p>
  </>,
  document.getElementById('root')
);

