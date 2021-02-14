import { useTheme } from "@material-ui/core"
import { animate } from "framer-motion"
import React from "react"
import { Waypoint } from "react-waypoint"
import styled from "styled-components"

const AboutUsRootContainer = styled.div`
  font-family: ${props => props.theme.typography.fontFamily};
`

const AboutUsGridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
  }
`

type AboutUsImageContainerProps = {
  img: string
  imgMobile: string
}

const AboutUsImageContainer = styled.div<AboutUsImageContainerProps>`
  background-image: ${props => `url(${props.imgMobile})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  width: 100%;

  @media (min-width: 1024px) {
    background-image: ${props => `url(${props.img})`};

    height: 100vh;
  }
`

const AboutUsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 35px;

  @media (min-width: 1024px) {
    padding-left: 3vh;
    padding-right: 3vh;
    text-align: start;
  }
`

const AboutUsMainText = styled.div`
  margin-left: 15px;
  margin-right: 15px;

  & > span {
    color: #333;
    font-weight: 700;
  }

  & .secondParagraph {
    margin-top: 5vh;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`

const AboutUsCounterContainer = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    margin-top: 35px;
  }
`

const AboutUsCounter = styled.div`
  font-weight: 900;
  color: ${props => props.theme.palette.primary.main};
  font-size: 50px;
  margin-top: 15px;

  @media (min-width: 1024px) {
    font-size: 70px;
  }
`

const AboutUsCounterText = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    font-size: 25px;
    justify-content: flex-start;
  }
`

interface Props {
  backgroundImage: string
  backgroundImageMobile: string
}

const AboutUs = ({
  backgroundImage = "https://via.placeholder.com/1500",
  backgroundImageMobile = "https://via.placeholder.com/450",
}: Props) => {
  const [numOfClients, setNumOfClients] = React.useState<number>(0)
  const [animationShowed, setAnimationShowed] = React.useState<boolean>(false)

  const changeNumOfClientsWithMotion = () => {
    setAnimationShowed(true)

    if (numOfClients < 500) {
      const controls = animate(numOfClients, 500, {
        duration: 3,
        ease: "easeInOut",
        onUpdate(value) {
          setNumOfClients(parseInt(value.toFixed(0)))
        },
      })
    } else {
      return
    }
  }

  return (
    <div>
      <Waypoint
        bottomOffset={600}
        onEnter={() => changeNumOfClientsWithMotion()}
      />
      <AboutUsRootContainer>
        <AboutUsGridContainer>
          <AboutUsImageContainer
            imgMobile={backgroundImageMobile}
            img={backgroundImage}
          ></AboutUsImageContainer>

          <AboutUsTextContainer>
            <AboutUsMainText>
              A <span>High Tech Serralheria</span> está presente há mais de 5
              anos no mercado, prestando serviços com excelência para
              residencias, empresas e construtoras.
              <div className="secondParagraph">
                O nosso foco é a solução dos seus problemas, com materiais de
                qualidade e atendimento diferenciado, sendo o nosso objetivo a
                entrega do melhor serviço possível.
              </div>
            </AboutUsMainText>

            <AboutUsCounterContainer>
              <AboutUsCounter>+ de {numOfClients.toString()}</AboutUsCounter>
              <AboutUsCounterText>clientes satisfeitos</AboutUsCounterText>
            </AboutUsCounterContainer>
          </AboutUsTextContainer>
        </AboutUsGridContainer>
      </AboutUsRootContainer>
    </div>
  )
}

export default AboutUs
