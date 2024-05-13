function getTravelList(params: Boolean) {
  const mockdatapre = [
    {
      id: 0,
      title: '강릉 고고릉',
      startAt: 'string',
      endAt: 'string',
      dateDiff: 0,
      templateNum: 2,
    },
    {
      id: 1,
      title: '수수한 제주',
      startAt: 'string',
      endAt: 'string',
      dateDiff: 0,
      templateNum: 1,
    },
    {
      id: 3,
      title: '여수 밤바다',
      startAt: 'string',
      endAt: 'string',
      dateDiff: 0,
      templateNum: 4,
    },
    {
      id: 4,
      title: '우리 독도',
      startAt: 'string',
      endAt: 'string',
      dateDiff: 0,
      templateNum: 5,
    },
  ];
  const mockdataend = [
    {
      id: 0,
      title: '벚꽃 가득 경주',
      startAt: 'string',
      endAt: 'string',
      dateDiff: 0,
      templateNum: 8,
    },
    {
      id: 1,
      title: '내 맘대로 부산',
      startAt: 'string',
      endAt: 'string',
      dateDiff: 0,
      templateNum: 7,
    },
  ];

  if (params) {
    return mockdatapre;
  } else {
    return mockdataend;
  }
}

export default getTravelList;
