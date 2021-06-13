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
      {global.window.innerWidth > 768 ? null : (
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
      )}

      <Swiper
        pagination
        autoHeight
        slidesPerView={1.5}
        spaceBetween={25}
        breakpoints={{
          1024: {
            slidesPerView: 2.5,
          },
        }}
        id="swiper-portfolio"
      >
        {global.window.innerWidth > 768 ? (
          <SwiperSlide>
            <FirstSliderBase>
              <FirstSlideTitle>Confira nossos últimos serviços</FirstSlideTitle>
              <FirstSlideAux>
                Trabalhamos com serralheria, segurança eletrônica e elétrica
                para residencias, empresas e construtoras.
              </FirstSlideAux>
              <Button variant="contained" color="primary">
                Faça seu orçamento
              </Button>
            </FirstSliderBase>
          </SwiperSlide>
        ) : null}
        {portfolioList.map((portfolioItem, index) => {
          return (
            <SwiperSlide key={index}>
              <PortfolioImageBase>
                <img src={portfolioItem.portfolioItemPicture} alt="" />
              </PortfolioImageBase>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Root>
  )
}

export default Portfolio

const Root = styled.div`
  font-family: ${props => props.theme.typography.fontFamily};
  padding: 2.5%;
`

const FirstSliderBase = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px;

  @media (min-width: 1024px) {
    width: 300px;
    padding: 0px;
  }
`

const FirstSlideTitle = styled.div`
  font-size: 26px;
  color: ${props => props.theme.palette.secondary.main};
  font-weight: bold;
  padding-bottom: 15px;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

const FirstSlideAux = styled.div`
  color: #333;
  font-size: 18px;
  padding-bottom: 15px;
`

const LastSliderBase = styled.div``

const PortfolioImageBase = styled.div`
  height: auto;
  width: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 1024px) {
    img {
      object-fit: cover;
    }

    height: 500px;
  }
`
