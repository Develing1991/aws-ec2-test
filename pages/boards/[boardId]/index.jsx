// import { useQuery } from "@apollo/client";

// import { gql } from "@apollo/client";
import axios from "axios";
import { GraphQLClient, gql } from "graphql-request";
import { useRouter } from "next/router";

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
  const router = useRouter();
  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: {
  //     boardId: String("63c63fe61182750028ed0f76"),
  //   },
  // });
  const aaa = async () => {
    const result = await axios.get(
      "https://www.fishwatch.gov/api/species/red-snapper"
    );
    console.log(result);
    alert("fdsd");
  };
  const bbb = async () => {
    const graphQLClient = new GraphQLClient(
      "https://backendonline.codebootcamp.co.kr/graphql"
    );
    const result = await graphQLClient.request(FETCH_BOARD, {
      boardId: "63c67ebf1182750028ed0fb4",
    });
    console.log(result);
  };

  return (
    <div>
      {/* <div>{data?.fetchBoard.writer}</div>
      <div>{data?.fetchBoard.contents}</div> */}
      <button onClick={aaa}>ㅅㅅㅅ</button>
      <button onClick={bbb}>bbb</button>
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
