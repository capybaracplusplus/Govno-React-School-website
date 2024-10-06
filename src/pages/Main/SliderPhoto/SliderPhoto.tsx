import './SliderPhoto.css'
import Carousel from '../../../components/Carousel/Carousel';

const images = [
    "https://avatars.mds.yandex.net/get-altay/4530524/2a00000179e64be106f8902aa9d99c6d4baf/L_height",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdpijMxdX4EqRRprtXbrrcdbGjo4bJfMTbw&s",
]

function SliderPhoto() {
    return (
        <>
            <Carousel images={images} />
        </>
    )
}

export default SliderPhoto;