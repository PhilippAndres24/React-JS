import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>

            <h1>GifExpertApp</h1>

    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }




        </>
    )
}





// import { useState } from 'react';
// import AddCategory from './components/AddCategory';
// import GifGrid from './components/GifGrid';


// const GiftExpertApp = () => {
//     const [categories, setCategories] = useState(['One Punch'])//se inicializa en arreglo
//     // console.log( categories);
//     const onAddCategory = (newCategory) => {
//         // categories.push(newCategory);

//         if (categories.includes(newCategory)) { return; }

//         setCategories([newCategory, ...categories]); //con esto agregamos una categoria modificando el usestate //
//     }

//     return (
//         <>
//             {/* titulo */}
//             <h1>GiftExpertApp</h1>

//             {/* input */}
//             <AddCategory
//                 onNewCategory={onAddCategory}
//             // setCategories = { setCategories }
//             />

//             {/* listado de tarjeta o gif */}

//             {categories.map((category) => (
//                 <GifGrid key={category} category={category} />
//             ))
//             }


//             {/* gif item */}
//         </>
//     )
// }
// export default GiftExpertApp;
