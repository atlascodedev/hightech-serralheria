import { Slide } from "@material-ui/core"
import React from "react"
import styled from "styled-components"

interface BackdropProps {
  show: boolean
}

const BackdropRoot = styled.div`
  position: fixed;
  z-index: 9999;
  inset: 0px;
`

const Backdrop = styled.div<BackdropProps>`
  opacity: ${props => (props.show ? "1" : "0")};
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
`

const DialogContainer = styled.div`
  width: 320px;
  height: 180px;

  @media (min-width: 768px) {
    width: 420px;
    height: 236.25px;
  }

  @media (min-width: 1024px) {
    width: 620px;
    height: 348.75px;
  }

  @media (min-width: 1368px) {
    width: 720px;
    height: 405px;
  }

  @media (min-width: 1600px) {
    width: 720px;
    height: 405px;
  }
`

interface Props {
  open: boolean
  closeFunc: () => void
  imageSrc: string
  timeout?: number
}

const setScrollable = (scroll: boolean) => {
  if (scroll) {
    global.window.document.body.style.overflow = "initial"
  } else {
    global.window.document.body.style.overflow = "hidden"
  }
}

const ShowPictureBetter = ({
  open,
  closeFunc,
  imageSrc = "https://via.placeholder.com/500",
  timeout = 400,
}: Props) => {
  const [unmount, setUnmount] = React.useState<boolean>(true)

  const unmountComponent = () => {
    setScrollable(true)

    setTimeout(() => {
      setUnmount(false)
    }, timeout + 100)
  }

  const mountComponent = () => {
    setScrollable(false)

    setUnmount(true)
  }

  React.useEffect(() => {
    open ? mountComponent() : unmountComponent()
  }, [open])

  return (
    <div>
      {unmount ? (
        <BackdropRoot>
          <Backdrop show={open} onClick={() => closeFunc()}>
            <Slide
              in={true}
              direction="up"
              timeout={{ enter: timeout, exit: timeout }}
            >
              <div>
                <DialogContainer>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={imageSrc}
                    alt=""
                  />
                </DialogContainer>
              </div>
            </Slide>
          </Backdrop>
        </BackdropRoot>
      ) : null}
    </div>
  )
}

export default ShowPictureBetter
