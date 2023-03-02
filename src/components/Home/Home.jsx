import React from "react";
import { service } from "../../consts";
import "./Home.css";
import "./Home.scss";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
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
                            style={{ width: "80%" }}
                        >
                            Брусчатка лучшая альтернатива асфальту
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
                <h1>Мы предлагаем</h1>
                <div className="service_list">
                    {service.map((item) => (
                        <div className="service_card" key={item.id}>
                            <img className="img" src={item.img} alt="" />
                            <div className="service_card_body">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="home_sec-3">
                <div className="sec-3_list">
                    <div className="block">
                        <div className="hexagon">
                            <CalendarMonthOutlinedIcon
                                fontSize="large"
                                sx={{ color: "white" }}
                            />
                        </div>
                        <h4>Соблюдение Сроков</h4>
                        <p>
                            Придерживаемся проекта производства работ.
                            Оперативно решаем возникшие вопросы на площадке.
                        </p>
                    </div>
                    <div className="block">
                        <div className="hexagon">
                            <Groups2OutlinedIcon
                                fontSize="large"
                                sx={{ color: "white" }}
                            />
                        </div>
                        <h4>Команда Профессионалов</h4>
                        <p>
                            Сплоченный коллектив, грамотное управление
                            персоналом, прозрачное взаимодействие с клиентом.
                        </p>
                    </div>
                    <div className="block">
                        <div className="hexagon">
                            <CardMembershipIcon
                                fontSize="large"
                                sx={{ color: "white" }}
                            />
                        </div>
                        <h4>Сертификация</h4>
                        <p>
                            Вся выпускаемая продукция имеет сертификат
                            соответствия и сертификат о происхождения товара
                        </p>
                    </div>
                    <div className="block">
                        <div className="hexagon">
                            <ConstructionOutlinedIcon
                                fontSize="large"
                                sx={{ color: "white" }}
                            />
                        </div>
                        <h4>Собственное Производство</h4>
                        <p>
                            Компания на рынке с 2022 года. За короткий
                            промежуток времени мы проработали десятки сложных
                            задач.
                        </p>
                    </div>
                    <div className="block">
                        <div className="hexagon">
                            <AnchorOutlinedIcon
                                fontSize="large"
                                sx={{ color: "white" }}
                            />
                        </div>
                        <h4>Большой Опыт</h4>
                        <p>
                            Производим заказ на любой объем, крупными и мелкими
                            партиями.
                        </p>
                    </div>
                    <div className="block">
                        <div className="hexagon">
                            <DesignServicesIcon
                                fontSize="large"
                                sx={{ color: "white" }}
                            />
                        </div>
                        <h4>Материалы</h4>
                        <p>
                            Для изготовления нашей продукции используются самые
                            качественные материалы
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
