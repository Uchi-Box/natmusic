const HotWordsList = ({ hotList, toResult }) => {
  return (
    <div className="mt-8 space-y-2">
      <h2 className="text-white text-lg font-bold">热搜关键字</h2>
      <div className="grid grid-cols-2">
        {hotList.map((item, index) => {
          return (
            <div className="space-x-2 truncate">
              <span className="w-6 inline-block text-gray-400 text-md">
                {index + 1}
              </span>
              <span
                onClick={() => toResult(item.first)}
                className="inline text-white text-md"
              >
                {item.first}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HotWordsList
