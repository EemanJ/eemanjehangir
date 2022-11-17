import * as React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'

// $medium_blue: "#034C8C";
// $dark_blue: "#023859"
// $bg: "#013440"
// $bright_blue: "#05F2DB"
// $yellow: "#F2CB05"

/* Color Theme Swatches in Hex */
// $bg: "#013440"
// $bright_dark_blue: #0460D9;
// $bright_medium_blue: #0476D9;
// $light_blue: #B6D6F2;
// $mustard: #F2B705;
// $peach: #F28E85;

const Container = styled.body`
  margin: 0 !important;
  max-width: max-container;
  height: 100vh;
  background: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const pageStyles = {
    background: "red",
    padding: 10,
    color: "white",
    margin: "0 auto",
    height: "100vh",
    width: "100vw",
}


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
        <div>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/index1">Index1</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <Title>HULLO</Title>
        </div>

    </Container>
  )
}

export default Layout