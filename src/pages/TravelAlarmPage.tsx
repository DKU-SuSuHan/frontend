import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RootState } from '../redux/store';

function TravelAlarmPage() {
  const userProfileImageUrl = useSelector(
    (status: RootState) => status.user.profileImageUrl,
  );
  return (
    <>
      <Container>
        <Header>
          <ArrowIconLeft />
        </Header>

        <MessageList>
          <UserProfileContainer>
            <UserProfileImgContainer>
              <UserProfileImg src={userProfileImageUrl}></UserProfileImg>
            </UserProfileImgContainer>
            <UserNameAndMessageDateContainer>
              <UserNickname>userNickname</UserNickname>
              <MessageSandingDate>2024-09-08</MessageSandingDate>
            </UserNameAndMessageDateContainer>
          </UserProfileContainer>

          <MessageContainer>
            <MassageTextContainer>
              <MassageText>
                userNickname 님<p></p>로드맵에 장소를 등록하였습니다.
              </MassageText>
            </MassageTextContainer>

            <PlaceMesageInfoContainer>
              <PlaceMessage>
                <PlaceTravelDay>D-day 1</PlaceTravelDay>
                <PlaceTravelText>새로운 장소 등록!</PlaceTravelText>
              </PlaceMessage>
              <ArrowIconRight />
            </PlaceMesageInfoContainer>
          </MessageContainer>
        </MessageList>
      </Container>
    </>
  );
}
export default TravelAlarmPage;

const Container = styled.div`
  width: 390px;
  /* justify-content: center; */
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-bottom: 0.5px solid #1f1f1fb1;
`;
const ArrowIconLeft = styled(AiOutlineLeft)`
  align-self: flex-start;
  padding: 10px 0;
  color: #4a4a4a;
  width: 24px;
  height: 22.29px;
  margin: 0 5px;
`;
const ArrowIconRight = styled(AiOutlineRight)`
  align-self: flex-start;
  /* padding: 10px 0; */
  color: #4a4a4a;
  width: 10px;
  /* height: 22.29px; */
  /* margin: 0 5px; */
`;
const UserProfileContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin: 10px 20px;
`;
const UserProfileImgContainer = styled.div`
  width: 37px;
  height: 37px;

  background: #ffd3aa;
  border: 1px solid #ffffff;
  border-radius: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserProfileImg = styled.img`
  box-sizing: border-box;

  width: 33.36px;
  height: 33.36px;

  border: 1px solid #ffffff;
  border-radius: 500px;
`;
const UserNickname = styled.div`
  /* width: 84px; */
  height: 22px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;

  color: #383838;

  margin: 0 9px;
`;
const MessageList = styled.div``;
const UserNameAndMessageDateContainer = styled.div``;
const MessageSandingDate = styled.div`
  /* width: 84px; */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 150%;

  color: #383838;

  margin: 0 9px;
`;
const MessageContainer = styled.div`
  margin-left: 60px;
`;
const MassageTextContainer = styled.div`
  width: 160px;
  display: flex;
  background: #faf0e6;
  border: 1px solid #ffd3aa;
  border-radius: 5px;

  padding: 10px;
  color: #4a4a4a;

  margin-bottom: 10px;
`;
const MassageText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;

  line-height: 130%;
  /* identical to box height, or 12px */
`;
const PlaceMesageInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;

  background: #fcfaf8;
  border: 1px solid #ffd3aa;
  border-radius: 5px;

  padding: 10px;
  color: #4a4a4a;

  margin-bottom: 10px;
`;
const PlaceMessage = styled.div``;
const PlaceTravelDay = styled.div`
  /* D-day1 */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */
  display: flex;
  align-items: center;
  letter-spacing: -0.2px;

  color: #4a4a4a;
`;
const PlaceTravelText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 150%;
  /* or 12px */
  display: flex;
  align-items: center;
  letter-spacing: -0.011em;

  color: #4a4a4a;
`;
