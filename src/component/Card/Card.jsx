import PropTypes from 'prop-types';
import Classes from './_Card.module.scss';
import photo_1 from '../../assets/news (1).jpg';
import photo_2 from '../../assets/news (2).jpg';
import photo_3 from '../../assets/news (3).jpg';
import photo_4 from '../../assets/news (4).jpg';
import photo_5 from '../../assets/news (5).jpg';
import photo_6 from '../../assets/news (6).jpg';

const Card = ({ overridingClasses, content, href, onClickCallback }) => {
  const photo = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6];

  return (
    <div
      className={`${Classes.card} ${Classes.areaInteraction} ${
        overridingClasses?.[`card`]
      } ${overridingClasses?.[`cardAreaInteraction`]}`}
      href={href}
      onClick={onClickCallback}>
      <div
        className={`${Classes.areaVisible} ${
          overridingClasses?.[`cardAreaVisible`]
        }`}>
        <div className={`${Classes.photo} ${overridingClasses?.[`cardPhoto`]}`}>
          <img src={photo[Math.floor(Math.random() * photo.length)]} />
        </div>
        <div className={`${Classes.text} ${overridingClasses?.[`cardText`]}`}>
          <div
            className={`${Classes.prefix} ${
              overridingClasses?.[`cardPrefix`]
            }`}>
            {content?.prefix}
          </div>
          <div
            className={`${Classes.title} ${overridingClasses?.[`cardTitle`]}`}>
            {content?.title}
          </div>
          <div
            className={`${Classes.preview} ${
              overridingClasses?.[`cardPreview`]
            }`}>
            {content?.preview}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  overridingClasses: PropTypes.object,
  content: PropTypes.object,
  href: PropTypes.string,
  onClickCallback: PropTypes.func,
};

export default Card;
