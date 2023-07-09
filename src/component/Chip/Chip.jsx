import PropTypes from 'prop-types';
import Classes from './_Chip.module.scss';

const Chip = ({ className, children, href, onClickCb }) => {
  return (
    <a
      className={`${Classes.chip} ${className}`}
      href={href}
      onClick={onClickCb}>
      <span className={`${Classes.content} nowrap`}>{children}</span>
    </a>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  href: PropTypes.string,
  onClickCb: PropTypes.func,
};

export default Chip;
