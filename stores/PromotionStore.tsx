import axios from "axios";
import {observable, makeObservable, action} from "mobx";

export type PromotionDetails = {
  image_section?: {url: string}[];
  open_page?: boolean;
};

export default class promotionStore {
  promotionDetails = {
    image_section: [],
    open_page: true,
  };

  constructor() {
    makeObservable(this, {
      promotionDetails: observable,
      getPromotionData: action,
    });
  }

  axiosInstance = axios.create({
    baseURL: `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE_ID}`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  });

  async getPromotionData(promotionName: string) {
    try {
      const response = await this.axiosInstance.get("/Promotion", {
        params: {
          view: "Default",
          filterByFormula: `promotion_name="${promotionName}"`,
        },
      });

      this.promotionDetails = response.data.records[0].fields;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
