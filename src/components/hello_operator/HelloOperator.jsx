import { useEffect, useState } from "react"

export default function HelloOperator() {

    const [counter, setCounter] = useState(0)

    function addOneToCount(){
        counter += 1;
    }

    useEffect(()=>{
        console.log("Mounted");
        console.log(counter);
    }, [counter])

    return (
        <div>
            <p>hello operator</p>
            <button onClick={()=>{
                setCounter(counter + 1)
            }}>increase</button>
        </div>
    )
}
