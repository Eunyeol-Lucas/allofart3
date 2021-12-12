import Link from "next/link";
import styled from "styled-components";
import getRandomColor from "../../../lib/getRandomColor";
export default function Options() {
  return (
    <Explain>
      <ClickOptions>하고싶은 것을 선택하세요</ClickOptions>
      <div>
        <Link href="/analysis">
          <ExplainTitle color={getRandomColor}>내 그림 화풍 분석</ExplainTitle>
        </Link>
        <Link href="/transfer">
          <ExplainTitle color={getRandomColor}>
            다른 그림의 화풍 적용
          </ExplainTitle>
        </Link>
        <Link href="/artists">
          <ExplainTitle color={getRandomColor}>
            All Of Art의 화가 소개
          </ExplainTitle>
        </Link>
        <Link href="/gallery">
          <ExplainTitle color={getRandomColor}>갤러리 구경하기</ExplainTitle>
        </Link>
      </div>
    </Explain>
  );
}

const Explain = styled.div`
  width: 70rem;
  max-height: 60vh;
  letter-spacing: 0.3rem;
  padding-left: 8vw;
  padding-right: 10rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  Button {
    display: block;
  }
`;

const ExplainTitle = styled.div`
  font-size: 4vh;
  width: 100%;
  margin: 2rem auto;
  padding-top: min(1.5vh, 2vw);
  padding-bottom: min(1.5vh, 2vw);
  background-color: black;
  color: white;
  text-align: center;

  border-radius: 2rem;
  :hover {
    cursor: pointer;
    color: ${(props) => props.color};
    transform: scale(1.1);
    transition: transform 0.3s linear;
    font-weight: bold;
  }
`;

const ClickOptions = styled.strong`
  display: block;
  font-size: min(6vh, 6vw);
  width: 100%;
  text-align: center;
`;
