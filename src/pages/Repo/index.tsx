import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stars, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo = () => {
   return (
      <Container>
         <Breadcrumb>
            <RepoIcon />
            <Link className={'username'} to={'/username'}>
               username
            </Link>
            <span>/</span>

            <Link className={'reponame'} to={'/username/reponame'}>
               reponame
            </Link>
         </Breadcrumb>

         <p>Description</p>

         <Stars>
            <li>
               <StarIcon />
               <b>5</b>
               <span>stars</span>
            </li>
            <li>
               <ForkIcon />
               <b>0</b>
               <span>forks</span>
            </li>
         </Stars>

         <LinkButton href={'https://github.com'}>
            <GithubIcon />
            <span>View on GitHub</span>
         </LinkButton>
      </Container>
   );
};

export default Repo;
