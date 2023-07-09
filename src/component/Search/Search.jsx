import PropTypes from 'prop-types';
import Classes from './_Search.module.scss';

const Search = ({ className }) => {
  return (
    <div className={`${Classes.search} ${className}`} action="">
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
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
