import React from "react";
import Card from "./Card";

const CardStyle1 = () => {
  return (
    <>
      <Card
        className="transition-transform transform hover:scale-105 hover:shadow-lg"
        propBorder="2px solid #28e3e9"
        propBoxShadow="unset"
        propGap="unset"
        availability={false}
        propAlignSelf="stretch"
        propWidth="50px"
        sofortLieferbar={false}
        propAlignSelf1="stretch"
        propWidth1="26px"
        propMinWidth1="unset"
        img="/img@2x.png"
        propBorder1="2px solid #28e3e9"
        tHC24="THC 18% "
        navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
        nichtLieferbar="nicht lieferbar"
        propBackgroundColor="rgba(161, 11, 11, 0.05)"
        propBackgroundColor1="#a10b0b"
        propColor="#a10b0b"
        propMinWidth="87px"
        tHC241={`CBD <1%`}
        propFlex="1"
        propMinWidth2="70px"
        genetik="Kultivar"
        genetik1="Genetik"
        indica="Mango"
        indica1="Hybrid"
        propMinWidth3="56px"
        propMinWidth4="56px"
      />
    </>
  );
};

export default CardStyle1;
