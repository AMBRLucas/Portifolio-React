import React, {createContext, useState} from "react";

const ContentContext = createContext();

const ContentProvider = ({ children })=>{
    const [content, setContent] = useState('sobre');

    return(
        <ContentContext.Provider value={{content, setContent}}>
            {children}
        </ContentContext.Provider>
    )
};

export {ContentContext, ContentProvider};   