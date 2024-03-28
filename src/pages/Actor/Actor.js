import React, { useContext, useEffect } from 'react'
import "./Actor.css"
import PersonalCard from '../../Components/personalCard/PersonalCard'
import NavBar from '../../Components/NavBar/NavBar'
import { IMDBContext } from '../../Context'
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux'
import { fetchActors } from '../../redux/Actors/actorAction'
function Actor() {
    const dispatch=useDispatch()
    const{pics,baseUrl}=useContext(IMDBContext)

    // useEffect(()=>{
    //     dispatch(fetchActors(baseUrl))
    // },[])
    const actors=useSelector((actors)=>actors.actors.actors)

    let data=[{
        name:"Vijay",
        gender:"Male",
        image:"https://filmfare.wwmindia.com/content/2021/jun/vijay41624255649.jpg",
        dob:"22 June 1974",
        bio:"Ajith Kumar (born 1 May 1971) is an Indian actor who works predominantly in Tamil cinema. To date, he has starred in over 61 films, and his awards include four Vijay Awards, three Cinema Express Awards, three Filmfare Awards South and three Tamil Nadu State Film Awards. In addition to his acting career, Ajith is also a sports car racer and participated in the MRF Racing series (2010). He became a race car driver, competing in circuits around India in places such as Mumbai, Chennai and Delhi. He is one among very few Indians to race in the International arena and in Formula championships."
    },
    {
        name:"Ajith",
        gender:"Male",
        image:"https://e0.pxfuel.com/wallpapers/341/367/desktop-wallpaper-tamil-cinema-foto-mankatha-ajith.jpg",
        dob:"1 May 1971",
        bio:"Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor who works predominantly in Tamil cinema. Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.",
        
    },
]
  return (
    <div className='actor-page'>
        <NavBar/>
        <div className='carousel-land'>
           <Carousel >
           { pics.map((img,idx)=>(
           <Carousel.Item key={idx} >
           <img
           className="d-block"
            src={img}
            alt="First slide"
          style={{width:"100vw",height:"40vh"}}></img>
         </Carousel.Item>
      )) }
    </Carousel>
    </div>
    <div className='heading'><h1>Actors</h1></div>
    <div className='row actors'>
        {actors&&actors.map((person)=>(
             <div key={person._id} className='col'>
             <PersonalCard
             name={person.name}
             img={person.image}
             gender={person.gender}
             dob={person.dob}
             summary={person.bio}
            
             />
         </div>
        ))}
    </div>
    </div>
  )
}

export default Actor