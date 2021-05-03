import React from "react";
import {PageHeader} from "antd";
import img1 from '../../component/img/logo192.png'
import img2 from '../../component/img/img.jpg'

export const Home = () => {
    const Slider = [
        {
            key: 1,
            img: img1,
            img: img2,
            text: "Yahya",
        }
    ]
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={img2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img1} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    )
}
export default Home;