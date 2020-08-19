import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

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
            <RightSide>
               <Repos>
                  <h2>Random repos</h2>

                  <div>
                     {[1, 2, 3, 4, 5, 6].map((n) => (
                        <RepoCard
                           key={n}
                           username={'username'}
                           reponame={'reponame'}
                           description={'description'}
                           language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                           stars={5}
                           forks={22}
                        />
                     ))}
                  </div>
               </Repos>
            </RightSide>
         </Main>
      </Container>
   );
};

export default Profile;
