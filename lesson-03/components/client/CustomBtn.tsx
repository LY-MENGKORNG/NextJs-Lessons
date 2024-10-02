"use client"
import { CustomBtnProps } from "@/types"
import React from "react"

const CustomBtn = ({
  title,
  btnType,
  btnStyle,
  handleClick,
}: CustomBtnProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`btn ` + btnStyle}
      onClick={handleClick}>
      {title}
    </button>
  )
}

export default CustomBtn
