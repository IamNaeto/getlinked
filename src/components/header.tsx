const Header = () => {
    return ( 
        <main className="fixed w-full py-5 px-[5%] flex items-center justify-between z-1000 shadow-lg z-20">
            <a href="" >
                <h2 className="text-4xl font-bold text-white">get<span className="text-purple">linked</span></h2>
            </a>

            <div className="flex items-center text-white gap-10">
                <nav className="text-xl flex gap-6  z-1000">
                    <a href="" className="hover:text-pink">Timeline</a>
                    <a href="" className="hover:text-pink">Overview</a>
                    <a href="" className="hover:text-pink">FAQs</a>
                    <a href="" className="hover:text-pink">Contact</a>
                </nav>

                <a href="" className="btn py-4 px-10 cursor-pointer">Register</a>
            </div>
        </main>
     );
}
 
export default Header;