export const Confirm = props => {
  const { clearAll, closeConfirm } = props

  return (
    <div className="absolute flex justify-center items-center z-50 inset-0 h-screen w-screen bg-black bg-opacity-40">
      <div className="w-72 h-32 bg-gray-600 rounded-xl">
        <div className="h-24 relative">
          <p className="text-white absolute left-1/4 top-1/2 text-md">
            确定清空播放列表？
          </p>
        </div>
        <div className="w-full h-8 border-t border-gray-400">
          <button
            onClick={clearAll}
            className="w-1/2 text-blue-400 border-r border-gray-400"
          >
            确定
          </button>
          <button
            onClick={closeConfirm}
            className="w-1/2 text-center text-blue-400"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  )
}
