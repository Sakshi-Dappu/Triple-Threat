import React from "react";
import "./Clothing.css";

export default function Clothing() {
  const INIT_URL = "https://m.media-amazon.com/images/I/41lsHWfMkIL.jpg";

//new Learning to redirect
const handleShop = () => {
    window.location.href = "https://www.amazon.in/CAMISON-Raincoat-Waterproof-Reversible-Storage/dp/B0DG92FXKY/ref=sr_1_20?dib=eyJ2IjoiMSJ9.fCOr67PjC9XQbymvnKr7Tbi1XAd06I4w9dwX9O3And3OycX8wERZYGm3J8KYqYbruxVEfM32ygMXaxUEGBZfCYm6Wwj71Bq8ZCX7Olu2qmCBJVsymnHljUzzNZd7oXxPPhtgdRM64u3yb4ffkJV5LwfVQ0ZMdGn2TxnA5dvFlE_HKauP1jxupszodxUuHMH1x-cVBI_cQJ-0n9po3q050uAUC-hfhK16_DmcBJWbDEz21zcMEU6lcOaHJ0jj4u-au1c4UkebVY_tye9qjeaYHDmcIDlqxduzfk7xOXt0-Yw.8KRnA07QOa9ZbNaHZH4DT7-6VHOSTgBSeHF9zb7rET8&dib_tag=se&keywords=raincoat&qid=1729780496&sr=8-20";
}


  return (
    <div className="Clothing_suggestion">
      <h3>Clothing Suggestions</h3>
      <hr />
      <div
        className="Img"
        style={{ backgroundImage: `url(${INIT_URL})` }}
        
      ></div>
      <button onClick={handleShop} className="shop_now">Shop Now</button>
    </div>
  );
}
