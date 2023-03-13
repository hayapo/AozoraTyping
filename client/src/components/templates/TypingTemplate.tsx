import { SetStateAction } from "react"
import { TypingArea } from "@/components/organisms"
import { TypingResultType } from "@/types/typingTypes"
import { WorkDetailType } from "@/types/workDetailType"

type Props = {
  typingResult: TypingResultType
  setTypingResult: React.Dispatch<SetStateAction<TypingResultType>>
  setWorkDetail: React.Dispatch<SetStateAction<WorkDetailType>>
}

export const TypingTemplate: React.FC<Props> = ({ typingResult, setTypingResult, setWorkDetail }) => {
  return <TypingArea typingResult={typingResult} setTypingResult={setTypingResult} setWorkDetail={setWorkDetail} />
}
