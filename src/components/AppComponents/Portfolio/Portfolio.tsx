import React from "react"
import { PortfolioItemList } from "../../../types"
import { Swiper as SwiperCore, Navigation, Pagination, Lazy } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import styled from "styled-components"
import "./slider.css"
import { Button } from "@material-ui/core"

SwiperCore.use([Navigation, Pagination, Lazy])

interface IPortfolioProps extends PortfolioItemList {
  sectionTitle: string
}

const Portfolio = ({ portfolioList = [], sectionTitle }: IPortfolioProps) => {
  return (
    <Root>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <Swiper id="swiper-portfolio">
        <SwiperSlide>
          <FirstSliderBase>
            <FirstSlideTitle>Confira nossos últimos serviços</FirstSlideTitle>
            <FirstSlideAux>
              Trabalhamos com serralheria, segurança eletrônica e elétrica para
              residencias, empresas e construtoras.
            </FirstSlideAux>
            <Button variant="contained" color="primary">
              Faça seu orçamento
            </Button>
          </FirstSliderBase>
        </SwiperSlide>
      </Swiper>
    </Root>
  )
}

export default Portfolio

const Root = styled.div`
  font-family: ${props => props.theme.typography.fontFamily};
`

const SectionTitle = styled.div`
  display: flex;
`

const FirstSliderBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;

  @media (min-width: 1024px) {
    width: 400px;
  }
`

const FirstSlideTitle = styled.div`
  font-size: 26px;
  color: ${props => props.theme.palette.secondary.main};
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

const FirstSlideAux = styled.div`
  color: #333;
  font-size: 18px;

  @media (min-width: 1024px) {
    margin-right: 35%;
  }
`

const LastSliderBase = styled.div``

const PortfolioImageBase = styled.div`
  height: 100%;
  width: 100%;
`
