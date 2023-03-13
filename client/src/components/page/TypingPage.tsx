import { useState } from "react"
import { TypingTemplate, ResultTemplate } from "@/components/templates"
import { TypingResultType } from "@/types/typingTypes"
import { WorkDetailType } from "@/types/workDetailType"

// TODO: useContextをつかってタイピング結果をやりくりする

export const TypingPage: React.FC = () => {
  const [typingResult, setTypingResult] = useState<TypingResultType>({
    isFinished: false,
    correctAmount: 0,
    allAmount: 0,
    startTime: 0,
    finishTime: 0,
  })
  const [workDetail, setWorkDetail] = useState<WorkDetailType>({
    title: "",
    author: "",
    url: "",
  })

  return (
    <div>
      {typingResult.isFinished ? (
        <ResultTemplate typingResult={typingResult} setTypingResult={setTypingResult} workDetail={workDetail} />
      ) : (
        <TypingTemplate typingResult={typingResult} setTypingResult={setTypingResult} setWorkDetail={setWorkDetail} />
      )}
    </div>
  )
}
