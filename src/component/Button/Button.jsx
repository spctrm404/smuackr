import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Classes from './_Button.module.scss';

const Button = ({
  children,
  overridingClasses,
  href,
  to,
  onClickCb,
  buttonType = 'standard',
  fitWidth = true,
  icon,
}) => {
  if (to) {
    return (
      <Link
        className={`${Classes.button} ${Classes.areaInteraction} ${
          overridingClasses?.[`button`]
        } ${overridingClasses?.[`areaInteraction`]}`}
        to={to}
        onClick={onClickCb}
        data-button-type={buttonType}
        data-is-fixed-width={fitWidth}
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
      </Link>
    );
  }
  return (
    <a
      className={`${Classes.button} ${Classes.areaInteraction} ${
        overridingClasses?.[`button`]
      } ${overridingClasses?.[`areaInteraction`]}`}
      href={href}
      onClick={onClickCb}
      data-button-type={buttonType}
      data-is-fixed-width={fitWidth}
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

Button.propTypes = {
  children: PropTypes.element,
  overridingClasses: PropTypes.object,
  href: PropTypes.string,
  to: PropTypes.string,
  onClickCb: PropTypes.func,
  buttonType: PropTypes.string,
  fitWidth: PropTypes.bool,
  icon: PropTypes.string,
};

export default Button;
