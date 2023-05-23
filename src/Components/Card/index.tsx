import { BsCartPlusFill } from 'react-icons/bs'
import './Card.css'
import { PropsWithChildren } from 'react'
import { ProductData } from '../../Pages/Home'
const ProductCard = (props: PropsWithChildren<ProductData>) => {

    return (
        <div className='flex flex-col justify-between align-items-between cursor-pointer 
        w-60 h-80 rounded-lg bg-teal-600/10 transition ease-in-out hover:bg-teal-400/10 
        border border-cyan-900 drop-shadow-md Card-Container'>
            <figure className='relative mb-2 w-full rounded-t-lg h-4/5 overflow-hidden'>
                <span className='absolute z-10 top-2 left-3 py-1 px-4 border border-slate-600/60 
                rounded-full transition ease-in-out bg-slate-800/60 hover:bg-slate-800/80 drop-shadow-md'>
                    {props.category}
                </span>
                <img
                    alt='headphones'
                    className='z-0 h-full w-full object-center object-cover'
                    src={props.image}
                />
            </figure>
            <p className='flex flex-col pb-4 z-10' >
                <span className='py-1 px-4 pr-16 text-ellipsis overflow-hidden whitespace-nowrap'>{props.title}</span>
                <span className='absolute py-1 px-4 bg-teal-800 bottom-4 -right-4 
                border border-teal-800 rounded-lg'>
                    <div className='absolute w-full h-full inset-0 flex justify-center 
                    drop-shadow Card-AddToCart'>
                        <div className="bg-teal-800 w-8 h-8 rounded-full flex 
                        justify-center items-center">
                            <BsCartPlusFill />
                        </div>
                    </div>
                    <p className='min-w-[32px]'>
                        {props.price}
                    </p>

                </span>
            </p>
        </div>
    )
}

export default ProductCard