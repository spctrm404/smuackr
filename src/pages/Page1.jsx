import { v4 as uuidv4 } from 'uuid';
import Classes from './_Page.module.scss';
import Tab from '../component/Tab/Tab';
import photo_1 from '../assets/news (1).jpg';
import photo_2 from '../assets/news (2).jpg';
import photo_3 from '../assets/news (3).jpg';
import photo_4 from '../assets/news (4).jpg';
import photo_5 from '../assets/news (5).jpg';
import photo_6 from '../assets/news (6).jpg';

function Page1() {
  const listTab = [
    { key: uuidv4(), label: '탭1' },
    { key: uuidv4(), label: '탭2' },
    { key: uuidv4(), label: '탭3' },
    { key: uuidv4(), label: '탭4' },
    { key: uuidv4(), label: '탭5' },
    { key: uuidv4(), label: '탭6' },
    { key: uuidv4(), label: '탭7' },
    { key: uuidv4(), label: '탭8' },
  ];

  return (
    <div className={Classes.container}>
      <div className={Classes.layout}>
        <div className={Classes.titleContainer}>
          <div className={Classes.title}>
            <h3>2뎁스 제목이 들어갑니다.</h3>
            <h4>3뎁스 제목이 들어갑니다.</h4>
          </div>
          <Tab
            listTab={listTab}
            overridingClasses={Classes}
            hasControl={`responsive`}></Tab>
        </div>
        <div className={Classes.articleContainer}>
          <nav className={Classes.articleIndexContainer}>
            <div className={Classes.articleIndex}>
              <div className={Classes.articleIndexTitle}>목차</div>
              <ul>
                <li>
                  <a href="#">내부 소제목</a>
                </li>
                <li>
                  <a href="#">내부 소제목</a>
                </li>
                <li>
                  <a href="#">내부 소제목</a>
                </li>
                <li>
                  <a href="#">내부 소제목</a>
                </li>
              </ul>
            </div>
          </nav>
          <article className={Classes.article}>
            <p>
              페이지의 컨텐츠 영역의 최대 너비는 1024px = 64rem입니다. 모든
              텍스트는 {'<'}p{'>'}태그로 문단처리가 되어 있습니다. {'<'}p{'>'}
              태그의 최대 너비는 30.837ch * 3 입니다. 이는 한글 전각 약 60자에
              해당합니다. 본문에 사용된 Spoqa Han Sans Neo, 18px 기준,
              92.551ch는 993.609px 이며, 이는 컨텐츠 영역의 최대 너비인 64rem에
              조금 못미칩니다.
            </p>
            <h5>본문의 대제목 h5입니다.</h5>
            <h6>본문의 소제목 h6입니다.</h6>
            <p>
              문서의 제목: 3뎁스 제목은 {'<'}h4{'>'}태그를 사용하고 있으며, 그
              위로 2뎁스 제목까지만 표기하고 2뎁스 제목은 {'<'}h3{'>'}태그를
              사용합니다. 문서 내의 소제목은 {'<'}h5{'>'}, {'<'}h6{'>'}태그를
              사용했으며, 그 이하의 더 작은 구분은 {'<'}p{'>'}태그에 weight:
              700d을 적용해 표현합니다. (.subheading-xm 클래스)
            </p>
            <h6>본문의 소제목 h6입니다.</h6>
            <p>
              :has()를 이용했습니다. 2023년 7월 23일 현재 firefox에서 :has()를
              기본으로 지원하지는 않으나,{' '}
              <a href="https://connect.mozilla.org/t5/ideas/when-is-has-css-selector-going-to-be-fully-implemented-in/idi-p/23794/page/3#comments">
                조만간 지원될 예정
              </a>
              이라하니 문제가 되진 않을 것 같습니다. 당장은 about:config
              페이지의 layout.css.has-selector.enabled를 토글링해서 :has()를
              지원하도록 할 수 있습니다.
            </p>
            <p>
              청춘 위하여서, 따뜻한 청춘에서만 가슴이 미인을 약동하다. 있는 있는
              자신과 것이다. 그들을 청춘의 시들어 속에 따뜻한 운다. 있는 위하여
              찾아다녀도, 동력은 노래하며 것이다. 곳으로 생명을 인간의
              그리하였는가? 구하지 못하다 심장의 듣기만 노래하며 지혜는 미묘한
              할지라도 청춘에서만 쓸쓸하랴? 청춘이 못할 이상 얼마나 보라. 그들은
              그들을 속에 것이다. 가장 때에, 행복스럽고 속잎나고, 찬미를 못할
              발휘하기 끓는다.
            </p>
            <p>
              많이 같이, 더운지라 청춘의 이것을 듣는다. 싹이 영원히 실로 이상을
              뜨고, 이것을 같은 사람은 때문이다. 사람은 뭇 얼마나 얼마나 뛰노는
              위하여, 새 이것이다. 붙잡아 어디 만물은 인생의 용감하고 풀밭에
              찬미를 것이다. 그들은 설산에서 위하여, 못할 봄바람이다. 오아이스도
              듣기만 있으며, 위하여 일월과 부패를 뜨거운지라, 것이다. 작고
              봄날의 구할 것은 되려니와, 별과 어디 시들어 소금이라 있으랴?
              풍부하게 뜨거운지라, 하는 가치를 기관과 장식하는 때문이다. 이상,
              뼈 천지는 찬미를 가는 것이다.
            </p>
            <h6>본문의 소제목 h6입니다.</h6>
            <div className={Classes.articleQuote}>
              <div className={Classes.articleQuoteText}>
                이것은 인용문, 강조 등의 목적으로 만들어 둔 스타일입니다.
                text-wrap: balance를 이용했으며, 이는 아직 브라우저 지원이
                미약합니다. 따라서 충분한 지원 이전에는 {`<`}br /{`>`}을 이용해
                강제개행을 해야합니만, 내버려둬도 괜찮을 것 같습니다.
              </div>
            </div>
            <p>
              새가 소리다.이것은 것은 공자는 봄바람이다. 쓸쓸한 가는 이것은
              긴지라 뜨고, 사랑의 부패뿐이다. 있음으로써 꾸며 청춘 아름다우냐?
              아니한 황금시대의 심장은 산야에 같이 보라. 안고, 그들은 이상이
              같이, 있는 그것은 때문이다. 무엇을 것이 만천하의 공자는
              뜨거운지라, 아름다우냐? 눈이 얼음과 소담스러운 인도하겠다는 넣는
              그와 때문이다. 보배를 소금이라 인류의 위하여 같지 청춘은 대한
              끓는다. 길지 할지니, 시들어 이것이다. 새 끝까지 힘차게 것이다.
            </p>
            <div className={Classes.articleQuote}>
              <div className={Classes.articleQuoteText}>
                중간에 삽입되어도 문제가 없습니다.
              </div>
            </div>
            <p>
              투명하되 것은 봄바람을 발휘하기 철환하였는가? 그들은 심장의
              그러므로 커다란 곧 청춘의 능히 못하다 사라지지 있는가? 더운지라
              타오르고 스며들어 아니더면, 대고, 석가는 사라지지 것이다. 이성은
              그것을 귀는 아니한 싹이 말이다. 인생에 황금시대의 청춘의 것이다.
              그들의 싹이 심장은 운다. 품으며, 무엇을 놀이 듣는다. 설산에서 하는
              것은 피가 인생에 얼음 말이다. 하여도 몸이 그들의 설산에서
              황금시대다. 천자만홍이 별과 이성은 바이며, 우는 것이다. 있는
              천하를 불러 지혜는 끓는 못할 싹이 살 우리는 때문이다.
            </p>
            <div className={Classes.articleQuote}>
              <div className={Classes.articleQuoteText}>
                연속으로 삽입되어도 문제가 없습니다.
              </div>
            </div>
            <div className={Classes.articleQuote}>
              <div className={Classes.articleQuoteText}>
                연속으로 삽입되어도 문제가 없습니다.
              </div>
            </div>
            <p>
              영락과 대중을 힘차게 아름답고 남는 따뜻한 눈이 그들은 있으랴? 오직
              청춘의 피고 몸이 있으랴? 우리 광야에서 듣기만 위하여서. 피고,
              관현악이며, 생의 내는 찾아다녀도, 교향악이다. 사람은 인생을
              풍부하게 품으며, 바이며, 속잎나고, 우리 이것이다. 인생에 산야에
              그들에게 이상의 보내는 목숨이 반짝이는 위하여 사막이다. 청춘의
              그들은 천하를 심장은 청춘의 뜨거운지라, 인생을 얼음이 무엇이
              교향악이다. 몸이 인생을 더운지라 무엇을 것이다. 있음으로써 싶이
              대한 산야에 되려니와, 있으랴?
            </p>
            <div className={Classes.articleQuote}>
              <div className={Classes.articleQuoteText}>
                끝에 삽입되어도 문제가 없습니다.
              </div>
            </div>
            <h5>본문의 대제목 h5입니다.</h5>
            <div className={Classes.articleColumn}>
              <div className={Classes.articleColumnText}>
                <p>다단도 지원합니다.</p>
                <p>
                  이미지의 너비가 주어져야하며, 그 너비는 고정됩니다. 예제에서는
                  360px를 적용했습니다.이미지의 최대 너비는 페이지의 컨텐츠
                  영역의 최대 너비인 1024px = 64rem을 넘을 수 없습니다.
                </p>
                <p>
                  다단의 텍스트는 자동으로 그 폭이 조정되며, 최대 너비는
                  30.837ch * 2, 최소 너비는 30.837ch입니다. 이는 한글 전각 약
                  40자, 20자에 해당합니다. 본문에 사용된 Spoqa Han Sans Neo,
                  18px 기준, 30.837ch는 331.203px 입니다.
                </p>
                <p>
                  이미지 옆으로 텍스트의 최소 너비가 확보되지 않으면 텍스트
                  블록은 이미지 옆이 아닌 아래로 wrap됩니다. 따라서 이미지의
                  너비가 (컨텐츠의 최대 너비) - (텍스트의 최소 너비) - (컬럼
                  너비)보다 클 경우 다단이 발생하지 않는다는 의미입니다. 그 값은{' '}
                  <strong>668.797px</strong> 입니다. 즉, 668.798px 이상으로
                  이미지의 너비를 지정할 경우 다단이 발생하지 않습니다.
                </p>
              </div>
              <img src={photo_1} alt="" />
            </div>
            <p>
              평화스러운 이것을 예가 피부가 자신과 목숨을 이것은 맺어, 우는
              말이다. 내는 그들은 황금시대의 많이 얼마나 들어 약동하다.
              방황하여도, 그들은 군영과 지혜는 용감하고 이는 것이다. 찬미를 온갖
              청춘을 위하여서. 충분히 가치를 속에서 위하여서, 그들은 능히
              이것이다. 가지에 끓는 이것을 설산에서 청춘에서만 있다. 길을 꽃이
              위하여, 있는 하는 인생을 보배를 이상, 그리하였는가? 봄바람을 뜨고,
              과실이 길지 품었기 풍부하게 못하다 우리 철환하였는가? 사라지지
              간에 할지라도 사막이다. 굳세게 원질이 생의 오아이스도 보배를
              영락과 철환하였는가?
            </p>
            <div className={Classes.articleColumn}>
              <div className={Classes.articleColumnText}>
                <p>
                  구조적으로 다단 내에서 이미지는 택스트 이후에 위치합니다.
                  flex-direction: row-reverse를 통해 다단이 형성되었을 때는
                  이미지가 좌측에 오지만, 뷰포트 너비가 줄어들어 다단이 형성되지
                  않을 경우에는 이미지가 아래 옵니다.
                </p>
              </div>
              <img src={photo_2} alt="" />
            </div>{' '}
            <div className={Classes.articleColumn}>
              <div className={Classes.articleColumnText}>
                <p>다단을 연속으로 삽입해도 문제가 없습니다.</p>
              </div>
              <img src={photo_3} alt="" />
            </div>
            <p>
              동산에는 곳이 예수는 황금시대다. 천자만홍이 우리 이것이야말로
              커다란 긴지라 사랑의 봄바람이다. 주는 열락의 품에 발휘하기 얼마나
              심장의 쓸쓸하랴? 유소년에게서 그들에게 같이, 산야에 힘있다. 풀이
              황금시대를 심장은 청춘 싹이 이는 아름다우냐? 미묘한 두손을 영락과
              같으며, 놀이 오아이스도 시들어 철환하였는가? 이성은 청춘
              찾아다녀도, 따뜻한 같지 눈이 우리의 놀이 방지하는 이것이다.
              풍부하게 앞이 피에 우리는 인간이 작고 힘차게 곧 꽃이 있는가?
              찬미를 곳이 있을 돋고, 이상 보라.
            </p>
            <h6>다단 내부에 제목을 삽입할 수는 없습니다.</h6>
            <div className={Classes.articleColumn}>
              <div className={Classes.articleColumnText}>
                <p>다단 앞에서 제목을 사용해야합니다.</p>
              </div>
              <img src={photo_4} alt="" />
            </div>
            <p>
              무엇을 피고, 싹이 그리하였는가? 밝은 붙잡아 못할 낙원을 약동하다.
              꽃 끓는 무엇을 속에 사는가 오아이스도 할지니, 있다. 산야에 과실이
              청춘 내려온 이것이다. 싶이 그러므로 않는 동산에는 충분히
              황금시대의 뿐이다. 무엇을 피가 들어 피고 영락과 불어 피가 풍부하게
              봄바람이다. 미인을 사랑의 구하지 영원히 있는가? 예수는 그러므로
              하였으며, 이상이 교향악이다. 천지는 그들의 황금시대의 인간의
              보배를 부패를 공자는 부패뿐이다. 이상을 가치를 가치를 하였으며,
              동력은 충분히 것이다. 너의 못할 타오르고 같은 있으며, 역사를
              그리하였는가?
            </p>
            <div className={Classes.articleColumn}>
              <div className={Classes.articleColumnText}>
                <p>다단을 끝에 삽입해도 문제가 없습니다.</p>
              </div>
              <img src={photo_5} alt="" />
            </div>
            <h5>본문의 대제목 h5 입니다.</h5>
            <p>
              이상 얼마나 품고 있는가? 인간이 인간에 놀이 구하지 힘차게 지혜는
              위하여, 것은 듣는다. 용기가 자신과 열락의 오직 밝은 따뜻한 이상의
              철환하였는가? 풍부하게 열매를 가장 피고, 인생에 어디 아름다우냐?
              피가 못하다 어디 낙원을 사막이다. 스며들어 눈에 청춘은 찾아다녀도,
              피가 영락과 방황하였으며, 예수는 아니다. 가치를 영원히 두손을
              설산에서 같지 쓸쓸하랴? 가지에 많이 그들은 관현악이며, 무한한
              얼마나 싸인 황금시대를 아름다우냐? 안고, 너의 아름답고 것이다.
              내는 목숨이 미묘한 같이, 용감하고 하는 못하다 오아이스도
              노년에게서 것이다. 만물은 우리는 피고 청춘을 천하를 어디 들어
              사막이다.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Page1;
