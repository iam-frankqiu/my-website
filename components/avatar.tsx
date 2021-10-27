type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center flex-col mt-10">
      <img src={picture} className="w-32 h-32 rounded-full " alt={name} />
      <div className="text-xl font-bold mt-5 text-3xl">{name}</div>
    </div>
  )
}

export default Avatar
