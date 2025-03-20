const Nav = ({handleInput, search}:{handleInput:()=>void, search:string}) => {
    return (
        <nav className="bg-gray-800">
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-16 items-center justify-between'>
                    <div className='flex space-x-4'>
                        <input className='text-white'
                               type='text'
                               value={search}
                               placeholder='Search by name'
                               onChange={handleInput}
                        />
                    </div>
                    <div className="space-y-1 px-2 pt-2 pb-3 flex justify-evenly">
                            <a href="#"
                               className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                               aria-current="page">Dashboard</a>
                            <a href="#"
                               className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                            <a href="#"
                               className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                            <a href="#"
                               className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                    </div>

                </div>
            </div>
        </nav>

    )
}
export default Nav
