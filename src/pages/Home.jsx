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
    <>
      <div className="imagery">
        <img src={photo} alt="" />
      </div>
      <div className="widget">
        <div className="widget__wrap">
          <SearchWidget
            className="widget__search"
            listChip={DB.chips}
            length={20}></SearchWidget>
          <NoticeWidget
            className="widget__notice"
            listTab={DB.noticeTabs}
            listNotice={DB.notices}
            length={20}></NoticeWidget>
        </div>
      </div>
      <main>
        <NewsWidget listNews={DB.news}></NewsWidget>
      </main>
    </>
  );
}

export default Home;
