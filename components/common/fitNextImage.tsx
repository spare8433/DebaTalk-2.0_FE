import Image, { ImageProps } from 'next/image'
import React from 'react'

const FitNextImage = (props: ImageProps) => (
  <Image {...props} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
)

export default FitNextImage
