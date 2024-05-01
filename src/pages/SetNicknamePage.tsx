import { useState } from 'react';
import { styled } from 'styled-components';

function SetNicknamePage() {
  //nick
  const [nickNameDuplicationError, setNickNameDuplicationError] =
    useState(false);

  return (
    <>
      <Container>
        <Title>Travel Pick</Title>
        <Content>
          서비스에서 사용하실
          <p />
          사용하실 닉네임을 입력해주세요!
        </Content>
        <NicknameSetForm>
          <InputContainer>
            <NicknameInput
              placeholder="닉네임을 입력하세요. 최대 10자"
              maxLength={10}
            />
            <CheckNicknameBtn>중복 확인</CheckNicknameBtn>
          </InputContainer>
          <ErrorMessageContainer>
            {nickNameDuplicationError ? (
              <NicknameErrorMessage>
                이미 사용중인 닉네임 입니다.
              </NicknameErrorMessage>
            ) : null}
          </ErrorMessageContainer>

          <NicknameSumbitBtn>등록하기</NicknameSumbitBtn>
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

  width: 240px;
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
