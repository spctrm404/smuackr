import PropTypes from 'prop-types';
import Classes from './_NavRail.module.scss';
import { useState } from 'react';
import { ReactComponent as LogoVert } from '../../assets/logo-w-vert.svg';
import Btn from '../Btn/Btn';
import Ol from './bb/Ol';

const NavRail = ({ className, navList }) => {
  const stateNthOfSelected = useState(0);
  const [nthOfSelected] = stateNthOfSelected;
  return (
    <div
      className={`${Classes.navRail} ${className}  ${
        nthOfSelected === 0 ? Classes.collapsed : null
      }`}>
      <div className={Classes.railScroll}>
        <div className={Classes.grpTop}>
          <Btn
            type="logo"
            overrideClasses={Classes}
            overrideClassName={Classes.btnTypeLogo}>
            <LogoVert />
          </Btn>
          <Ol
            list={navList}
            depth={1}
            nthOfParent={0}
            stateNthOfSelected={stateNthOfSelected}></Ol>
        </div>
        <div className={Classes.grpBottom}>
          <Btn
            type="icon"
            overrideClasses={Classes}
            overrideClassName={Classes.btnTypeIcon}>
            <span className="material-symbols-outlined">widgets</span>
          </Btn>
          <Btn
            type="icon"
            overrideClasses={Classes}
            overrideClassName={Classes.btnTypeIcon}>
            <span className="material-symbols-outlined">search</span>
          </Btn>
          <div className={Classes.grpLang}>
            <Btn
              type="icon"
              overrideClasses={Classes}
              overrideClassName={Classes.btnTypeIcon}>
              <span>EN</span>
            </Btn>
            <Btn
              type="icon"
              overrideClasses={Classes}
              overrideClassName={Classes.btnTypeIcon}>
              <span>中文</span>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

NavRail.propTypes = {
  className: PropTypes.string,
  navList: PropTypes.array,
};

export default NavRail;
