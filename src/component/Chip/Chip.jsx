import PropTypes from 'prop-types';
import Classes from './_Chip.module.scss';

const Chip = ({
  children,
  overridingClasses,
  href,
  onClickCb,
  chipType = 'standard',
  icon,
}) => {
  return (
    <a
      className={`${Classes.chip} ${Classes.areaInteraction} ${
        overridingClasses?.[`chip`]
      } ${overridingClasses?.[`areaInteraction`]} `}
      href={href}
      onClick={onClickCb}
      data-chip-type={chipType}
      data-has-icon={icon ? true : false}>
      <span
        className={`${Classes.areaVisible} ${
          overridingClasses?.[`areaVisible`]
        } `}>
        {icon ? (
          <span
            className={`${Classes.icon} ${
              overridingClasses?.[`icon`]
            } material-symbols-outlined`}>
            {icon}
          </span>
        ) : null}
        {children}
      </span>
    </a>
  );
};

Chip.propTypes = {
  children: PropTypes.element,
  overridingClasses: PropTypes.object,
  href: PropTypes.string,
  onClickCb: PropTypes.func,
  chipType: PropTypes.string,
  icon: PropTypes.string,
};

export default Chip;
