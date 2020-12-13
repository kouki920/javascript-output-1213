'use strict'

const questions = [
  {
    text:'問1：真っ赤な身の鮭は何魚？',
    answer:['赤身魚','白身魚','青魚'],
    result:'白身魚'
  },
  {
    text:'問2：果物と野菜で一番糖度が高いのものは？',
    answer:['スイカ','イチゴ','ニンニク'],
    result:'ニンニク'
  },
  {
    text:'問：3マーガリンの主原料は？',
    answer:['牛乳','植物油','砂糖'],
    result:'植物油'
  }, 
  {
    text:'問4：ほうれん草はいつできる野菜？',
    answer:['冬','夏','春'],
    result:'冬'
  },
  {
    text:'問5：白ネギの白い部分は何？',
    answer:['茎','葉','根'],
    result:'葉'
  }
]

let questionIndex = 0;
let score = 0;

const textArea = document.getElementById('textarea');
const questionList = document.getElementsByClassName('question__list');
const nextButton = document.getElementById('next__button');
const prevButton = document.getElementById('prev__button');

window.onload = () => {
  textArea.textContent = questions[questionIndex].text;

  let answer = questions[questionIndex].answer;
  for(let i = 0; i < answer.length; i++){
    questionList[i].textContent = answer[i];
  }

}
function clickHandler(){ 
   if(questionIndex < questions.length -1){

  questionIndex += 1;
  let answer = questions[questionIndex].answer;
  for(let i = 0; i < answer.length; i++){
    questionList[i].textContent = answer[i];
  }

  textArea.textContent = questions[questionIndex].text;

} else{
  window.alert('終了！あなたの正解数は' + score + '/' + questions.length + 'です');

}}



for(let i = 0; i < questionList.length; i++){
  questionList[i].addEventListener('click',() =>{
    if(questionList[i].textContent === questions[questionIndex].result){
      alert('正解');
      score ++;
      clickHandler();
    } else{
      alert('不正解');
      score --;
      clickHandler();
    }
  })
}


