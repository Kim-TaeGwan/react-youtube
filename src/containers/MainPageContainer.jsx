import React, { useEffect, useState } from "react";

import axios from "axios";

import MainPageComponent from "components/MainPageComponent.js";
import ListItem from "components/Sheard/ListItem";
import VideoDetail from "components/Sheard/VideoDetail";
// import { listApiUrl, apiKey } from "components/Sheard/Api";
import styles from "./mainPage.module.css";

const MainPageContainer = () => {
  const [search, setSearch] = useState("");
  /*
    useState를 사용하여 요청 상태를 관리하고, useEffect를 사용하여 컴포넌트가 렌더링되는 시점에 요청을 시작.

    요청에 대한 상태를 관리 할 때에는 다음과 같이 총 3가지 상태를 관리해준다.
    1. 요청의 결과
    2. 로딩 상태
    3. 에러
  */
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const videoList = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 list를 초기화.
        setError(null);
        setList(null);
        // loading 상태를 true로 바꾼다.
        setLoading(true);

        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAeEUUbHbAtL7oSAsXd_iRBkt_c_CyP9v8"
        );
        // const response = await axios.get(listApiUrl);
        setList(response.data.items); // 데이터는 response.data 안에 들어있다.
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    videoList();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!list) return null;

  const handleSearch = e => {
    setSearch(e.target.value);
  };
  const handleSearchButton = () => {
    const videoSearch = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 list를 초기화.
        setError(null);
        setList(null);
        // loading 상태를 true로 바꾼다.
        setLoading(true);
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&type=video&key=AIzaSyAeEUUbHbAtL7oSAsXd_iRBkt_c_CyP9v8`
        );
        setList(response.data.items); // 데이터는 response.data 안에 들어있다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    videoSearch();
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSearchButton();
    }
  };
  return (
    <MainPageComponent
      searchValue={search}
      handleSearch={handleSearch}
      handleSearchButton={handleSearchButton}
      handleKeyPress={handleKeyPress}
    >
      {selectedVideo && (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
      )}

      <div className={styles.list}>
        <ul className={styles.videos}>
          {list.map(lists => (
            <ListItem
              key={lists.id}
              thumbnail={lists.snippet.thumbnails.high.url}
              title={lists.snippet.title}
              name={lists.snippet.channelTitle}
              onVideoClick={() => setSelectedVideo(lists)}
              display={selectedVideo ? "list" : "grid"}
              /*
          selectVideo가 배열로 들어감.
          배열에서 snipet 은 undefined이다 거기서 title 찾으면 undefined이다.
          그래서 onVideoClick={()=> { setSelectedVideo(lists) } }
          */
            />
          ))}
        </ul>
      </div>
    </MainPageComponent>
  );
};

export default MainPageContainer;
