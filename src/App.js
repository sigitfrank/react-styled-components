import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
const MainWrapper = styled.section`
    width:100%;
    max-width:1200px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
`

const PaginationWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:${({ page }) => {
        if (page === 'first') return 'flex-end'
        if (page === 'middle') return 'space-between'
        return 'flex-start'
    }};
`

const Link = styled.a.attrs(({ href }) => ({
    target: '_blank',
    href: href || 'https://www.google.com'
}))`
    color:violet;
    font-size:1.5rem;
`

const App = () => {
    return (<MainWrapper>
        <Button margin="1rem" primary bgColor='violet'> My Button </Button>
        <Button> My Button </Button>
        <PaginationWrapper page='middle'>
            <Button>Page 1</Button>
            <Button>Page 1</Button>
            <Button>Page 1</Button>
        </PaginationWrapper>
        <Link href="https://www.youtube.com">One Link</Link>
        <Link>Another Link</Link>
    </MainWrapper>)
}

export default App