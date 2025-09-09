"use client";
import { IKImage } from "imagekitio-next";

const urlEndpoint =
  process.env.URL_ENDPOINT || "https://ik.imagekit.io/pdcgbeuqk9";
const Image = (path, width, heigth, alt, className, tr) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      {...(tr
        ? { transformation: [{ width: `${width}`, height: `${heigth}` }] }
        : { width: width, height: heigth })}
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      className={className}
    />
  );
};
export default Image;
