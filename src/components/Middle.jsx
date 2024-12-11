import women from '../assets/women.png'
import sleep from '../assets/sleep.png'
export const Middle = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-2">
                <div className='px-20'>
                    <img src={women} alt="" />
                </div>
                <div>
                    <p>upraiser for Employee Success</p>
                    <h1 className="text-3xl font-bold">Don't just solve issues</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, facilis.</p>
                    <div className='py-8'>
                        <button className="bg-green-500 p-2 text-white">Know More</button>
                    </div>
                </div>
            </div>
                {/*  */}
                <div className="grid grid-cols-2 pt-10">
                <div className='px-24'>
                    <p>upraiser for Employee Success</p>
                    <h1 className="text-3xl font-bold">Don't just solve issues</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, facilis.</p>
                    <div className='py-8'>
                        <button className="bg-green-500 p-2 text-white">Know More</button>
                    </div>
                </div>
                <div className=''>
                    <img src={sleep} alt="" />
                </div>
            </div>
        </div>
    )
}