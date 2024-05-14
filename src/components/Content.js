import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentContext } from "../contexts/contentContext";
import { Sobre } from "./Sobre";
import { Tecnologias } from "./Tecnologias";

export function Content() {

    const {content} = useContext(ContentContext);

    return(
        <div>
            {
            content == 'sobre' && <motion.div
            className="square"
            initial={{opacity: 0}}
            animate={{opacity: content === 'sobre' ? 1 : 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            >
                <Sobre />
            </motion.div>
            }
            
            {
            content == 'tecnologias' && <motion.div
            className="square2"
            initial={{opacity: 0}}
            animate={{opacity: content === 'tecnologias' ? 1 : 0}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            >
            <Tecnologias />
            </motion.div>
            }

            {
            content == 'projetos' && <motion.div
            className="square3"
            initial={{opacity: 0}}
            animate={{opacity: content === 'projetos' ? 1 : 0}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            >
            Projetos
            </motion.div>
            }
            {
            content == 'contato' && <motion.div
            className="square4"
            initial={{opacity: 0}}
            animate={{opacity: content === 'contato' ? 1 : 0}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            >
            Contato
            </motion.div>
            }
        </div>
    );
}