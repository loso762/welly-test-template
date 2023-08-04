import { useStaticRendering } from "mobx-react";
import PromotionStore from "./PromotionStore";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

let store = null;

export default function initializeStore() {
  if (isServer) {
    return {
      promotionStore: new PromotionStore(),
    };
  }
  if (store === null) {
    store = {
      promotionStore: new PromotionStore(),
    };
  }

  return store;
}
