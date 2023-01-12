import { useRouter } from "next/router";

export default function BoardPage() {
  const router = useRouter();
  return (
    <div>
      안녕. 동적페이지 테스트 <br />
      동적페이지 게시글 아이디 : {router.query.boardId}
    </div>
  );
}
