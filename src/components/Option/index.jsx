import Icon from '../Icon';
import './style.css';

const Option = ({text, type}) => {
  return (
    <div className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;