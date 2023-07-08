import PropTypes from 'prop-types';
import Classes from './_FooterInfo.module.scss';
import { ReactComponent as LogoHori } from '../../assets/logo-w-hori.svg';
import mark1 from '../../assets/cert-mark-1.png';
import mark2 from '../../assets/cert-mark-2.png';

const FooterInfo = ({ className }) => {
  return (
    <section className={`${Classes.footerInfo} ${className}`}>
      <div className={`${Classes.container} container`}>
        <div className={Classes.layout}>
          <div className={Classes.logo}>
            <LogoHori></LogoHori>
          </div>
          <div className={Classes.addr}>
            <div className={Classes.addrGrid}>
              <div className={Classes.addrEach}>
                <div>서울캠퍼스 :</div>
                <div>
                  <div>02-2287-5114</div>
                  <div>
                    <span className="nowrap">서울시 종로구 홍지문 2길</span>
                    {` `}20 상명대학교 &#40;03016&#41;
                  </div>
                </div>
              </div>
              <div className={Classes.addrEach}>
                <div>천안캠퍼스 :</div>
                <div>
                  <div>041-550-5114</div>
                  <div>
                    <span className="nowrap">
                      충청남도 천안시 동남구 상명대길
                    </span>
                    {` `}31 상명대학교 &#40;31066&#41;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Classes.cert}>
            <div className={Classes.certMark}>
              <img src={mark1} alt="" />
              <img src={mark2} alt="" />
            </div>
            <div className={Classes.certInfo}>
              <div>
                <div>인증범위 학사행정시스템:</div>
                <div>
                  <span className="nowrap">
                    &#40;학적,성적관리,학사관리,증명발급&#41;
                  </span>{' '}
                  및 대표홈페이지 운영
                </div>
              </div>
              <div>
                <div>유효기간:</div>
                <div>2022.07.11 ~ 2025.07.10</div>
              </div>
            </div>
          </div>
          <div className={Classes.copyright}>
            COPYRIGHT BY SANGMYUNG UNIVERSITY. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </section>
  );
};

FooterInfo.propTypes = {
  className: PropTypes.string,
};

export default FooterInfo;
