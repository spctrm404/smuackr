import PropTypes from 'prop-types';
import Classes from '../_Tab.module.scss';

const TabButton = ({
  children,
  overridingClasses,
  nth,
  stateNthOfSelected,
}) => {
  const [nthOfSelected, setNthOfSelected] = stateNthOfSelected;
  const onClickCallback = () => {
    setNthOfSelected(nth);
  };
  return (
    <div
      className={`${Classes.tabButton} ${Classes.areaInteraction} ${
        nthOfSelected === nth ? Classes.selected : null
      } ${overridingClasses?.[`tabButton`]} ${
        overridingClasses?.[`tabButtonAreaInteraction`]
      } `}
      onClick={onClickCallback}>
      <span
        className={`${Classes.areaVisible} ${
          overridingClasses?.[`tabButtonAreaVisible`]
        }`}>
        {children}
      </span>
    </div>
  );
};

TabButton.propTypes = {
  children: PropTypes.element,
  overridingClasses: PropTypes.object,
  nth: PropTypes.number,
  stateNthOfSelected: PropTypes.array,
};

export default TabButton;
