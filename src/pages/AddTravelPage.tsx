import { styled } from 'styled-components';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import { AREAS } from '../assets/areas';
import CustomDropdown from '../components/CustomDropdown';
import { CustomDatePicker } from '../components/CustomDatePicker';
import TravelMateList from '../components/TravelMateList';
import SelectTemplate from '../components/SelectTemplate';
import { bglist } from '../assets/bglist';
import { getMateSearch } from '../lib/getMateSearch';
import { setTravelMateList } from '../redux/slice/travelMateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { travelFormStatus } from '../interface/travelFormStatus';
import { postNewTravel } from '../lib/postNewTravel';
import { postTravelMates } from '../lib/postTravelMates';
import { RootState } from '../redux/store';

//vite 환경 변수 사용
// const CLIENT_API_URL = import.meta.env.VITE_CLIENT_API_URL;

function AddTravelPage() {
  const dispatch = useDispatch();
  const travelMateList = useSelector((status: RootState) => status.travelMate);

  const [travelName, setTravelName] = useState('');
  const [templateNumber, setTemplateNumber] = useState(3);
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedSubArea, setSelectedSubArea] = useState('');
  const [travelStartDate, setTravelStartDate] = useState<Date | null>(
    new Date(),
  );
  const [travelEndDate, setTravelEndDate] = useState<Date | null>(null);

  const [isClickedChangeTamplate, setIsClickedChangeTamplate] = useState(false);

  const [mateName, setMateName] = useState<string>('');
  const SUBAREAS =
    AREAS.find(area => area.name === selectedArea)?.subArea || [];

  const handleAreaChange = (value: string) => {
    setSelectedArea(value);
    setSelectedSubArea('');
  };

  function travelTemplateChangeClickHandler() {
    setIsClickedChangeTamplate(true);
  }

  async function submitAddTravelHandler(
    event: React.MouseEvent<HTMLDivElement>,
  ) {
    //여행 정보 제출
    event.preventDefault();
    if (travelStartDate && travelEndDate) {
      const startAt = `${travelStartDate.getFullYear()}-${travelStartDate.getMonth() + 1 >= 10 ? travelStartDate.getMonth() + 1 : '0' + (travelStartDate.getMonth() + 1)}-${travelStartDate.getDate() >= 10 ? travelStartDate.getDate() : '0' + travelStartDate.getDate()}`;
      const endAt = `${travelEndDate.getFullYear()}-${travelEndDate.getMonth() + 1 >= 10 ? travelEndDate.getMonth() + 1 : '0' + (travelEndDate.getMonth() + 1)}-${travelEndDate.getDate() >= 10 ? travelEndDate.getDate() : '0' + travelEndDate.getDate()}`;
      const data: travelFormStatus = {
        templateNum: templateNumber,
        title: travelName,
        sido: selectedArea,
        sgg: selectedSubArea,
        startAt: startAt,
        endAt: endAt,
      };

      const travelid = await postNewTravel({ data });
      if (travelid >= 0) {
        if (travelMateList.length > 0) {
          postTravelMates(travelid);
        }
        window.location.href = '/';
      } else {
        console.log('새로운 여행 등록에 실패하였습니다.');
      }
    }
  }

  const handleAddMateClick = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const mateData = await getMateSearch(mateName);
      if (mateData) {
        dispatch(setTravelMateList(mateData));
      }
    }
  };

  return (
    <>
      <Container>
        <Header>
          <AiOutlineLeft />
        </Header>
        <Body>
          <TemplateContainer color={`${bglist[templateNumber]}`}>
            {isClickedChangeTamplate ? (
              <SelectTemplate
                setTemplateNumber={setTemplateNumber}
                setIsClickedChangeTamplate={setIsClickedChangeTamplate}
              />
            ) : (
              <TemplateChangeBtn onClick={travelTemplateChangeClickHandler}>
                커버 변경
              </TemplateChangeBtn>
            )}
          </TemplateContainer>

          <TravelFormContainer>
            <TravelNameContainer>
              <TravelText>여행의 이름을 지어주세요.</TravelText>
              <TravelNameInput
                value={travelName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTravelName(e.target.value);
                }}
              ></TravelNameInput>
            </TravelNameContainer>

            <TravelPlaceContainer>
              <TravelText>어디로 여행하시나요?</TravelText>
              <TravelPlaceSelectContainer>
                <CustomDropdownContainer>
                  <CustomDropdown
                    options={AREAS.map(area => area.name)}
                    value={selectedArea}
                    onChange={handleAreaChange}
                    selectName="지역 선택"
                  />

                  <CustomDropdown
                    options={SUBAREAS.map(area => area)}
                    value={selectedSubArea}
                    onChange={setSelectedSubArea}
                    selectName="시,군,구 선택"
                  />
                </CustomDropdownContainer>
              </TravelPlaceSelectContainer>
            </TravelPlaceContainer>

            <TravelDateContainer>
              <TravelText>여행 일정 등록해주세요.</TravelText>
              <CustomDatePicker
                setTravelStartDate={setTravelStartDate}
                setTravelEndDate={setTravelEndDate}
              />
              {travelStartDate && travelEndDate ? (
                <TravelText>
                  {travelStartDate.getFullYear() +
                    '-' +
                    (travelStartDate.getMonth() + 1) +
                    '-' +
                    travelStartDate.getDate() +
                    ' '}
                  ~
                  {' ' +
                    travelEndDate.getFullYear() +
                    '-' +
                    (travelEndDate.getMonth() + 1) +
                    '-' +
                    travelEndDate.getDate()}
                </TravelText>
              ) : (
                <></>
              )}
            </TravelDateContainer>

            <TravelMateAddContainer>
              <TravelText>여행 메이트를 추가해보세요!</TravelText>
              <TravelMateAddInputContainer>
                <TravelMateAddInput
                  value={mateName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setMateName(e.target.value);
                  }}
                ></TravelMateAddInput>
                <AiOutlinePlusCircle onClick={handleAddMateClick} />
              </TravelMateAddInputContainer>
              <TravelMateListContainer>
                <TravelMateList />
              </TravelMateListContainer>
            </TravelMateAddContainer>

            <TravelSubmitButtonContainer>
              <TravelSubmitBtn onClick={submitAddTravelHandler}>
                여행 추가
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
const TemplateContainer = styled.div`
  /* button1 */

  width: 390px;
  height: 190px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background: ${prop => prop.color};
  /* border-radius: 0px 0px 10px 10px; */
`;
const TemplateChangeBtn = styled.button`
  /* Group 875 */

  position: absolute;
  width: 62px;
  height: 20px;
  left: 301px;
  top: 160px;

  font-size: 10px;
  color: #a0a0a0;
  border: 0px;
  border-radius: 8px;
`;
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
const TravelNameContainer = styled.div`
  margin: 10px 0;
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
const TravelPlaceSelectContainer = styled.div`
  width: 320px;
  margin-top: 10px;
  position: relative;
  display: flex; /* select 요소들을 가로로 나란히 표시하기 위해 flex를 사용합니다 */
  gap: 10px; /* select 요소들 사이의 간격을 조정합니다 */
`;

const TravelDateContainer = styled.div`
  margin: 10px 0;
`;
const TravelMateAddContainer = styled.div`
  margin: 10px 0;
`;
const TravelMateAddInputContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  position: relative;
  svg {
    margin-top: 10px;
    width: 25px;
    height: 25px;
    position: absolute;
    left: 270px;
    color: #869684;
  }
`;
const TravelMateAddInput = styled.input`
  width: 300px;
  height: 30px;
  margin-top: 10px;
  padding-left: 5px;
  border-width: 1px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
const TravelMateListContainer = styled.div``;

const TravelSubmitButtonContainer = styled.div`
  width: 100px;
  height: 33px;
  margin: 0 auto;

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

const CustomDropdownContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default AddTravelPage;
