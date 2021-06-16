import React from "react";
import { Carousel } from "antd";

import CarouselImg_1 from "../../../assets/images/carousel/1.jpg";
import CarouselImg_2 from "../../../assets/images/carousel/2.jpg";
import CarouselImg_3 from "../../../assets/images/carousel/3.jpg";
import CarouselImg_4 from "../../../assets/images/carousel/4.jpg";
import {
  CarouselContent,
  CarouselText,
  CarouselStatistics,
  CarouselDescription,
} from "../../../components/shared/styles/hero/carousel";
import Translate from "../../../assets/i18n/Translate";

const HeroCarousel = () => {
  return (
    <Carousel
      //  autoplay
      style={{ marginBottom: "100px" }}
    >
      <div>
        <CarouselContent>
          <img src={CarouselImg_1} alt="charity"></img>
          <CarouselText style={{ position: "absolute" }}>
            <CarouselStatistics>{Translate("statistics")}</CarouselStatistics>
            <CarouselDescription>
              {Translate("statisticsDesc")}
            </CarouselDescription>
          </CarouselText>
        </CarouselContent>
      </div>
      <div>
        <CarouselContent>
          <img src={CarouselImg_2} alt="charity"></img>
          <CarouselText style={{ position: "absolute" }}>
            <CarouselStatistics>{Translate("statistics")}</CarouselStatistics>
            <CarouselDescription>
              {Translate("statisticsDesc")}
            </CarouselDescription>
          </CarouselText>
        </CarouselContent>
      </div>
      <div>
        <CarouselContent>
          <img src={CarouselImg_3} alt="charity"></img>
          <CarouselText style={{ position: "absolute" }}>
            <CarouselStatistics>{Translate("statistics")}</CarouselStatistics>
            <CarouselDescription>
              {Translate("statisticsDesc")}
            </CarouselDescription>
          </CarouselText>
        </CarouselContent>
      </div>
      <div>
        <CarouselContent>
          <img src={CarouselImg_4} alt="charity"></img>
          <CarouselText style={{ position: "absolute" }}>
            <CarouselStatistics>{Translate("statistics")}</CarouselStatistics>
            <CarouselDescription>
              {Translate("statisticsDesc")}
            </CarouselDescription>
          </CarouselText>
        </CarouselContent>
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
