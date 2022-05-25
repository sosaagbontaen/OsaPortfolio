const tabs = document.querySelectorAll(".tabs-toggle");

function setupTabs(){
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            let cur_tab = document.querySelector('.is-active');
            cur_tab.className = cur_tab.className.replace(' is-active', '');
            this.className += ' is-active';
        })
        
    }
}

setupTabs();


