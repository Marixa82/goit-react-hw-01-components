import { css } from '@emotion/react';
import styled from "@emotion/styled";
const setStatusColor = ({ isOnline }) => (isOnline ? '#8ac926' : '#ff595e');
const FriendItem = styled.li`
display: flex;
  gap: 1.5em;
  margin: 0 auto;
  box-sizing: border-box;
  min-width: 250px;
  padding: 1em;
  border-bottom: 1px solid #ddd;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  border-radius: 10px;
  
  text-align: center;
  align-items: center;
  justify-content: start;
  user-select: none;
  font-weight: bolder;
  color: #333;
  cursor: pointer;
    }`

const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  ${({ isOnline }) =>
        css`
      background-color: ${setStatusColor({ isOnline })};
    `};
`;
const Avatar = styled.img`
`;
const UserAvatar = styled.p`
font-size: 1.4em;
padding-left: 0.5em;
`;


export { FriendItem, Status, Avatar, UserAvatar }