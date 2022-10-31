import { useState } from 'react'

export const ResultTabs = ({ tabSet }) => {
  const tabArr = Object.keys(tabSet)
  const [selected, setSelected] = useState(tabArr[0])

  return (
    <div className="min-h-full min-w-full bg-black overflow-scroll scrollbar-hide">
      <div className="flex justify-between h-8 px-4 items-center space-x-2 overflow-x-scroll scrollbar-hide">
        {tabArr.map(item => {
          return (
            <div
              onClick={() => setSelected(item)}
              className={
                item === selected
                  ? 'w-12 h-8 text-md text-center text-white border-b-2 border-red-600'
                  : 'w-12 h-8 text-md text-white text-center'
              }
            >
              {item}
            </div>
          )
        })}
      </div>
      {tabSet[selected]}
    </div>
  )
}
