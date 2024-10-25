import './container.css';
import ICON from '../../assets/icon.png';


const Container = () => {

  return (
      <container>
        <div>
        <p className='text-cont'>Stunning Photography by</p>
        <h1 className='heading-cont'>Damien Braun</h1>
        </div>
        <div>
        <p className='text-cont-btn'>Let's
            <button className='btn-cont'>
            <img src={ICON}/>
            </button>
        </p>
        <p className='text-cont-btn'>Work together</p>
        </div>
      </container>
  )
}
export default Container
