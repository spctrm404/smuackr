import PropTypes from 'prop-types';
import Classes from './_Search.module.scss';

const Search = ({ className }) => {
  return (
    <div className={`${Classes.search} ${className}`} action="">
      <div className={Classes.border}>
        <input
          className={Classes.input}
          type="search"
          placeholder="검색"
          name="search"
        />
      </div>
      <button
        className={`${Classes.button}  ${Classes.areaInteraction}`}
        type="submit">
        <span className={Classes.areaVisible}>
          <span className="material-symbols-outlined">Search</span>
        </span>
      </button>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
