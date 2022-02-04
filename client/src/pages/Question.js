import { Loading, IndecateQ, Result } from "../components";
import { useState, useEffect } from "react";
import { getQuestions } from "../api.js";

export function QuestionPage(props) {
  const [Questions, setQuesions] = useState(null);
  const [StartTime, setStartTime] = useState(new Date().getTime());
  
  useEffect(() => {
    getQuestions().then((data) => {
      setQuesions(data);
    });
  }, []);

  const FinishCount=15;
  const InitialCount=0;
  const [count, setCount] = useState(InitialCount);
  const [correctCount, setCorrectCount] = useState(InitialCount);

  let endTime=0;

  const changeCount=()=>{
    setCount((prevCount)=>prevCount+1);
  }

  const changeCorrectCount=()=>{
    setCorrectCount((prevCount)=>prevCount+1);
  }


  return (
    <div>
      <div className="content has-text-centered">

      {
        (() => {
          if(Questions==null){
            return <Loading />
          }else if(count<FinishCount){
            return <IndecateQ kami={Questions[count].correct.kami} simo={Questions[count].correct.simo} choices={Questions[count].choices} count={count} changeCount={changeCount} correctCount={correctCount} changeCorrectCount={changeCorrectCount}/>
          }else{
            endTime=new Date().getTime();
            return <Result correctCount={correctCount} startTime={StartTime} endTime={endTime} />
          }
          })()
       }

      </div>
    </div>
  );
}