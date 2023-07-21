import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Classes from './_Notice.module.scss';

const Notice = ({
  className,
  overridingClasses,
  content,
  href,
  to,
  onClickCallback,
}) => {
  const extractMDfromYMD = (dateYMD) => {
    const [, m, d, ...rest] = dateYMD.split('-');
    return `${m}-${d}`;
  };

  if (to) {
    return (
      <Link
        className={`${Classes.notice} ${Classes.areaInteraction} ${
          overridingClasses?.[`notice`]
        }  ${overridingClasses?.[`noticeAreaInteraction`]} ${className} ${
          Classes[content ? content.region : 'noRegion']
        }`}
        to={to}
        onClick={onClickCallback}>
        <div
          className={`${Classes.areaVisible} ${
            overridingClasses?.[`noticeAreaVisible`]
          }`}>
          <div
            className={`${Classes.grpTitle} ${
              overridingClasses?.[`noticeGrpTitle`]
            }`}>
            <span
              className={`${Classes.prefix} ${
                overridingClasses?.[`noticePrefix`]
              }`}>
              {content?.prefix}
            </span>
            <span
              className={`${Classes.title} ${
                overridingClasses?.[`noticeTitle`]
              }`}>
              {content?.title}
            </span>
          </div>
          <span
            className={`${Classes.date} ${overridingClasses?.[`noticeDate`]}`}>
            {extractMDfromYMD(content?.date)}
          </span>
        </div>
      </Link>
    );
  }
  return (
    <a
      className={`${Classes.notice} ${Classes.areaInteraction} ${
        overridingClasses?.[`notice`]
      }  ${overridingClasses?.[`noticeAreaInteraction`]} ${className} ${
        Classes[content ? content.region : 'noRegion']
      }`}
      href={href}
      onClick={onClickCallback}>
      <div
        className={`${Classes.areaVisible} ${
          overridingClasses?.[`noticeAreaVisible`]
        }`}>
        <div
          className={`${Classes.grpTitle} ${
            overridingClasses?.[`noticeGrpTitle`]
          }`}>
          <span
            className={`${Classes.prefix} ${
              overridingClasses?.[`noticePrefix`]
            }`}>
            {content?.prefix}
          </span>
          <span
            className={`${Classes.title} ${
              overridingClasses?.[`noticeTitle`]
            }`}>
            {content?.title}
          </span>
        </div>
        <span
          className={`${Classes.date} ${overridingClasses?.[`noticeDate`]}`}>
          {extractMDfromYMD(content?.date)}
        </span>
      </div>
    </a>
  );
};

Notice.propTypes = {
  className: PropTypes.string,
  overridingClasses: PropTypes.object,
  content: PropTypes.object,
  href: PropTypes.string,
  to: PropTypes.string,
  onClickCallback: PropTypes.func,
};

export default Notice;
