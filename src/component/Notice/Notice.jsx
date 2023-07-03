import PropTypes from 'prop-types';
import Classes from './_Notice.module.scss';

const Notice = ({ title, date, prefix }) => {
  return (
    <div className={Classes.notice}>
      <div className={Classes.grpTitle}>
        <span className={Classes.prefix}>{prefix}</span>
        <span className={Classes.title}>{title}</span>
      </div>
      <span className={Classes.date}>{date}</span>
    </div>
  );
};

Notice.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  prefix: PropTypes.string,
};

export default Notice;
