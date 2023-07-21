import PropTypes from 'prop-types';
import Classes from './_SearchWidget.module.scss';
import Search from '../Search/Search';
import Chip from '../Chip/Chip';

const SearchWidget = ({ className, listChip, chipLength }) => {
  return (
    <div className={`${Classes.searchWidget} ${className}`}>
      <div className={Classes.title}>
        Dream <span className={Classes.nowrap}>Hiker 상명</span>
      </div>
      <form action="">
        <Search></Search>
      </form>
      <div className={Classes.chips}>
        {listChip?.map((eachChipItem, idx) => {
          if (idx >= chipLength) return;
          return (
            <Chip key={eachChipItem.key} overridingClasses={Classes}>
              <span>{eachChipItem.label}</span>
            </Chip>
          );
        })}
      </div>
    </div>
  );
};

SearchWidget.propTypes = {
  className: PropTypes.string,
  listChip: PropTypes.array,
  chipLength: PropTypes.number,
};

export default SearchWidget;
