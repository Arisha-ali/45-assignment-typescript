//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

interface itCourse {

    courseName:string;
    location:string;
    onSiteStudent:number;
} 

let itCourse= {
    courseName:"typescript and javascript",
    location:"governor house sindh",
    onSiteStudent:50000
}
console.log(itCourse);


///practice////////
interface itemObjects{
    name:string;
    value:number;
    any:boolean
}


let itemObjects={
    name:"phone",
    value:500,
    any:true
}
console.log(itemObjects);
//

let book: itemObjects={
    name:"englis",
    value:400,
    any:false
}
console.log(book);

let car:itemObjects={
    name:"civic",
    value:2020,
    any:true
}
console.log(car);

