import styled from 'styled-components';

export const Container = styled.div`
    label{
        display: block;
        
        &.error{
            input,
            textarea{
                border: 1px solid red;
            }
        }
    }
`;