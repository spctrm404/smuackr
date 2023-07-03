import PropTypes from 'prop-types';
import Classes from './_Footer.module.scss';
import { ReactComponent as LogoHori } from '../../assets/logo-w-hori.svg';

const Footer = ({ className, list }) => {
  return (
    <footer className={`${Classes.footer} ${className}`}>
      <section className={Classes.sectionInfo}>
        <div className={`${Classes.container} container`}>
          <div className={Classes.logo}>
            <LogoHori></LogoHori>
          </div>
          <div className={Classes.addresses}>
            <div className={Classes.address}>
              <div className={Classes.addressTitle}>서울캠퍼스 :</div>
              <div className={Classes.addressInfo}>
                <div>02-2287-5114</div>
                <div>
                  서울시 종로구 홍지문 2길 20 상명대학교 &#40;03016&#41;
                </div>
              </div>
            </div>
            <div className={Classes.address}>
              <div className={Classes.addressTitle}>천안캠퍼스 :</div>
              <div className={Classes.addressInfo}>
                <div>041-550-5114</div>
                <div>
                  충청남도 천안시 동남구 상명대길 31 상명대학교 &#40;31066&#41;
                </div>
              </div>
            </div>
          </div>
          <div>COPYRIGHT BY SANGMYUNG UNIVERSITY. ALL RIGHTS RESERVED.</div>
        </div>
      </section>
      <section className={Classes.sectionLink}>
        <div className={`${Classes.container} container`}>
          <div className={Classes.layout}>
            {list.map((eachListItem) => {
              return <div key={eachListItem.key}>{eachListItem.label}</div>;
            })}
          </div>
        </div>
      </section>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
};

export default Footer;
