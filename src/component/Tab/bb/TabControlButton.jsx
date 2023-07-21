import PropTypes from 'prop-types';
import Classes from '../_Tab.module.scss';

const TabControlButton = ({ children, overridingClasses, onClickCallback }) => {
  return (
    <div
      className={`${Classes.tabControlButton} ${Classes.areaInteraction}  ${
        overridingClasses?.[`tabControlButton`]
      } ${overridingClasses?.[`tabControlButtonAreaInteraction`]}`}
      onClick={onClickCallback}>
      <span
        className={`${Classes.areaVisible} ${
          overridingClasses?.[`tabControlButtonAreaVisible`]
        }`}>
        {children}
      </span>
    </div>
  );
};

TabControlButton.propTypes = {
  children: PropTypes.element,
  overridingClasses: PropTypes.object,
  nth: PropTypes.number,
  onClickCallback: PropTypes.func,
};

export default TabControlButton;
