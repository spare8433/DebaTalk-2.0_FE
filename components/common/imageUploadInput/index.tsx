import FitNextImage from '@components/common/fitNextImage'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'
import { CssValue } from 'types/customCssType'

const ImageUploadBox = styled.div`
  margin: 2rem 0;
  display: block;
  input[type='file'] {
    display: none;
  }
`

const ImgInputLine = styled.label`
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray};
`

const PreviewImgBox = styled(NextImageBox)`
  border: solid 0.5px ${({ theme }) => theme.colors.whiteGray};
  img {
    object-fit: cover;
  }

  ${({ styleOption }) => css`
    width: ${styleOption?.width?.getValue() ?? '100%'};
    height: ${styleOption?.height?.getValue() ?? '25rem'};
  `}
`

interface Props {
  previewImage: string
  setPreviewImage: React.Dispatch<React.SetStateAction<string>>
  setImageFile: React.Dispatch<React.SetStateAction<FileList | undefined>>
  styleOption?: {
    previewImgHeight?: CssValue
    previewImgWidht?: CssValue
  }
}

const ImageUploadInput = ({ previewImage, setPreviewImage, setImageFile, styleOption }: Props) => {
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
      <ImgInputLine htmlFor="fileElem">
        <h5>이미지 업로드</h5>
        <PreviewImgBox
          styleOption={{
            width: styleOption?.previewImgWidht,
            height: styleOption?.previewImgHeight,
          }}
        >
          <FitNextImage src={previewImage} alt="previewImg" />
        </PreviewImgBox>
      </ImgInputLine>
    </ImageUploadBox>
  )
}

export default ImageUploadInput
