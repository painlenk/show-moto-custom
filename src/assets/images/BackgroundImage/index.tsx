import Image from "next/image"
import background from './background.png'

export const BackgroundImage = () => {
    return (
        <Image src={background} alt='Moto custom' />
    )
}