import PropTypes from 'prop-types';
import { ProfileUser, Description, Avatar, Username, Tag, Location, Stats, Item, ItemLabel, Quantity } from './Profiled.styled';
export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (<ProfileUser>
        <Description>
            <Avatar
                src={avatar}
                alt={username}
            />
            <Username>{username}</Username>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>

        <Stats>
            <Item>
                <ItemLabel>Followers</ItemLabel>
                <Quantity>{followers}</Quantity>
            </Item>
            <Item>
                <ItemLabel>Views</ItemLabel>
                <Quantity>{views}</Quantity>
            </Item>
            <Item>
                <ItemLabel>Likes</ItemLabel>
                <Quantity>{likes}</Quantity>
            </Item>
        </Stats>
    </ProfileUser>);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
};