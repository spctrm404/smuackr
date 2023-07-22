import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Classes from './_NoticeWidget.module.scss';
import Tab from '../Tab/Tab';
import Button from '../Button/Button';
import Notice from '../Notice/Notice';

const NoticeWidget = ({ className, listNotice, noticeLength }) => {
  const listTab = [
    { key: uuidv4(), label: '상명' },
    { key: uuidv4(), label: '서울' },
    { key: uuidv4(), label: '천안' },
  ];
  return (
    <section className={`${Classes.noticeWidget} ${className}`}>
      <h4 className={Classes.title}>학생공지</h4>
      <div className={Classes.grpControl}>
        <Tab overridingClasses={Classes} listTab={listTab}></Tab>
        <Button overridingClasses={Classes}>
          <span>더보기</span>
        </Button>
      </div>
      <div className={Classes.notices}>
        {listNotice?.map((eachListItem, idx) => {
          if (idx >= noticeLength) return;
          return (
            <Notice
              key={eachListItem.key}
              className={Classes.notice}
              content={eachListItem}></Notice>
          );
        })}
      </div>
    </section>
  );
};

NoticeWidget.propTypes = {
  className: PropTypes.string,
  listTab: PropTypes.array,
  listNotice: PropTypes.array,
  noticeLength: PropTypes.number,
};

export default NoticeWidget;
