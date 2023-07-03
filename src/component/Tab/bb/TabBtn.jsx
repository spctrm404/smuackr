import PropTypes from 'prop-types';
import Classes from '../_Tab.module.scss';

const TabBtn = ({ children, nth, stateNthOfSelected }) => {
  const [nthOfSelected, setNthOfSelected] = stateNthOfSelected;
  const onClickCb = () => {
    setNthOfSelected(nth);
  };
  return (
    <div
      className={`${Classes.tabBtn} ${
        nthOfSelected === nth ? Classes.selected : null
      }`}
      onClick={onClickCb}>
      <span className={Classes.content}>{children}</span>
    </div>
  );
};

TabBtn.propTypes = {
  children: PropTypes.string,
  nth: PropTypes.number,
  onClickCb: PropTypes.func,
  stateNthOfSelected: PropTypes.array,
};

export default TabBtn;
