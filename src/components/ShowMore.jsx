import React, {useContext, useState} from 'react'
import { useParams } from 'react-router';
import { VideoContext } from '../context/VideoContext';

const ShowMore = () => {

    const [collapse, setCollapse] = useState(false);

    const {id} = useParams();

    const {videoData} = useContext(VideoContext)

    const product = videoData.find(product => product.id == id);

    const {viewers, time} = product

    return (
        <div className='watch-video-show-more'>
            <div className='watch-show-more'>
                <p style={{fontWeight: "600"}}>{viewers} views - {time}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, laboriosam?</p>
                <br />
                <p className={`long-text ${collapse ? "show-text": ""}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium modi placeat perspiciatis laboriosam temporibus, deserunt debitis impedit. Inventore ab at accusamus quas? Dolor beatae facilis, vitae voluptatibus nesciunt illum reprehenderit esse numquam inventore? Veniam quaerat, earum deleniti beatae dolore, saepe est maiores ad rerum sapiente facilis laboriosam. Perferendis similique mollitia ea repellendus, sed impedit repellat accusamus eaque assumenda ratione laborum eius quis. Voluptatum, delectus minima numquam sint reprehenderit maxime necessitatibus excepturi officiis ipsum assumenda obcaecati, sequi quasi iste id placeat odit voluptas amet nam inventore sapiente? Aliquam delectus neque quaerat officia! Inventore eligendi, expedita assumenda deleniti numquam iusto magnam ab exercitationem modi suscipit! Nisi quisquam ab est perspiciatis reprehenderit, quia porro deleniti aliquam eum quo, culpa quasi qui fugiat, voluptatem assumenda neque similique dolorem nihil! Hic ipsum consequatur voluptate modi rem itaque adipisci dolore, culpa quibusdam placeat in velit illo dolorum earum, et assumenda quasi corrupti sint. Officiis magnam quis amet, iste dolore eveniet incidunt tempora, beatae vero consectetur quo quod necessitatibus itaque impedit! Est molestiae in neque dolores debitis, ut nemo obcaecati temporibus officiis deleniti error tempore doloremque dolorem nesciunt dicta quas ipsum illum alias soluta dolore maxime nam tempora cum! Quidem dolores incidunt repellendus porro eveniet voluptates!
                </p>
                {
                    collapse ? 
                    <button onClick={() => setCollapse(!collapse)}>Less more</button>
                    :
                    <button onClick={() => setCollapse(!collapse)}>Show more</button>
                }
            </div>
        </div>
    )
}

export default ShowMore
