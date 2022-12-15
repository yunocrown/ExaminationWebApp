import React , { useCallback } from "react";
import { Button } from '@mui/material';
//import "@passageidentity/passage-elements/passage-auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const onSubmitButtonClick = useCallback(() => {
        navigate("/Passage");
    }, [navigate]);

    return (
        //<passage-auth app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-auth>
        <div className="relative bg-white w-full h-[1024px] overflow-hidden text-justify text-xl text-black font-alata">
            <div className="absolute top-[444px] left-[376px] w-[710px] h-[216px]">
                <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-gray-700 w-[710px] h-[216px] mix-blend-darken" />
                <Button
                    className="absolute top-[143px] left-[240px] cursor-pointer"
                    sx={{width: 189}}
                    variant = "contained"
                    color= "primary"
                    onClick={onSubmitButtonClick}
                >
                    Start
                </Button>
                <div className="absolute top-[45px] left-[70px] inline-block w-[606px] h-[46px]">
                    Initiate Your Verification Process
                </div>
            </div>
            <div className="absolute top-[0px] left-[1px] bg-gray-600 w-[1440px] h-[77px]"/>
        </div>
    );
};

export default Home;