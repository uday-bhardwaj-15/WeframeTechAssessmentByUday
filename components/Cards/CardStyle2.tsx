import React from "react";
import Card from "./Card";

const CardStyle2 = () => {
  return (
    <>
      <Card
        className="transition-transform transform hover:scale-105 hover:shadow-lg"
        propBorder="unset"
        propBoxShadow="0px 0px 20px rgba(7, 64, 64, 0.05)"
        propGap="20px"
        availability
        propAlignSelf="unset"
        propWidth="unset"
        sofortLieferbar
        propAlignSelf1="unset"
        propWidth1="unset"
        propMinWidth1="26px"
        img="/img@2x.png"
        propBorder1="unset"
        tHC24="THC 25% "
        navcoraTHCSpotlightPortoMast="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
        nichtLieferbar="sofort lieferbar"
        propBackgroundColor="rgba(13, 112, 82, 0.05)"
        propBackgroundColor1="#0d7052"
        propColor="#0d7052"
        propMinWidth="93px"
        tHC241={`CBD <1%`}
        propFlex="1"
        propMinWidth2="70px"
        genetik="Kultivar"
        genetik1="Genetik"
        indica="Pink Kush"
        indica1="Hybrid"
        propMinWidth3="78px"
        propMinWidth4="56px"
      />
    </>
  );
};

export default CardStyle2;
