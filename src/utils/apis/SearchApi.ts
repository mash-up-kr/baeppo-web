import axios from "axios";

import KeywordSearchResult from "types/KeywordSearchResult";

const searchKeyword = async (keyword: string): Promise<KeywordSearchResult[]> => {
  try {
    const res = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword.json",
      {
        params: { query: keyword },
        headers: { Authorization: "KakaoAK 52e8ff52889ffa358bebb1a7b889a0e1" },
      },
    );

    if (!res?.data?.documents) {
      throw res;
    }

    return res.data.documents.map((d: any) => ({
      position: {
        lat: d.y,
        lng: d.x,
      },
      name: d.place_name,
      address: d.address_name,
    })) as KeywordSearchResult[];
  } catch (e) {
    // something?
  }

  return [];
};

export default searchKeyword;
