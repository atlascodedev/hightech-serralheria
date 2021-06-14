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
import ServiceCard from "../ServiceCard"
import { graphql, useStaticQuery } from "gatsby"
import { ServiceItem, ServiceItemList } from "../../../../types"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

interface CardActiveProps {
  active: boolean
}

const CardActiveContainer = styled("div")<CardActiveProps>`
  opacity: ${props => (props.active ? "1" : "0.6")};
  scale: ${props => (props.active ? "1" : "0.75")};
  transition: all 0.8s ease;
  will-change: scale;
`

interface Props extends ServiceItemList {
  serviceCardActionRef?: React.RefObject<HTMLDivElement> | null
}

const ServiceSlider = ({
  serviceList = [],
  serviceCardActionRef = null,
}: Props) => {
  const [serviceData, setServiceData] = React.useState([])

  return (
    <div>
      <Swiper
        centeredSlides
        id="swiper-1"
        slidesPerView={1}
        initialSlide={1}
        pagination={{ clickable: true }}
        autoplay={false}
        watchOverflow={true}
        spaceBetween={50}
        breakpoints={{
          1024: {
            slidesPerView: "auto",
            pagination: { clickable: true },
            spaceBetween: 0,
          },
        }}
      >
        {serviceList.map((serviceItem: ServiceItem, index: number) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }: any | boolean) => (
                <CardActiveContainer active={isActive}>
                  <ServiceCard
                    serviceCardImg={serviceItem.serviceItemPicture}
                    serviceCardText={serviceItem.serviceItemDescription}
                    serviceCardCallToAction={null}
                    serviceCardTitle={serviceItem.serviceItemTitle}
                    serviceCardRef={serviceCardActionRef}
                  />
                </CardActiveContainer>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ServiceSlider
