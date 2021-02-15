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
import { PortfolioItem, PortfolioItemList } from "../../../types"
import ShowPictureBetter from "../ShowBetterPicture"
import "./slider.css"

interface Props extends PortfolioItemList {
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
  font-size: 24px;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

const PortfolioSection = ({
  portfolioList = [],
  portfolioSectionTitle = "Placeholder section title",
}: Props) => {
  const [showPicture, setShowPicture] = React.useState<boolean>(false)
  const [activePicture, setActivePicture] = React.useState<string>("")

  const showSliderPicture = (src: string) => {
    setShowPicture(true)
    setActivePicture(src)
  }

  // console.log(showPicture)

  return (
    <div>
      <ShowPictureBetter
        open={showPicture}
        closeFunc={() => setShowPicture(false)}
        imageSrc={activePicture}
      />
      {portfolioList.length ? (
        <PortfolioSectionRoot>
          <PortfolioSectionTitle>{portfolioSectionTitle}</PortfolioSectionTitle>
          <Swiper
            id="swiper-portfolio"
            slidesPerView={1}
            // noSwiping
            // noSwipingClass={"no-swipe"}
            autoplay={true}
            speed={6000}
            // loop={true}
            breakpoints={{
              1024: {
                autoplay: true,
                slidesPerView: portfolioList.length > 2 ? 3 : 1,
                speed: 6000,
                // loop: true,
              },
            }}
          >
            {portfolioList.map(
              (portfolioItem: PortfolioItem, index: number) => {
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      showSliderPicture(portfolioItem.portfolioItemPicture)
                    }
                    key={index}
                    className={"no-swipe"}
                  >
                    <PortfolioCardRoot
                      img={portfolioItem.portfolioItemPicture}
                    />
                  </SwiperSlide>
                )
              }
            )}
          </Swiper>
        </PortfolioSectionRoot>
      ) : null}
    </div>
  )
}

export default PortfolioSection
