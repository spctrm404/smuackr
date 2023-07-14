import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Classes from './_IconButton.module.scss';

const IconButton = ({
  children,
  overridingClasses,
  href,
  to,
  onClickCb,
  buttonType = 'standard',
  icon,
}) => {
  if (to) {
    return (
      <Link
        className={`${Classes.iconButton} ${Classes.areaInteraction} ${
          overridingClasses?.[`iconButton`]
        } ${overridingClasses?.[`areaInteraction`]} `}
        to={to}
        onClick={onClickCb}
        data-button-type={buttonType}>
        <span
          className={`${Classes.areaVisible} ${
            overridingClasses?.[`areaVisible`]
          }`}>
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
      className={`${Classes.iconButton} ${Classes.areaInteraction} ${
        overridingClasses?.[`iconButton`]
      } ${overridingClasses?.[`areaInteraction`]} `}
      href={href}
      onClick={onClickCb}
      data-button-type={buttonType}>
      <span
        className={`${Classes.areaVisible} ${
          overridingClasses?.[`areaVisible`]
        }`}>
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

IconButton.propTypes = {
  children: PropTypes.element,
  overridingClasses: PropTypes.object,
  href: PropTypes.string,
  to: PropTypes.string,
  onClickCb: PropTypes.func,
  buttonType: PropTypes.string,
  fitWidth: PropTypes.bool,
  icon: PropTypes.string,
};

export default IconButton;
