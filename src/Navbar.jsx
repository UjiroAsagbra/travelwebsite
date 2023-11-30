import traveller from './images/traveller.jpg'
const Navbar = () => {
    return (
            <nav className='nav-bar'>
            <img src={traveller} className='travel-img'/>
            <h1 className='nav-title'>QuickE Travels</h1>
            </nav>
            )
}
export default  Navbar;