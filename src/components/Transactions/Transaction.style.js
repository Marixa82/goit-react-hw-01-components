import styled from "@emotion/styled";
const Table = styled.table`
margin: 0 auto;
  margin-bottom: 2em;
  font-size: 1em;
  font-weight: normal;
  border: none;   
  min-width: 400px;
  
  `
const Tbody = styled.tbody`
background-color: #f2f2f2;
 `
const Th = styled.th`
background-color: #a8dadc;
  font-weight: bold;
  padding: 8px;`
const Tr = styled.tr`
  :nth-of-type {
  background-color: #f2f2f2;
}
:hover {
  background-color: #e6e6e6;
}`

const Td = styled.td`
text-align: center;
padding: 8px;
  border-bottom: 1px solid #ddd;`
export { Table, Tbody, Th, Tr, Td }