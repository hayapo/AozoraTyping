import { SpanText } from "@/components/atoms"

type Props = {
  typedTextCorrect: string
}

export const TypedTextCorrect: React.FC<Props> = ({ typedTextCorrect }) => {
  return (
    <div id="textbox" className="inline text-green-400">
      <SpanText text={typedTextCorrect} />
    </div>
  )
}
