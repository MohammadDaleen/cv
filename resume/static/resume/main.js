document.addEventListener('DOMContentLoaded', function() {

  // Use buttons to toggle between views
  document.querySelector('#professional-profile').addEventListener('click', () => load_tab('professional-profile'));
  document.querySelector('#projects').addEventListener('click', () => load_tab('projects'));
});

// Tabs
tabsIDs = ["professional-profile", "projects"]

/* Mailbox: When a user visits their Inbox, Sent mailbox, or Archive, load the appropriate mailbox. */
function load_tab(tab) {

  setTabsToDefault();

  // Show current code
  const currentCode = document.querySelector(`#${tab}-code`);
  currentCode.style.display = 'block';
  // Set current tab background to selected color
  const currentTab = document.querySelector(`#${tab}`);
  currentTab.style.background = '#1f1f1f';
  currentTab.classList.add("border-primary");
  currentTab.classList.add("border-top");

}

// Set tabs to default
function setTabsToDefault(){
  for (let i = 0; i < tabsIDs.length; i++) {
    // Hide tab code
    const tabCode = document.querySelector(`#${tabsIDs[i]}-code`);
    tabCode.style.display = 'none';
    // Set tab background to default color
    const tab = document.querySelector(`#${tabsIDs[i]}`);
    tab.style.background = '#181818';
    tab.classList.remove("border-primary");
    tab.classList.remove("border-top");
  }
}