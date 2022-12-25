import { useLayoutEffect, useRef, useState } from "react";
import { useCounter, useFetch } from "../hooks";


export const InfoRickyMorti = ({species,name}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0 , height : 0});

    useLayoutEffect(() => {
      const {height, width} =  pRef.current.getBoundingClientRect();
      setBoxSize({ height, width });
        

    }, [species])


    return (
        <>
            <blockquote style={{display: 'flex'}} className="blockquote text-end">
                <p  ref={ pRef }className="mb-4">{species}</p>
                <footer className="blockquote-footer">{name}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
