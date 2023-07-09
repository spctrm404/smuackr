import PropTypes from 'prop-types';
import Classes from './_Btn.module.scss';

const Btn = ({
  type,
  overrideClasses,
  overrideClassName,
  children,
  href,
  onClickCb,
}) => {
  return (
    <a
      className={`${Classes.btn}  ${overrideClassName}`}
      type={type}
      href={href}
      onClick={onClickCb}>
      <span
        className={`${Classes.content} ${overrideClasses[`content`]} nowrap`}>
        {children}
      </span>
    </a>
  );
};

Btn.propTypes = {
  type: PropTypes.string,
  overrideClasses: PropTypes.object,
  overrideClassName: PropTypes.string,
  children: PropTypes.any,
  href: PropTypes.string,
  onClickCb: PropTypes.func,
};

export default Btn;
