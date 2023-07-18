import PropTypes from 'prop-types';
import Classes from '../_Tab.module.scss';

const TabBtn = ({ children, overridingClasses, nth, stateNthOfSelected }) => {
  const [nthOfSelected, setNthOfSelected] = stateNthOfSelected;
  const onClickCb = () => {
    setNthOfSelected(nth);
  };
  return (
    <div
      className={`${Classes.tabBtn} ${Classes.areaInteraction} ${
        nthOfSelected === nth ? Classes.selected : null
      } ${overridingClasses?.[`tabBtn`]} ${
        overridingClasses?.[`tabBtnAreaInteraction`]
      } `}
      onClick={onClickCb}>
      <span
        className={`${Classes.areaVisible} ${
          overridingClasses?.[`tabBtnAreaVisible`]
        }`}>
        {children}
      </span>
    </div>
  );
};

TabBtn.propTypes = {
  children: PropTypes.element,
  overridingClasses: PropTypes.object,
  nth: PropTypes.number,
  stateNthOfSelected: PropTypes.array,
};

export default TabBtn;
