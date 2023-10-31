import Icon from '../Icon';
import './style.css';

const Option = ({text, type, onSelected}) => {
  return (
    <div 
      className="option"
      onClick={() => {
        onSelected()
      }}
    >
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;