import { Profile } from 'components/Profile/Profile';
import profileInfo from 'data/user';

export const App = () => {
  return (
    <div>
      <Profile user={profileInfo}/>
    </div>
  );
};
