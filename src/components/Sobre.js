import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import foto from "../foto.jpeg";

export function Sobre() {

    return(
        <div className="about">
            <div className="about-me">
                <div className="my-photo"><img src={foto} width={250} height={250} style={{borderRadius: "100%"}}/></div>
                <div className="my-name">Lucas Henrique da Silva Ambrósio</div>
                <div className="my-data"><span style={{fontWeight: 'bold'}}>Junior Full Stack Developer</span></div>
                <div className="my-data"><span style={{fontWeight: 'bold'}}>Cruzeiro, SP - Brazil</span></div>
                <div className="my-age"><span style={{fontWeight: 'bold'}}>22 years</span></div>
            </div>
            <div className="about-text">
                <span style={{color: 'purple', fontSize: "24px", fontWeight: "bold"}}>About me</span>
                <p>Hello, my name is Lucas, and I am currently in the first semester of college studying Systems Analysis and Development. Now I'll tell you a bit about my journey. My story with programming began when I was 12 years old. As a child passionate about video games, my dream was to create an RPG game. During my research to achieve this dream, I discovered programming and started studying Python. Although it didn't yield many results initially, I created a question and answer game but didn't progress further. Years later, in high school, I discovered my true passion: web programming. From then on, I never abandoned programming. I started taking courses, did freelance work, and more recently, I enrolled in college for further academic development in the field. One day, I hope to become a software engineer.</p>
                <p>In web programming, I started my studies with HTML and CSS during a course I took in high school. I fell in love with front-end programming and dedicated myself to studying it for years. About two years ago, I began focusing on back-end and mobile programming, and now I am a full-stack developer (still learning).</p>
                <p>On this website, you will be able to learn a little more about me, my expertise in web programming, as well as outside of it. You'll find information about my projects and how to enter in contact with me.</p>
            </div>
        </div>
    )
}