import FitNextImage from '@components/common/fitNextImage'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { CssRem } from 'types/customCssType'

const ImgInputLine = styled.div`
  margin: 20px 0;
  display: flex;
  font-size: 16px;
  label {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray};
    margin: 0 10px;
  }
`

const PreviewImgBox = styled(NextImageBox)`
  border: solid 0.5px ${({ theme }) => theme.colors.whiteGray};
  margin-bottom: 20px;
`

const ImageUploadBox = styled.div`
  margin-bottom: 20px;
  display: block;
  input[type='file'] {
    display: none;
  }
  label {
    cursor: pointer;
  }
`

interface Props {
  previewImage: string
  setPreviewImage: React.Dispatch<React.SetStateAction<string>>
  setImageFile: React.Dispatch<React.SetStateAction<FileList | undefined>>
}

const ImageUploadInput = ({ previewImage, setPreviewImage, setImageFile }: Props) => {
  const onLoadFile = useCallback(
    (event: React.ChangeEvent): any => {
      const element = event.currentTarget as HTMLInputElement
      const fileReader = new FileReader()

      if (element.files === null) return

      if (element.files.length !== 0) {
        fileReader.readAsDataURL(element.files[0])
        fileReader.onload = () => {
          if (typeof fileReader.result === 'string') setPreviewImage(fileReader.result)
        }
      } else setPreviewImage('/img/default-thumbnail.png')

      setImageFile(element.files)
    },
    [setImageFile, setPreviewImage],
  )

  return (
    <ImageUploadBox>
      <input type="file" id="fileElem" onChange={onLoadFile} accept="image/*" />
      <ImgInputLine>
        <label htmlFor="fileElem">이미지 업로드</label>
      </ImgInputLine>
      <PreviewImgBox styleOption={{ width: new CssRem(80), height: new CssRem(25) }}>
        <FitNextImage src={previewImage} alt="previewImg" />
      </PreviewImgBox>
    </ImageUploadBox>
  )
}

export default ImageUploadInput
