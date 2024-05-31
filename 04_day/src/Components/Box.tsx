import { Dispatch, SetStateAction } from "react";

type InputValue = string | number;

const Box = <T extends InputValue>({label, value, setter}: {
    label: string,
    value: T,
    setter: Dispatch<SetStateAction<T>>

}) => {
  return (
    <>
      <form>
        <label>{label}</label>
        <input type="text" value={value} onChange={(e) => setter(e.target.value as T)}/>
        <button>Change</button>
      </form>
    </>
  )
}

export default Box
