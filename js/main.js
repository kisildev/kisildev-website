const tabsContainer = document.querySelector('#tabs');
const tabsNavContainer = tabsContainer.querySelector('.tabs-nav');
const tabsNavItems = tabsNavContainer.children;
const tabsContentContainer =  tabsContainer.querySelector('.tabs-content');
const tabsContentItems = tabsContentContainer.children;

for(let navItem = 0; navItem < tabsNavItems.length; navItem++) {
    tabsNavItems[navItem].setAttribute('data-nav', navItem);
}

for(let contentItem = 0; contentItem < tabsContentItems.length; contentItem++) {
    tabsContentItems[contentItem].setAttribute('data-content', contentItem);
}

tabsNavContainer.addEventListener('click', (e) => {
    const target = e.target;
    const currentTabNavIndex = target.getAttribute('data-nav');
    
    if(currentTabNavIndex) {
        for(let i = 0; i < tabsNavItems.length; i++) {
            tabsNavItems[i].classList.remove('active');
            target.classList.add('active');
        }

        for(let i = 0; i < tabsContentItems.length; i++) {
            tabsContentItems[i].classList.remove('active');
            if(tabsContentItems[i].getAttribute('data-content') === currentTabNavIndex) {
                tabsContentItems[i].classList.add('active');
            }
        }
    }
});
