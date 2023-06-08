import React from 'react'
import "./BlogCss/Blog.css"
function Carousel() {
  return (
    <div>
        <div id="carouselExampleControls" class="carousel slide carousel-fade container mt-5" data-ride="carousel">
            <div class="carousel-inner ">
                <div class="carousel-item active">
                    <div className="row">
                       <div className="col-md-6">
                        <img class="d-block w-100" src="img/banner3.jpg" alt="First slide"/>
                       </div>
                       <div className="col-md-6">
                        <p className='ShortTitle'>Lorem ipsom</p>
                        <h3 className='LongTitle'>Live with John</h3>
                        <p className='ShortTitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae facere dolores dolore nesciunt, accusantium consectetur consequuntur provident quia. Sequi maiores nam pariatur facilis ipsum, sint tempora accusantium, ratione id, libero odit soluta saepe? Pariatur eius earum, veritatis quae suscipit ab?</p>
                        <p className='ChannelName'>Noyon</p>
                        <p className='ShortTitle'>06/06/2023</p>

                       </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Second slide"/>
                    </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide"/>
                </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    </div>
  )
}

export default Carousel