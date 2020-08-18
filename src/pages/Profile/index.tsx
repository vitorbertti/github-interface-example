import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile = () => {
   return (
      <Container>
         <Main>
            <LeftSide>
               <ProfileData
                  username={'Username'}
                  name={'Name'}
                  avatarUrl={'url'}
                  followers={11}
                  following={3}
                  company={'Company'}
                  location={'Location'}
                  email={'email'}
                  blog={undefined}
               />
            </LeftSide>
            <RightSide></RightSide>
         </Main>
      </Container>
   );
};

export default Profile;
