import PropTypes from 'prop-types';
import Classes from './_Footer.module.scss';
import FooterInfo from './FooterInfo';
import FooterLink from './FooterLink';

const Footer = ({ className, listLink }) => {
  return (
    <footer className={`${Classes.footer} ${className}`}>
      <FooterLink listLink={listLink}></FooterLink>
      <FooterInfo></FooterInfo>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  listLink: PropTypes.array,
};

export default Footer;
