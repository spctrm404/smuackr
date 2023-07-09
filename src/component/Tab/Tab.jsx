import PropTypes from 'prop-types';
import Classes from './_Tab.module.scss';
import { useState } from 'react';
import TabBtn from './bb/TabBtn';

const Tab = ({ className, tabList }) => {
  const stateNthOfSelected = useState(1);
  const [nthOfSelected] = stateNthOfSelected;
  return (
    <div
      className={`${Classes.tab} ${
        Classes[`tabSel${nthOfSelected}`]
      } ${className}`}>
      {tabList.map((eachTabItem, idx) => {
        return (
          <TabBtn
            key={eachTabItem.key}
            nth={idx + 1}
            stateNthOfSelected={stateNthOfSelected}>
            {eachTabItem.label}
          </TabBtn>
        );
      })}
    </div>
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  tabList: PropTypes.array,
};

export default Tab;
