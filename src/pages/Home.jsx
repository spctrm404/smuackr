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
    eachNoticeItem.date = `2023-07-03`;
  });

  DB.news.forEach((eachNewsItem) => {
    eachNewsItem.prefix =
      DB.newsPrefixes[Math.floor(Math.random() * DB.newsPrefixes.length)];
  });

  return (
    <main>
      <div className={Classes.imagery}>
        <img src={photo} alt="" />
      </div>
      <div className={Classes.widget}>
        <div className={Classes.widgetWrap}>
          <SearchWidget
            className={Classes.widgetSearch}
            listChip={DB.chips}
            length={20}></SearchWidget>
          <NoticeWidget
            className={Classes.widgetNotice}
            listTab={DB.noticeTabs}
            listNotice={DB.notices}
            length={20}></NoticeWidget>
        </div>
      </div>
      <NewsWidget listNews={DB.news} length={12}></NewsWidget>
    </main>
  );
}

export default Home;
