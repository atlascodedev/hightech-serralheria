import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Button } from "@material-ui/core"
import scrollIntoViewHelper from "../../../helper/scrollIntoView"
import bgPattern from "../../../images/effect.webp"
import heroImage2 from "../../../images/cropped-hero-img.webp"

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
      <BackgroundPattern src={bgPattern} />
      <Grid>
        <IntroContainer>
          <IntroTitle>{mainText}</IntroTitle>
          <IntroAux>{subText}</IntroAux>
          <Button
            onClick={() => scrollIntoViewHelper(callToActionRef, "contato")}
            variant="contained"
            color="primary"
          >
            {buttonText}
          </Button>
        </IntroContainer>

        <HeroImageContainer>
          <HeroImageBackground />
          <HeroImage src={heroImage2} />
        </HeroImageContainer>
      </Grid>
    </Root>
  )
}

export default Hero

const HeroImageContainer = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 6px;
  position: relative;
  padding-left: 50px;

  @media (min-width: 1024px) {
    padding-left: 0px;
  }
`
const HeroImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: 100;
  position: relative;
  order: 0;

  @media (min-width: 1024px) {
    order: 1;
  }
`

const HeroImageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #acdeff;
  position: absolute;
  transform: translate(-13px, -20px);
  @media (min-width: 1024px) {
    transform: translate(35px, 15px);
  }
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  align-self: flex-start;
  gap: 20px;
  order: 1;
  text-align: center;

  @media (min-width: 1024px) {
    gap: 30px;
    width: 70%;
    order: 0;
    align-items: flex-start;
    align-self: center;
    text-align: left;
  }
`

const IntroTitle = styled.div`
  font-weight: bold;
  font-size: 25px;

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`

const IntroAux = styled.div`
  font-size: 16px;
  font-family: "Montserrat";
  padding: 0px 15px;

  @media (min-width: 1024px) {
    font-size: 22px;
    padding: 0px;
  }
`

const Root = styled.div`
  height: 90vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
`

const BackgroundPattern = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  object-position: center center;
`

const Grid = styled.div`
  padding: 0px;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: 50% 50%;

  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: 50% 50%;
    padding: 0px 0px 0px 50px;
  }
`
