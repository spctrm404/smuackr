import PropTypes from 'prop-types';
import Classes from './_SearchWidget.module.scss';
import Search from '../Search/Search';
import Chip from '../Chip/Chip';

const SearchWidget = ({ className, chipList, length }) => {
  return (
    <div className={`${Classes.searchWidget} ${className}`}>
      <div className={Classes.title}>
        Dream <span className="nowrap"> Hiker 상명</span>
      </div>
      <form className={Classes.form} action="">
        <Search></Search>
      </form>
      <div className={Classes.chips}>
        {chipList.map((eachChipItem, idx) => {
          if (idx >= length) return;
          return (
            <Chip key={eachChipItem.key} className={Classes.chip}>
              {eachChipItem.label}
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
