import { useState } from 'react';
import { DropdownProps } from '../interface/dropdownStatus';
import { styled } from 'styled-components';

//CustomDropduwn
const CustomDropdown = ({
  options,
  value,
  onChange,
  selectName,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DropdownWrapper>
      <SelectedOption onClick={() => setIsOpen(!isOpen)}>
        {value || selectName}
      </SelectedOption>
      {isOpen && (
        <Options>
          {options.map(option => (
            <Option
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(!open);
              }}
            >
              {option}
            </Option>
          ))}
        </Options>
      )}
    </DropdownWrapper>
  );
};

// 스타일 컴포넌트로 드롭다운 스타일링
const DropdownWrapper = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  /* or 18px */
  text-align: center;
  letter-spacing: -0.011em;

  color: #4a4a4a;
`;

const SelectedOption = styled.div`
  width: 100px;
  cursor: pointer;
  padding: 5px;
  margin-bottom: 2px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Options = styled.div`
  /* position: absolute; */

  width: 100%;
  max-height: 120px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Option = styled.div`
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default CustomDropdown;
