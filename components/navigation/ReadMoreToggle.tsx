interface IProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

const ReadMoreToggle = ({ handleClick }: IProps) => {
  return (
    <button
      onClick={handleClick}
      className="inline-block px-4 py-2 border border-accents-9 rounded"
    >
      Read More
    </button>
  )
}

export default ReadMoreToggle
