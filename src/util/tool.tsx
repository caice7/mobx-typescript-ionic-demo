import React from "react";
import { IonIcon } from "@ionic/react";

const imgUrl = process.env.PUBLIC_URL + '/image/';

export function getSVG(pic: string, className?: string) {
  const src = pic.indexOf("http") > -1 ? pic : imgUrl + pic
  return <IonIcon className={className} icon={src} />;
}

export function getPic(pic: string, className?: string) {
  const src = pic.indexOf("http") > -1 ? pic : imgUrl + pic
  return <img alt="" className={className} src={src} />;
}
