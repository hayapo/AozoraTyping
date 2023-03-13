import { SetStateAction } from "react"
import { TypingResult } from "@/components/organisms"
import { TypingResultType } from "@/types/typingTypes"
import { WorkDetailType } from "@/types/workDetailType"

type Props = {
  typingResult: TypingResultType
  setTypingResult: React.Dispatch<SetStateAction<TypingResultType>>
  workDetail: WorkDetailType
}

export const ResultTemplate: React.FC<Props> = ({ typingResult, setTypingResult, workDetail }) => {
  return <TypingResult typingResult={typingResult} setTypingResult={setTypingResult} workDetail={workDetail} />
}
