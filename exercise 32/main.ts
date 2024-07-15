let current_users = ["Ali","Aliyan","sumair","areesha","Anaya"]

let new_users =["Aayat","sumair","areesha","Zohan","Sana","anaya"];

new_users.forEach(new_one_user =>{
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase()===new_one_user.toLowerCase())
if(our_condition){
    console.log(`sorry ${new_one_user} is already taken.`);
    
}else{
    console.log(`this userName ${new_one_user} is available`);   
}

})