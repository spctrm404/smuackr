import PropTypes from 'prop-types';
import Classes from '../_NavRail.module.scss';
import Li from './LI';
import IconButton from '../../Button/IconButton';

const Ol = ({ list, depth, nthOfParent, stateNthOfSelected }) => {
  if (!list || !list.length) return null;
  if (depth >= 4) return null;
  const [nthOfSelected, setNthOfSelected] = stateNthOfSelected;
  const onClickCallback = () => {
    setTimeout(() => {
      setNthOfSelected(0);
    }, 50);
  };
  const recursiveLiOl = list.map((eachListItem, idx) => {
    return (
      <Li
        key={eachListItem.key}
        listItem={eachListItem}
        depth={depth}
        nth={idx + 1}
        stateNthOfSelected={stateNthOfSelected}>
        <Ol
          list={eachListItem.children}
          depth={depth + 1}
          nthOfParent={idx + 1}
          stateNthOfSelected={stateNthOfSelected}></Ol>
      </Li>
    );
  });

  if (depth === 2) {
    if (nthOfParent === nthOfSelected) {
      return (
        <ol className={`${Classes[`olDp${depth}`]} ${Classes.viewportDrawer}`}>
          <div className={Classes.scrollDrawer}>{recursiveLiOl}</div>
          <IconButton
            overridingClasses={Classes}
            onClickCallback={onClickCallback}>
            <span className="material-symbols-outlined">close</span>
          </IconButton>
        </ol>
      );
    }
    return null;
  }
  return <ol className={Classes[`olDp${depth}`]}>{recursiveLiOl}</ol>;
};

Ol.propTypes = {
  Classes: PropTypes.object,
  list: PropTypes.array,
  depth: PropTypes.number,
  nthOfParent: PropTypes.number,
  stateNthOfSelected: PropTypes.array,
};

export default Ol;
