import PropTypes from 'prop-types';
import Classes from './_Tab.module.scss';
import { useState } from 'react';
import TabButton from './bb/TabButton';
import TabControlButton from './bb/TabControlButton';

// memo:
// 목록이 지나치게 많을 때 너비가 너무 커지는 문제가 있음
// 컨트롤로 탭 이동시 scrollintoview되도록 구현되어야함.
const Tab = ({ className, overridingClasses, listTab, hasControl = false }) => {
  const stateNthOfSelected = useState(1);
  const [nthOfSelected, setNthOfSelected] = stateNthOfSelected;
  let nthMax = listTab?.length;
  const increase = () => {
    if (nthOfSelected >= nthMax) return;
    const nth = nthOfSelected + 1;
    setNthOfSelected(nth);
  };
  const decrease = () => {
    if (nthOfSelected <= 1) return;
    const nth = nthOfSelected - 1;
    setNthOfSelected(nth);
  };
  return (
    <div
      className={`${Classes.tab} ${overridingClasses?.[`tab`]} ${
        Classes[`tabSel${nthOfSelected}`]
      } ${className}`}
      data-has-control={hasControl}>
      <TabControlButton
        overridingClasses={overridingClasses}
        onClickCallback={decrease}>
        <span className="material-symbols-outlined">arrow_left_alt</span>
      </TabControlButton>
      <div className={Classes.tabWrap}>
        <div className={Classes.tabViewport}>
          {listTab?.map((eachTabItem, idx) => {
            return (
              <TabButton
                key={eachTabItem.key}
                overridingClasses={overridingClasses}
                nth={idx + 1}
                stateNthOfSelected={stateNthOfSelected}>
                <span>{eachTabItem.label}</span>
              </TabButton>
            );
          })}
        </div>
      </div>
      <TabControlButton
        overridingClasses={overridingClasses}
        onClickCallback={increase}>
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </TabControlButton>
    </div>
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  overridingClasses: PropTypes.object,
  listTab: PropTypes.array,
  hasControl: PropTypes.bool,
};

export default Tab;
