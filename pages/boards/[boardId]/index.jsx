import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { useState } from "react";

import axios from "axios";

export default function BoardPage() {
  const [title, setTitle] = useState("초기값");

  const aaa = async () => {
    const { data } = await axios.get(
      "https://www.fishwatch.gov/api/species/red-snapper"
    );
    console.log(data[0]);
    setTitle(data[0].Quote);
  };
  const router = useRouter();
  return (
    <div>
      <button onClick={aaa}>버튼</button>
      <div>{title}</div>
      안녕. 동적페이지 테스트 <br />
      동적페이지 게시글 아이디 : {router.query.boardId}
    </div>
  );
}
export const getServerSideProps = () => {
  // 만약 서버사이드 렌더링을 한다면?? => out폴더로 생성 불가
  // next.config.js에서 exportPathMap로 현재 페이지 제외시키기
  return {
    props: {},
  };
};
