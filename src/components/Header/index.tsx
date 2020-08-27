import React, { useState } from 'react';

import { Container, GithubLogo, SearchForm } from './styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
   const [search, setSearch] = useState('');
   const navigate = useNavigate();

   function handleSubmit(event: React.FormEvent) {
      event.preventDefault();
      navigate(`/${search.toLocaleLowerCase().trim()}`);
   }

   return (
      <Container>
         <GithubLogo />
         <SearchForm onSubmit={handleSubmit}>
            <input
               placeholder="Enter username or repo..."
               value={search}
               onChange={(e) => setSearch(e.currentTarget.value)}
            />
         </SearchForm>
      </Container>
   );
};

export default Header;
