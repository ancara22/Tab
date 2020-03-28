//tab changer with event delegation
function tab(infoHeader,infoHeaderTab,infoTabContent) {
    let info = document.querySelector(infoHeader),
        elem = document.querySelectorAll(infoHeaderTab),
        contentTab = document.querySelectorAll(infoTabContent);

    function hideTab (a) {
        for(let i = a; i<contentTab.length; i++) {
            contentTab[i].classList.remove('show');
            contentTab[i].classList.add('hide');
        }
    }
    hideTab(1);

    function showTab (b) {
         if( contentTab[b].classList.contains('hide') ) {
            contentTab[b].classList.remove('hide');
            contentTab[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;

        if ( target && target.classList.contains('info-header-tab') ) {
            for(let i = 0; i< elem.length; i++) {
                if(target == elem[i]) {
                    hideTab(0);
                    showTab(i);
                    break;
                }
            }
        }
    });
};

//function call example
tab('.info-header','.info-header-tab','.info-tabcontent');