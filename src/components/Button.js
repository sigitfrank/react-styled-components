import React from 'react'
import styled, { css } from 'styled-components'
import { Wrapper, FadeIn } from './styled'

// const StyledButton = styled.button`
//     padding:1rem 1.5rem;
//     font-size:1.8rem;
//     /* color:${({ primary }) => primary ? 'red' : '#fff'}; */
//     color:#fff;
//     outline:none;
//     border:none;
//     background-color:#333;
//     margin-bottom:1rem;
//     ${({ primary }) => primary &&
//         css`
//         color:red;
//         background-color: ${({ bgColor }) => bgColor};
//     `}
// `

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.lighter};
    font-size:2rem;
    margin:${({ margin }) => margin || '2rem'};
    padding:.5rem 1rem;
    border:1px solid palevioletred;
    border-radius:3px;
    transition:.5s;
    animation:1s ${FadeIn} ease-in;
    ${({ primary }) => primary &&
        css`
        background-color:palevioletred;
        color:#fff;
        box-shadow: 0 .5rem 1.5rem rgba(0,0,0,0.2);
        `
    }

    &:hover{
        color: #fff;
        background-color: palevioletred;
        cursor: pointer;
    }

    .someClass{
        color:#EDED21;
        font-size:1rem;
    }

    @media ${({ theme }) => theme.mediaQueries['bellow-768']}{
        font-size:0.4rem;
        color:#ddd;
    }
`
const SuperButton = styled(StyledButton)`
    font-size:2.5rem;
`
const Button = ({ primary, margin, bgColor, children }) => {
    return (
        <Wrapper>
            <StyledButton primary={primary} margin={margin}>{children}
                <p className='someClass'>Paragraf Children with someClass</p>
            </StyledButton>
            {/* <SuperButton>{children}</SuperButton>  */}
        </Wrapper>
    )
}

export default Button