import {enableStaticRendering} from "mobx-react";
import PromotionStore from "./PromotionStore";

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

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
