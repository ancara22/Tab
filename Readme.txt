This is a tab changer function with event delegation.

Have three arguments:
    tab(infoHeader,infoHeaderTab,infoTabContent);
    1. infoHeader - Parents of all buttons(infoHeaderTab).
    2. infoHeaderTab - Pseudo array with all buttons.
    3. infoTabContent - The content of the tab buttons in the following order.

Example of use:
    tab('.info-header','.info-header-tab','.info-tab-content');
