import { Container } from "@material-ui/core"
import React from "react"
import HTMLContent from "../components/UtilityComponents/HTMLContent"
import styled from "styled-components"
import AppLayout from "../layout/"
import { MenuItem } from "../types"

const PostContentContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  max-width: 1368px;

  & .markdownContent p > img {
    max-width: 100% !important;
  }

  & .markdownContent {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: 1024px) {
    padding-left: 48px;
    padding-right: 48px;
  }
`

interface PostBackgroundImageProps {
  image: string
}

const PostBackgroundImage = styled.div<PostBackgroundImageProps>`
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 55vh;
    width: 100%;
    filter: brightness(40%);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 150px;
  }

  @media (min-width: 1024px) {
    &::before {
      height: 55vh;
    }
  }
`

const PostBackgroundImageInnerContainer = styled.div`
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 800;
  font-family: "Barlow";
  color: #fff;
  text-align: center;
  flex-direction: column;

  & > div {
    z-index: 1005;
  }

  & > .postInfo {
    font-size: 10px;
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    height: 55vh;
    font-size: 55px;

    & > .postInfo {
      font-size: 15px;
    }
  }
`

interface PageContext {
  contentType: string
  date: string
  featuredImage: string
  html: string
  slug: string
  title: string
}

interface Props {
  pageContext: PageContext
}

function Post({ pageContext }: Props) {
  const [postDate, setPostDate] = React.useState(``)
  const [postTime, setPostTime] = React.useState(``)

  React.useEffect(() => {
    const postDateLocal = new Date(pageContext.date)
    setPostDate(postDateLocal.toLocaleDateString("pt-br"))
    setPostTime(postDateLocal.toLocaleTimeString("pt-br"))
  }, [])

  console.log(postDate + "---" + postTime)

  const menu: Array<MenuItem> = [
    {
      menuName: "Home",
      reference: null,
      itemDocumentId: null,
    },

    {
      menuName: "Sobre nós",
      reference: null,
      itemDocumentId: null,
    },

    {
      menuName: "Novidades",
      reference: null,
      itemDocumentId: null,
    },

    {
      menuName: "Contato",
      reference: null,
      itemDocumentId: null,
    },
  ]

  return (
    <AppLayout menu={menu}>
      <div>
        <PostBackgroundImage image={pageContext.featuredImage}>
          <PostBackgroundImageInnerContainer>
            <div>{pageContext.title}</div>

            <div className={"postInfo"}>
              {`Postado em: ${postDate}, às ${postTime}`}
            </div>
          </PostBackgroundImageInnerContainer>
        </PostBackgroundImage>
        <PostContentContainer>
          <HTMLContent
            className={"markdownContent"}
            content={pageContext.html}
          />
        </PostContentContainer>
      </div>
    </AppLayout>
  )
}

export default Post
