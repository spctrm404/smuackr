import PropTypes from 'prop-types';
import Classes from './_FooterLink.module.scss';
const FooterLink = ({ className, linkList }) => {
  return (
    <section className={`${Classes.footerLink} ${className}`}>
      <div className={`${Classes.container} container`}>
        <div className={Classes.layout}>
          {linkList.map((eachLinkItem) => {
            return (
              <a
                key={eachLinkItem.key}
                className={`nowrap ${Classes.a} ${
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
  linkList: PropTypes.array,
};

export default FooterLink;
