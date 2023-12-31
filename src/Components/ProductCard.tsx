import { FaHeart } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { allProductGetServer } from '../TypeScriptTypes/ProductsTypes'
import { favoriteItem } from '../TypeScriptTypes/FavoritesTypes'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../Redux/Store'
import { postFavoritesServer } from '../Redux/Store/FavoriteList'
import { postBasketServer } from '../Redux/Store/Basket'
import { basketItem } from '../TypeScriptTypes/BasketTypes'
import swal from 'sweetalert'


export default function ProductCard(Props: allProductGetServer) {

    const dispatchPostFavoriteItem = useDispatch<AppDispatch>()
    const dispatchPostBasketItem = useDispatch<AppDispatch>()

    const addFavoriteHandle = () => {

        const newItemFavorite: favoriteItem = {
            id: Props.id,
            name: Props.name,
            title: Props.title,
            price: Props.price,
            src: Props.src
        }

        dispatchPostFavoriteItem(postFavoritesServer(newItemFavorite))

        swal({
            title: 'محصول با موفقیت به لیست علاقه مندی ها افزوده شد',
            icon: 'success',
            buttons:'بستن' as any,
            className:'swal-footer'
        })

    }
    
    const addBasketHandle = () => {

        const newItemBasket:basketItem = {
            id: Props.id,
            name: Props.name,
            title: Props.title,
            price: Props.price,
            count:1,
            src: Props.src
        }

        dispatchPostBasketItem(postBasketServer(newItemBasket))

        swal({
            title: 'محصول با موفقیت به سبد خرید افزوده شد',
            icon: 'success',
            buttons:'بستن' as any,
            className:'swal-footer'
        })

    }

    return (
        <>
            <div className='flex justify-center items-center relative h-[250px]  bg-neutral-100 rounded-t-lg '>
                <FaHeart onClick={() => addFavoriteHandle()} className='absolute top-6 right-6 cursor-pointer text-3xl text-red-500' />
                <img src={Props.src} className='w-1/2 h-2/3 drop-shadow-xl' alt='product' />
            </div>
            <div className='flex flex-col gap-y-3 justify-between items-center p-3 rounded-b-lg bg-white'>
                <Link to={`/productInfo/${Props.id}`}> <h3 className='font-semibold text-center font-mono tracking-wide'>
                    {Props.name}
                    <span className='block text-center pt-1 text-md font-medium'>{Props.title}</span>
                </h3></Link>


                <p className='text-pink-600 text-[1.08rem] '>
                    تومان {Props.price?.toLocaleString()}
                </p>
                <div className='flex justify-center items-center'>
                    <MdAddCircle onClick={() => addBasketHandle()} className='text-4xl text-black cursor-pointer hover:text-pink-600' />
                    <div className='flex text-xs  '>
                        <span className='flex justify-start items-center ps-1 bg-neutral-100 cursor-pointer w-[62px] h-7 rounded-full -translate-x-10 text-pink-600'>۱۰۰ ml</span>
                        <span className='flex justify-center items-center bg-black hover:bg-pink-600 cursor-pointer text-center text-white w-[51px] h-7 rounded-full  -translate-x-5'>۵ ml</span>
                        <span className='flex justify-end items-center pe-1 bg-neutral-100 cursor-pointer w-[62px] h-7 rounded-full text-pink-600' >۱.۸ ml</span>
                    </div>

                </div>

            </div>

        </>
    )
}
