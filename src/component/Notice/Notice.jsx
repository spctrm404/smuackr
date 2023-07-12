import PropTypes from 'prop-types';
import Classes from './_Notice.module.scss';

const Notice = ({ className, content, href, onClickCb }) => {
  return (
    <a
      className={`${Classes.notice} ${Classes.areaInteraction} ${className}`}
      href={href}
      onClick={onClickCb}>
      <div className={Classes.areaVisible}>
        <div className={Classes.grpTitle}>
          <span className={Classes.prefix}>{content.prefix}</span>
          <span className={Classes.title}>{content.title}</span>
        </div>
        <span className={Classes.date}>{content.date}</span>
      </div>
    </a>
  );
};

Notice.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object,
  href: PropTypes.string,
  onClickCb: PropTypes.func,
};

export default Notice;
