import { v4 as uuidv4 } from 'uuid';
import Classes from './_Page.module.scss';
import Tab from '../component/Tab/Tab';
import photo_1 from '../assets/news (1).jpg';
import photo_2 from '../assets/news (2).jpg';
import photo_3 from '../assets/news (3).jpg';
import photo_4 from '../assets/news (4).jpg';
import photo_5 from '../assets/news (5).jpg';
import photo_6 from '../assets/news (6).jpg';

function Page() {
  const listTab = [
    {
      key: uuidv4(),
      label: 'sdflkajsf;a',
    },
    {
      key: uuidv4(),
      label: 'sdflkajsf;a',
    },
    {
      key: uuidv4(),
      label: 'sdflkajsf;a',
    },
    {
      key: uuidv4(),
      label: 'sdflkajsf;a',
    },
  ];

  return (
    <div className={Classes.container}>
      <div className={Classes.layout}>
        <div className={Classes.titleContainer}>
          <div className={Classes.title}>
            <h3>역사/상징</h3>
            <h4>UI 디자인</h4>
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
                <li>내부 소제목</li>
                <li>내부 소제목</li>
                <li>내부 소제목</li>
                <li>내부 소제목</li>
              </ul>
            </div>
          </nav>
          <article className={Classes.article}>
            <div className={Classes.articleQuote}>
              그들은 평화스러운 가치를 대한 우리는 내려온 있는가? 실로 대한
              얼마나 생의 못할 때문이다. 이상의 것이 가치를 뿐이다. 위하여
              인도하겠다는 가는 많이 목숨이 그들을 같지 것이다. 간에 목숨이
              무엇을 보내는 든 칼이다.
            </div>
            <div className={Classes.articleColumn}>
              <img src={photo_1} alt="" />
              <div className={Classes.articleColumnText}>
                <p>
                  황금시대를 용감하고 무엇이 같이, 청춘의 오아이스도 것이다.
                  착목한는 청춘의 수 피어나는 뼈 구할 원대하고, 그러므로
                  아름다우냐? 곧 구하지 그것은 더운지라 봄바람이다. 대중을 밝은
                  오직 생생하며, 동력은 따뜻한 피다. 무엇이 미묘한 그들은
                  천자만홍이 말이다.
                </p>
                <p>
                  황금시대를 용감하고 무엇이 같이, 청춘의 오아이스도 것이다.
                  착목한는 청춘의 수 피어나는 뼈 구할 원대하고, 그러므로
                  아름다우냐? 곧 구하지 그것은 더운지라 봄바람이다. 대중을 밝은
                  오직 생생하며, 동력은 따뜻한 피다. 무엇이 미묘한 그들은
                  천자만홍이 말이다.
                </p>
              </div>
            </div>
            <h5>글의 큰 섹션입니다</h5>
            <h6>글의 작은 섹션입니다</h6>
            <p>
              안고, 힘차게 우리는 구하기 노년에게서 앞이 거선의 때문이다.
              그림자는 얼마나 내려온 무엇을 예수는 공자는 목숨이 운다. 든 부패를
              투명하되 우리의 같으며, 봄바람을 영원히 것이다. 같은 이상은 인류의
              인생에 기쁘며, 앞이 같지 피가 것이다. 얼음이 청춘을 사라지지
              더운지라 그러므로 천지는 천고에 우리는 인간이 쓸쓸하랴? 끓는
              보배를 얼음과 크고 때문이다. 작고 온갖 굳세게 별과 그림자는
              있으랴? 하는 풍부하게 우리 봄바람을 원대하고, 간에 하였으며,
              부패뿐이다. 청춘의 청춘의 원질이 청춘에서만 위하여, 위하여 것이다.
            </p>
            <h6>글의 작은 섹션입니다</h6>
            <p>
              어디 그들은 얼마나 보내는 예가 청춘의 보는 내는 것이다. 같으며,
              할지니, 하는 인류의 위하여 그것은 황금시대다. 밥을 커다란 꽃이
              두기 영락과 우리 붙잡아 운다. 가치를 무한한 새가 청춘에서만 갑
              사막이다. 길지 속에서 가진 칼이다. 품고 이상 크고 그림자는 대고,
              뿐이다. 더운지라 이상은 우리 황금시대의 끓는다. 날카로우나 가슴에
              실현에 철환하였는가? 풀밭에 위하여 온갖 내려온 있는 있다.
              것이다.보라, 끓는 이 긴지라 모래뿐일 있는 그들은 우리는 거친
              이것이다. 든 피고, 착목한는 전인 구할 풀이 피에 아니다.
            </p>
            <p>
              황금시대를 용감하고 무엇이 같이, 청춘의 오아이스도 것이다.
              착목한는 청춘의 수 피어나는 뼈 구할 원대하고, 그러므로 아름다우냐?
              곧 구하지 그것은 더운지라 봄바람이다. 대중을 밝은 오직 생생하며,
              동력은 따뜻한 피다. 무엇이 미묘한 그들은 천자만홍이 말이다.
              타오르고 피어나는 장식하는 이것이야말로 동산에는 청춘이 착목한는
              아니한 뿐이다. 석가는 뼈 피는 보라. 유소년에게서 꽃 동력은
              황금시대의 것이다. 찬미를 그들의 인생을 사막이다. 고동을 인간의
              위하여, 이상의 미묘한 미인을 생생하며, 일월과 운다.
            </p>
            <p>
              황금시대를 용감하고 무엇이 같이, 청춘의 오아이스도 것이다.
              착목한는 청춘의 수 피어나는 뼈 구할 원대하고, 그러므로 아름다우냐?
              곧 구하지 그것은 더운지라 봄바람이다. 대중을 밝은 오직 생생하며,
              동력은 따뜻한 피다. 무엇이 미묘한 그들은 천자만홍이 말이다.
              타오르고 피어나는 장식하는 이것이야말로 동산에는 청춘이 착목한는
              아니한 뿐이다. 석가는 뼈 피는 보라. 유소년에게서 꽃 동력은
              황금시대의 것이다. 찬미를 그들의 인생을 사막이다. 고동을 인간의
              위하여, 이상의 미묘한 미인을 생생하며, 일월과 운다.
            </p>
            <h5>글의 큰 섹션입니다</h5>
            <p>
              황금시대를 용감하고 무엇이 같이, 청춘의 오아이스도 것이다.
              착목한는 청춘의 수 피어나는 뼈 구할 원대하고, 그러므로 아름다우냐?
              곧 구하지 그것은 더운지라 봄바람이다. 대중을 밝은 오직 생생하며,
              동력은 따뜻한 피다. 무엇이 미묘한 그들은 천자만홍이 말이다.
              타오르고 피어나는 장식하는 이것이야말로 동산에는 청춘이 착목한는
              아니한 뿐이다. 석가는 뼈 피는 보라. 유소년에게서 꽃 동력은
              황금시대의 것이다. 찬미를 그들의 인생을 사막이다. 고동을 인간의
              위하여, 이상의 미묘한 미인을 생생하며, 일월과 운다.
            </p>
            <div className={Classes.articleFooter}></div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Page;
