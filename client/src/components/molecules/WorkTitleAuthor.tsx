import { Text, Title } from "@/components/atoms"

type Props = {
  title: string
  author: string
}

export const WorkTitleAuthor: React.FC<Props> = ({ title, author }) => {
  return (
    <div className="grid gap-y-10">
      <Title titleText={title} />
      <Text text={author} />
    </div>
  )
}
