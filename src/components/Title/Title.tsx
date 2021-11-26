import './Title.scss'

interface IPropsTitle {
  text: string | undefined
}

const Title = ({ text }: IPropsTitle) => {
  return <span className="title">{text}</span>
}

export default Title
