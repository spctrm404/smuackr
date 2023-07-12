import PropTypes from 'prop-types';
import Classes from './_NoticeWidget.module.scss';
import Tab from '../Tab/Tab';
import Button from '../Button/Button';
import Notice from '../Notice/Notice';

const NoticeWidget = ({ className, listTab, listNotice, length }) => {
  return (
    <div className={`${Classes.noticeWidget} ${className}`}>
      <h4 className={Classes.title}>공지사항</h4>
      <div className={Classes.grpControl}>
        <Tab className={Classes.tab} listTab={listTab}></Tab>
        <Button overridingClasses={Classes}>
          <span>더보기</span>
        </Button>
      </div>
      <div className={Classes.grpNotice}>
        {listNotice.map((eachListItem, idx) => {
          if (idx >= length) return;
          return (
            <Notice
              key={eachListItem.key}
              className={Classes.notice}
              content={eachListItem}></Notice>
          );
        })}
      </div>
    </div>
  );
};

NoticeWidget.propTypes = {
  className: PropTypes.string,
  listTab: PropTypes.array,
  listNotice: PropTypes.array,
  length: PropTypes.number,
};

export default NoticeWidget;
