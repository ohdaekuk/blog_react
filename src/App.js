/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '포켓몬스터';

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, modal변경] = useState(false);

  let [변수, 변수변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  let [발행기능, 발행기능변경] = useState('');

  function 제목변경 (){

    var newArray = [...글제목];
    newArray[0] = '피카츄';

    글제목변경( newArray );
  }

  function 다중따봉변경(i){

    var 뉴따봉 = [...따봉];
    뉴따봉[i] = 따봉[i] + 1;

    따봉변경(뉴따봉);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>

      {
        글제목.map(function(a, i){
          
          return (
          <div className='list' key={i}>
          <h3 onClick={() => {변수변경(i)}}>{a} 
          <span onClick={ () => {다중따봉변경(i)}}>👍</span> {따봉[i]} </h3> 
          <p>12월 24일 발행</p>
          <hr/>
          </div>
          )
        })
      }

      {/* <span className='input'><b>{입력값}</b></span>
      
      
      input <input onChange={(e) => { 입력값변경(e.target.value) }}/>
      <br/><br/> */}

      
      <div className='publish'>
        <input onChange={ (e) => {발행기능변경(e.target.value)}}/>
        <button onClick={() => {
          var 카피 = [...글제목];
          카피.unshift(발행기능);
          글제목변경(카피);
        }}>저장</button>
      </div> 
      {/* 발행기능 */}

      <button onClick={() => {modal변경(!modal)}}>열고닫기</button>

      {
        modal === true
        ? <Modal 글제목 = {글제목} 변수 = {변수}></Modal>
        : null
      }
      
      
      <Profile/>
    </div>
  );
}

// Component

function Modal(props){
  return (
    <>
    <div className='modal'>
        <h2>{props.글제목[props.변수]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

class Profile extends React.Component{
  constructor(){
    super();
    this.state = {name : 'Kim', age : 30}
  }

  changeName = () =>{
    this.setState({name : 'Park'})
  }

  render(){
    return(
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={ this.changeName }>버튼</button>
      </div>
    )
  }

}



export default App;
