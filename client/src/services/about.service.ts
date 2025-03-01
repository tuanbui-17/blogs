import { fetchAPI } from "@/utils/fetchApi";

export const getAbout = async () => {
  const urlParams = {
    populate: {
      personal : {
        populate: "*",
      },
      blocks: {
        populate: "*",
      }
    }
  };

  const data = await fetchAPI("/about", urlParams);
  return data;
};
