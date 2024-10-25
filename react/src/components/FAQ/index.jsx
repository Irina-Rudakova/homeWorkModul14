import Accordion from '../Accordion'
import './faq.css'
;

const data = [
    { 
        id:1,
        ask: 'What type of photography do you specialize in?',
        que: 'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.'
    },

    {
        id:2,
        ask: 'How can I book a photography session with you?',
        que: 'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.'
    },

    {
        id:3,
        ask: 'What equipment do you use for your photography?',
        que: 'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.'
    },

    {
        id:4,
        ask: 'Can I request a specific location for a ',
        que: 'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.'
    },

    {
        id:5,
        ask: 'What is your editing process like?',
        que: 'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.'
    },

    {
        id:6,
        ask: 'Are digital files included in your photography packages?',
        que: 'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.'
    },

    {
        id:7,
        ask: 'Do you offer prints of your photographs?',
        que: 'Yes, prints are available for purchase. Explore the Prints section for more details on sizes and pricing.'
    },

    {
        id:8,
        ask: 'How long does it take to receive the edited photos after a session?',
        que: 'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.'
    }
   
]

const FAQ = () => {

    return (
        <div className='questions'>
            <div className='questions-top'>
                <p>FAQ’s</p>
                <h2>Frequently Asked Questions</h2>
            </div>

            <div className='accordContainer'>
            {
                data.map(item =>
                    <Accordion key={item.id} item={item}/>
                )
            }
            </div>

        </div>
    )

}

export default FAQ


