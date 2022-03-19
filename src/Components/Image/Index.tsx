import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface ImageProps {
    src: string;
    alt: string;
}

const Image: FC<ImageProps> = ({src, alt}:ImageProps) => {
    return (
        <img src={src} alt={alt}/>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Image;