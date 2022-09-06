import { observable, makeObservable, action } from "mobx";
import { createContext } from "react";

class testStore {
  /** 
   * https://mobx.js.org/installation.html
   */
}
const testContext = createContext(new testStore());

export default testContext;
