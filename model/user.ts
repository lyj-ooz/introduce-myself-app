interface IUser {
  name: string;
  phone: string;
  email: string;
  briefIntro: string;
  longIntro: string;
  careers: IUserCareers[];
}

interface IUserCareers {
  companyName: string;
  job: string;
}

const user: IUser = {
  name: '이유진',
  phone: '010-6471-5318',
  email: 'yjlee1026@yahoo.com',
  briefIntro:
    '나만의 기술을 가지고 싶다는 생각에 우연히 시작한 개발이 점점 재밌어서 계속 하는 중입니다. 프론트엔드 개발자로 시작했지만 제 역할에 제한을 두지 않고 백엔드, 모바일, pm, 디자인 등 개발 관련 분야 두루두루 경험하는 것을 지향합니다. 앞으로 10년 후에 어떤 개발자가 되어 있을지 모르지만 나이가 들어도 기꺼이 배울 수 있는 개발자가 되고 싶습니다.',
  longIntro: '긴 소개글~~~~~~',
  careers: [
    {
      companyName: '트레디',
      job: '업무내용',
    },
    {
      companyName: '하경소프트',
      job: '업무내용',
    },
  ],
};

export default user;
