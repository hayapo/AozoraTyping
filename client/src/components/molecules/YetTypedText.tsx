import { SpanText } from "@/components/atoms"

type Props = {
  yetTypedText: string
}

export const YetTypedText: React.FC<Props> = ({ yetTypedText }) => {
  return (
    <div className="inline text-gray-400">
      <SpanText text={yetTypedText} />
    </div>
  )
}
