import { observable, makeObservable, action } from "mobx";
import { createContext } from "react";

export default class promotionStore {
  /** 
   * https://mobx.js.org/installation.html
   */

  @observable promotionDetails = null;
}
