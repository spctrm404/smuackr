import PropTypes from 'prop-types';
import Classes from './_NavBar.module.scss';
import { useState } from 'react';
import { ReactComponent as LogoHori } from '../../assets/logo-w-hori.svg';
import Btn from '../Btn/Btn';
import Ol from './bb/Ol';

const NavBar = ({ className, list }) => {
  const stateNthOfSelected = useState(0);
  return (
    <div className={`${Classes.navRail} ${className}`}>
      <div className={Classes.railScroll}>
        <div className={Classes.grpTop}>
          <Btn btnType={`btnTypeLogo`} overrideClass={Classes}>
            <LogoHori />
          </Btn>
          <Ol
            list={list}
            depth={1}
            nthOfParent={0}
            stateNthOfSelected={stateNthOfSelected}></Ol>
        </div>
        <div className={Classes.grpBottom}>
          <Btn btnType={`btnTypeIcon`} overrideClass={Classes}>
            <span className="material-symbols-outlined">widgets</span>
          </Btn>
          <Btn btnType={`btnTypeIcon`} overrideClass={Classes}>
            <span className="material-symbols-outlined">search</span>
          </Btn>
          <div className={Classes.grpLang}>
            <Btn btnType={`btnTypeIcon`} overrideClass={Classes}>
              <span>EN</span>
            </Btn>
            <Btn btnType={`btnTypeIcon`} overrideClass={Classes}>
              <span>中文</span>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
};

export default NavBar;
