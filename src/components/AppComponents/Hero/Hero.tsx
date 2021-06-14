import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

interface IHeroProps {
  heroImage: string
  mainText: string
  subText: string
  buttonText: string
  callToActionRef: React.RefObject<HTMLDivElement> | null
}

const Hero = ({
  heroImage = "https://via.placeholder.com/1500",
  mainText = "Oferecemos soluções em serralheria, elétricae segurança eletrônica.",
  subText = "Smaller font subtext goes here, font weight is also smaller lorem ipsum dolum damet",
  buttonText = "Call to action",
  callToActionRef,
}: IHeroProps) => {
  return (
    <Root>
      <BackgroundPattern src={"img/effect.webp"}></BackgroundPattern>
    </Root>
  )
}

export default Hero

const Root = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.75);
`

const BackgroundPattern = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  object-position: center center;
`
