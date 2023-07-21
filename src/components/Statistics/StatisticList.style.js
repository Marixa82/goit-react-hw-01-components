import styled from "@emotion/styled";

const Section = styled.section`
display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  
 

  text-align: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  `

const StatTitle = styled.h2`
  padding-top: 1em;
  text-transform: uppercase;
  text-align: center`
const StatList = styled.ul`
list-style: none;
  width: 100%;
  display: flex;
 
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    justify-content: flex-start
  }
    
`


export { Section, StatTitle, StatList }