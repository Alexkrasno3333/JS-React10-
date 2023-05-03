import * as React from "react";



interface IImage{
    src: string;
    alt: string;
}

 export const Image :React.FC<IImage> = ({src,alt}) => {
     return <img src={src} alt={ alt} />
};