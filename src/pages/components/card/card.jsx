import { Container, Number } from "./styles"


function Card({number}) {
    return(
        <>
            <Container>
                <Number>{number}</Number>
            </Container>
        </>
    )
}

export default Card