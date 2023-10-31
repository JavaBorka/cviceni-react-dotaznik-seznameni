import Icon from '../Icon';
import './style.css';

const Option = ({text, type}) => {
  return (
    <div 
      className="option"
      onClick={() => {
        console.log('Spíše souhlasím')
      }}
    >
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;