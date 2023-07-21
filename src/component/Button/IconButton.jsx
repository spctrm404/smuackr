import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Classes from './_IconButton.module.scss';

const IconButton = ({
  children,
  className,
  overridingClasses,
  href,
  to,
  onClickCallback,
  buttonType = 'standard',
  icon,
}) => {
  if (to) {
    return (
      <Link
        className={`${Classes.iconButton} ${Classes.areaInteraction} ${
          overridingClasses?.[`iconButton`]
        } ${overridingClasses?.[`iconButtonAreaInteraction`]} ${className}`}
        to={to}
        onClick={onClickCallback}
        data-button-type={buttonType}>
        <span
          className={`${Classes.areaVisible} ${
            overridingClasses?.[`iconButtonAreaVisible`]
          }`}>
          {icon ? (
            <span
              className={`${Classes.icon} ${
                overridingClasses?.[`iconButtonIcon`]
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
      className={`${Classes.iconButton} ${Classes.areaInteraction} ${
        overridingClasses?.[`iconButton`]
      } ${overridingClasses?.[`iconButtonAreaInteraction`]} ${className}`}
      href={href}
      onClick={onClickCallback}
      data-button-type={buttonType}>
      <span
        className={`${Classes.areaVisible} ${
          overridingClasses?.[`iconButtonAreaVisible`]
        }`}>
        {icon ? (
          <span
            className={`${Classes.icon} ${
              overridingClasses?.[`iconButtonIcon`]
            } material-symbols-outlined`}>
            {icon}
          </span>
        ) : null}
        {children}
      </span>
    </a>
  );
};

IconButton.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  overridingClasses: PropTypes.object,
  href: PropTypes.string,
  to: PropTypes.string,
  onClickCallback: PropTypes.func,
  buttonType: PropTypes.string,
  fitWidth: PropTypes.bool,
  icon: PropTypes.string,
};

export default IconButton;
