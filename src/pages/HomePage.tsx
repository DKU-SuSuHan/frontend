import styled from 'styled-components';
import KakaoTalkImg from '../assets/KakaoTalk.png';
import NaverImg from '../assets/Naver.png';

function HomePage() {
  return (
    <>
      <Container>
        <Title>Travel Pick</Title>
        <SubTitle>
          소중한 사람들과 함께하는 여행 즐거움을 더하는 트래블 픽
        </SubTitle>
        <Content>
          행복하려고 하는 여행에 계획부터 지쳤다면, 여행 일정 공유에 어려움을
          느꼈다면,
          <p />
          지금이 바로 트래블픽을 시작할 때 입니다. 여러분의 행복한 여행에
          투표하세요~
          <p />
          트래블 픽!
        </Content>
        <KakaoLoginBtn>
          <KakaoImage src={KakaoTalkImg}></KakaoImage>
          <KakaoLogintext>카카오로 시작하기</KakaoLogintext>
        </KakaoLoginBtn>
        <NaverLoginBtn>
          <NaverImage src={NaverImg}></NaverImage>
          <NaverLogintext>네이버로 시작하기</NaverLogintext>
        </NaverLoginBtn>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 390px;
  /* justify-content: center; */
  margin: 0 auto;
`;

const Title = styled.div`
  width: 306px;
  height: 70px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  /* or 36px */
  text-align: center;
  letter-spacing: -0.011em;
  margin: 10px auto;
  color: #000000;
`;

const SubTitle = styled.div`
  width: 306px;
  height: 70px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  /* or 36px */
  text-align: center;
  letter-spacing: -0.011em;
  margin: 50px auto;
  color: #000000;
`;
const Content = styled.div`
  width: 256px;
  height: 140px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  /* or 36px */
  text-align: center;
  letter-spacing: -0.011em;
  margin: 40px auto;
  color: #1e1e1e;
`;
const KakaoLoginBtn = styled.div`
  /* Rectangle 1 */
  width: 293px;
  height: 44px;
  margin: 15px auto;
  display: flex;
  justify-content: center;

  background: #fee500;
  border-radius: 150px;
  &:hover {
    width: 295px;
    height: 46px;
  }

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const KakaoImage = styled.img`
  width: 27px;
  height: 20px;

  margin: 12px 0px;
`;
const KakaoLogintext = styled.div`
  width: 230px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */
  text-align: center;
  margin: 10px 0px;
  letter-spacing: -0.011em;

  color: #000000;
`;

const NaverLoginBtn = styled.div`
  width: 293px;
  height: 44px;
  margin: 15px auto;
  display: flex;
  justify-content: center;

  background: #04c959;
  border-radius: 150px;
  &:hover {
    width: 295px;
    height: 46px;
  }

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const NaverImage = styled.img`
  width: 31px;
  height: 38px;
  margin: 3px 0;
`;
const NaverLogintext = styled.div`
  width: 230px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */
  text-align: center;
  margin: 10px 0px;
  letter-spacing: -0.011em;

  color: #ffffff;
`;
export default HomePage;
