import React, { useEffect, useState } from 'react'
import { Plus, Bookmark, ArrowDown, ReceiptRussianRuble } from 'lucide-react'
import axios from "axios";

const Gallery = () => {

    const [img, setImg] = useState([]);
    const [page, setPage] = useState([1]);
    const [loading, setLoading] = useState(false);

    // Api Fetch
    useEffect(() => {
        const FetchImg = async() => {
            if(loading) return;
            setLoading(true);
            try {
                let response = await axios.get(
                    `https://picsum.photos/v2/list?${page}&limit=30`,
                );
                setImg((prev) => [...prev, ...response.data]);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
            }
        };
        FetchImg();
    }, [page]);

    // Scroll Effect
   useEffect(()=>{
    const handleScroll = ()=>{
        if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300){
            setPage((prev)=>{
              return prev + 1;
            });
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
 }, []);

  return (
    <>
      <section>
        <div className='columns-1 sm:columns-2 md:columns-3 gap-4 p-4'>
            
            {/* Fetch Images From Api */}

            {img.map((data) => {
                return(
                    <div key={data.id} className='relative mb-4 break-inside-avoid shadow group'>
                        
                        {/* Image */}
                        <img src={data.download_url} alt='img' className='w-full object-cover'/>

                        {/* Overlay Div */}
                        <div className='absolute top-0 bg-black/30 inset-0 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>

                            {/* Top Icons */}
                            <div className='flex justify-end gap-2'>
                                <div className='bg-white p-2 rounded-md'>
                                    <Bookmark />
                                </div>
                                
                                <div className='bg-white p-2 rounded-md'>
                                    <Plus />
                                </div>
                            </div>

                            {/* Bottom Icons */}
                            <div className='flex items-center justify-between'>
                                <h1 className='text-white font-bold'>{data.author}</h1>
                                <div className='bg-white p-2 rounded-md'>
                                    <ArrowDown />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}


       

        </div>
      </section>
    </>
  )
}

export default Gallery
