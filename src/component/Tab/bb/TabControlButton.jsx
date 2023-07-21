import PropTypes from 'prop-types';
import Classes from '../_Tab.module.scss';

const TabControlButton = ({
  children,
  className,
  overridingClasses,
  onClickCallback,
}) => {
  return (
    <div
      className={`${Classes.tabControlButton} ${Classes.areaInteraction} ${
        overridingClasses?.[`tabControlButton`]
      } ${overridingClasses?.[`tabControlButtonAreaInteraction`]} ${className}`}
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
  className: PropTypes.string,
  overridingClasses: PropTypes.object,
  nth: PropTypes.number,
  onClickCallback: PropTypes.func,
};

export default TabControlButton;
