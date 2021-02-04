// import axios from "axios";
// // IE에서 axios 통신 결과 캐싱되는 현상 방지
// axios.defaults.headers.common = {
//   Pragma: "no-cache",
// };

// const listApiUrl = process.env.REACT_APP_LIST_API_URL;
// export const listApi = listApiUrl;
// export const apiKey = process.env.REACT_APP_API_KEY;

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResult: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        type: "video",
        maxResult: 25,
        q: query,
      },
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}
export default Youtube;
