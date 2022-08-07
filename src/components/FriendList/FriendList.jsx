import PropTypes from 'prop-types';
import { FriendsList, Item, Status, Avatar, FriendName } from 'components/FriendList/FriendList.styled';
import {checkOnline} from 'components/FriendList/checkOnline'

export const FriendList = ({friends}) => {
    return <FriendsList>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <Item key={id}>
                <Status>{`${checkOnline(isOnline)}`}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
                <FriendName>{name}</FriendName>
        </Item>))}
</FriendsList>
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