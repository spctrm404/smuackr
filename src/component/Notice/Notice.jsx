import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Classes from './_Notice.module.scss';

const Notice = ({ className, content, href, to, onClickCb }) => {
  const extractMDfromYMD = (dateYMD) => {
    const [, m, d, ...rest] = dateYMD.split('-');
    return `${m}-${d}`;
  };

  if (to) {
    return (
      <Link
        className={`${Classes.notice} ${Classes[content?.region]} ${
          Classes.areaInteraction
        } ${className}`}
        to={to}
        onClick={onClickCb}>
        <div className={Classes.areaVisible}>
          <div className={Classes.grpTitle}>
            <span className={Classes.prefix}>{content?.prefix}</span>
            <span className={Classes.title}>{content?.title}</span>
          </div>
          <span className={Classes.date}>
            {extractMDfromYMD(content?.date)}
          </span>
        </div>
      </Link>
    );
  }
  return (
    <a
      className={`${Classes.notice} ${Classes[content?.region]} ${
        Classes.areaInteraction
      } ${className}`}
      href={href}
      onClick={onClickCb}>
      <div className={Classes.areaVisible}>
        <div className={Classes.grpTitle}>
          <span className={Classes.prefix}>{content?.prefix}</span>
          <span className={Classes.title}>{content?.title}</span>
        </div>
        <span className={Classes.date}>{extractMDfromYMD(content?.date)}</span>
      </div>
    </a>
  );
};

Notice.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object,
  href: PropTypes.string,
  to: PropTypes.string,
  onClickCb: PropTypes.func,
};

export default Notice;
