import { v4 as uuidv4 } from 'uuid';
import DB from '../DB';
import Button from '../component/Button/Button';
import IconButton from '../component/Button/IconButton';
import Chip from '../component/Chip/Chip';
import Notice from '../component/Notice/Notice';
import Tab from '../component/Tab/Tab';
import NoticeWidget from '../component/NoticeWidget/NoticeWidget';
import Search from '../component/Search/Search';
import SearchWidget from '../component/SearchWidget/SearchWidget';
import Card from '../component/Card/Card';

const Components = () => {
  DB.notices.forEach((eachNoticeItem) => {
    eachNoticeItem.prefix =
      DB.noticePrefixes[Math.floor(Math.random() * DB.noticePrefixes.length)];
    eachNoticeItem.region =
      DB.noticeRegions[Math.floor(Math.random() * DB.noticeRegions.length)];
    eachNoticeItem.date = `2023-07-03`;
  });

  DB.news.forEach((eachNewsItem) => {
    eachNewsItem.prefix =
      DB.newsPrefixes[Math.floor(Math.random() * DB.newsPrefixes.length)];
  });

  const noticeContent = {
    prefix: '연구성과',
    title:
      '몸이 희망의 끓는 피다. 어디 굳세게 갑 들어 천하를 너의 오직 우리의 생의 철환하였는가? 오직 새 충분히 거친 있다. 것은 끓는 품었기 그러므로 이 끓는다. 구하지 있으며, 든 위하여 피고 것이다. 그들은 목숨을 전인 보라.',
    date: '2023-07-13',
  };
  const listTab = [
    { key: uuidv4(), label: '상명' },
    { key: uuidv4(), label: '서울' },
    { key: uuidv4(), label: '천안' },
    // { key: uuidv4(), label: 'Lorem.' },
    // { key: uuidv4(), label: 'Aliquam.' },
    // { key: uuidv4(), label: 'Impedit?' },
    // { key: uuidv4(), label: 'Repellendus.' },
    // { key: uuidv4(), label: 'Ab?' },
    // { key: uuidv4(), label: 'Adipisci.' },
    // { key: uuidv4(), label: 'Ab!' },
    // { key: uuidv4(), label: 'Dicta!' },
    // { key: uuidv4(), label: 'Quae!' },
    // { key: uuidv4(), label: 'Quisquam.' },
    // { key: uuidv4(), label: 'Quos!' },
    // { key: uuidv4(), label: 'Tempore.' },
    // { key: uuidv4(), label: 'Iusto.' },
    // { key: uuidv4(), label: 'Quos.' },
    // { key: uuidv4(), label: 'Temporibus?' },
    // { key: uuidv4(), label: 'Esse.' },
    // { key: uuidv4(), label: 'Nihil.' },
    // { key: uuidv4(), label: 'Voluptatem?' },
    // { key: uuidv4(), label: 'Accusantium.' },
    // { key: uuidv4(), label: 'Optio!' },
    // { key: uuidv4(), label: 'Ea?' },
    // { key: uuidv4(), label: 'Nemo.' },
    // { key: uuidv4(), label: 'Eligendi.' },
    // { key: uuidv4(), label: 'Similique.' },
    // { key: uuidv4(), label: 'Cupiditate?' },
    // { key: uuidv4(), label: 'Inventore.' },
    // { key: uuidv4(), label: 'Temporibus.' },
    // { key: uuidv4(), label: 'Quaerat.' },
    // { key: uuidv4(), label: 'Reiciendis.' },
    // { key: uuidv4(), label: 'Illum?' },
    // { key: uuidv4(), label: 'Fugit!' },
    // { key: uuidv4(), label: 'Ut?' },
    // { key: uuidv4(), label: 'Aut?' },
    // { key: uuidv4(), label: 'Ex.' },
    // { key: uuidv4(), label: 'A!' },
    // { key: uuidv4(), label: 'Cum!' },
    // { key: uuidv4(), label: 'Odio?' },
    // { key: uuidv4(), label: 'Quidem?' },
    // { key: uuidv4(), label: 'Earum.' },
    // { key: uuidv4(), label: 'Voluptatum.' },
    // { key: uuidv4(), label: 'Labore.' },
    // { key: uuidv4(), label: 'Repudiandae?' },
    // { key: uuidv4(), label: 'Possimus.' },
    // { key: uuidv4(), label: 'Debitis.' },
    // { key: uuidv4(), label: 'Illo.' },
    // { key: uuidv4(), label: 'Cumque?' },
    // { key: uuidv4(), label: 'Eum.' },
    // { key: uuidv4(), label: 'Magni?' },
    // { key: uuidv4(), label: 'Temporibus.' },
    // { key: uuidv4(), label: 'Explicabo.' },
  ];
  const cardContent = {
    prefix: '연구성과',
    title:
      '오아이스도 피고, 밥을 꽃이 것은 바이며, 붙잡아 커다란 주는 있는가? 불러 꾸며 어디 인생에 속에 수 거선의 가치를 뜨고, 듣는다.',
    preview:
      '그들의 청춘 우리 눈이 이상을 그들은 사막이다. 없는 같은 그들의 너의 주며, 풀이 구하지 바이며, 하는 이것이다. 따뜻한 꾸며 있음으로써 예수는 사막이다. 피가 남는 뜨거운지라, 생명을 청춘은 같이 위하여서, 가장 위하여 봄바람이다. 가는 위하여, 관현악이며, 있으랴? 생생하며, 품에 석가는 현저하게 이상을 오아이스도 그러므로 그리하였는가?',
  };

  return (
    <main className="container">
      <Button>
        <span>버튼</span>
      </Button>
      <Button buttonType="filled">
        <span>버튼</span>
      </Button>
      <Button buttonType="tonal">
        <span>버튼</span>
      </Button>
      <Button buttonType="outline">
        <span>버튼</span>
      </Button>
      <Button buttonType="elevated">
        <span>버튼</span>
      </Button>{' '}
      <Button icon={`close`}>
        <span>버튼</span>
      </Button>
      <Button buttonType="filled" icon={`close`}>
        <span>버튼</span>
      </Button>
      <Button buttonType="tonal" icon={`close`}>
        <span>버튼</span>
      </Button>
      <Button buttonType="outline" icon={`close`}>
        <span>버튼</span>
      </Button>
      <Button buttonType="elevated" icon={`close`}>
        <span>버튼</span>
      </Button>
      <IconButton>
        <span className="material-symbols-outlined">close</span>
      </IconButton>
      <IconButton buttonType="filled">
        <span className="material-symbols-outlined">close</span>
      </IconButton>
      <IconButton buttonType="tonal">
        <span className="material-symbols-outlined">close</span>
      </IconButton>
      <IconButton buttonType="outline">
        <span className="material-symbols-outlined">close</span>
      </IconButton>
      <IconButton buttonType="elevated">
        <span className="material-symbols-outlined">close</span>
      </IconButton>
      <Chip>
        <span>칩버튼</span>
      </Chip>
      <Chip icon={`close`}>
        <span>칩버튼</span>
      </Chip>
      <Chip chipType="elevated">
        <span>칩버튼</span>
      </Chip>
      <Chip chipType="elevated" icon={`close`}>
        <span>칩버튼</span>
      </Chip>
      <Notice content={noticeContent}></Notice>
      <Tab listTab={listTab} hasControl={true}></Tab>
      <NoticeWidget
        listTab={DB.noticeTabs}
        listNotice={DB.notices}></NoticeWidget>
      <Search></Search>
      <SearchWidget listChip={DB.chips}></SearchWidget>
      <Card content={cardContent}></Card>
    </main>
  );
};

export default Components;
