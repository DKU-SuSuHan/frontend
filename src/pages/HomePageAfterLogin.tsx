import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RootState } from '../redux/store';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import TravelList from '../components/TravelList';

function HomePageAfterLogin() {
  const userNickname = useSelector((status: RootState) => status.user.nickname);
  const userProfileImageUrl = useSelector(
    (status: RootState) => status.user.profileImageUrl,
  );

  return (
    <>
      <Container>
        <Header>
          <UserProfileContainer>
            <UserProfileImgContainer>
              <UserProfileImg src={userProfileImageUrl}></UserProfileImg>
            </UserProfileImgContainer>
            <UserNickname>{userNickname} 님</UserNickname>
          </UserProfileContainer>
          <IconContainer>
            <IconBox onClick={() => (window.location.href = '/alarm')}>
              <AiOutlineBell />
            </IconBox>
            <IconBox onClick={() => (window.location.href = '/user-info')}>
              <AiOutlineUser />
            </IconBox>
          </IconContainer>
        </Header>
        <Body>
          <BodyText>당신의 행복한 여정을 기대합니다!</BodyText>
          <TravelText>예정된 여행</TravelText>
          <TravelContanier>
            <TravelList listType={true} />
          </TravelContanier>
          <TravelText>종료된 여행</TravelText>
          <TravelContanier>
            <TravelList listType={false} />
          </TravelContanier>
        </Body>
        <AddTravelBtnContainer>
          <ButtonText onClick={() => (window.location.href = '/add-travel')}>
            여행 추가{' '}
          </ButtonText>
          <AiOutlineEdit />
        </AddTravelBtnContainer>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 390px;
  /* justify-content: center; */
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* top: 50px;
  height: 64px; */
  padding-top: 20px;
`;
const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
`;
const UserProfileImgContainer = styled.div`
  width: 33px;
  height: 33px;

  background: #ffd3aa;
  border: 1px solid #ffffff;
  border-radius: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserProfileImg = styled.img`
  box-sizing: border-box;

  width: 27.36px;
  height: 27.36px;

  border: 1px solid #ffffff;
  border-radius: 500px;
`;
const UserNickname = styled.div`
  width: 84px;
  height: 24px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  color: #383838;

  margin: 0 9px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
`;
const IconBox = styled.div`
  background: #ffffff;
  border: 2px solid #383838;
  border-radius: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 22px;
  height: 20.29px;
  margin: 10px 4px;
  svg {
    width: 22px;
    height: 20.29px;
  }
`;

const Body = styled.div`
  margin: 10px 20px;
`;
const BodyText = styled.div`
  /* 당신의 행복한 여정을 기대합니다! */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: -0.011em;

  color: #4a4a4a;
`;
const TravelContanier = styled.div`
  width: 330px;
  height: 330px;
  overflow-y: auto;
  margin: 10px;
`;
const TravelText = styled.div`
  width: 100px;
  height: 24px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;

  letter-spacing: -0.011em;

  color: #000000;
  margin: 10px 0;
`;
const AddTravelBtnContainer = styled.div`
  position: absolute;
  width: 102px;
  height: 35px;
  left: 265px;
  top: 746px;

  background: #ffd3aa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    padding: 1px;
  }
`;
const ButtonText = styled.div`
  /* boutton1 */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;

  color: #4a4a4a;
`;
export default HomePageAfterLogin;
