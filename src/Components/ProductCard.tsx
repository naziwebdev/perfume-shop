import { FaHeart } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'

export default function ProductCard() {
    return (
        <div className="shadow-lg shadow-zinc-300/10">
            <div className='relative  h-[250px] flex justify-center items-center bg-neutral-50 rounded-t-lg '>
                <FaHeart className='absolute top-6 right-6 text-3xl text-red-500' />
                <img src='/img/perf-1.png' className='w-1/2 h-2/3 drop-shadow-xl' alt='product' />
            </div>
            <div className='p-3 flex flex-col gap-y-3 justify-between items-center rounded-b-lg'>
                <h3 className='font-semibold text-center font-mono tracking-wide'>
                    میس دیورادوپرفیوم زنانه
                    <span className='block text-center pt-1 text-md font-medium'>Dior</span>
                </h3>

                <p className='text-pink-500 text-[1.08rem] '>
                    ۵۶۸۰۰۰۰۰ تومان
                </p>
                <div className='flex justify-center items-center'>
                    <MdAddCircle className='text-4xl text-black cursor-pointer' />
                    <div className='flex text-xs  '>
                        <span className='flex justify-start items-center ps-1 bg-neutral-100 cursor-pointer w-[62px] h-7 rounded-full -translate-x-10 text-pink-500'>۱۰۰ ml</span>
                        <span className='flex justify-center items-center bg-black cursor-pointer text-center text-white w-[51px] h-7 rounded-full  -translate-x-5'>۵ ml</span>
                        <span className='flex justify-end items-center pe-1 bg-neutral-100 cursor-pointer w-[62px] h-7 rounded-full text-pink-500' >۱.۸ ml</span>
                    </div>

                </div>

            </div>

        </div>
    )
}