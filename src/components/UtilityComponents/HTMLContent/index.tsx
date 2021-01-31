import React from "react"

export const HTMLContent: React.FC<any> = ({ content, className }) => {
  return (
    <div
      className={className ? className : null}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default HTMLContent
