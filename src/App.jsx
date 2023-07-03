import NavRail from './component/NavRail/NavRail';
import SearchWidget from './component/SearchWidget/SearchWidget';
import NoticeWidget from './component/NoticeWidget/NoticeWidget';
import './style/_layout.scss';
import DB from './DB';

function App() {
  DB.notices.forEach((eachNoticeItem) => {
    eachNoticeItem.prefix =
      DB.noticePrefixes[Math.floor(Math.random() * DB.noticePrefixes.length)];
    eachNoticeItem.date = `07-03`;
  });

  return (
    <>
      <div className="grid">
        <div className="nav-bar"></div>
        <NavRail className="nav-rail" navList={DB.old}></NavRail>
        <div className="imagery"></div>
        <div className="widget">
          <div className="widget__wrap">
            <SearchWidget
              className="widget__search"
              chipList={DB.chips}
              length={12}></SearchWidget>
            <NoticeWidget
              className="widget__notice"
              tabList={DB.tabs}
              noticeList={DB.notices}
              length={8}></NoticeWidget>
          </div>
        </div>
        <main>
          <section>
            <div className="container">
              <h2>this is main</h2>
              <p>
                생생하며, 바이며, 같이 방지하는 긴지라 때문이다. 싹이 희망의
                하여도 피는 사람은 가슴이 듣는다. 지혜는 방황하였으며, 창공에
                이것이다. 산야에 길을 그들은 새가 뛰노는 이상은 있는 이것이다.
                작고 보이는 긴지라 청춘 그것을 있는 이것이다. 든 못할 무엇을
                내려온 우리의 끓는다. 낙원을 우리의 이상 뿐이다. 가치를 든
                커다란 얼음과 피어나기 교향악이다. 원대하고, 노년에게서 그러므로
                군영과 사막이다. 내는 방황하여도, 크고 같이 이상의 들어 이상의
                사막이다. 피에 속에서 보배를 광야에서 끝까지 듣기만 것이다.
                오아이스도 반짝이는 청춘 황금시대다. 용기가 아니한 그들은 눈에
                무한한 황금시대다. 살 없으면 기관과 보라. 때에, 갑 전인 착목한는
                이것이야말로 얼음에 우리 것이 보라. 황금시대의 되려니와,
                용감하고 바이며, 피가 하였으며, 넣는 관현악이며, 이것이다.
                유소년에게서 원질이 보이는 노래하며 아름다우냐? 따뜻한 끓는
                그들의 사는가 부패를 가진 피고 청춘의 품었기 아니다.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus nulla obcaecati saepe. Ratione repellendus quos
                atque, officia, fugit iusto fugiat iste suscipit quo maiores
                quam. Quisquam quis repellat, ex similique eaque repudiandae!
                Accusamus exercitationem vitae cumque perspiciatis dolorem optio
                nam aliquid, quod dolores praesentium corporis magni, velit ut
                reiciendis quibusdam, delectus veritatis. Nesciunt enim,
                voluptatem ab fugiat molestias non praesentium, facere ullam
                labore itaque voluptatibus accusantium. Ullam magnam eaque rem,
                quisquam consequatur vitae earum necessitatibus ab. Ipsum
                voluptate voluptatibus doloribus suscipit laudantium quisquam,
                eaque cumque. Ut nemo expedita dolore id repellat harum maxime
                maiores cum. Dolor cumque sint aliquid inventore nesciunt.
                Dolore laudantium repudiandae error blanditiis sit dolorem,
                aliquam est laborum aliquid distinctio! Veritatis cum
                perferendis alias a nesciunt impedit velit, deleniti ducimus
                reprehenderit quidem libero commodi eligendi molestias sapiente
                odio repellat, iure aspernatur dignissimos quod temporibus
                itaque possimus. Quisquam quasi, provident ipsum voluptatem
                suscipit esse praesentium iure nesciunt libero exercitationem,
                architecto, rerum corporis? Totam libero laudantium minus
                temporibus placeat atque, ea asperiores magnam autem impedit et
                nam provident natus, non dignissimos accusamus iure molestiae
                sequi consequatur ratione quam eum, sit vitae. Corporis debitis
                at qui, id beatae deleniti possimus nam aliquam ducimus iusto
                molestiae adipisci eius in nemo aspernatur dolore sapiente
                dolores voluptates velit quaerat aut ipsa provident veniam
                voluptatem! Earum dolor alias quibusdam eum. Veniam molestias
                optio sint harum? Inventore quos ad officiis mollitia
                repudiandae voluptates, minus animi, adipisci magni nemo
                voluptate omnis deserunt et quod tempora, rerum aliquam quia
                nostrum obcaecati enim officia ut aperiam sed. Saepe atque
                reiciendis mollitia totam cupiditate nostrum asperiores
                recusandae perspiciatis, accusamus fugiat consectetur
                laboriosam, aut dicta accusantium illum ipsa ex, delectus odit
                quibusdam magnam neque? Sapiente illo saepe, quos molestias, qui
                harum alias veritatis velit necessitatibus voluptatibus
                accusantium voluptas, neque laborum? A consequatur esse, magni
                harum dicta odio qui aliquid pariatur omnis dolor asperiores
                porro architecto natus vero mollitia ex ullam eaque beatae. Sed
                atque explicabo sunt consequuntur magnam repellendus aperiam
                quibusdam recusandae tempora, dolore voluptatem temporibus
                eaque. Repudiandae non, sapiente fugiat earum eaque autem
                facilis, illo quam esse a voluptate sed dignissimos dolorem
                atque impedit veritatis minus hic optio harum corrupti nostrum!
                Vero consectetur illum quod iure accusantium natus, ullam rerum
                maxime molestias obcaecati quasi eum corrupti quis rem fuga
                inventore dolores officia iusto velit sunt. Expedita, in
                mollitia nisi earum commodi libero porro aliquid obcaecati iusto
                illum quos est voluptatem ullam soluta dolorum explicabo! Quos,
                eum labore! Esse non ratione maxime, sunt accusantium facilis
                eveniet necessitatibus asperiores. Nisi, omnis culpa quisquam
                rerum nulla tempora iusto esse unde quam. Ea esse iure, impedit,
                ex non dignissimos corrupti ipsum accusamus numquam unde
                nesciunt debitis sapiente saepe? Voluptas aliquam non pariatur
                tempora nam suscipit voluptatem iusto rerum repellendus vero?
                Culpa nesciunt, voluptatum delectus accusamus molestias odio
                distinctio vero quisquam nostrum quos dolor porro voluptatibus
                similique magni tenetur voluptate. Vero ut, delectus distinctio
                recusandae odio quasi corporis, aut nihil qui eaque temporibus
                illo tempora voluptas non cumque in deserunt ipsam quis tempore
                totam velit. Obcaecati omnis dolores repudiandae possimus!
                Consequuntur a esse eaque.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
