import style from "./LocationFrame.module.scss";

export function LocationFrame({ src }: { src: string }) {
  return (
    <div className={style.virtualTourContainer}>
      <iframe
        src={src}
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
