import { v4 } from "uuid";

export const CARDS = [
        {
            id:v4(),
            src:"./images/icon-supervisor.svg",
            title:"Supervisor", 
            desc:"Monitors activity to identify project roadblocks", 
            color:"lightBlue"
        },
        {
            id:v4(),
            src:"./images/icon-team-builder.svg", 
            title:"Team Builder", 
            desc:"Scans our talent network to create the optimal team for your project",
            color:"red"
        },
        {
            id:v4(),
            src:"./images/icon-karma.svg", 
            title:"Karma", 
            desc:"Regularly evaluates our talent to ensure quality ",
            color:"orange"
        },
        {
            id:v4(),
            src:"./images/icon-calculator.svg", 
            title:"Calculator", 
            desc:"Uses data from past projects to provide better delivery estimates  ",
            color:"blue"
        }
]
