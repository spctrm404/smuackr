import PropTypes from 'prop-types';
import Classes from '../_Tab.module.scss';

const TabButton = ({
  children,
  className,
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
        overridingClasses?.[`tabButton`]
      } ${overridingClasses?.[`tabButtonAreaInteraction`]} ${className} ${
        nthOfSelected === nth && Classes.selected
      } ${nthOfSelected === nth && overridingClasses?.[`selected`]}`}
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
  className: PropTypes.string,
  overridingClasses: PropTypes.object,
  nth: PropTypes.number,
  stateNthOfSelected: PropTypes.array,
};

export default TabButton;
