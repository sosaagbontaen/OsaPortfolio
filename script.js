const tabs = document.querySelectorAll(".tabs-toggle");

function urlUpdate(pageNameItem, urlItem){
    if(pageNameItem == "welcome"){
        urlItem.textContent = "Welcome to my digital portfolio!";
    }
    else if (pageNameItem == "education"){
        urlItem.textContent = "Relevant coursework towards my A.B in Computer Science."
    }
    else if(pageNameItem == "skills"){
        urlItem.textContent = "Here are some skills I've picked up so far.";
    }
    else if(pageNameItem == "experience"){
        urlItem.textContent = "I've had exciting opportunities to learn and work beyond the classroom.";
    }
    else if(pageNameItem == "projects"){
        urlItem.textContent = "I like showcasing what I've learned through projects. Check them out!";
    }
    else if(pageNameItem == "contact"){
        urlItem.textContent = "I'm looking forward to hearing from you!";
    }        
}

function tabLogic(){
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            
            //Find current active tab & page
            let cur_tab = document.querySelector('.activeTab');
            let cur_page = document.querySelector('.activePage');
            
            //De-activate active tab & page
            cur_tab.className = cur_tab.className.replace(' activeTab', '');
            cur_page.className = cur_page.className.replace(' activePage', '');
            
            //Activate clicked tab
            this.className += ' activeTab';

            let pageNamefromTab = this.className.split(" ")[1];
            //console.log(pageNamefromTab);
            //console.log(document.querySelector(".page-wrapper." + pageNamefromTab));
            let newPage = document.querySelector(".page-wrapper." + pageNamefromTab);
            
            //Activate new page
            newPage.className += ' activePage';

            //Update URL Bar
            let urlBar = document.querySelector("#url-bar");
            urlUpdate(pageNamefromTab,urlBar);
        })
        
    }
}

function classListReplace(elt, setting1, setting2){
    if (elt.classList.contains(setting1)){
        elt.classList.add(setting2);
        elt.classList.remove(setting1);
    }
    else{
        elt.classList.add(setting1);
        elt.classList.remove(setting2);
    }
}

function toggleTheme(){
    let toggler = document.querySelector("#theme-toggle")
    let affected_items = document.querySelectorAll(".day");
    toggler.addEventListener('click', function(){
        affected_items.forEach(affected_item => {
        classListReplace(affected_item,"night","day");
        });
    })
}

tabLogic();
toggleTheme();