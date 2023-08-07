import {useRouter} from "next/router";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import TabContainer from "src/layout/Tab";
import Container from "src/layout/Container";
import Mybutton from "src/layout/Button";
import "swiper/css/navigation";
import "swiper/css";
import styled from "styled-components";

const P = styled.p`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
`;

const HomePage = () => {
  const router = useRouter();
  const promotions = ["wellyPromotion", "wellyPromotion2", "wellyPromotion3"];

  return (
    <Container height="100vh" justify="top">
      <Swiper modules={[Autoplay, Navigation]} slidesPerView={1} loop={true} navigation>
        {promotions.map((promotion, idx) => {
          return (
            <SwiperSlide>
              <Mybutton
                key={idx}
                onClick={() => {
                  router.push({
                    pathname: "/promotion/",
                    query: {name: promotion},
                  });
                }}>
                {promotion}
              </Mybutton>
              <P>
                {idx + 1} / {promotions.length}
              </P>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <TabContainer position="absolute" />
    </Container>
  );
};

export default HomePage;
