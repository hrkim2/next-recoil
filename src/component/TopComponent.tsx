import type { NextPage } from 'next'
import { useRecoilState, useRecoilValue } from 'recoil';
import {countState, countInputState} from '../store/state';

const Top: NextPage = () => {
  const [count, setCount] = useRecoilState(countState);
  const countInput = useRecoilValue(countInputState);

  const plus = ()=>setCount(count+2);
  const minus = ()=>setCount(count-2);

  return (
    <div>
      <label><b>TOP COMPONENT</b></label>
      <div>　</div>
      <div>{countInput}</div>
      <div>
        <button onClick={plus}>+2</button>
        <span> count : {count} </span>
        <button onClick={minus}>-2</button>
      </div>
      <div>　</div>
    </div>
  )
}

export default Top
