import { SetStateAction } from "react"
import { IoReload } from "react-icons/io5"
import { Text } from "@/components/atoms"
import { WorkDetail } from "@/components/molecules"
import { TypingResultType } from "@/types/typingTypes"
import { WorkDetailType } from "@/types/workDetailType"

type Props = {
  typingResult: TypingResultType
  setTypingResult: React.Dispatch<SetStateAction<TypingResultType>>
  workDetail: WorkDetailType
}

export const TypingResult: React.FC<Props> = ({ typingResult, setTypingResult, workDetail }) => {
  const typingDurationSecond = (typingResult.finishTime - typingResult.startTime) / 1000
  const accuracyRate = Math.floor((typingResult.correctAmount / typingResult.allAmount) * 100)

  return (
    <div className="mt-[7rem]">
      <div>
        <div className="mb-10 text-center text-5xl font-bold">{"タイピング成績"}</div>
        <div className="ml-14">
          <div>
            <Text text={`Correct Type: ${typingResult.correctAmount.toString()}`} />
          </div>
          <div>
            <Text text={`All Type: ${typingResult.allAmount.toString()}`} />
          </div>
          <div>
            <Text text={`Accuracy Rate: ${accuracyRate.toString()}%`} />
          </div>
          <div>
            <Text text={`Duration: ${typingDurationSecond.toString()}s`} />
          </div>
        </div>
      </div>
      <div className="my-20 grid gap-8 text-center">
        <WorkDetail workDetail={workDetail} />
      </div>
      <button
        className="
          mx-auto
          flex
          h-10
          w-10
          items-center
          rounded-lg
          bg-gray-500
          hover:bg-gray-600
        "
        onClick={() => setTypingResult((prev) => ({ ...prev, isFinished: false }))}
      >
        <IoReload className="mx-auto" />
      </button>
    </div>
  )
}
