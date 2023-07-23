import Classes from './_Home.module.scss';
import DB from '../DB';
import photo from '../assets/photo.jpg';
import SearchWidget from '../component/SearchWidget/SearchWidget';
import NoticeWidget from '../component/NoticeWidget/NoticeWidget';
import NewsWidget from '../component/NewsWidget/NewsWidget';

function Home() {
  DB.notices.forEach((eachNoticeItem) => {
    eachNoticeItem.prefix =
      DB.noticePrefixes[Math.floor(Math.random() * DB.noticePrefixes.length)];
    eachNoticeItem.region =
      DB.noticeRegions[Math.floor(Math.random() * DB.noticeRegions.length)];
    eachNoticeItem.date = `2023-07-03`;
  });

  DB.news.forEach((eachNewsItem) => {
    eachNewsItem.prefix =
      DB.newsPrefixes[Math.floor(Math.random() * DB.newsPrefixes.length)];
  });

  return (
    <>
      <div className={Classes.heroLayout}>
        <div className={Classes.heroImage}>
          <img src={photo} alt="" />
        </div>
        <div className={Classes.widgetContainer}>
          <div className={Classes.widgetLayout}>
            <SearchWidget
              className={Classes.widgetSearch}
              listChip={DB.chips}
              chipLength={20}></SearchWidget>
            <NoticeWidget
              className={Classes.widgetNotice}
              listTab={DB.noticeTabs}
              listNotice={DB.notices}
              noticeLength={20}></NoticeWidget>
          </div>
        </div>
      </div>
      <div className={Classes.shortcutContainer}>
        <div className={Classes.shortcutLayout}>
          <h4 className={Classes.nowrap}>Quick Menu</h4>
          <div className={Classes.linkWrap}>
            <a href="">샘물</a>
            <a href="">캘린더</a>
            <a href="">SM Webzine</a>
            <a href="">사이트맵</a>
            <a href="">그 외</a>
            <a href="">편리한</a>
            <a href="">링크들을</a>
            <a href="">더 추가하면</a>
            <a href="">좋을 것</a>
            <a href="">같습니다</a>
          </div>
        </div>
      </div>
      <NewsWidget listNews={DB.news} length={12}></NewsWidget>
    </>
  );
}

export default Home;
