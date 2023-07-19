import PropTypes from 'prop-types';
import Classes from './_NavRail.module.scss';
import './_NavRail.scss';
import { useState } from 'react';
import { ReactComponent as LogoVert } from '../../assets/logo-vert.svg';
import Button from '../Button/Button';
import IconButton from '../Button/IconButton';
import Ol from './bb/Ol';

const NavRail = ({ className, listNav }) => {
  const stateNthOfSelected = useState(0);
  const [nthOfSelected] = stateNthOfSelected;
  return (
    <nav
      className={`${Classes.navRail} ${className}  ${
        nthOfSelected === 0 ? Classes.collapsed : null
      }`}>
      <div className={Classes.viewportRail}>
        <div className={Classes.scrollRail}>
          <div className={Classes.grpTop}>
            <Button
              to="/"
              className={`nav-rail-logo`}
              overridingClasses={Classes}>
              <LogoVert />
            </Button>
            <Ol
              list={listNav}
              depth={1}
              nthOfParent={0}
              stateNthOfSelected={stateNthOfSelected}></Ol>
          </div>
          <div className={Classes.grpBottom}>
            <IconButton overridingClasses={Classes}>
              <span className="material-symbols-outlined">widgets</span>
            </IconButton>
            <IconButton overridingClasses={Classes}>
              <span className="material-symbols-outlined">search</span>
            </IconButton>
            <div className={Classes.grpLang}>
              <IconButton overridingClasses={Classes}>
                <span>EN</span>
              </IconButton>
              <IconButton to="/components" overridingClasses={Classes}>
                <span>中文</span>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavRail.propTypes = {
  className: PropTypes.string,
  listNav: PropTypes.array,
};

export default NavRail;
