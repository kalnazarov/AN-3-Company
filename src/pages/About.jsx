import { Typography } from "@mui/material";
import { Box, fontWeight, width } from "@mui/system";
import React from "react";

import adik from "../media/adik.PNG";
const About = () => {
    return (
        <div>
            <div className="welcome_block">
                <img
                    src="https://mobimg.b-cdn.net/v3/fetch/7f/7fb9fadc0caba88dcf4278165931debf.jpeg"
                    alt=""
                    className="welcome_img"
                />
                <div className="welcome_header">
                    <h2
                        style={{
                            fontSize: "32px",
                            fontWeight: "500",
                            backgroundColor: "rgb(120,219,226,0.5)",
                        }}
                    >
                        О КОМАНДЕ
                    </h2>
                    <button>
                        <a
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                            href="https://wa.me/77005009171"
                        >
                            WhatsApp
                        </a>
                    </button>
                </div>
            </div>
            <Box
                sx={{
                    pb: "30px",
                    pt: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "35px",
                        fontWeight: "500",
                        color: "#00899d;",
                        borderBottom: "2px solid #00899d;",
                    }}
                >
                    О Команде
                </Typography>

                <Typography
                    sx={{
                        pt: "40px",
                        color: "gray",
                        fontSize: "25px",
                        fontWeight: "400",
                        fontFamily: "revert-layer",
                    }}
                >
                    Наша команда существует с 2022 года как AN-3 Company.
                </Typography>

                <Typography
                    sx={{
                        pt: "30px",
                        color: "gray",
                        fontSize: "20px",
                        width: { sm: "60%", xs: "80%" },
                        textAlign: "center",
                        fontFamily: "revert-layer",
                    }}
                >
                    Опытные специалисты со своей зоной ответственности,
                    выполняющих руководящие функции. Они владеют управленческими
                    компетенциями и организуют производственные процессы/работу
                    на площадке, проектируют, подготавливают сметы, подбирают и
                    управляют командой.
                </Typography>
                <Typography
                    sx={{
                        fontSize: { md: "32px", xs: "26px" },
                        fontWeight: "700",
                        color: "#00899d;",
                        borderBottom: "2px solid #00899d;",
                        pt: "50px",
                    }}
                >
                    ПРЕИМУЩЕСТВО РАБОТЫ С НАМИ
                </Typography>
                <Box
                    sx={{
                        pt: "50px ",
                        width: { sm: "70%", xs: "90%" },
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                lg: "20%",
                                md: "30%",
                                sm: "45%",
                                xs: "90%",
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: { sm: "30px", xs: "40px" },
                        }}
                    >
                        <img
                            src="http://pesticide.kg/wp-content/uploads/2021/07/img-1-3.png"
                            alt=""
                        />
                        <Typography sx={{ pt: "10px" }}>
                            Гибкие условия сотрудничества
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                lg: "20%",
                                md: "30%",
                                sm: "45%",
                                xs: "90%",
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: { sm: "30px", xs: "40px" },
                        }}
                    >
                        <img
                            src="http://pesticide.kg/wp-content/uploads/2021/07/img-2-3.png"
                            alt=""
                        />
                        <Typography sx={{ pt: "10px" }}>
                            Приемлемые цены
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                lg: "20%",
                                md: "30%",
                                sm: "45%",
                                xs: "90%",
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: { sm: "30px", xs: "40px" },
                        }}
                    >
                        <img
                            src="http://pesticide.kg/wp-content/uploads/2021/07/img-3-3.png"
                            alt=""
                        />
                        <Typography sx={{ pt: "10px" }}>
                            Индивидуальный подход к каждому клиенту
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                lg: "20%",
                                md: "30%",
                                sm: "45%",
                                xs: "90%",
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: { sm: "30px", xs: "40px" },
                        }}
                    >
                        <img
                            src="http://pesticide.kg/wp-content/uploads/2021/07/img-4-3.png"
                            alt=""
                        />
                        <Typography sx={{ pt: "10px" }}>
                            Квалифицированная помощь клиентам
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                lg: "20%",
                                md: "30%",
                                sm: "45%",
                                xs: "90%",
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: { sm: "30px", xs: "40px" },
                            marginTop: { md: "0px", xs: "30px" },
                        }}
                    >
                        <img
                            src="http://pesticide.kg/wp-content/uploads/2021/07/img-5-2.png"
                            alt=""
                        />
                        <Typography sx={{ pt: "10px" }}>
                            Постоянное расширение ассортимента
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundImage: `url("https://oir.mobi/uploads/posts/2021-03/thumbs/1616439996_39-p-belo-goluboi-fon-dlya-prezentatsii-45.jpg")`,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            width: "80%",
                            pb: "20px",
                            pt: "50px",
                        }}
                    >
                        <img
                            style={{
                                width: "20%",
                                pt: "20px",
                                border: "10px solid #00899d",
                            }}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            alt=""
                        />

                        <img
                            style={{
                                width: "20%",
                                border: "10px solid #00899d",
                            }}
                            src={adik}
                            alt=""
                        />

                        <img
                            style={{
                                width: "20%",
                                pt: "20px",
                                border: "10px solid #00899d",
                            }}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            alt=""
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        pb: "50px",
                    }}
                >
                    <Box sx={{ width: "25%" }}></Box>
                    <Box sx={{ width: "25%", textAlign: "center" }}>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                color: "#00899d",
                                fontWeight: "bold",
                            }}
                        >
                            Директор
                        </Typography>
                        <Typography sx={{ fontSize: "20px" }}>
                            Айбеков Әдлет
                        </Typography>
                    </Box>
                    <Box sx={{ width: "25%" }}></Box>
                </Box>
            </Box>
        </div>
    );
};

export default About;
