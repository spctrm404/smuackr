import PropTypes from 'prop-types';
import Classes from './_Tab.module.scss';
import { useState } from 'react';
import TabBtn from './bb/TabBtn';

const Tab = ({ className, list }) => {
  const stateNthOfSelected = useState(1);
  const [nthOfSelected] = stateNthOfSelected;
  return (
    <div
      className={`${Classes.tab} ${
        Classes[`tabSel${nthOfSelected}`]
      } ${className}`}>
      {list.map((eachListItem, idx) => {
        return (
          <TabBtn
            key={eachListItem.key}
            nth={idx + 1}
            stateNthOfSelected={stateNthOfSelected}>
            {eachListItem.label}
          </TabBtn>
        );
      })}
    </div>
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
};

export default Tab;
