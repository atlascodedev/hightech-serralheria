import React from "react"
import { PortfolioItemList } from "../../../types"
import { Swiper as SwiperCore, Navigation, Pagination, Lazy } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import styled from "styled-components"
import "./slider.css"
import { Button, SvgIcon } from "@material-ui/core"
import { motion } from "framer-motion"
import { ArrowForward } from "@material-ui/icons"
import scrollIntoViewHelper from "../../../helper/scrollIntoView"

SwiperCore.use([Navigation, Pagination, Lazy])

interface IPortfolioProps extends PortfolioItemList {
  sectionTitle: string
  ctaRef: any
}

const Portfolio = ({
  portfolioList = [],
  sectionTitle,
  ctaRef,
}: IPortfolioProps) => {
  return (
    <Root>
      {global.window.innerWidth > 768 ? null : (
        <FirstSliderBase>
          <FirstSlideTitle>Confira nossos últimos serviços</FirstSlideTitle>
          <FirstSlideAux>
            Trabalhamos com serralheria, segurança eletrônica e elétrica para
            residencias, empresas e construtoras.
          </FirstSlideAux>
          <Button
            onClick={() => scrollIntoViewHelper(ctaRef, "contato")}
            variant="contained"
            color="primary"
          >
            Faça seu orçamento
          </Button>
        </FirstSliderBase>
      )}

      <Swiper
        navigation={{
          nextEl: ".testimonial-forward",
          prevEl: ".testimonial-back",
        }}
        speed={1500}
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
            {({ isActive }: { isActive: boolean }) => {
              console.log(isActive, "is it?")
              return (
                <FirstSliderBase
                  initial="visible"
                  animate={isActive ? "visible" : "hidden"}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    },
                    hidden: {
                      opacity: 0,
                    },
                  }}
                >
                  <FirstSlideTitle>
                    Confira nossos últimos serviços
                  </FirstSlideTitle>
                  <FirstSlideAux>
                    Trabalhamos com serralheria, segurança eletrônica e elétrica
                    para residencias, empresas e construtoras.
                  </FirstSlideAux>
                  <Button
                    onClick={() => scrollIntoViewHelper(ctaRef, "contato")}
                    variant="contained"
                    color="primary"
                  >
                    Faça seu orçamento
                  </Button>
                </FirstSliderBase>
              )
            }}
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
      <SliderNavigationContainer>
        <motion.div
          className="testimonial-back"
          variants={{
            hover: { scale: 1.1 },
            tap: { scale: 0.9 },
          }}
          whileTap="tap"
          whileHover="hover"
        >
          <SliderNavigationButtonRoot>
            <SvgIcon
              component={ArrowForward}
              style={{ transform: "rotate(180deg)" }}
            />
          </SliderNavigationButtonRoot>
        </motion.div>
        <motion.div
          className="testimonial-forward"
          variants={{
            hover: { scale: 1.1 },
            tap: { scale: 0.9 },
          }}
          whileTap="tap"
          whileHover="hover"
        >
          <SliderNavigationButtonRoot>
            <SvgIcon component={ArrowForward} />
          </SliderNavigationButtonRoot>
        </motion.div>
      </SliderNavigationContainer>
    </Root>
  )
}

export default Portfolio

const Root = styled.div`
  font-family: ${props => props.theme.typography.fontFamily};
  padding: 2.5%;
  position: relative;
  overflow: hidden;
`

const FirstSliderBase = styled(motion.div)`
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

const SliderNavigationContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  bottom: 5px;
  z-index: 900;
  padding-top: 50px;

  @media (min-width: 1024px) {
    bottom: 0;
    padding: 20px;
  }
`

const SliderNavigationButtonRoot = styled.div`
  width: 51.03px;
  height: 51.03px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0px 20px;

  :focus {
    outline-width: 0px;
  }
  outline: none;

  background: ${props => props.theme.palette.secondary.main};
  border-radius: 50%;

  @media (min-width: 1024px) {
    width: 50.27px;
    height: 50.27px;
  }

  .MuiSvgIcon-root {
    fill: ${props => props.theme.palette.secondary.contrastText};
    font-size: 1.85rem;
  }
`
