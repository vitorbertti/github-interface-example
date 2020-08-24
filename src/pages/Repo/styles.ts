import styled, { css } from 'styled-components';

import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

const iconCSS = css`
   width: 16px;
   height: 16px;
   fill: var(--icon);
   flex-shrink: 0;
`;

export const Container = styled.div``;

export const Breadcrumb = styled.div``;

export const RepoIcon = styled(RiBookMarkLine)`
   ${iconCSS}
`;

export const Stars = styled.div``;

export const StarIcon = styled(RiStarLine)`
   ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
   ${iconCSS}
`;

export const LinkButtom = styled.a``;

export const GithubIcon = styled(FaGithub)`
   ${iconCSS}
`;
