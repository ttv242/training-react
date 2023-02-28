import React from 'react';
import App from '../App';

export default function Main() {
  return (
    <>
        <div className='row1__main col-12'>
            <h1 className='col-9'>New Arrivals</h1>
            <div className='wrapper_r1_m col-9'>
                <div className='box_r1_m'>
                    <img src='./assets/images/Arrivals1.png.webp'/>
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                </div>

                <div className='box_r1_m'>
                    <img src='./assets/images/Arrivals2.png.webp'/>
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                </div>

                <div className='box_r1_m'>
                    <img src='./assets/images/Arrivals3.png.webp'/>
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                </div>
            </div>
        
            <div className='img_r1_m'>
                <img src='./assets/images/gallery1.png.webp'/>
                <img src='./assets/images/gallery2.png.webp'/>
                <img src='./assets/images/gallery3.png.webp'/>
                <img src='./assets/images/gallery4.png.webp'/>
            </div>
        </div>

        <div className='row2__main col-12'>
            <h1>Popular Items</h1>
            <h3>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</h3>
            <div className='wrapper_r2_m col-10'>
                <div className='box_r2_m'>
                    <img src='./assets/images/popular1.png.webp'/>
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                </div>

                <div className='box_r2_m'>
                    <img src='./assets/images/popular2.png.webp'/>
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                    {/* <i class="fa-regular fa-heart"></i> */}
                </div>

                <div className='box_r2_m'>
                    <img src='./assets/images/popular3.png.webp'/>
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                    {/* <i class="fa-regular fa-heart"></i> */}
                </div>

                <div className='box_r2_m'>
                    <img src='./assets/images/popular4.png.webp'/>
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                    {/* <i class="fa-regular fa-heart"></i> */}
                </div>

                <div className='box_r2_m'>
                    <img src='./assets/images/popular5.png.webp'/>
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                    {/* <i class="fa-regular fa-heart"></i> */}
                </div>

                <div className='box_r2_m'>
                    <img src='./assets/images/popular6.png.webp'/>
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                    {/* <i class="fa-regular fa-heart"></i> */}
                </div>
            </div>

            <button>VIEW MORE PRODUCTS</button>
        </div>
    </>

  )
}
