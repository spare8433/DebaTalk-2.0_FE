import Image, { ImageProps } from 'next/image'
import React from 'react'

const FitNextImage = (props: ImageProps) => <Image {...props} fill />

export default FitNextImage
