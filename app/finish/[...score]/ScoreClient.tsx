"use client";
import Container from "@/components/Container";
import Button from "@/components/Button";

//加一些固定的按鈕之類的
const ScoreClient = () => {
    const igLink = () => window.open('https://www.instagram.com/moneyweekly.ig/', '_self');
  return (
    <Container>
      <div
        className="
                flex
                flex-col
                text-center
                text-lg
                gap-8
                pt-16
            "
      >
        <Button label="Instagram" onClick={igLink}></Button>
      </div>
    </Container>
  );
};

export default ScoreClient;
