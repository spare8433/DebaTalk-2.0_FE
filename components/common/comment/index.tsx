import { createCommentAPI } from '@api/comment'
import useInput from '@hooks/useInput'
import { useAppSelector } from '@store/store'
import { BasicButtonBox, MainButton } from '@styles/commonStyle'
import { CommentTextArea, IndexContainor } from './style'

type WrapperProps = {
  textState: string
  setState: React.Dispatch<React.SetStateAction<string>>
  onChangeState: (e: React.ChangeEvent<any>) => void
  submitFn: (state:string) => void
}

const Comment = ({ textState, setState, onChangeState, submitFn }: WrapperProps):JSX.Element => {
  
  const user = useAppSelector(state=> state.user)
  // if (user.myData === null) alert('로그인후 이용가능한 서비스입니다')

  return (
    <IndexContainor>
      <CommentTextArea rows={8} maxLength={300} onChange={onChangeState} value={textState}></CommentTextArea>

      <BasicButtonBox>
        <MainButton width='120' height='36' fontSize='16' onClick={()=>submitFn(textState)}>작성</MainButton>
      </BasicButtonBox>    

    </IndexContainor>
  )
}

export default Comment