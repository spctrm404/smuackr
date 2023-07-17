import { Route, Routes } from 'react-router-dom';
import Classes from './_App.module.scss';
import DB from './DB';
import NavRail from './component/NavRail/NavRail';
import Home from './pages/Home';
import Components from './pages/Components';
import Page from './pages/Page';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className={Classes.grid}>
      <div className={Classes.navBar}></div>
      <NavRail className={Classes.navRail} listNav={DB.navV1}></NavRail>
      <div className={Classes.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/page" element={<Page />} />
        </Routes>
        <Footer className={Classes.footer} listLink={DB.footerLinks}></Footer>
      </div>
    </div>
  );
}

export default App;
