import './services.css'
import MYSERVICES from '../../assets/myServices.png';
import ICON from '../../assets/icon.png';
import VECTORLEFT from '../../assets/vectorLeft.png';
import VECTORRIGHT from '../../assets/vectorRight.png';
import ICONSUB from '../../assets/iconSub.png';


const ContentServices = () => {

  return (
    <section className='contentServ'>
        <div className='servTop'>
            <span>
                <p>Services</p>
                <h2>My Photography Services</h2>
            </span>
            <div className='btn-serv'>
                <div className='btn-group-serv'>
                    <button className='one-btn'> <img src={VECTORLEFT}/> </button>
                    <button className='one-btn'> <img src={VECTORRIGHT}/> </button>
                </div>
                <button to = '/services' className='view-btn'>View All Services &#8594;</button>
            </div> 
        </div>
        <div className='servMeBottom'>
            <section>
                <div className='section-top-serv'>
                <div className='heading-btn'>
                    <h3 className='headingServ'>
                        Events
                    </h3>
                    <button className='btn-icon'>
                        <img src={ICON} width={24} height={24}/>
                    </button>
                </div>
                    <p className='textServ'>
                Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, were there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.
                    </p>
                </div>
                <div className='section-bottom-serv'>
                    <h4>Service Highlights</h4>
                    <div className='group-srt-serv'>
                    <span className='text-stroke-serv'><img src={ICONSUB} width={30} height={30}/>Coverage for weddings, parties, corporate functions, and more.</span>
                    <span className='text-stroke-serv'><img src={ICONSUB} width={30} height={30}/>Skilled photographers who know how to seize the moment.</span>
                    <span className='text-stroke-serv'><img src={ICONSUB} width={30} height={30}/>A mix of candid and posed shots for a comprehensive story.</span>
                    <span className='text-stroke-serv'><img src={ICONSUB} width={30} height={30}/>Quick turnaround for you to relive the day's highlights.</span>
                    </div>
                </div>

            </section>
            <section >
                <img src={MYSERVICES} width={620} height={562}/>
            </section>
            </div>

      </section>
  )
}

export default ContentServices