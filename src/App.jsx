import './_App.scss';
import DB from './DB';
import NavRail from './component/NavRail/NavRail';
import Footer from './component/Footer/Footer';
import Home from './pages/Home';
import Components from './pages/Components';

function App() {
  let Page;
  switch (window.location.pathname) {
    case `${import.meta.env.BASE_URL}`:
      Page = Home;
      break;
    case `${import.meta.env.BASE_URL}components`:
      Page = Components;
      break;
    case `${import.meta.env.BASE_URL}page`:
      Page = Home;
      break;
  }

  return (
    <>
      <div className="grid">
        <div className="nav-bar"></div>
        <NavRail className="nav-rail" listNav={DB.navV1}></NavRail>
        <Page></Page>
        <Footer listLink={DB.footerLinks}></Footer>
      </div>
    </>
  );
}

export default App;
