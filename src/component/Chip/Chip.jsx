import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Classes from './_Chip.module.scss';

const Chip = ({
  children,
  overridingClasses,
  href,
  to,
  onClickCallback,
  chipType = 'standard',
  icon,
}) => {
  if (to) {
    return (
      <Link
        className={`${Classes.chip} ${Classes.areaInteraction} ${
          overridingClasses?.[`chip`]
        } ${overridingClasses?.[`chipAreaInteraction`]} `}
        to={to}
        onClick={onClickCallback}
        data-chip-type={chipType}
        data-has-icon={icon ? true : false}>
        <span
          className={`${Classes.areaVisible} ${
            overridingClasses?.[`chipAreaVisible`]
          } `}>
          {icon ? (
            <span
              className={`${Classes.icon} ${
                overridingClasses?.[`chipIcon`]
              } material-symbols-outlined`}>
              {icon}
            </span>
          ) : null}
          {children}
        </span>
      </Link>
    );
  }
  return (
    <a
      className={`${Classes.chip} ${Classes.areaInteraction} ${
        overridingClasses?.[`chip`]
      } ${overridingClasses?.[`chipAreaInteraction`]} `}
      href={href}
      onClick={onClickCallback}
      data-chip-type={chipType}
      data-has-icon={icon ? true : false}>
      <span
        className={`${Classes.areaVisible} ${
          overridingClasses?.[`chipAreaVisible`]
        } `}>
        {icon ? (
          <span
            className={`${Classes.icon} ${
              overridingClasses?.[`chipIcon`]
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
  to: PropTypes.string,
  onClickCallback: PropTypes.func,
  chipType: PropTypes.string,
  icon: PropTypes.string,
};

export default Chip;
