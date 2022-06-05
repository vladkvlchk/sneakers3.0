import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = (props) => (
  <div className="card">
  <ContentLoader 
    speed={2}
    width={220}
    height={300}
    viewBox="0 0 220 230"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="0" rx="15" ry="15" width="185" height="131" /> 
    <rect x="10" y="140" rx="5" ry="5" width="185" height="18" /> 
    {/* <rect x="10" y="164" rx="5" ry="5" width="198" height="18" />  */}
    <rect x="10" y="180" rx="5" ry="5" width="42" height="35" /> 
    <circle cx="182" cy="195" r="12" />
  </ContentLoader>
  </div>
)

export default CardLoader