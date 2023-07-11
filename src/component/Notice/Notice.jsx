import PropTypes from 'prop-types';
import Classes from './_Notice.module.scss';

const Notice = ({ className, title, date, prefix, href, onClickCb }) => {
  return (
    <a
      className={`${Classes.notice} ${Classes.areaInteraction} ${className}`}
      href={href}
      onClick={onClickCb}>
      <div className={Classes.areaVisible}>
        <div className={Classes.grpTitle}>
          <span className={Classes.prefix}>{prefix}</span>
          <span className={Classes.title}>{title}</span>
        </div>
        <span className={Classes.date}>{date}</span>
      </div>
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
