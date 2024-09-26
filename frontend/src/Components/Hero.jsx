import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW Arrivals Only</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img width={100} src={hand_icon} alt="" />
                    </div>
                    <p>Collection</p>
                    <p>for everyone</p>
                </div>  

                <div className="hand-latest-btn">
                    <div>Latest collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero;

// const Hero = () => {
//     return (
//     <div className='hero h-[100vh] bg-red-400 flex font-custom-robot'>
//         <div className="hero-left flex flex-1 flex-col justify-center pl-32 gap-5">
//             <h2 className='text-lg font-bold'>NEW Arrivals Only</h2>
//             <div>
//                 <div className="hand-hand-icon flex items-center gap-5">
//                     <p className='font-extrabold text-6xl'>new</p>
//                     <img width={100} src={hand_icon} alt="" />
//                 </div>
//                 <p className='font-extrabold text-6xl'>Collection</p>
//                 <p className='font-extrabold text-6xl'>for everyone</p>
//             </div>  

//             <div className="hand-latest-btn flex justify-center items-center gap-4 w-80 h-16 rounded-3xl mt-7 bg-yellow-400 font-bold">
//                 <div>Latest collection</div>
//                 <img src={arrow_icon} alt="" />
//             </div>
//         </div>
//         <div className="hero-right flex flex-1 items-center justify-center ">
//             <img src={hero_image} alt="" />
//         </div>
//     </div>
//   )
// }

// export default Hero