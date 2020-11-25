import React from 'react'
import ContentLoader from "react-content-loader"


function LoadingBlock(){
     return (
        <ContentLoader 
        className="pizza-block"
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="11" y="108" rx="3" ry="3" width="116" height="9" /> 
        <circle cx="70" cy="51" r="43" />
        </ContentLoader>
    )
}

export default LoadingBlock