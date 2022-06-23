import { useReducer } from 'react';


const color = {
  green: `rgb(52, 211, 153)`,
   red: `rgb(239, 68, 68)`,
   pink: `rgb(236, 72, 153)`
  }

const initailState = { count: 0, currentColor: color.pink}

function findColor(count) {
 if (count === 0) return color.pink;
 if(count < 0) return color.red;
 if(count > 0) return color.green;
 return color
}

function reducer(state, action){
switch (action.type) {
  case 'increment':
    return { count: state.count + 1, currentColor: findColor(state.count + 1) };

    case 'decrement':
      return { count: state.count - 1,  currentColor: findColor(state.count - 1) };

      case 'reset':
        return { count: 0, currentColor: findColor(0) };
          default: 
        return { count: state.count }
}
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initailState)
 
return (
  <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
    <h1 className="mb-5" style={{ color: state.currentColor }}>
      {state.count}
    </h1>

    <div className="flex w-1/2 justify-around">
      <button
        id='button'
        type="button"
        onClick={() => dispatch({ type: 'increment' })}
        aria-label="increment"
        style={{ backgroundColor: color.green}}
      >
        Increment
      </button>

      <button
        type="button"
        id='button'
        onClick={() => dispatch({ type: 'decrement' })}
        aria-label="decrement"
        style={{ backgroundColor: color.red}}
      >
        Decrement
      </button>

      <button
        type="button"
        id='button'
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


