import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper의 기본 CSS를 불러옵니다.
import 'swiper/css/free-mode'; // 필요한 모듈의 CSS도 불러옵니다.
import {
  AiOutlineEdit,
  AiOutlineLeft,
  AiOutlineBell,
  AiOutlineUser,
} from 'react-icons/ai';
import styled from 'styled-components';
import mapImg from '../assets/map.png';
import { useParams } from 'react-router-dom';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function RoadmapPage() {
  const params = useParams();

  return (
    <Container>
      <Header>
        <IconConteainer>
          <ArrowIcon />
          <Icons>
            <BellIcon />
            <UserIcon />
          </Icons>
        </IconConteainer>

        <TitleIconsContainer>
          <TitleContainer>
            <Title>강릉 고고링</Title>
            <SubTitleBudgetContainer>
              <SubTitle>4월 9일 - 4월 12일</SubTitle>
              <Budget>총 예산: 78000원</Budget>
            </SubTitleBudgetContainer>
          </TitleContainer>
        </TitleIconsContainer>
      </Header>
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#e5e5e5',
          marginBottom: '20px',
        }}
      >
        <img
          src={mapImg}
          alt="지도 이미지"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <MapButton>▼ 전체 지도 확인하기</MapButton>
      <SwiperContainer
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlideStyled className="active">
          <div className="day-label">day1</div>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <div className="day-label">day2</div>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <div className="day-label">day3</div>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <div className="day-label">day4</div>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <div className="day-label">day5</div>
        </SwiperSlideStyled>
      </SwiperContainer>
      <DayDetails>
        <DayHeader>
          <span>Day 1</span>
          <Budget>하루 예산: 78000원</Budget>
        </DayHeader>
        <Timeline>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <PlaceName>강릉 중앙 시장</PlaceName>
              <PlaceType>관광지 | 강원도 강릉시 금성로 21</PlaceType>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <PlaceName>민속 옹심이 막국수</PlaceName>
              <PlaceType>음식점 | 강원도 강릉시 지변동 644</PlaceType>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <PlaceName>호텔 H Avenue</PlaceName>
              <PlaceType>숙박시설 | 강원도 강릉시 강문동 창해로</PlaceType>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <AddPlace>
          <AddPlaceButton>
            장소 등록
            <EditIcon />
          </AddPlaceButton>
        </AddPlace>
      </DayDetails>
    </Container>
  );
}

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const IconConteainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icons = styled.div`
  display: flex;
`;

const ArrowIcon = styled(AiOutlineLeft)`
  align-self: flex-start;
  padding: 10px 0;
  color: #4a4a4a;
  width: 24px;
  height: 22.29px;
  margin: 0 5px;
`;

const BellIcon = styled(AiOutlineBell)`
  align-self: flex-start;
  padding: 10px 0;
  color: #4a4a4a;
  width: 24px;
  height: 22.29px;
  margin: 0 5px;
`;
const UserIcon = styled(AiOutlineUser)`
  align-self: flex-start;
  padding: 10px 0;
  color: #4a4a4a;
  width: 24px;
  height: 22.29px;
  margin: 0 5px;
`;

const TitleIconsContainer = styled.div`
  font-size: 15px;
  display: flex;
  color: #4a4a4a;
  font-weight: bold;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 10px;
`;

const TitleContainer = styled.div`
  text-align: left;
  padding: 5px 0;
`;

const SubTitleBudgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 22px;
  color: #4a4a4a;
  font-weight: 800;
  margin: 5px 15px 0;
`;

const SubTitle = styled.p`
  font-size: 12px;
  margin: 5px 17px 0;
  font-weight: lighter;
  color: #585858;
`;

const MapButton = styled.div`
  font-size: 15px;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;
  font-weight: bold;
`;

const SwiperContainer = styled(Swiper)`
  /* width: 100%; */

  margin-bottom: 15px;
  margin-left: 10px;
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-width: 55px; // 변경된 부분
  max-width: 55px; // 변경된 부분
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  background-color: #f5f5f5;
  color: #4a4a4a;
  text-align: center;

  &.active {
    background-color: #ffcc99;
    color: #565656;
  }

  .day-label {
    font-size: 15px;
  }

  .date-label {
    font-size: 8px;
    margin-top: 5px;
    color: #565656;
  }
`;

const DayDetails = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const DayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  span {
    font-weight: bold;
  }
`;

const Budget = styled.span`
  font-size: 15px;
  color: #565656;
  font-weight: 700;
  margin-left: 120px;
`;

const Timeline = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const TimelineDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #ffcc99;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
`;

const TimelineContent = styled.div`
  background-color: #ffeedd;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 250px; /* 변경된 부분 */
  max-width: 250px;
`;

const PlaceName = styled.div`
  font-size: 15px;
  color: #4a4a4a;
  font-weight: normal;
  margin-bottom: 5px;
`;

const PlaceType = styled.div`
  font-size: 12px;
  color: #939393;
`;

const AddPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const AddPlaceButton = styled.button`
  background-color: #ffcc99;
  border: none;
  min-width: 100px; /* 변경된 부분 */
  max-width: 100px;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #4a4a4a; /* 버튼 텍스트 색상 */
`;

const EditIcon = styled(AiOutlineEdit)`
  color: #4a4a4a; /* 아이콘 색상 버튼 텍스트와 동일하게 */
  margin-left: 5px; /* 1cm 간격 추가 */
`;

export default RoadmapPage;
