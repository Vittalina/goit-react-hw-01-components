import PropTypes from 'prop-types';
import {UserProfile, Avatar, UserName, Tag, Location, Stats, StatsItem, Label, Quantity } from 'components/Profile/Profile.styled';

// import css from '../Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats}) => {
    console.log({ username, tag, location, avatar, stats});
    return <UserProfile>
    <div className="description">
    <Avatar
        src={avatar}
        alt="User avatar"
    />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
    </div>

    <Stats>
    <StatsItem>
        <Label>Followers </Label>
        <Quantity>{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
        <Label>Views </Label>
        <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
        <Label>Likes </Label>
        <Quantity>{stats.likes}</Quantity>
    </StatsItem>
    </Stats>
</UserProfile> 
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
};


