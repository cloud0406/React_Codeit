import ReactDOM from 'react-dom';         //'react-dom'이라는 패키지에서 디폴트값으로 import한 객체를 ReactDOM이라는 이름 으로 import해서 render라는 메서드 실행
import { Fragment } from 'react/cjs/react.production.min';

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}

function handleClick() {
  console.log('가위바위보!');
}

const me = 'rock';
const other = 'scissor';

// render 메서드는 첫 번째 argument요소로 html 태그를 만들어서 두 번째 argument 요소에 집어 넣어주는 역할
ReactDOM.render(
  <>
    <h1>가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button>
  </>,
  document.getElementById('root')
);

