import styled from "@emotion/styled";
const ProfileUser = styled.div`
  display: flex;
  flex-direction: column;
    margin: 0 auto;
  margin-top: 1.5em;
  box-sizing: border-box;
  width: 260px;
  height: 320px;
  border-radius: 20px;
text-align: center;
  background-color: #33FFF8;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: box-shadow;`
const Description =
  styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7em;
  margin: 0 auto;
  text-align: center;
  `;
const Avatar =
  styled.img` 
  background-color: white;
  margin-top: 10px;
  display: block;
  width: 50%;
  height: auto;
  border: 1px solid #8e8f99;
    border-radius: 100%`;
const Username = styled.p
  `text-align: center;
font-weight: 500;
  
  line-height: 1.2;`
const Tag = styled.p
  `text-align: center;
font-weight: 400;
  
  line-height: 1.2;
  color: #8e8f99;`;
const Location = styled.p
  `text-align: center;
font-weight: 500;
  margin-bottom: 10px;
  line-height: 1.2;
  color: #8e8f99;`;
const Stats = styled.ul`
  list-style: none;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: #333;
  margin-bottom: 10px;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    width: 100%;
    height: 1px;
    background-color: white;
  }
  `;
const Item = styled.li`
position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2em;

  &:not(:first-of-type)::before {
    content: '';
    position: absolute;
    top: -30%;
    right: 155%;
    width: 1px;
    height: 190%;
    background-color: white;
  }
`
const ItemLabel = styled.span`
padding-bottom: 10px;
`

export { Description, Avatar, Username, Tag, Location, ProfileUser, Stats, Item, ItemLabel };