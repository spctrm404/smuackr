import PropTypes from 'prop-types';
import Classes from './_FooterLink.module.scss';
const FooterLink = ({ className, listLink }) => {
  return (
    <section
      className={`${Classes.footerLink} ${Classes.section} ${className}`}>
      <div className={`${Classes.container} container`}>
        <div className={Classes.layout}>
          {listLink.map((eachLinkItem) => {
            return (
              <a
                key={eachLinkItem.key}
                className={`${Classes.a} ${
                  eachLinkItem.label === '개인정보처리방침'
                    ? Classes.accent
                    : null
                }`}
                href="#">
                {eachLinkItem.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

FooterLink.propTypes = {
  className: PropTypes.string,
  listLink: PropTypes.array,
};

export default FooterLink;
