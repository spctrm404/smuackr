import PropTypes from 'prop-types';
import Classes from './_Footer.module.scss';
import FooterInfo from './FooterInfo';
import FooterLink from './FooterLink';

const Footer = ({ className, linkList }) => {
  return (
    <footer className={`${Classes.footer} ${className}`}>
      <FooterLink linkList={linkList}></FooterLink>
      <FooterInfo></FooterInfo>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  linkList: PropTypes.array,
};

export default Footer;
