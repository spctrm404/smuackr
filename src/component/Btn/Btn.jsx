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
    <a className={Classes.a} href={href} onClick={onClickCb}>
      <span className={`${Classes.btn}  ${overrideClassName}`} type={type}>
        <span className={`${Classes.content} ${overrideClasses[`content`]}`}>
          {children}
        </span>
      </span>
    </a>
  );
};

Btn.propTypes = {
  type: PropTypes.string,
  overrideClasses: PropTypes.object,
  overrideClassName: PropTypes.string,
  children: PropTypes.object,
  href: PropTypes.string,
  onClickCb: PropTypes.func,
};

export default Btn;
