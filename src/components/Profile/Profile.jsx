// import css from '../Profile.module.css';

export const Profile = ({ user }) => {
    console.log(user);
    return <div className="profile">
    <div className="description">
    <img
        src={user.avatar}
        alt="User avatar"
        className="avatar"
    />
        <p className="name">{user.username}</p>
    <p className="tag">{user.tag}</p>
    <p className="location">{user.location}</p>
    </div>

    <ul className="stats">
    <li>
        <span className="label">{user.stats.followers}</span>
        <span className="quantity"></span>
    </li>
    <li>
                <span className="label">{user.stats.views}</span>
        <span className="quantity"></span>
    </li>
    <li>
        <span className="label">{user.stats.likes}</span>
        <span className="quantity"></span>
    </li>
    </ul>
</div> 
}

// Profile.propTypes = {

// };

/* <div className="profile">
    <div className="description">
    <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        className="avatar"
    />
        <p className="name">Petra Marica</p>
    <p className="tag">@pmarica</p>
    <p className="location">Salvador, Brasil</p>
    </div>

    <ul className="stats">
    <li>
        <span className="label">Followers</span>
        <span className="quantity">1000</span>
    </li>
    <li>
        <span className="label">Views</span>
        <span className="quantity">2000</span>
    </li>
    <li>
        <span className="label">Likes</span>
        <span className="quantity">3000</span>
    </li>
    </ul>
</div> */


// {/* <div>
//         {props.map(prop => ())}
//     </div> */}