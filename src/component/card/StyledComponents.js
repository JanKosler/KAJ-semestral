import styled from 'styled-components';

export const CardBase = styled.div.attrs({
    className: "bg-white shadow-2xl shadow-slate-200/50 rounded-lg w-full",
})`
    // box-shadow: 0 0 #0000,  0 0 #0000, 0px 10px 25px 7px rgb(49 121 255 / 5%);
    padding: 1.25rem;
`;

export const SectionBase = styled.div.attrs({
    className: "w-full",
})`
    margin: 2rem 0 !important;
`;

