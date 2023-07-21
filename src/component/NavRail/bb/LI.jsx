import PropTypes from 'prop-types';
import Classes from '../_NavRail.module.scss';
import Button from '../../Button/Button';

const Li = ({ children, listItem, depth, nth, stateNthOfSelected }) => {
  const [, setNthOfSelected] = stateNthOfSelected;
  const onClickCallback = () => {
    setNthOfSelected(nth);
  };
  return (
    <li className={`${Classes[`liDp${depth}`]} ${Classes[`liNth${depth}`]}`}>
      <Button
        to={depth >= 2 ? '/page' : null}
        overridingClasses={Classes}
        onClickCallback={depth === 1 ? onClickCallback : null}>
        <span>{listItem.label}</span>
      </Button>
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
