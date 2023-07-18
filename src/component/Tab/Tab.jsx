import PropTypes from 'prop-types';
import Classes from './_Tab.module.scss';
import { useState } from 'react';
import TabBtn from './bb/TabBtn';

const Tab = ({ overridingClasses, listTab }) => {
  const stateNthOfSelected = useState(1);
  const [nthOfSelected] = stateNthOfSelected;
  return (
    <div
      className={`${Classes.tab} ${Classes[`tabSel${nthOfSelected}`]} ${
        overridingClasses?.[`tab`]
      }`}>
      {listTab?.map((eachTabItem, idx) => {
        return (
          <TabBtn
            key={eachTabItem.key}
            overridingClasses={overridingClasses}
            nth={idx + 1}
            stateNthOfSelected={stateNthOfSelected}>
            <span>{eachTabItem.label}</span>
          </TabBtn>
        );
      })}
    </div>
  );
};

Tab.propTypes = {
  overridingClasses: PropTypes.object,
  listTab: PropTypes.array,
};

export default Tab;
