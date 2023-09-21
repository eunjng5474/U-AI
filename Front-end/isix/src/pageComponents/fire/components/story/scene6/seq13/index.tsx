import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryShow } from "../../Story.styled"

const Seq13 = () => {
  const text: string = `불은 타면서 연기를 만들어내는데, 연기도 위험합니다.
    연기를 마시게 되면 친구들은 쓰러질 수 있어요.
    쓰러진다면 불을 피해 나갈 수도 없겠죠?`

  return (
    <>
      <StyledStoryShow>
        <ImageComponent src='./resources/smoke_tmp.png'/>
      </StyledStoryShow>
      <TextComponent text={text}/>
    </>
  )
}

export default Seq13