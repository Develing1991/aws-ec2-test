import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";
import axios from "axios";
//import axios from "axios";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardPage() {
  const [title, setTitle] = useState("");
  useEffect(async () => {
    // const graphQLClient = new GraphQLClient(
    //   "https://backendonline.codebootcamp.co.kr/graphql"
    // );
    // const result = await graphQLClient.request(FETCH_BOARD, {
    //   boardId: "63c662221182750028ed0fac",
    // });
    // setTitle(result.fetchBoard.title);
    const { data } = await axios.get(
      "https://meowfacts.herokuapp.com/?count=3"
    );
    console.log(data.data);
    setTitle(data.data[0]);
  }, []);
  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: {
  //     boardId: "63c662221182750028ed0fac",
  //   },
  // });
  const router = useRouter();
  return (
    <div>
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
