import styled from 'styled-components';

/**
 * Card base component, used for creating cards, containers, etc.
 */
export const CardBase = styled.section.attrs({
  className: 'bg-white shadow-2xl shadow-slate-200/50 rounded-lg w-full',
})`
  box-shadow: 0 0 #0000, 0 0 #0000, 0px 10px 25px 7px rgb(49 121 255 / 5%);
  padding: 1.25rem;
`;

/**
 * Defines a basic section component
 */
export const SectionBase = styled.section.attrs({
  className: 'w-full',
})`
  margin: 2rem 0 !important;
`;
