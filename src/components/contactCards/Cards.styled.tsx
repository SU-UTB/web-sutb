import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    list-style: none;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;