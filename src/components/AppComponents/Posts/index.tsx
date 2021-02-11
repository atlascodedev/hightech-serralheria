import React from "react"
import { PostItemList } from "../../../types"
import styled from "styled-components"
import { Button, Fade, SvgIcon } from "@material-ui/core"
import { AccessTime } from "@material-ui/icons"

const PostListRoot = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
`

const PostListSectionTitle = styled.div`
  font-size: 24px;
  font-family: ${props => props.theme.typography.fontFamily};
  color: ${props => props.theme.palette.primary.main};
  font-weight: 700;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

const PostListContainer = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
  display: grid;
  grid-template-rows: 1fr;
  align-content: center;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const PostCardAncientRoot = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
`

const PostCardContainer = styled.div`
  font-family: ${props => props.theme.typography.fontFamily};
`

const PostCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  width: 320px;
  height: 228px;

  @media (min-width: 1024px) {
    width: 400px;
    height: 280px;
  }
`

const PostCardReadTimeContainer = styled.div`
  display: flex;
  padding-bottom: 15px;

  & .MuiSvgIcon-root {
    fill: ${props => props.theme.palette.primary.main};
  }

  & .timer {
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 500;
  }
`

const PostTitle = styled.div`
  color: #2a3d45;
  font-size: 20px;
  width: 320px;
  padding-top: 15px;
  font-weight: 600;

  @media (min-width: 1024px) {
    width: 400px;
    font-size: 26px;
  }
`

const PostAuthorContainer = styled.div`
  display: flex;
  align-items: center;

  .posterData {
    margin-left: 15px;

    .authorName {
      font-weight: 600;
      padding-bottom: 5px;
    }
  }
`

const PostAuthorIconContainer = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  transform: translateX(-5px);

  .outer-circle {
    width: 60px;
    height: 60px;
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 110px;
    border: ${props => `3px dashed ${props.theme.palette.primary.main}`};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #d8d8d8;
  }
`

interface PostCardMainProps {}

const PostCardMain = (props: PostCardMainProps) => {
  return (
    <div>
      <PostCardAncientRoot>
        <PostCardReadTimeContainer>
          <SvgIcon component={AccessTime} />
          <div className="timer">10 minutos de leitura</div>
        </PostCardReadTimeContainer>

        <PostCardContainer>
          <PostCard />
        </PostCardContainer>

        <PostTitle>
          Ferramentas para melhorar as imagens do seu negócio
        </PostTitle>

        <PostAuthorContainer>
          <PostAuthorIconContainer>
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
          </PostAuthorIconContainer>

          <div className="posterData">
            <div className="authorName">HighTech Serralheria</div>
            <div className="postDate">10 de janeiro de 2021</div>
          </div>
        </PostAuthorContainer>
      </PostCardAncientRoot>
    </div>
  )
}

interface Props extends PostItemList {}

const Posts = ({
  postList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "h"],
}: Props) => {
  const [visiblePostList, setVisiblePostList] = React.useState<Array<any>>([])
  const [postListState, setPostList] = React.useState<Array<any>>([])

  React.useEffect(() => {
    let localPostList = postList
    let firstThree = []

    if (postList.length > 3) {
      for (let i = 0; i < 3; i++) {
        const element = localPostList[i]

        firstThree.push(element)
      }

      setVisiblePostList(firstThree)

      for (let i = 0; i < 3; i++) {
        localPostList.shift()
      }

      setPostList(localPostList)
    } else {
      setVisiblePostList(localPostList)
    }
  }, [])

  const showMorePosts = () => {
    let current = [...postListState]
    let removeThree = current.splice(0, 3)

    // console.log(current, removeThree)
    // console.log(current, visiblePostList)
    setPostList(current)
    setVisiblePostList(prevState => [...prevState, ...removeThree])
  }

  return (
    <div>
      <PostListRoot>
        <PostListSectionTitle>Últimas postagens</PostListSectionTitle>
        <PostListContainer>
          {visiblePostList.map((value, index) => {
            return (
              <Fade key={index} in={true} timeout={{ enter: 750 }}>
                <div>
                  <PostCardMain />
                </div>
              </Fade>
            )
          })}
        </PostListContainer>

        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {postListState.length > 0 ? (
            <Fade in={true} timeout={{ exit: 750, enter: 500 }} unmountOnExit>
              <div>
                <Button
                  onClick={showMorePosts}
                  color="primary"
                  variant="outlined"
                >
                  Ver mais
                </Button>
              </div>
            </Fade>
          ) : null}
        </div>
      </PostListRoot>
    </div>
  )
}

export default Posts
