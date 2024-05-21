import { styled } from 'styled-components';
import { bglist } from '../assets/bglist';
function SelectTemplate({
  setTemplateNumber,
  setIsClickedChangeTamplate,
}: {
  setTemplateNumber: React.Dispatch<React.SetStateAction<number>>;
  setIsClickedChangeTamplate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function onSelectTemplate(event: React.MouseEvent<HTMLDivElement>) {
    const color = (event.currentTarget as HTMLDivElement).dataset.color;

    if (color !== undefined) {
      const colorNumber: number = parseInt(color, 10);
      setTemplateNumber(colorNumber);
      setIsClickedChangeTamplate(false);
    }
  }
  return (
    <>
      <Container>
        {bglist.map((itme, index) => {
          if (index !== 0) {
            return (
              <BackgroundColorCardContainer key={index}>
                <ColorCard
                  color={itme}
                  data-color={index}
                  onClick={onSelectTemplate}
                ></ColorCard>
              </BackgroundColorCardContainer>
            );
          }
        })}
      </Container>
    </>
  );
}
const Container = styled.div`
  position: absolute;

  left: 200px;
  top: 150px;

  display: flex;
  width: 168px;
  flex-direction: row;
  background: #f0eeee;
  flex-wrap: wrap;
  border: 1px solid #838383;
`;
const BackgroundColorCardContainer = styled.div`
  margin: 3px;
`;
const ColorCard = styled.div`
  width: 50px;
  height: 50px;
  background: ${prop => prop.color};

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
export default SelectTemplate;
