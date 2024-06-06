import { styled } from 'styled-components';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { useState } from 'react';
import { CustomDayPicker } from '../components/CustomDayPicker';
import { placeFormStatus } from '../interface/placeFormStatus';
import { postNewPlace } from '../lib/postNewPlace';
import { useParams } from 'react-router-dom';

//vite 환경 변수 사용
const CLIENT_API_URL = import.meta.env.VITE_CLIENT_API_URL;

function AddPlacePage() {
  const params = useParams();
  const [travelName, setTravelName] = useState('');
  const [travelPlaceDay, setTravelPlaceDay] = useState<Date | null>(null);
  const [budget, setBudget] = useState<number>(0);
  const [placeUrl, setPlaceUrl] = useState<string>('');

  const [address, setAddress] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');

  async function submitAddPlaceHandler(
    event: React.MouseEvent<HTMLDivElement>,
  ) {
    //여행 정보 제출
    event.preventDefault();
    if (travelPlaceDay) {
      const startAt = `${travelPlaceDay.getFullYear()}-${travelPlaceDay.getMonth() + 1 >= 10 ? travelPlaceDay.getMonth() + 1 : '0' + (travelPlaceDay.getMonth() + 1)}-${travelPlaceDay.getDate() >= 10 ? travelPlaceDay.getDate() : '0' + travelPlaceDay.getDate()}`;
      const data: placeFormStatus = {
        travelDate: startAt,
        name: travelName,
        postcode: postcode,
        address: address,
        budget: budget,
        urlLink: placeUrl,
      };

      if (params.travelid) {
        const travelNum = params.travelid.substring(1);
        const travelid = await postNewPlace({ data, travelNum });
        if (travelid >= 0) {
          window.location.href = `${CLIENT_API_URL}/teavel-roadmap/:${travelid}`;
        } else {
          console.log('새로운 장소 등록에 실패하였습니다.');
        }
      }
    }
  }

  return (
    <>
      <Container>
        <Header>
          <AiOutlineLeft />
        </Header>
        <Body>
          <TravelFormContainer>
            <TravelNameContainer>
              <TravelText>장소 이름을 입력하세요.</TravelText>
              <TravelNameInput
                value={travelName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTravelName(e.target.value);
                }}
              ></TravelNameInput>
            </TravelNameContainer>

            <TravelPlaceContainer>
              <TravelText>어디로 여행하시나요?</TravelText>
              <TravelSubText>주소를 입력해주세요.</TravelSubText>
              <TravelNameInput
                value={address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setAddress(e.target.value);
                }}
              ></TravelNameInput>
            </TravelPlaceContainer>

            <TravelPlaceContainer>
              <TravelSubText>
                우편 주소가 있는 경우는 함께 적어주세요. (없는 경우 빈칸)
              </TravelSubText>
              <TravelNameInput
                value={postcode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPostcode(e.target.value);
                }}
              ></TravelNameInput>
            </TravelPlaceContainer>

            <TravelDateContainer>
              <TravelText>여행 일정 등록해주세요.</TravelText>
              <CustomDayPickerContainer>
                <CustomDayPicker setTravelPlaceDay={setTravelPlaceDay} />
              </CustomDayPickerContainer>
            </TravelDateContainer>

            <TravelPlaceContainer>
              <TravelText>1인당 예상 가격을 입력해주세요.</TravelText>
              <TravelSubText>
                숫자만 입력 e.g. 10000원인 경우 10000입력
              </TravelSubText>
              <TravelNameInput
                value={budget}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setBudget(Number(e.target.value));
                }}
              ></TravelNameInput>
            </TravelPlaceContainer>

            <TravelMateAddContainer>
              <TravelText>장소 상세 정보가 포함된 링크를 입력하세요</TravelText>
              <TravelNameInput
                value={placeUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPlaceUrl(e.target.value);
                }}
              ></TravelNameInput>
            </TravelMateAddContainer>

            <TravelSubmitButtonContainer>
              <TravelSubmitBtn onClick={submitAddPlaceHandler}>
                등록 완료
              </TravelSubmitBtn>
              <AiOutlineEdit />
            </TravelSubmitButtonContainer>
          </TravelFormContainer>
        </Body>
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
  align-items: center; /* 세로 중앙 정렬 */
  height: 40px;
  svg {
    margin: 10px;
  }
`;
const Body = styled.div``;

const TravelFormContainer = styled.div`
  margin: 40px 20px;
`;
const TravelText = styled.div`
  /* 여행의 이름을 지어주세요. */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */

  letter-spacing: -0.011em;

  color: #4a4a4a;
`;

const TravelSubText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 150%;
  /* or 22px */

  letter-spacing: -0.011em;

  color: #282727;
`;
const TravelNameContainer = styled.div`
  margin: 20px 0;
`;
const TravelNameInput = styled.input`
  width: 320px;
  margin-top: 10px;
  border-width: 0 0 1px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
`;
const TravelPlaceContainer = styled.div`
  margin: 10px 0;
`;

const CustomDayPickerContainer = styled.div`
  margin: 10px;
`;

const TravelDateContainer = styled.div`
  margin: 10px 0;
`;
const TravelMateAddContainer = styled.div`
  margin: 10px 0;
`;

const TravelSubmitButtonContainer = styled.div`
  width: 100px;
  height: 33px;
  margin: 20px auto;

  background: #ffd3aa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    padding: 1px;
  }

  &:hover {
    background: #faceb4;
  }
`;
const TravelSubmitBtn = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;

  color: #4a4a4a;
`;

export default AddPlacePage;
