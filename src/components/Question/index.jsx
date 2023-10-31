import QuestionBody from '../QuestionBody';
import Option from '../Option';
import './style.css';
import { useState } from 'react';

const Question = ({text}) => {

  const [answered, setAnswered] = useState(false)

  return (
    <div className="question">
      <QuestionBody 
        iconType="symbolQuestion" 
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím"/>
        <Option type="smileyYes" text="Spíše souhlasím"/>
        <Option type="smileyNeutral" text="Nevím"/>
        <Option type="smileyNo" text="Spíše nesouhlasím"/>
        <Option type="smileyStrongNo" text="Nesouhlasím"/>
      </div>
    </div>
  );
};

export default Question;
