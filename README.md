# ALAB-316-1-1-DOM-MANIPULATION (Part 1 and 2)
## Introduction
This lab is the second of a two-part assignment in which you will manipulate the DOM using various tools and techniques. This portion of the activity focuses on making elements dynamic and interactive using DOM events and event-driven programming techniques.
## Objectives
Manipulate the DOM using JavaScript and DOM events.


## DOM Manipulation Menu Program

This program demonstrates **DOM manipulation** to create a dynamic navigation menu with top-level links and submenus.

### Key Features:
1. **Dynamic Menu Creation**: The program/website generates top-level menu items from an array of objects (`menuLinks`), where each item represents a menu link and may contain sub-links (e.g., "Catalog", "Orders").
   
2. **Submenu Display**: When a user clicks on a menu item with sub-links, the submenu is dynamically created and displayed under the main menu. Submenu items are generated as anchor (`<a>`) tags and appended to a dedicated submenu container (`#sub-menu`).

3. **Active Link Management**: The program toggles the `active` class on menu links. When a link is clicked, the active state is updated, visually highlighting the selected menu item.

4. **Content Update**: Clicking a menu item updates the content of the `<main>` section based on the link's text (e.g., showing a heading for "About" or displaying submenu content).

5. **Event Handling**: Event listeners are used to handle user clicks, dynamically display submenus, and ensure that the correct menu item is marked as active.

### Techniques Used:
- Creating and appending HTML elements (`document.createElement()`, `appendChild()`)
- Managing active states with CSS classes
- Dynamically updating content with JavaScript
- Handling user interactions with event listeners (`addEventListener()`)

This example showcases how JavaScript can be used to manipulate the DOM, making the web page interactive and responsive to user input.


