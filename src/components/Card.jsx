export const Card = ({title,svg}) => {
    return (
        <div className="border m-10 p-5 w-1/4 h-52 shadow-lg border-gray-300 bg-white">
            <img className="w-10 h-10" src={svg} alt="" />
            <p>{title}</p>
            <p className="flex-wrap">Lorem ipsum dolor sit amet consectetur</p>
        </div>
    )
}