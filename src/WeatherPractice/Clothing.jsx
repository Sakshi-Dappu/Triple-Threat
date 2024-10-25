import React from "react";
import "./Clothing.css";

export default function Clothing({ temp, humid }) {
  let bgImage;
  let bgImageValue;
  const RAIN_URL = "https://m.media-amazon.com/images/I/41lsHWfMkIL.jpg";
  const COLD_URL =
    "https://m.media-amazon.com/images/I/715ZNmI0zTL._SX522_.jpg";
  const CLOUDY_URL =
    "https://m.media-amazon.com/images/I/5117dA1W5hL._SX679_.jpg";
  const HOT_URL = "https://m.media-amazon.com/images/I/61sJSvnI2LL._SY741_.jpg";
  //new Learning to redirect
  const handleShop = (bgImageValue) => {
    let ClothingUrl;
    console.log(bgImageValue);
    if (bgImageValue) {
      if (bgImageValue == "COLD_URL") {
        ClothingUrl =
          "https://www.amazon.in/LMONTE-Black-Navy-Jacket-Men/dp/B08Q8P96QG/ref=sr_1_7?crid=3E9FFR8SNASMY&dib=eyJ2IjoiMSJ9.zLnfY-5O5YQqgswEJECBEoM2rEAeFl2J31-IeOT2RH5oW_TyLbUV8u8ippVObQ9ynTUkZAoCxokSLXMMU5xPiOdhHXopGcp9Q4wTJV8T804JKBk7sr0UwdFY-p3brjvuvndHPp9S-Zd-0e2jOWm6KReHxtulHfwTb4rV3W-dYhOmfCe1nRVaG3REo6OAdJLCU2R7_3t2PD02WCYN1mNpKfvXfKpYXmwf4wUw3KFog7e9UQTsmeRJryEtBEp4tIojzrzheUb7nQmO5V2-IzSnzqiVG343B0ZjLP5y15T0pm8.ndsm0HlMa2yA0h4ZaFkEBplAHRaacp7TDup_7sw5IcA&dib_tag=se&keywords=cold+coat&qid=1729818921&s=apparel&sprefix=cold+coat%2Capparel%2C306&sr=1-7";
      } else if (bgImageValue == "HOT_URL") {
        ClothingUrl =
          "https://www.amazon.in/OM-SAI-LATEST-CREATION-Printed/dp/B0C6DPGMQK/ref=sr_1_14?dib=eyJ2IjoiMSJ9.9zBo-kVLYXqVLOjqFzY_MS2AXjztnKk9moPUWG3eo5cnDImUfhqrEANRL6-Nk5kLzs_fWp0Pvrs8DLvY5ACDNUf-bG3XQu5fuVx1XtBq3Wa9a5eMcJEcd8oEBf2OGmAf-4YM9lwsaF0NvORXrmo_73wL6D_KUodqC6guM3_uuwAEdTzR9XJPHS4N6xqwS4Ia7fIqg9zdaOtp20pMbOiX54FK0Dhv-0TvdyWSd0QeeeDMAxPjkD9MTnUGZcqqqwu9Ff-PlFtz0SdL7IBhVnfWNV_4U1ateysYp5JpfLuITCU.uF6UyurqlEySkOfX4c_aLluL7X1s5VAG6bP6HS6eBro&dib_tag=se&keywords=summer+dress+for+men&qid=1729818321&sr=8-14";
      } else if (bgImageValue == "RAIN_URL") {
        ClothingUrl =
          "https://www.amazon.in/CAMISON-Raincoat-Waterproof-Reversible-Storage/dp/B0DG92FXKY/ref=sr_1_28?crid=TLSORF6RG4OY&dib=eyJ2IjoiMSJ9.j9bZD2I8hiDnGOLlCXG1V_QdAb_DHqN92rc5CNq-qAWyBurxdsIy_s37HTlNdJFzGCQDoot5MzZXxawBluXb93Vq5czagTi-IMBAt0snMiSAthrPT4njDYEcUnM8ceaLvX5zZ-WDBnTD3CrHnhdr_JxD6Ye0OH4YkZQjFqRkYrwSPEzlaen4FF1PYAGbKDTIKXzT13NWkgksjHghItgZgvtFFMa4V8EExJx5xiGlM0vf_nvGr_iUfghrd0R2zlzP8LwHdB0Axm99QZ23t-v7hcyGtjuOcnbLjUf-xQGACu8.DByvJh_nITWyPDj90oOtu6QN79eubs6IFMRX1cAScAk&dib_tag=se&keywords=rain+coat&qid=1729818982&s=apparel&sprefix=rain+coat%2Capparel%2C310&sr=1-28";
      } else {
        ClothingUrl =
          "https://www.amazon.in/LLL-FASHION-Womens-Casual-Sweatshirt/dp/B0CMDC4LT5/ref=sr_1_42?dib=eyJ2IjoiMSJ9.l4aWTax3nP6k3hHDTmtVCmx-WExBMva0GfjwTtd5iT2hmZoJVAZSPfv5fUF-i6CC0m8reWDx7oPCOIgVTiJaz3KsKhnZAGJakKao5b2aE4iPpQ80mnihcKEf_Ftc6YPOsu7ZqapY8Z6WNku7q8i-rk08k0vTK_PFGMMlJhrsLUERN8kAlAjnugd_I4MnkhM6lHhL7rz5_840jC0wxGDCyAMRpeU5LF1ANyOSJiePOg24E2zzs6PrWbWD9aK9OT_XJYzVrGnUphMG5re9mv_0qMb2cbXZFADTPFWwnjG4IVo.4zHXZaNS_WUf6PNsKCbfbaOhmxBNncB5IKU6wzv7DgM&dib_tag=se&keywords=sweater&qid=1729819479&sr=8-42";
      }
    }

    window.location.href = `${ClothingUrl}`;
  };
  // // if (humid) {
  // //   console.log("Humidity level:", humid);
  //   if (humid < 10) {
  //     bgImage = COLD_URL;
  //   } else if (humid >= 10 && humid < 50) {
  //     bgImage = WINDY_URL;
  //   } else if (humid >= 50 && humid < 75) {
  //     bgImage = RAIN_URL;
  //   } else {
  //     bgImage = HOT_URL;
  //   }
  //   console.log("Background Image URL:", bgImage);
  // // }

  if (temp) {
    console.log("Temp level:", temp);
    if (temp < -5 && temp <= 10) {
      bgImage = COLD_URL;
      bgImageValue = "COLD_URL";
    } else if (temp >= 20 && temp < 30) {
      bgImage = RAIN_URL;
      bgImageValue = "RAIN_URL";
    } else if (temp >= 30 && temp < 80 && humid >= 45) {
      bgImage = CLOUDY_URL;
      bgImageValue = "CLOUDY_URL";
    } else {
      bgImage = HOT_URL;
      bgImageValue = "HOT_URL";
    }
  }

  return (
    <div className="Clothing_suggestion">
      <h3>Clothing Suggestions</h3>
      <hr />
      <div className="Img" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <button onClick={() => handleShop(bgImageValue)} className="shop_now">
        Shop Now
      </button>
    </div>
  );
}
