import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const CustomImage = ({ src, alt, ...props }) => {
    const baseUrl = useBaseUrl(src);
    return <img src={baseUrl} alt={alt} {...props} />;
};

export default CustomImage;
