import React from "react";
import thumbnail_logo_titulo_verde from "../Images/thumbnail_logo_titulo_verde.png";

export default function Content(props) {
  const { title, children, className } = props;

  return (
    <section>
      <div className={className}>
        <div>
          <div>
            <img
              className="Images"
              src={thumbnail_logo_titulo_verde}
              alt="logo"
            />
          </div>
          <h3 className="TestTitle">{title}</h3> {/*codigo javascrip*/}
        </div>
        {children}
      </div>
    </section>
  );
}
