import grid from './images/grid-img.jpg'
 const Hero = () => {
    return (
        <nav className='hero-section'>
        <img src={grid} className='grid-img'/>
        <h1 className='hero-title'>Amazing Experiences just for you</h1>
        <p className='hero-dets'>Experience memorable and exciting activities put 
        together by our experienced team specially for you. </p>
        </nav>
        )
}
export default  Hero;