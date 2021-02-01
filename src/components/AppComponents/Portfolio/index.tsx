import React from "react"
import styled from "styled-components"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "./slider.css"

interface Props {
  portfolioItems: Array<any>
  portfolioSectionTitle: string
}

type PortfolioCardProps = {
  img: string
}

const PortfolioCardRoot = styled.div<PortfolioCardProps>`
  width: 320px;
  height: 240px;
  border-radius: 10px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    width: 393px;
    height: 295px;
  }
`

const PortfolioSectionRoot = styled.div`
  background-color: #f4f4f4;
  font-family: ${props => props.theme.typography.fontFamily};
  color: ${props => props.theme.palette.primary.main};
`

const PortfolioSectionTitle = styled.div`
  font-weight: 700;
  text-align: center;
  padding-top: 50px;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

const PortfolioSection = ({
  portfolioItems = [],
  portfolioSectionTitle = "Placeholder section title",
}: Props) => {
  return (
    <PortfolioSectionRoot>
      <PortfolioSectionTitle>{portfolioSectionTitle}</PortfolioSectionTitle>
      <Swiper
        id="swiper-portfolio"
        slidesPerView={1}
        noSwiping
        noSwipingClass={"no-swipe"}
        autoplay={{
          delay: 0,
          waitForTransition: false,
          disableOnInteraction: false,
        }}
        speed={6000}
        loop={true}
        breakpoints={{
          1024: {
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
            },
            slidesPerView: 3,
            speed: 3000,
            loop: true,
          },
        }}
      >
        <SwiperSlide className={"no-swipe"}>
          <PortfolioCardRoot img={"https://via.placeholder.com/350"} />
        </SwiperSlide>
        <SwiperSlide className={"no-swipe"}>
          <PortfolioCardRoot img={"https://via.placeholder.com/350"} />
        </SwiperSlide>
        <SwiperSlide className={"no-swipe"}>
          <PortfolioCardRoot img={"https://via.placeholder.com/350"} />
        </SwiperSlide>
        <SwiperSlide className={"no-swipe"}>
          <PortfolioCardRoot img={"https://via.placeholder.com/350"} />
        </SwiperSlide>
      </Swiper>
    </PortfolioSectionRoot>
  )
}

export default PortfolioSection
