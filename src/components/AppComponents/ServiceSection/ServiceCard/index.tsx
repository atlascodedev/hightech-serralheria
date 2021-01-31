import { Box, Button } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Url } from "url"

const ServiceCardBase = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

type ServiceCardImageProps = {
  img: string
}

const ServiceCardImage = styled("div")<ServiceCardImageProps>`
  width: 310px;
  height: 190px;
  background-image: ${props => `url(${props.img})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  z-index: 10;
  @media (min-width: 1024px) {
    width: 385px;
    height: 265px;
  }
`

const ServiceCardBody = styled("div")`
  width: 310px;
  min-height: 170px;
  height: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  background: #ffffff;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .MuiButtonBase-root {
    margin-top: 25px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 25px;
  }

  transform: translateY(-25px);
  @media (min-width: 1024px) {
    width: 380px;
    min-height: 227.32px;
    height: auto;
  }
`

const ServiceCardTitle = styled("div")`
  text-align: center;
  font-family: "Suez One";
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 15px;
  margin-top: 15px;
  padding-top: 35px;
`

const ServiceCardText = styled("div")`
  font-size: 10px;
  padding: 20px;
`

interface Props {
  serviceCardImg?: string
  serviceCardTitle?: string
  serviceCardText?: string
  serviceCardURL?: string
}

const ServiceCard = ({
  serviceCardImg = "https://via.placeholder.com/350x350",
  serviceCardText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quis in quaerat magni sit voluptates ea explicabo animi, blanditiis vel cumque aliquid harum sed quas atque quod error impedit fugit nisi. Asperiores nostrum mollitia cum magni magnam, a sint voluptates quam nisi quidem fugiat aliquid suscipit corrupti, commodi aspernatur exercitationem ipsa  ",
  serviceCardTitle = "Lorem ipsum title",
  serviceCardURL = "#",
}: Props) => {
  return (
    <Box my={5}>
      <ServiceCardBase>
        <ServiceCardImage img={serviceCardImg} />
        <ServiceCardBody>
          <ServiceCardTitle>{serviceCardTitle}</ServiceCardTitle>
          <ServiceCardText>{serviceCardText}</ServiceCardText>
          <Link to={serviceCardURL}>
            <Button variant="contained" color="primary">
              Conheça o serviço
            </Button>
          </Link>
        </ServiceCardBody>
      </ServiceCardBase>
    </Box>
  )
}

export default ServiceCard
