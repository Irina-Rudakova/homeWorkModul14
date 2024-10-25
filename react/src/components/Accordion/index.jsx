import "./accordion.css";
import { useState } from "react"
import VECTORBOTTOM from '../../assets/vectorBottom.png';
import VECTORTOP from '../../assets/vectorTop.png'


const Accordion = ({item}) => {
const[isOpen, setIsOpen] = useState(false)
    return (
        <div className="accordStyle" >
            <section>
            <div onClick={() => setIsOpen(!isOpen)}>
                <h4>{item.ask}</h4>
                
            </div>
            {
                isOpen && <div>
                <p>{item.que}</p>
            </div>
            }
            </section>
            <div onClick={() => setIsOpen(!isOpen)}>
            <button className="btn-click">
            {
                isOpen? <img src={VECTORBOTTOM}/> : <img src={VECTORTOP} />
            }
                </button>
                
            </div>
            
            
        </div>

    )
    
}



export default Accordion