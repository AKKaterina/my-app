import React from "react";
import style from "./button.module.scss";

export default function Button(props) {
  const { textBtn, backgroundColor } = props;
  return (
    <div>
      <button className={style.btn}>{textBtn}</button>
    </div>
  );
}
