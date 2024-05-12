import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RootState } from '../redux/store';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';

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
            <IconBox>
              <AiOutlineBell />
            </IconBox>
            <IconBox>
              <AiOutlineUser />
            </IconBox>
          </IconContainer>
        </Header>
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

export default HomePageAfterLogin;
