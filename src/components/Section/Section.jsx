import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';

export const Section = ({ children }) => (
  <SectionStyled>{children}</SectionStyled>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
