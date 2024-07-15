let userNames =["ali","areesha","sumair","zunairah","admin"];


userNames.forEach(oneUser =>{
    if(oneUser ==="admin"){
        console.log(`hello ${oneUser},would you like to see status report?`);
        
    }else{
        console.log(`hello ${oneUser},thank you for logging again!`);
    
    }
})