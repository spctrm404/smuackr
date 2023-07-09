import PropTypes from 'prop-types';
import Classes from './_Notice.module.scss';

const Notice = ({ className, title, date, prefix, href, onClickCb }) => {
  return (
    <a
      className={`${Classes.notice} ${className}`}
      href={href}
      onClick={onClickCb}>
      <div className={Classes.grpTitle}>
        <span className={Classes.prefix}>{prefix}</span>
        <span className={Classes.title}>{title}</span>
      </div>
      <span className={Classes.date}>{date}</span>
    </a>
  );
};

Notice.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  prefix: PropTypes.string,
  href: PropTypes.string,
  onClickCb: PropTypes.func,
};

export default Notice;
