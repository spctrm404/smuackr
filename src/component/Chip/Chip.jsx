import PropTypes from 'prop-types';
import Classes from './_Chip.module.scss';

const Chip = ({ children, href, onClickCb }) => {
  return (
    <a className={Classes.a} href={href} onClick={onClickCb}>
      <span className={Classes.chip}>
        <span className={Classes.content}>{children}</span>
      </span>
    </a>
  );
};

Chip.propTypes = {
  children: PropTypes.object,
  href: PropTypes.string,
  onClickCb: PropTypes.func,
};

export default Chip;
