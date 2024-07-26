const menuBtn = document.querySelector('.arrow-btn');
const menu = document.querySelector('.side-menu');
const menuheading = document.querySelector('.menuH');
const menuList = document.querySelector('.list');
const JBOne = document.querySelector('.N-one');
const menuBody = document.querySelector('.menu-body');

let menuON = false;
function openMenu(){
    console.log(menu);
    if (menuON) {
        menuBtn.style.rotate= 'y 0deg';
        menuList.style.opacity = '0';
        menuList.style.display = "none";
        menuheading.style.display = "none";
        menuBody.classList.remove('menu-body-padding');
        menu.classList.remove('side-menu-on');
        setTimeout(() => {
            JBOne.style.display = 'flex';
        }, 200);
        menuON = false;
    
    }else{
        JBOne.style.display = 'none';
        menuBody.classList.add('menu-body-padding');
        menuBtn.style.rotate= 'y 180deg';
        menu.classList.add('side-menu-on');

        setTimeout(() => {            
            menuList.style.opacity = '1';
            menuList.style.display = "block";
            menuheading.style.display = "block";
        }, 300);
        menuON = true;
    }
}


// getting data from API 

const title = document.querySelector('#Title');
const task_Title = document.querySelector('#task-title');
const task_Description = document.querySelector('#Task-description');

const URL = "API.json";

const getfatch = async () => {
    let response = await fetch(URL);
    var data = await response.json();
    let assets = data.tasks[0].assets;

    // getting all data 
    const setTitle = data.title;
    const setTaskTitle = data.tasks[0].task_title;
    const setTaskDescription = data.tasks[0].task_description;

    // assinging all data 
    title.innerText = setTitle;
    task_Title.innerText = setTaskTitle;
    task_Description.innerText = setTaskDescription;

    // loop for assets 

    for (let i = 0; i < assets.length; i++) {
        // console.log('Getting Data ' , i);
        let assestsID = document.querySelectorAll(`#id${i}`);

        for (let j = 0; j < assestsID.length; j++) {
            assestsID[j].innerHTML = (j<1)? assets[i].asset_title : ("<b class='font-open'>Description: </b>"+assets[i].asset_description);

            // console.log();
            
        }

        // Testing logs 
        // console.log(assestsID);
        // console.log('title :' , assets[i].asset_title);
        // console.log('Description :' ,assets[i].asset_description);
        
    }

    // loop for JBList 
    const JBList = document.querySelectorAll('#JBList');

    for(let i=0 ; i<JBList.length ; i++)
    {
          // console.log("getting data ", i);

        JBList[i].innerText = ( i < 1 ) ? setTaskTitle : assets[i-1].asset_title;
    }
    // console.log(JBList);
}

getfatch();