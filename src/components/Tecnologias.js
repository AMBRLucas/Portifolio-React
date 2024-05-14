import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillStarFill,  BsStar} from "react-icons/bs";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import JSlogo from "../JS.png";
import Nodelogo from "../NodeJS.png"

export const Tecnologias = () => {

    const skills = [
        [{name: "HTML", lvl: 5}, {name: "Javascript", lvl: 5, img: JSlogo}, {name: "CSS", lvl: 4}, {name: "React", lvl: 4}],
        [{name: "NodeJS", lvl: 4, img: Nodelogo}, {name: "PHP", lvl: 3}, {name: "Ruby", lvl: 1}],
        [{name: "React Native", lvl: 3}, {name: "Java", lvl: 2 }],
        [{name: "MongoDB", lvl: 4}, {name: "MySQL", lvl: 4}],
        [{name: "Adobe XD", lvl: 4}, {name: "Adobe Photoshop", lvl: 4}, {name: "Figma", lvl: 2}]
    ];

    const [actualList, setActualList] = useState(skills[0]);
    const [skillType, setSkillType] = useState(0);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className="skillArea">
            <div className="toggleType">
                <div className="typeItem" onClick={()=>{setActualList(skills[0]); setSkillType(0)}} style={{backgroundColor: skillType == 0 ? "white" : "purple", color: skillType == 0 ? "purple" : "white"}}>Front-end</div>
                <div className="typeItem" onClick={()=>{setActualList(skills[1]); setSkillType(1)}} style={{backgroundColor: skillType == 1 ? "white" : "purple", color: skillType == 1 ? "purple" : "white"}}>Back-end</div>
                <div className="typeItem" onClick={()=>{setActualList(skills[2]); setSkillType(2)}} style={{backgroundColor: skillType == 2 ? "white" : "purple", color: skillType == 2 ? "purple" : "white"}}>Mobile</div>
                <div className="typeItem" onClick={()=>{setActualList(skills[3]); setSkillType(3)}} style={{backgroundColor: skillType == 3 ? "white" : "purple", color: skillType == 3 ? "purple" : "white"}}>Database</div>
                <div className="typeItem" onClick={()=>{setActualList(skills[4]); setSkillType(4)}} style={{backgroundColor: skillType == 4 ? "white" : "purple", color: skillType == 4 ? "purple" : "white"}}>Other Habilities</div>
            </div>
            <div className="mobile-toggle">
                {skillType == 0 && <div className="toggle-content" onClick={toggleMenu}>Front-end {isMenuOpen ? <AiFillCaretUp /> : <AiFillCaretDown /> }</div>}
                {skillType == 1 && <div className="toggle-content" onClick={toggleMenu}>Back-end {isMenuOpen ? <AiFillCaretUp /> : <AiFillCaretDown /> }</div>}
                {skillType == 2 && <div className="toggle-content" onClick={toggleMenu}>Mobile {isMenuOpen ? <AiFillCaretUp /> : <AiFillCaretDown /> }</div>}
                {skillType == 3 && <div className="toggle-content" onClick={toggleMenu}>Database {isMenuOpen ? <AiFillCaretUp /> : <AiFillCaretDown /> }</div>}
                {skillType == 4 && <div className="toggle-content" onClick={toggleMenu}>Others {isMenuOpen ? <AiFillCaretUp /> : <AiFillCaretDown /> }</div>}
            </div>
            <AnimatePresence>
            {isMenuOpen && 
                <motion.div className="hidden-menu"
                initial={{height: 0, opacity: 0}}
                animate={{height: 213, opacity: 1}}
                exit={{height: 0, opacity: 0}}
                transition={{duration: 0.4}}
                >
                    <div className="hidden-item" onClick={()=>{setActualList(skills[0]); setSkillType(0); toggleMenu()}}>
                        Front-end
                    </div>
                    <div className="hidden-item" onClick={()=>{setActualList(skills[1]); setSkillType(1); toggleMenu()}}>
                        Back-end
                    </div>
                    <div className="hidden-item" onClick={()=>{setActualList(skills[2]); setSkillType(2); toggleMenu()}}>
                        Mobile
                    </div>
                    <div className="hidden-item" onClick={()=>{setActualList(skills[3]); setSkillType(3); toggleMenu()}}>
                        Database
                    </div>
                    <div className="hidden-item" onClick={()=>{setActualList(skills[4]); setSkillType(4); toggleMenu()}}>
                        Others
                    </div>
                </motion.div>
            }
            </AnimatePresence>
            <AnimatePresence >
            <div className="skillList">
            {actualList.map((item, index)=>(
                    <motion.div className="skill" key={index}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    whileHover={{scale: 1.08}}
                    whileTap={{scale: 0.93}}
                    >
                        <div className="skillImage"><img src={item.img} width={100}/></div>
                        <div className="skillName">{item.name}</div>
                        <div className="skillMastery">Mastery Level:</div>
                        <div className="skillLevel">
                            {item.lvl == 1 && <><BsFillStarFill/> <BsStar /> <BsStar /> <BsStar /> <BsStar /> </>}
                            {item.lvl == 2 && <><BsFillStarFill/> <BsFillStarFill/> <BsStar /> <BsStar /> <BsStar /> </>}
                            {item.lvl == 3 && <><BsFillStarFill/> <BsFillStarFill/> <BsFillStarFill/> <BsStar /> <BsStar /> </>}
                            {item.lvl == 4 && <><BsFillStarFill/> <BsFillStarFill/> <BsFillStarFill/> <BsFillStarFill/> <BsStar /> </>}
                            {item.lvl == 5 && <><BsFillStarFill/> <BsFillStarFill/> <BsFillStarFill/> <BsFillStarFill/> <BsFillStarFill/> </>}
                        </div>
                        <div className="skillButton">More Info</div>
                    </motion.div>
                ))}                
            </div>
            </AnimatePresence>
        </div>
    )
}