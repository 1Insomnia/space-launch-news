import Preview from './Preview'

interface IProps {
  previews: {
    events: []
    id: number
    imageUrl: string
    launches: []
    newsSite: string
    publishedAt: string
    summary: string
    title: string
    updatedAt: string
    url: string
    featured?: boolean
  }[]
}

const PreviewList = ({ previews }: IProps) => {
  return (
    <div className="space-y-8">
      {previews.map(preview => (
        <Preview {...preview} key={preview.id} />
      ))}
    </div>
  )
}

export default PreviewList
