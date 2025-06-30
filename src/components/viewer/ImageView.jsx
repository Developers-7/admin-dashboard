/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 26 Jun 2025
 * Time: 3:28 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';

const ImageView = ({src, style, onClick, cursor="pointer"}) => {
    if(src){
        return <img
            src={src}
            onClick={onClick}
            style={{...style, cursor}}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/images/no_image_icon.png"
            }}
            alt="no_image"

        />
    }
    return <img style={style} src="/assets/images/no_image_icon.png" alt="no_images" />;
};

export default ImageView;