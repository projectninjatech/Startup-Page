const contents = document.querySelector(".contents");
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const pntLogo = document.querySelector('.pnt');

  searchBtn.addEventListener('click', function() {
    const query = searchInput.value;
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.location.href = searchUrl;
  });

  pntLogo.addEventListener('click', function() {
    const url = 'https://www.youtube.com/@ProjectNinjaTech';
    window.location.href = url;
  });


const data = [{ "id": "1", "heading": "Shopping Links","name": "Amazon", "sub-name": "amazon.com", "link": "https://www.amazon.com/","image":"/icons/amazon.svg"},
{"id": "2", "heading": "Shopping Links", "name": "Flipkart", "sub-name": "flipkart.com", "link": "http://www.flipkart.com", "image":"/icons/flipkart.svg"},
{"id": "3", "heading": "Useful Links", "name": "ChatGPT", "sub-name": "chat.openai.com", "link": "https://chat.openai.com/", "image":"/icons/chatgpt.svg"},
{"id": "4", "heading": "Useful Links", "name": "Youtube", "sub-name": "youtube.com/@ProjectNinjaTech/videos", "link": "https://www.youtube.com/@ProjectNinjaTech/videos", "image":"/icons/youtube.svg"},
{ "id": "5", "heading": "Useful Links","name": "Github", "sub-name": "github.com/projectninjatech", "link": "https://github.com/projectninjatech","image":"/icons/github.svg"},
{ "id": "6", "heading": "Useful Links","name": "Gmail", "sub-name": "mail.google.com", "link": "https://mail.google.com/","image":"/icons/gmail.svg"},]


data.sort((a, b) => a.heading.localeCompare(b.heading));

let apps_container;
let headings = {};

for (let i=0; i<data.length; i++) {

    const heading = data[i].heading;
  
    // Create the heading element if it doesn't exist
    if (!headings[heading]) {
      const h1 = document.createElement("h1");
      h1.textContent = heading;
      contents.appendChild(h1);
      headings[heading] = h1;
    }

    if (i % 2 === 0) {
        apps_container  = document.createElement("div");
        apps_container.classList.add("apps-container");
        contents.appendChild(apps_container);
    }

        const a_tag = document.createElement("a");
        a_tag.href = data[i].link;
        a_tag.id = "link";
        a_tag.style.textDecoration = "none";
        a_tag.style.color = "white";

        const icon = document.createElement("i");
        icon.classList.add("icon");
        icon.style.backgroundImage = `url(${data[i]['image']})`;

        const label = document.createElement("div");
        label.classList.add("label");

        const name = document.createElement("span");
        name.classList.add("name");
        name.innerText = data[i].name;

        const sub_name = document.createElement("span");
        sub_name.classList.add("subname");
        sub_name.innerText = data[i]["sub-name"];

        label.appendChild(name);
        label.appendChild(sub_name);

        a_tag.appendChild(icon);
        a_tag.appendChild(label);

        apps_container.appendChild(a_tag);
}


function updateDateTime() {
  const now = new Date();
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");
  
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const dayOfWeek = weekdays[now.getDay()];
  const month = months[now.getMonth()];
  const dayOfMonth = now.getDate();
  const year = now.getFullYear();
  const time = now.toLocaleTimeString();
  
  const dateString = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  const timeString = `${time}`;
  timeElement.innerHTML = timeString;
  dateElement.innerHTML = dateString;
}

setInterval(updateDateTime, 1000);