import PropTypes from 'prop-types';
import Classes from '../_Tab.module.scss';

const TabBtn = ({ children, nth, stateNthOfSelected }) => {
  const [nthOfSelected, setNthOfSelected] = stateNthOfSelected;
  const onClickCb = () => {
    setNthOfSelected(nth);
  };
  return (
    <div
      className={`${Classes.tabBtn} ${Classes.areaInteraction} ${
        nthOfSelected === nth ? Classes.selected : null
      }`}
      onClick={onClickCb}>
      <span className={Classes.areaVisible}>{children}</span>
    </div>
  );
};

TabBtn.propTypes = {
  children: PropTypes.element,
  nth: PropTypes.number,
  stateNthOfSelected: PropTypes.array,
};

export default TabBtn;
