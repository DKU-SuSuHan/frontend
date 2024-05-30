import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { getUser } from '../lib/getUser';
import { login } from '../redux/slice/loginSlice';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;
const accessToken = localStorage.getItem('accessToken');
function SetNicknamePage() {
  const dispatch = useDispatch();
  //nickname
  const [userNickname, setUserNickname] = useState('');
  const [nicknameDuplicationError, setNicnameDuplicationError] =
    useState(false);
  const [isCheckedNickname, setIsCheckedNickname] = useState(false);

  async function checkDuplicatedNicknameHandler(event: React.MouseEvent) {
    event.preventDefault();

    try {
      const response = await axios.get(
        `${SERVER_API_URL}/api/v1/users/check/nickname?nickname=${userNickname}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      console.log(response);
      if (response.status === 200) {
        if (!response.data.isDuplicated) {
          setNicnameDuplicationError(false);
        } else {
          setNicnameDuplicationError(true);
        }
        setIsCheckedNickname(true);
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  async function setNicknameHandler(event: React.MouseEvent) {
    event.preventDefault();
    if (isCheckedNickname) {
      //중복 검사 한 상태
      //{api}/users/check/nickname?nckname={값}

      try {
        const response = await axios.patch(
          `${SERVER_API_URL}/api/v1/users/nickname`,
          {
            nickname: userNickname,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        console.log(response);
        if (response.status === 200) {
          if (response.data.nickname) {
            getUser(dispatch);
            alert('닉네임이 성공적으로 생성되었습니다!');
            dispatch(login());
            window.location.href = `/`;
          }
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  }
  return (
    <>
      <Container>
        <Title>Travel Pick</Title>
        <Content>
          서비스에서
          <p />
          사용하실 닉네임을 입력해 주세요!
        </Content>
        <NicknameSetForm>
          <InputContainer>
            <NicknameInput
              placeholder=" 닉네임을 입력하세요. 최대 10자"
              maxLength={10}
              value={userNickname}
              onChange={event => {
                setUserNickname(event.target.value);
                setIsCheckedNickname(false);
              }}
            />
            <CheckNicknameBtn onClick={checkDuplicatedNicknameHandler}>
              중복 확인
            </CheckNicknameBtn>
          </InputContainer>
          <ErrorMessageContainer>
            {nicknameDuplicationError && isCheckedNickname ? (
              <NicknameErrorMessage>
                이미 사용중인 닉네임입니다.
              </NicknameErrorMessage>
            ) : null}
            {!isCheckedNickname ? (
              <NicknameErrorMessage>
                닉네임 중복 확인을 진행해주세요.
              </NicknameErrorMessage>
            ) : null}
            {!nicknameDuplicationError && isCheckedNickname ? (
              <NicknameCheckedMessage>
                사용 가능한 닉네임입니다.
              </NicknameCheckedMessage>
            ) : null}
          </ErrorMessageContainer>

          <NicknameSumbitBtn
            className={isCheckedNickname ? 'checked' : 'unchecked'}
            disabled={!isCheckedNickname}
            onClick={setNicknameHandler}
          >
            등록하기
          </NicknameSumbitBtn>
        </NicknameSetForm>
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
  height: 150px;

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
const Content = styled.div`
  /* 서비스에서 사용하실 닉네임을 입력해주세요! */
  width: 145px;
  height: 70px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */
  text-align: center;

  margin: 10px auto;

  color: #000000;
`;
const NicknameSetForm = styled.form`
  /* display: flex; */
  justify-content: center;
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const NicknameInput = styled.input`
  /* Rectangle 80 */

  box-sizing: border-box;

  width: 230px;
  height: 32px;
  left: 36px;
  top: 283px;

  background: #ffffff;
  border: 1px solid #6d6d6d;
  border-radius: 5px;
  margin: 5px;
`;
const CheckNicknameBtn = styled.button`
  /* button1 */

  width: 70px;
  height: 32px;
  left: 291px;
  top: 283px;
  font-size: 13px;

  border-radius: 10px;
  border-width: 0.1px;
  margin: 5px;
`;
const ErrorMessageContainer = styled.div`
  display: flex;
  width: 310px;
  margin: 0 auto;
`;
const NicknameErrorMessage = styled.div`
  color: #d24f4f;
  margin-bottom: 5px;
  font-size: 12px;
`;
const NicknameCheckedMessage = styled.div`
  color: #4fd24f;
  margin-bottom: 5px;
  font-size: 12px;
`;
const NicknameSumbitBtn = styled.button`
  width: 90px;
  height: 32px;
  left: 291px;
  top: 283px;
  font-size: 13px;

  border-radius: 10px;
  border-width: 0.1px;
  margin: 15px;

  background-color: #ffd3aa;
`;

export default SetNicknamePage;
