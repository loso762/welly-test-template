import React, {useEffect} from "react";
import PromotionPresenter from "./PromotionPresenter";
import {observer} from "mobx-react";
import {useRouter} from "next/router";
import useStores from "src/hooks/useStores";

const PromotionContainer = observer(() => {
  const router = useRouter();
  const {promotion} = useStores();

  useEffect(() => {
    async function fetchData() {
      try {
        if (typeof router.query.name === "string") {
          await promotion.getPromotionData(router.query.name);

          //open_page false일 경우
          if (!promotion.promotionDetails.open_page) {
            alert("접근하실 수 없는 페이지 입니다.");
            router.push("/");
          }
        }
      } catch (error) {
        throw new Error("데이터 패칭 에러 발생");
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <PromotionPresenter promotion={promotion.promotionDetails} />
    </>
  );
});

export default PromotionContainer;
