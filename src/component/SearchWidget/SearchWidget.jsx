import PropTypes from 'prop-types';
import Classes from './_SearchWidget.module.scss';
import Chip from '../Chip/Chip';

const SearchWidget = ({ className, chipList, length }) => {
  return (
    <div className={`${Classes.searchWidget} ${className}`}>
      <div className={Classes.title}>Dream Hiker 상명</div>
      <form className={Classes.search} action="">
        <div className={Classes.searchBorder}>
          <input
            className={Classes.searchInput}
            type="search"
            placeholder="검색"
            name="search"
          />
        </div>
        <button className={Classes.searchBtn} type="submit">
          <div className={Classes.content}>
            <span className="material-symbols-outlined">Search</span>
          </div>
        </button>
      </form>
      <div className={Classes.chips}>
        {chipList.map((eachListItem, idx) => {
          if (idx >= length) return;
          return (
            <Chip key={eachListItem.key}>
              <span>{eachListItem.label}</span>
            </Chip>
          );
        })}
      </div>
    </div>
  );
};

SearchWidget.propTypes = {
  className: PropTypes.string,
  chipList: PropTypes.array,
  length: PropTypes.number,
};

export default SearchWidget;
