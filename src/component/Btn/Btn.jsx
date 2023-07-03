import PropTypes from 'prop-types';
import Classes from './_Btn.module.scss';

const Btn = ({
  btnType,
  overrideClasses,
  overrideClassName,
  children,
  href,
  onClickCb,
}) => {
  return (
    <a className={Classes.a} href={href} onClick={onClickCb}>
      <span
        className={`${Classes.btn} ${Classes[btnType]} ${overrideClassName}`}>
        <span className={`${Classes.content} ${overrideClasses[`content`]}`}>
          {children}
        </span>
      </span>
    </a>
  );
};

Btn.propTypes = {
  btnType: PropTypes.string,
  overrideClasses: PropTypes.object,
  overrideClassName: PropTypes.string,
  children: PropTypes.object,
  href: PropTypes.string,
  onClickCb: PropTypes.func,
};

export default Btn;
