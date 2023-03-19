import './styling/Counter_style.css'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {


    const counterState = useSelector((state) => state.value); //Brings the value from the reducer inside the store
    const toggleState = useSelector((state) => state.showCounter);  
    const dispatch = useDispatch(); // yeets the value to the reducer so it updates in store


    const Increase = () => {
        const action = {type:'Increase', payload:1}
        dispatch(action)
    }
    
    const Decrease = () => {
        const action = {type:'Decrease', payload:1}
        dispatch(action)
    }

    const showCounter = () => {
        const action = {type: 'showCounter'}
        dispatch(action)

    }

    return(
        <>
        
            <div className='Counter_div'>
                <h1>Hello Redux Basic</h1>
                { toggleState ?
                <>
                    <h4 className='Counter'>Counter: {counterState}</h4>
                    <div>
                        <button  onClick={Increase}>+</button>
                        <button  onClick={Decrease}>-</button>
                    </div>
                </>
                : 'invisible'
                }
                <button onClick={showCounter}>Hide/Show Counter Number</button>
                
            </div>

        </>
    )

}