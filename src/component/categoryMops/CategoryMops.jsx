import React from "react";
import style from "./category.module.scss";

export default function CategoryMops(props) {
  const { imgUrl } = props;

  return (
    <div className={style.imgWrapper}>
      <img src={imgUrl}></img>
      <div className={style.hidenText}>INNER TEXT</div>
    </div>
  );
}
