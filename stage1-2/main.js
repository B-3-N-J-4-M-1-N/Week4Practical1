const navigation = document.getElementsByTagName("nav");
const navigationItems = navigation[0].getElementsByTagName("li");

for (const item of navigationItems) {
    const newLink = document.createElement("a");
    newLink.innerHTML = item.innerHTML;
    newLink.href = "https://github.com/IM-WADD/Week4Practical1";
    item.innerHTML = "";
    item.appendChild(newLink);
}