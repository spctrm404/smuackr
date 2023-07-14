import PropTypes from 'prop-types';
import Classes from './_NavRail.module.scss';
import { useState } from 'react';
import { ReactComponent as LogoVert } from '../../assets/logo-w-vert.svg';
import Button from '../Button/Button';
import IconButton from '../Button/IconButton';
import Ol from './bb/Ol';

const NavRail = ({ className, listNav }) => {
  const stateNthOfSelected = useState(0);
  const [nthOfSelected] = stateNthOfSelected;
  return (
    <div
      className={`${Classes.navRail} ${Classes.viewportRail} ${className}  ${
        nthOfSelected === 0 ? Classes.collapsed : null
      }`}>
      <div className={Classes.scrollRail}>
        <div className={Classes.grpTop}>
          <Button
            href={`${import.meta.env.BASE_URL}`}
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
            <IconButton
              href={`${import.meta.env.BASE_URL}components`}
              overridingClasses={Classes}>
              <span>中文</span>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

NavRail.propTypes = {
  className: PropTypes.string,
  listNav: PropTypes.array,
};

export default NavRail;
