import PropTypes from 'prop-types';
import { Item, Status, Avatar, FriendName } from 'components/FriendList/FriendList.styled';
import {checkOnline} from 'components/FriendList/checkOnline'
import { Box } from 'components/Box';

export const FriendList = ({friends}) => {
    return <Box
        width='300px'
        mt='30px'
        ml='auto'
        mr='auto'
        borderRadius='8px'
        as='ul'
    >
        {friends.map(({ avatar, name, isOnline, id }) => (
            <Item key={id}>
                <Status>{`${checkOnline(isOnline)}`}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
                <FriendName>{name}</FriendName>
        </Item>))}
</Box>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}