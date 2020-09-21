import styled from 'styled-components'

export const Wrapper = styled.div`
    width: ${props => props.width && props.width + 'px'};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
`

