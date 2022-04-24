import React, { FC } from 'react';

interface ImageProps {
    src: string;
    alt: string;
}

const Image: FC<ImageProps> = ({src, alt}:ImageProps) => {
    return (
        <img src={src} alt={alt}/>
    )
}

export default Image;