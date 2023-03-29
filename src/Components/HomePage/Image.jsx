import React from "react";

export const Image = ({ item }) => {
  return (
    <img
      style={{ width: "18%", heigth: "180px" }}
      src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
      alt=""
    />
  );
};
