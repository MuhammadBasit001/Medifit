import React from 'react'
import bottlepill from '../Contact/imagesContact/bottlepills.png'
import hands from '../Contact/imagesContact/hand.png'
import injectionbottle from '../Contact/imagesContact/injectionbottle.png'
import pills from '../Contact/imagesContact/pills.png'


const ProductCommunity = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <h3>Join our trustable Medifit product  community</h3>
            <p>Join us as we build a community where wellness is accessible, education is empowering, and health is a shared journey.</p>
            <button>Get Started <img src="" alt="" /></button>
          </div>
        </div>
        <div>
          <img src={pills} alt="" />
          <img src={hands} alt="" />
          <img src={injectionbottle} alt="" />
          <img src={bottlepill} alt="" />
        </div>
      </div>
    </section>
  )
}

export default ProductCommunity
