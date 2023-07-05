import NavRail from './component/NavRail/NavRail';
import SearchWidget from './component/SearchWidget/SearchWidget';
import NoticeWidget from './component/NoticeWidget/NoticeWidget';
import Footer from './component/Footer/Footer';
import './_App.scss';
import DB from './DB';

function App() {
  DB.notices.forEach((eachNoticeItem) => {
    eachNoticeItem.prefix =
      DB.noticePrefixes[Math.floor(Math.random() * DB.noticePrefixes.length)];
    eachNoticeItem.date = `07-03`;
  });

  return (
    <>
      <div className="grid">
        <div className="nav-bar"></div>
        <NavRail className="nav-rail" navList={DB.navV1}></NavRail>
        <div className="imagery"></div>
        <div className="widget">
          <div className="widget__wrap">
            <SearchWidget
              className="widget__search"
              chipList={DB.chips}
              length={12}></SearchWidget>
            <NoticeWidget
              className="widget__notice"
              tabList={DB.noticeTabs}
              noticeList={DB.notices}
              length={6}></NoticeWidget>
          </div>
        </div>
        <main>
          <section>
            <div className="container">
              <h2>this is main</h2>
            </div>
          </section>
        </main>
        <Footer list={DB.footer}></Footer>
      </div>
    </>
  );
}

export default App;
