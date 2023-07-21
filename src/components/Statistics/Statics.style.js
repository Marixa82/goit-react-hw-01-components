import styled from "@emotion/styled";
import colors from '../Data/colors.json'
const StatItem = styled.li`
 position: relative;
  display: flex;
  flex-direction: column;
  min-width: 3.6em;
  padding: 1.1em;
  background-color: ${getRandomColor};
  gap: 0.3em;

  &:not(:first-of-type)::before {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    width: 1px;
    height: 100%;
    background-color: white;
  }
  `;
const Label = styled.span`
  font-weight: 600;
  text-align: center;
  font-size: 0.8em;
`;

const Percentage = styled.span`
text-align: center;
`;
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

export { StatItem, Label, Percentage }