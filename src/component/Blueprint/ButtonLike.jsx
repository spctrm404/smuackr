import PropTypes from 'prop-types';
import Classes from './_ButtonLike.module.scss';

const ButtonLike = ({ children, overridingClasses, href, onClickCallback }) => {
  return (
    <a
      className={`${Classes.buttonLike} ${Classes.areaInteraction} ${
        overridingClasses?.[`areaInteraction`]
      }`}
      href={href}
      onClick={onClickCallback}>
      <span
        className={`${Classes.areaVisible} ${
          overridingClasses?.[`areaVisible`]
        } `}>
        {children}
      </span>
    </a>
  );
};

ButtonLike.propTypes = {
  children: PropTypes.element,
  overridingClasses: PropTypes.object,
  href: PropTypes.string,
  onClickCallback: PropTypes.func,
};

export default ButtonLike;
