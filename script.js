const tabs = document.querySelectorAll(".tabs-toggle");

function urlUpdate(pageNameItem, urlItem) {
    if (pageNameItem == "welcome") {
        urlItem.textContent = "Welcome to my digital portfolio!";
    }
    else if (pageNameItem == "education") {
        urlItem.textContent = "Relevant coursework"
    }
    else if (pageNameItem == "skills") {
        urlItem.textContent = "Here are some skills I've picked up so far.";
    }
    else if (pageNameItem == "experience") {
        urlItem.textContent = "I've had exciting opportunities to learn and work beyond the classroom.";
    }
    else if (pageNameItem == "projects") {
        urlItem.textContent = "I like showcasing what I've learned through projects. Check them out!";
    }
    else if (pageNameItem == "creative") {
        urlItem.textContent = "Outside of software, I love to create!";
    }
    else if (pageNameItem == "contact") {
        urlItem.textContent = "I'm looking forward to hearing from you!";
    }
}

function tabLogic() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {

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
            urlUpdate(pageNamefromTab, urlBar);
        })

    }
}

function classListReplace(elt, checkfor, replacewith) {
    if (elt.classList.contains(checkfor)) {
        elt.classList.add(replacewith);
        elt.classList.remove(checkfor);
    }
    else {
        elt.classList.add(checkfor);
        elt.classList.remove(replacewith);
    }
}

function toggleTheme() {
    let toggler = document.querySelector("#theme-toggle")
    let affected_items = document.querySelectorAll(".day");
    toggler.addEventListener('click', function () {
        affected_items.forEach(affected_item => {
            classListReplace(affected_item, "night", "day");
        });
    })
}

function mobileTabLogic() {
    const hamburger = document.querySelector(".tab-hamburger");
    const statusbar = document.querySelector(".statusbar-wrapper");
    hamburger.addEventListener('click', function () {
        if (statusbar.classList.contains('open')) {
            classListReplace(statusbar, 'open', 'closed');
            statusbar.style.height = "60px";
        }
        else {
            classListReplace(statusbar, 'closed', 'open');
            statusbar.style.height = "180px";
        }
    })
}

function videoStartTime() {
    let vid = document.getElementById("chinesesong_video");
    vid.currentTime = 122;
}

tabLogic();
toggleTheme();
mobileTabLogic();
videoStartTime();