import PropTypes from 'prop-types';
import Classes from './_NoticeWidget.module.scss';
import Tab from '../Tab/Tab';
import Btn from '../Btn/Btn';
import Notice from '../Notice/Notice';

const NoticeWidget = ({ className, tabList, noticeList, length }) => {
  return (
    <div className={`${Classes.noticeWidget} ${className}`}>
      <h4 className={Classes.title}>공지사항</h4>
      <div className={Classes.grpControl}>
        <Tab className={Classes.tab} tabList={tabList}></Tab>
        <Btn
          type="text"
          overrideClasses={Classes}
          overrideClassName={Classes.btn}>
          <span>더보기</span>
        </Btn>
      </div>
      <div className={Classes.grpNotice}>
        {noticeList.map((eachListItem, idx) => {
          if (idx >= length) return;
          return (
            <Notice
              key={eachListItem.key}
              className={Classes.notice}
              title={eachListItem.title}
              date={eachListItem.date}
              prefix={eachListItem.prefix}></Notice>
          );
        })}
      </div>
    </div>
  );
};

NoticeWidget.propTypes = {
  className: PropTypes.string,
  tabList: PropTypes.array,
  noticeList: PropTypes.array,
  length: PropTypes.number,
};

export default NoticeWidget;
