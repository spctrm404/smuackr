import { Route, Routes } from 'react-router-dom';
import Classes from './_App.module.scss';
import DB from './DB';
import NavRail from './component/NavRail/NavRail';
import Home from './pages/Home';
import Components from './pages/Components';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className={Classes.grid}>
      <div className={Classes.navBar}></div>
      <NavRail className={Classes.navRail} listNav={DB.navV1}></NavRail>
      <div className={Classes.content}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
          </Routes>
        </main>
        <Footer className={Classes.footer} listLink={DB.footerLinks}></Footer>
      </div>
    </div>
  );
}

export default App;
