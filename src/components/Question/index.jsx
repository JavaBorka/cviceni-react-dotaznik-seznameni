import QuestionBody from '../QuestionBody';
import Option from '../Option';
import './style.css';
import { useState } from 'react';

const Question = ({text}) => {

  const [answered, setAnswered] = useState(false)

  const handleSelect = () => {
    setAnswered(!answered)
  }

  return (
    <div className="question">
      <QuestionBody 
        iconType={!answered ? 'symbolQuestion' : 'symbolTick' } 
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím" onSelected={handleSelect}/>
        <Option type="smileyYes" text="Spíše souhlasím" onSelected={handleSelect}/>
        <Option type="smileyNeutral" text="Nevím" onSelected={handleSelect}/>
        <Option type="smileyNo" text="Spíše nesouhlasím" onSelected={handleSelect}/>
        <Option type="smileyStrongNo" text="Nesouhlasím" onSelected={handleSelect}/>
      </div>
    </div>
  );
};

export default Question;
