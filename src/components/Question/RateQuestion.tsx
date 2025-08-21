import { typeQuestionProps } from "../../lib/types";

export default function RateQuestion({ question }: typeQuestionProps) {
  return <div>{question.title}</div>;
}
