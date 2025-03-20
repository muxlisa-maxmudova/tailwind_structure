
const Contact = ({name, number}:{name:string, number:string}) => {
    return (
        <div>
            <li className="flex justify-between gap-x-6 py-5">
                <div className='flex min-w-0 gap-x-4'>
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm/6 font-semibold text-gray-900">{name}</p>
                        <p className="mt-1 truncate text-xs/5 text-gray-500">{number}</p>
                    </div>
                </div>
            </li>
            <hr/>
        </div>
    )
}
export default Contact
