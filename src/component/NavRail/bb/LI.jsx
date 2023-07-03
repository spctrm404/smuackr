import PropTypes from 'prop-types';
import Classes from '../_NavRail.module.scss';
import Btn from '../../Btn/Btn';

const Li = ({ children, listItem, depth, nth, stateNthOfSelected }) => {
  const [, setNthOfSelected] = stateNthOfSelected;
  const onClickCb = () => {
    setNthOfSelected(nth);
  };
  return (
    <li className={`${Classes[`liDp${depth}`]} ${Classes[`liNth${depth}`]}`}>
      <Btn
        btnType={`btnTypeText`}
        overrideClasses={Classes}
        overrideClassName={Classes.btnTypeText}
        onClickCb={depth === 1 ? onClickCb : null}>
        <span>{listItem.label}</span>
      </Btn>
      {children}
    </li>
  );
};

Li.propTypes = {
  listItem: PropTypes.object,
  depth: PropTypes.number,
  nth: PropTypes.number,
  children: PropTypes.object,
  stateNthOfSelected: PropTypes.array,
};

export default Li;
