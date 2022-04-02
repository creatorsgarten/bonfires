import React from 'react'
import tw from 'twin.macro'

import ContentLoader from 'react-content-loader'

const MyLoader = () => (
  <div tw="py-5">
    <ContentLoader
      speed={2}
      width="600px"
      height="200px"
      viewBox="0 0 400 150"
      backgroundColor="#c4c4c4"
      foregroundColor="#e6e6e6"
      uniqueKey="simple-loader"
    >
      <rect x="6" y="7" rx="0" ry="0" width="251" height="16" />
      <circle cx="48" cy="75" r="22" />
      <rect x="20" y="108" rx="0" ry="0" width="59" height="12" />
      <circle cx="130" cy="75" r="22" />
      <rect x="102" y="108" rx="0" ry="0" width="59" height="12" />
      <circle cx="208" cy="75" r="22" />
      <rect x="180" y="108" rx="0" ry="0" width="59" height="12" />
    </ContentLoader>
  </div>
)

export default MyLoader
