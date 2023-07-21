import PropTypes from 'prop-types';
import Classes from './_Search.module.scss';
import IconButton from '../Button/IconButton';

// memo:
// 클리어버튼 추가하지 못함
const Search = ({ className, overridingClasses }) => {
  return (
    <div
      className={`${Classes.search} ${
        overridingClasses?.[`search`]
      } ${className}`}
      action="">
      <div
        className={`${Classes.border} ${overridingClasses?.[`searchBorder`]}`}>
        <input type="search" placeholder="검색" name="search" />
      </div>
      <button>
        <IconButton overridingClasses={Classes}>
          <span className="material-symbols-outlined">Search</span>
        </IconButton>
      </button>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  overridingClasses: PropTypes.object,
};

export default Search;
