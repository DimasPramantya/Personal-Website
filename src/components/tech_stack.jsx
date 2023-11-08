import React from "react";

const TechStackCard = ({url, text}) => {
  return (
    <div className="p-2 rounded-sm border border-secondaryGold flex items-center hover:bg-amber-50 hover:bg-opacity-10 hover:cursor-pointer">
      <iconify-icon icon={url} width="1.75rem" />
      <div className="pl-2 font-semibold text-sm lg:text-xs">{text}</div>
    </div>
  )
}

export default TechStackCard