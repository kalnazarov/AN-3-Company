import React from "react";
import { service } from "../../consts";
import "./Home.css";
import "./Home.scss";
const Home = () => {
    return (
        <div>
            <div className="container__attachment">
                <div className="attachment__body">
                    <div className="attachment__body-text">
                        <h1
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            Благоустройство территорий и строительство дорог
                        </h1>
                        <div className="border__line"></div>
                        <div className="attachment__body-text_p p-text">
                            <p>
                                мы предлагаем услуги по укладке тротуарной
                                плитки и брусчатки, осуществляемых на высоком
                                профессиональном уровне в максимально короткие
                                сроки
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_sec-2">
                <h1>мы предлагаем</h1>
                <div className="service_list">
                    {service.map((item) => (
                        <div key={item.id}>
                            <img src={item.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
