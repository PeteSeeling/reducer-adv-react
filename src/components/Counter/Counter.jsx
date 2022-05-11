import { useEffect, useState, useReducer } from 'react';

const pinkRGB = `rgb(236, 72, 153)`
const color = {
  green: `rgb(52, 211, 153)`,
   red: `rgb(239, 68, 68)`,
   pink: `rgb(236, 72, 153)`
  }

const initailState = { count: 0, currentColor: color.green}



function reducer(state, action){
switch (action.type) {
  case 'increment':
    return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
      case 'reset':
        return { count: 0 };
          default: 
        return { count: state.count }
}
}

export default function Counter() {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initailState)
  const [currentColor, setCurrentColor] = useState(pinkRGB)

  useEffect(() => {
    if (state === 0) {
      setCurrentColor(pinkRGB)
    }

    if (state > 0) {
      setCurrentColor(color.green)
    }

    if (state < 0) {
      setCurrentColor(color.red)
    }
  }, [state])

return (
  <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
    <h1 className="mb-5" style={{ color: state.currentColor }}>
      {state.count}
    </h1>
    <div className="flex w-1/2 justify-around">
      <button
        className="text-green-400 border-2 border-green-400 p-3"
        type="button"
        onClick={() => dispatch({ type: 'increment' })}
        aria-label="increment"
        style={{ backgroundColor: color.green}}
      >
        Increment
      </button>
      <button
        className="text-red-500 border-2 border-red-500 p-2"
        type="button"
        onClick={() => dispatch({ type: 'decrement' })}
        aria-label="decrement"
        style={{ backgroundColor: color.red}}
      >
        Decrement
      </button>
      <button
        className="text-pink-500 border-2 border-pink-500 p-2"
        type="button"
        aria-label="reset"
        onClick={() => dispatch({ type: 'reset' })}
        style={{ backgroundColor: color.pink}}
      >
        Reset
      </button>
    </div>
  </main>
)
}







  // const increment = () => {
  //   setCount((prevState) => prevState + 1)
  // }

  // const decrement = () => {
  //   setCount((prevState) => prevState - 1)
  // }

  // const reset = () => {
    // setCount(0)


