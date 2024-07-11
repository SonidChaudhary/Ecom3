import React from 'react'
import "../css/Home.css"
import model from "../assets/Img/model5.jpg"


const Home = () => {
  return (
    <>
    <div className='mainbody'>
      <div className="leftbox">

        <div className="left_content">

          <p id="summer">Unique Collections</p>
          <p id="fall">Fall-Winter Collections 2030</p>
          <p id="para">"Discover unique, high-quality products at unbeatable prices.
             Enjoy seamless shopping with secure payment options, 
             fast shipping, and excellent customer service. 
             Your satisfaction is our priority. Shop now and experience the difference!"</p>
          <div className="shopnow">

            <p>Shop now</p>


          </div>
        </div>



      </div>
      <div className="rightbox">
        <div className="imgC">
          <img src={model} alt="" />


        </div>
      </div>
      
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Home