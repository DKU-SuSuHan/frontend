import { styled } from 'styled-components';
import { getTravelList } from '../lib/getTravelList';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { bglist } from '../assets/bglist';
import { useEffect } from 'react';

function TravelList({ listType }: { listType: Boolean }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getTravelList(listType, dispatch);
  }, [listType, dispatch]); // listType 또는 dispatch가 변경될 때마다 호출

  const list = useSelector((state: RootState) =>
    listType ? state.travels.plannedTravels : state.travels.endedTravels,
  );

  return (
    <>
      {list.map(item => {
        const Bgcolor = item.templateNum;
        return (
          <TravelCardContainer
            key={`${item.id}tcc${listType}`}
            color={`${listType ? bglist[Bgcolor] : bglist[0]}`}
            onClick={() =>
              (window.location.href = `/teavel-Roadmap?travelid=${item.id}`)
            }
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
