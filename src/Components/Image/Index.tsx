import React, {ImgHTMLAttributes} from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    src: string;
    alt: string;
}

const Image = ({...rest}:ImageProps) => {
    return (
        <img {...rest}/>
    )
}

export default Image;