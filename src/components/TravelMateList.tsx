import { styled } from 'styled-components';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setMinusTravelMateList } from '../redux/slice/travelMateSlice';

function TravelMateList() {
  const dispatch = useDispatch();
  const list = useSelector((status: RootState) => status.travelMate);

  const handleDeleteMateClick = (index: number) => {
    dispatch(setMinusTravelMateList(list[index]));
  };
  return (
    <>
      {list.map((item, index) => {
        return (
          <TravelMate key={index + '' + item.nickname}>
            <MateProfileContainer>
              <MateProfileImgContainer>
                <MateProfileImg src={item.profileImgageUrl}></MateProfileImg>
              </MateProfileImgContainer>
              <MateName>{item.nickname}</MateName>
            </MateProfileContainer>
            <AiOutlineMinusCircle
              onClick={() => handleDeleteMateClick(index)}
            />
          </TravelMate>
        );
      })}
    </>
  );
}
const TravelMate = styled.div`
  display: flex;

  svg {
    margin-top: 10px;
    width: 25px;
    height: 25px;
    position: absolute;
    left: 290px;
    color: #869684;
  }
`;
const MateProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const MateProfileImgContainer = styled.div`
  width: 33px;
  height: 33px;

  background: #ffd3aa;
  border: 1px solid #ffffff;
  border-radius: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const MateProfileImg = styled.img`
  box-sizing: border-box;

  width: 27.36px;
  height: 27.36px;

  border: 1px solid #ffffff;
  border-radius: 500px;
`;
const MateName = styled.div``;
export default TravelMateList;
