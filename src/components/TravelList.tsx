import { styled } from 'styled-components';
import { travelCardl } from '../interface/travleCardI';
import getTravelList from '../lib/getTravelList';

function TravelList({ listType }: { listType: Boolean }) {
  const list: Array<travelCardl> = listType
    ? getTravelList(listType)
    : getTravelList(listType);

  const bglist = [
    '#B9B9B9',
    'linear-gradient(90deg, #F7A748 0%, #487989 100%)',
    'linear-gradient(90deg, #83D6CC 0%, #EFA08B 100%)',
    'linear-gradient(90deg, #A2CEA4 0%, #7355B1 100%)',
    'linear-gradient(90deg, #243860 0%, #C5B5E7 100%)',
    'linear-gradient(90deg, #F9A364 0%, #559BB1 100%)',
    'linear-gradient(90deg, #DC5757 0%, #B19D55 100%)',
    'linear-gradient(90deg, #66749e 0%, #e6fc8f 100%)',
    'linear-gradient(90deg, #7fb681 0%, #ca8acf 100%)',
  ];
  return (
    <>
      {list.map(item => {
        const randomNumber = Math.floor(Math.random() * 8 + 1);
        const randomBackGround = bglist[randomNumber];
        console.log(randomBackGround);
        return (
          <TravelCardContainer
            key={`${item.id}tcc${listType}`}
            color={`${listType ? randomBackGround : bglist[0]}`}
          >
            <TravelCardContent>
              <TravelTitle>{item.title}</TravelTitle>
              <TravelDateDetale>
                <TravelDateDiff>
                  {`${listType ? 'D -' : 'D +'} ${item.dateDiff} | `}
                </TravelDateDiff>
                <TravelDate>
                  {item.startAt} ~ {item.endAt}
                </TravelDate>
              </TravelDateDetale>
            </TravelCardContent>
          </TravelCardContainer>
        );
      })}
    </>
  );
}

const TravelCardContainer = styled.div`
  /* button1 */

  width: 324px;
  height: 82px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;

  background: ${prop => prop.color};
  margin: 0 0 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const TravelCardContent = styled.div`
  width: 304px;
  padding: 10px;
`;
const TravelTitle = styled.div`
  width: 108px;
  height: 25px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  letter-spacing: -0.011em;

  color: #ffffff;
`;
const TravelDateDetale = styled.div`
  display: flex;
`;
const TravelDateDiff = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 150%;

  text-align: center;
  letter-spacing: -0.011em;

  color: #ffffff;
`;
const TravelDate = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 150%;

  text-align: center;
  letter-spacing: -0.011em;

  color: #ffffff;
  margin-left: 4px;
`;
export default TravelList;
