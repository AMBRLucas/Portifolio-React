import React, { useContext, useState } from "react";
import { BsXLg, BsList } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { ContentContext } from "../contexts/contentContext";

export function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const {content, setContent} = useContext(ContentContext);

  return (
    <div className="navbar">
      <div className="navbar-title">
        <span>{"<LH"}</span>.Dev<span>{">"}</span>
      </div>
      <div className="navbar-menu">
        <div className="menu-item" style={{borderBottom: content == 'sobre' ? '2px solid purple' : '2px solid white', textShadow: content == 'sobre' ? '0px 0px 5px purple' : '', color: content == 'sobre' ? 'purple' : ''}} onClick={()=>{setContent('sobre')}}>About Me</div>
        <div className="menu-item" style={{borderBottom: content == 'tecnologias' ? '2px solid purple' : '2px solid white', textShadow: content == 'tecnologias' ? '0px 0px 5px purple' : '', color: content == 'tecnologias' ? 'purple' : ''}} onClick={()=>{setContent('tecnologias')}}>My Skills</div>
        <div className="menu-item" style={{borderBottom: content == 'projetos' ? '2px solid purple' : '2px solid white', textShadow: content == 'projetos' ? '0px 0px 5px purple' : '', color: content == 'projetos' ? 'purple' : ''}} onClick={()=>{setContent('projetos')}}>My Projects</div>
        <div className="menu-item" style={{borderBottom: content == 'contato' ? '2px solid purple' : '2px solid white', textShadow: content == 'contato' ? '0px 0px 5px purple' : '', color: content == 'contato' ? 'purple' : ''}} onClick={()=>{setContent('contato')}}>Contact</div>
      </div>
      <div className="menu-area">
        <div className="mobile-menu" onClick={toggleMenu}>
          <BsList />
        </div>
      </div>


      <AnimatePresence>
        {menuIsOpen && (
          <motion.div
            className="menu-blur"
            initial={{ opacity: 0, display: "none" }}
            animate={{ opacity: 1, display: "flex" }}
            exit={{ opacity: 0, display: "none" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="side-menu"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="close" onClick={toggleMenu}>
                <BsXLg />
              </div>
              <div className="side-menu-item" onClick={()=>{setContent('sobre'); toggleMenu()}}>About Me</div>
              <div className="side-menu-item" onClick={()=>{setContent('tecnologias'); toggleMenu()}}>My Skills</div>
              <div className="side-menu-item" onClick={()=>{setContent('projetos'); toggleMenu()}}>Projects</div>
              <div className="side-menu-item" onClick={()=>{setContent('contato'); toggleMenu()}}>Contact</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
