import PropTypes from 'prop-types';
import {Avatar, UserName, Tag, Location, StatsItem, Label, Quantity } from 'components/Profile/Profile.styled';
import { Box } from 'components/Box';

export const Profile = ({ username, tag, location, avatar, stats}) => {
    console.log({ username, tag, location, avatar, stats});
    return <Box
        width='300px'
        ml='auto'
        mr='auto'
        p='10px 0 0 0'
        bg='#f5f4fa'
        textAlign='center'
        borderRadius='8px'
        boxShadow='0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2)'
    >
    <div className="description">
    <Avatar
        src={avatar}
        alt="User avatar"
    />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
    </div>

        <Box
            display='flex'
            justifyContent='space-around'
            p='0 10px'
            borderTop='1px solid #5F7661'
            as='ul'
        >
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
    </Box>
</Box> 
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
};


