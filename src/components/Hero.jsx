import { Card } from "./Card"
import dollar from '../assets/dollar.svg'

export const Hero = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="container py-20 ml-11">
                <p>Why Upraiser ? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis optio aut cumque perspiciatis, necessitatibus laudantium? Illum saepe et.</p>
            </div>
            <div className="z-10 p-12">
                <div className="flex">
                <Card title={"Affordable"} svg={dollar}/>
                <Card title={"Affordable"} svg={dollar}/>
                </div>
                <div className="flex">
                <Card title={"Affordable"} svg={dollar}/> 
                <Card title={"Affordable"} svg={dollar}/> 
                </div>
            </div>
        </div>
    )
}