import styled from '@emotion/styled';

export const ContactLink = styled.a`
  /* margin-right: 20px; */
  text-decoration: none;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  color: #ffdd40;
  transition: color 250ms var(--timing-function);
  &:hover,
  &:focus {
    color: #f9b108;
  }
  @media screen and (min-width: 1200px) {
    padding: 32px 0px;
  }
`;
