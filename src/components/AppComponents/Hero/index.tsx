import React from "react"
import styled from "styled-components"
import { Theme, useTheme, withTheme } from "@material-ui/core/styles"
import { Button, useMediaQuery } from "@material-ui/core"
import scrollIntoViewHelper from "../../../helper/scrollIntoViewType"

type HeroContainerProps = {
  testProp?: string
  img: string
  fontFamily: string
}

const HeroContainer = styled("div")<HeroContainerProps>`
  width: 100%;
  height: 45vh;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  font-family: ${props => props.fontFamily};
  display: flex;

  @media (min-width: 1024px) {
    height: 100vh;
    background-position: center center;
  }
`

const HeroTextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 1024px) {
    width: 40%;
    padding-left: 5vh;
    text-align: initial;
    justify-content: center;
    margin-top: -50px;
  }
`

type HeroTextProps = {
  textColor?: string
  textColorDesktop?: string
}

const HeroMainText = styled.h1<HeroTextProps>`
  color: ${props => (props.textColor ? props.textColor : "#333")};
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 0;
  margin-left: 8px;
  margin-right: 8px;
  font-style: normal;
  font-size: 25px;
  line-height: 30px;
  margin-top: 25px;

  @media (min-width: 1024px) {
    font-size: 42px;
    color: ${props => (props.textColor ? props.textColorDesktop : "#fff")};
    line-height: 45px;
  }

  @media (min-width: 1600px) {
    font-size: 55px;
    line-height: 55px;
  }
`

const HeroSubText = styled.h3<HeroTextProps>`
  color: ${props => (props.textColor ? props.textColor : "#333")};
  font-weight: 300;
  margin-bottom: 35px;

  @media (min-width: 1024px) {
    font-size: 25px;
    color: ${props => (props.textColor ? props.textColor : "#fff")};

    margin-top: 15px;
    margin-bottom: 30px;
  }
`

type Props = {
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
  callToActionRef = null,
}: Props) => {
  const MUITheme = useTheme()
  const bigScreen = useMediaQuery("@media(min-width:1024px)")

  return (
    <React.Fragment>
      {bigScreen ? (
        <HeroContainer
          img={heroImage}
          fontFamily={MUITheme.typography.fontFamily as string}
        >
          <HeroTextContainer>
            <HeroMainText>{mainText}</HeroMainText>
            <HeroSubText>{subText}</HeroSubText>

            <div className="ctaButton">
              <Button
                variant="contained"
                color="primary"
                onClick={() => scrollIntoViewHelper(callToActionRef)}
              >
                {buttonText}
              </Button>
            </div>
          </HeroTextContainer>
        </HeroContainer>
      ) : (
        <React.Fragment>
          <HeroContainer
            img={heroImage}
            fontFamily={MUITheme.typography.fontFamily as string}
          ></HeroContainer>

          <HeroTextContainer>
            <HeroMainText>{mainText}</HeroMainText>
            <HeroSubText>{subText}</HeroSubText>

            <div className="ctaButton">
              <Button
                variant="contained"
                color="primary"
                onClick={() => scrollIntoViewHelper(callToActionRef)}
              >
                {buttonText}
              </Button>
            </div>
          </HeroTextContainer>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Hero
