import ReactDOM from 'react-dom';         //'react-dom'이라는 패키지에서 디폴트값으로 import한 객체를 ReactDOM이라는 이름 으로 import해서 render라는 메서드 실행
import { Fragment } from 'react/cjs/react.production.min';
import App from './App';


// render 메서드는 첫 번째 argument요소로 html 태그를 만들어서 두 번째 argument 요소에 집어 넣어주는 역할
ReactDOM.render(<App />, document.getElementById('root'));

