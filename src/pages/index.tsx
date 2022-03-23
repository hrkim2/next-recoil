import type { NextPage } from 'next'
import { useRecoilState, useSetRecoilState } from 'recoil';
import {countState, countInputState} from '../store/state';


const Home: NextPage = () => {
  const [count, setCount] = useRecoilState(countState);
  const setCountInput = useSetRecoilState(countInputState);

  const plus = ()=>setCount(count+1);
  const minus = ()=>setCount(count-1);
  const setting = ()=>setCountInput('');

  return (
    <div>
    <label><b>INDEX COMPONENT</b></label>
    <div>　</div>
    <div>
      <button onClick={plus}>+1</button>
      <span> count : {count} </span>
      <button onClick={minus}>-1</button>
    </div>
    <div>
      <button onClick={setting}>검색</button>
      <input type='text' id="stateInput" onKeyUp={(e)=>setCountInput((e.target as HTMLInputElement).value)}/>
    </div>
    </div>
  )
}

export default Home
