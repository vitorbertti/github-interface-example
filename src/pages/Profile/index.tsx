import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile = () => {
   const { username } = useParams();

   useEffect(() => {
      Promise.all([
         fetch(`https://api.github.com/users/${username}`),
         fetch(`https://api.github.com/users/${username}/repos`),
      ]).then(async (responses) => {
         console.log(responses);
      });
   }, [username]);

   const TabContent = () => (
      <div className="content">
         <RepoIcon />
         <span className="label">Repositories</span>
         <span className="number">21</span>
      </div>
   );

   return (
      <Container>
         <Tab className="desktop">
            <div className="wrapper">
               <span className="offset" />
               <TabContent />
            </div>

            <span className="line"></span>
         </Tab>
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
               <Tab className="mobile">
                  <TabContent />
                  <span className="line" />
               </Tab>
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

               <CalendarHeading>Random calendar ( do not represent actual data )</CalendarHeading>
               <RandomCalendar />
            </RightSide>
         </Main>
      </Container>
   );
};

export default Profile;
