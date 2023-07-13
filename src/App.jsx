import './_App.scss';
import photo from './assets/photo.jpg';
import DB from './DB';
import Components from './Components';
import NavRail from './component/NavRail/NavRail';
import SearchWidget from './component/SearchWidget/SearchWidget';
import NoticeWidget from './component/NoticeWidget/NoticeWidget';
import NewsWidget from './component/NewsWidget/NewsWidget';
import Footer from './component/Footer/Footer';

function App() {
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
      {/* <Components></Components> */}
      <div className="grid">
        <div className="nav-bar"></div>
        <NavRail className="nav-rail" listNav={DB.navV1}></NavRail>
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
        <Footer listLink={DB.footerLinks}></Footer>
      </div>
    </>
  );
}

export default App;
