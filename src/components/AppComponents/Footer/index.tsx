import React from "react"
import styled from "styled-components"

const MainFooter = styled.div`
  background-color: #333;
  color: #fff;
  padding: 2.5em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  font-family: "Barlow";
  text-align: center;
  font-size: 14px;
`

function Footer(props: any) {
  return (
    <MainFooter>
      <a
        style={{ textDecoration: "none", color: "#fff" }}
        href="https://atlascode.dev"
        target="_blank"
      >
        {
          " © 2020 - Todos Direitos Reservados Atlas Code - Desenvolvimento web &\
      estratégia"
        }
      </a>
    </MainFooter>
  )
}

export default Footer
