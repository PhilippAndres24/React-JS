import { getGifs } from "../helpers/getGifs";




const GifGrid = ({ category }) => {


    getGifs(category);


    return (
        <>
            <h2>{category}</h2>
        </>
    )

}

