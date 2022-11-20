import styled from 'styled-components/native'


export const StyledTableContent = styled.ScrollView`
    flex: 3;
    width: 90%;
    height: 100%;
`

type WidthType = {
    width: string
}

export const StyledTextHeader = styled.Text<WidthType>`
    text-align: left;
    width: ${props => `${props.width}px`};
    font-size: 20px;
`

export const StyledTableHeader = styled.View`
    display: flex;
    flex-direction: row;
    width: 90%;
    background-color: ${({theme}) => theme.colors.background};
    margin-top: 10px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

export const StyledTableArea = styled.View`
    display: flex;

    width: 100%;
    height: auto;
    background-color: ${({theme}) => theme.colors.background};

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`