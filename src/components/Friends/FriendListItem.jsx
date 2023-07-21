import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, UserAvatar} from './Friend.style';
export function FriendListItem({ avatar, name, isOnline }) {

    return (
        <FriendItem>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <UserAvatar>{name}</UserAvatar>
        </FriendItem>
    )
};
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
