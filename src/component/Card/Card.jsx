import PropTypes from 'prop-types';
import Classes from './_Card.module.scss';
import photo_1 from '../../assets/news (1).jpg';
import photo_2 from '../../assets/news (2).jpg';
import photo_3 from '../../assets/news (3).jpg';
import photo_4 from '../../assets/news (4).jpg';
import photo_5 from '../../assets/news (5).jpg';
import photo_6 from '../../assets/news (6).jpg';

const Card = ({ className, content, href, onClickCb }) => {
  const photo = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6];

  return (
    <div
      className={`${Classes.card} ${Classes.areaInteraction} ${className}`}
      href={href}
      onClick={onClickCb}>
      <div className={Classes.areaVisible}>
        <img
          className={Classes.photo}
          src={photo[Math.floor(Math.random() * photo.length)]}
        />
        <div className={Classes.text}>
          <div className={Classes.prefix}>{content.prefix}</div>
          <div className={Classes.title}>{content.title}</div>
          <div className={Classes.preview}>{content.preview}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object,
  href: PropTypes.string,
  onClickCb: PropTypes.func,
};

export default Card;
