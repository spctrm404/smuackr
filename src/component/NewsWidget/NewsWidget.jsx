import PropTypes from 'prop-types';
import Classes from './_NewsWidget.module.scss';
import Card from '../Card/Card';

const NewsWidget = ({ className, listNews }) => {
  return (
    <section
      className={`${Classes.newsWidget} ${Classes.section} ${className}`}>
      <div className={`${Classes.container} container`}>
        <div className={Classes.layout}>
          {listNews.map((eachNewsItem) => {
            return (
              <Card
                key={eachNewsItem.key}
                overridingClasses={Classes}
                content={eachNewsItem}></Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

NewsWidget.propTypes = {
  className: PropTypes.string,
  listNews: PropTypes.array,
  length: PropTypes.number,
};

export default NewsWidget;
