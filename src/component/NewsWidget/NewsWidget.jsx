import PropTypes from 'prop-types';
import Classes from './_NewsWidget.module.scss';
import Card from '../Card/Card';

const NewsWidget = ({ className, listNews, length }) => {
  return (
    <div className={`${Classes.newsWidget}  ${className}`}>
      <div className="container container--width-expand">
        <div className={Classes.layout}>
          <h4 className={Classes.title}>상명소식</h4>
          {listNews.map((eachNewsItem, idx) => {
            if (idx >= length) return;
            return (
              <Card
                key={eachNewsItem.key}
                overridingClasses={Classes}
                content={eachNewsItem}></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

NewsWidget.propTypes = {
  className: PropTypes.string,
  listNews: PropTypes.array,
  length: PropTypes.number,
};

export default NewsWidget;
