import ScoreClient from "./ScoreClient";

import Container from "@/components/Container";
import Image from "next/image";

export default async function Home({ params }: { params: { score: string } }) {
  const text = `本次測驗共得${params.score}分`;
  //加上各種得分場景的圖案
  const getContent = () => {
  switch (params.score.toString()) {
    case "0":
    case "1":
      return (
          <Image
            src="/nattu-adnan-unsplash.jpg"
            width={500}
            height={500}
            alt="Picture*1"
          />
      );
    case "2":
        return (
            <Container>

            </Container>
        );
    case "3":
    case "4":
    case "5":
    
  }}

  return (
    <Container>
        <div className="
            flex flex-col text-center text-lg
        ">
            {text}
        </div>
      {getContent()}
      <ScoreClient />
    </Container>
  );
}
