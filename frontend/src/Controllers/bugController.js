import { version } from 'react';
import bugModel from '../Models/bugModel'


export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:23456789,
        name:"Crash on load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Sam Shingenge",
        creator:"Code Geeks",
        priority:1,
        time:"03:14",
    }))
    data.push(new bugModel({
        _id:23456789,
        name:"Wont load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Sam Shingenge",
        creator:"Code Geeks",
        priority:3,
        time:"03:14",
    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}