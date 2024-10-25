import './content.css'
import ABOUTME from '../../assets/aboutMe.png';
import STAR from '../../assets/star.png';
import ICONFACEBOOK from '../../assets/iconFacebook.png';
import ICONTWITTER from '../../assets/iconTwitter.png';
import ICONIN from '../../assets/iconIn.png';

const ContentAbout = () => {

  return (
    <section className='contentAbout'>
        <div className='aboutMeTop'>
            <span>
            <p>About</p>
            <h2>I am Damien</h2>
            </span>
            <button to = '/about' className='know-btn'>Know More &#8594;</button>
        </div>
        <div className='aboutMeBottom'>
            <img src={ABOUTME} width={630} height={585}/>
            <div className='filling'>
            <section className='introduction'>
                <h3>
                    <img className='introductionHeading' src={STAR}/>
                    Introduction
                </h3>
                <p className='textAboutMe'>
                My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the worlds beauty as I see it.
                Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.
                </p>
            </section>
            <section className='contact'>
                <h3>
                    <img src={STAR}/>
                    Contact Information
                </h3>
                <info className="inform">
                    <div className='mail'>
                        <h4>Email</h4>
                        <p className='infoCont'>damienbraun@gmail.com</p>
                    </div>
                    <div className='phone'>
                        <h4>Phone Number</h4>
                        <p className='infoCont'>+00 000000000</p>
                    </div>
                </info>
            </section>
                <div className='btn-info'>
                    <message className="btn-about-section">
                        <div className='icon'>
                            <button className='littleBtn' href=""><img src={ICONFACEBOOK} width={16} height={16}/></button>
                            <button className='littleBtn' href=""><img src={ICONTWITTER} width={16} height={16}/></button>
                            <button className='littleBtn' href=""><img src={ICONIN} width={16} height={16}/></button>
                        </div>
                        <btn className="doWork">
                        <button href = "" className='letWork'>Let’s Work</button> 
                        <button href = "" className='download'>Download CV</button> 
                        </btn>
                    </message>
                </div>
            </div>

            
        </div>
      </section>
  )
}

export default ContentAbout
