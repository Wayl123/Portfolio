export const homeContent = "My name is Wayne, a programmer with knowledge on various things such as full stack web development and android app development.";
export const aboutContent = {
  p1: "I have graduated with a computer engineering bachelor degree. During this time I primary use Java but have also learn other programming languages such as C++, python, assembly, VHDL, verilog. I also touch upon things like optimization, security, database, and design workflow.",
  p2: "As I want to focus more on the software side of the degree, I took various online course after I graduate. From there I learn full stack web development and android development. I also begin to learn how version control tools like git works through the BCIT course.",
  skills: 
  (
    <ul>
      <li><h6>Web Development</h6></li>
      <ul>
        <li>Front-end</li>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>SASS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>AngularJs</li>
        </ul>
        <li>Back-end</li>
        <ul>
          <li>Node.js</li>
          <li>ASP.NET</li>
          <ul>
            <li>C#</li>
          </ul>
        </ul>
      </ul>
      <li><h6>Database</h6></li>
      <ul>
        <li>SQL</li>
        <li>MongoDb</li>
      </ul>
      <li><h6>Android Development</h6></li>
      <ul>
        <li>Java</li>
      </ul>
      <li><h6>Other</h6></li>
      <ul>
        <li>Version Control</li>
        <ul>
          <li>Git</li>
          <li>Github</li>
        </ul>
        <li>Low level language</li>
        <ul>
          <li>VHDL</li>
          <li>Verilog</li>
          <li>Assembly</li>
        </ul>
        <li>Bash</li>
      </ul>
    </ul>
  )
}
export const projectContent = [
  {
    id: 1,
    thumbnail: {src: "images/projects/YelpCamp/thumbnail.PNG", caption: "Landing page of the website."},
    images: [
      {src: "images/projects/YelpCamp/img1.PNG", caption: "Home page. Where you see all the campground and where user can add new campground."},
      {src: "images/projects/YelpCamp/img2.PNG", caption: "Campground detail page. More detail about the campground and where user can see and add comments."}
    ],
    name: "YelpCamp",
    desc: (
      <div>
        <p>YelpCamp website made during Oct. 11, 2019 according to Udemy web development bootcamp course.</p>
        <p>The goal of this project is to make a full stack website.</p>
        <p>This website include user login and authentication that checks if you are logged in and what user you are logged in as.</p>
        <p>If you are not logged in you cannot add new campground but will instead be redirected to login page.</p>
        <p>Register will add new user to database and login will check if the entered user matches one in the database.</p>
        <p>User can add new campground, add new comment to existing campground, edit their campground and comment, delete their campground and comment.</p>
        <br/>
        <p>Since this course was done quite a while ago, some styling may not work but it seems the all the functions still works.</p>
        <p>Since Oct. 12, 2020 this course has been completely redone so the code may appear different from the code present in the current course.</p>
      </div>
    ),
    links: [
      {name: "Github", link: "https://github.com/Wayl123/YelpCamp"},
      {name: "Deployed Site", link: "https://wayl-yelpcamp.herokuapp.com"},
      {name: "Udemy Certificate", link: "http://ude.my/UC-4YBZIGQX"}
    ],
    codes: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Node",
      "Express",
      "Mongoose"
    ],
    date: new Date(2019, 10-1, 11)
  },
  {
    id: 2,
    thumbnail: {src: "images/projects/TaskTimer/thumbnail.PNG", caption: "Page where you see all the task as well as select task to time. Also where to add task, edit task, and delete task."},
    images: [
      {src: "images/projects/TaskTimer/img1.PNG", caption: "The add/edit page. In the case of edit the existing information such as task name will be filled in automatically when you open this page."},
      {src: "images/projects/TaskTimer/img2.PNG", caption: "The add/edit page landscape mode. In landscape mode the add/edit page would just open on the right side. Information is retained when switching between portrait and landscape mode."},
      {src: "images/projects/TaskTimer/img3.PNG", caption: "Example of warning box that shows up when you try to leave with unsaved changes, there are also this kind of alert for deleting task."},
      {src: "images/projects/TaskTimer/img4.PNG", caption: "The duration report page. Shows all the timing report base on the date selected. Can switch from viewing today's report to this week's report."},
      {src: "images/projects/TaskTimer/img5.PNG", caption: "The duration report page landscape mode. Mostly the same as portrait mode but also shows the description."},
      {src: "images/projects/TaskTimer/img6.PNG", caption: "A date select option to select date which you want to view the duration report of."}
    ],
    name: "TaskTimer",
    desc: (
      <div>
        <p>TaskTimer android app built using android studio during Sept. 2, 2020 according to Udemy android java masterclass.</p>
        <p>This app uses SQL database to store task as well as timing report of each task base on the task and the day it is performed.</p>
        <br/>
        <p>This is one of the app built throughout the online course, some other ones include API keys which I didn't know how to not push to git due to my inexperience of using git at that point.</p>
        <p>This is mostly to show I have some knowledge in java and have used android studio before.</p>
        <p>While the layout of the pages is done by XML files, the XML files are mostly generated by android studio.</p>
      </div>
    ),
    links: [
      {name: "Github", link: "https://github.com/Wayl123/TaskTimer"},
      {name: "Course", link: "http://www.learnprogramming.academy"},
      {name: "Udemy Certificates", link: "http://ude.my/UC-9f9e298b-95a4-47d6-8683-23a8509b0b6b"}
    ],
    codes: [
      "Java",
      "Android Studio (XML)",
      "SQL"
    ],
    date: new Date(2020, 9-1, 2)
  },
  {
    id: 3,
    thumbnail: {src: "images/projects/PlanetWine/thumbnail.PNG", caption: "Home page or the landing page. There is also a popup on this page whenever it is loaded."},
    images: [
      {src: "images/projects/PlanetWine/img1.PNG", caption: "Home page tablet size and below. All the navigation item is now listed vertically and teh number on the cart is put beside it."},
      {src: "images/projects/PlanetWine/img2.PNG", caption: "Shop page. The number added will replace the preceding number and adding 0 removes the item. Validation do apply to ensure only valid number is entered."},
      {src: "images/projects/PlanetWine/img3.PNG", caption: "Shop page image modal. Example of the image modal on the shop page when image is clicked, gallery page also have similar thing."},
      {src: "images/projects/PlanetWine/img4.PNG", caption: "Gallery page. Show collection of image, can click on image to see a bigger image of it."},
      {src: "images/projects/PlanetWine/img5.PNG", caption: "Cart page. Can still modify item numbers here, setting item to 0 will remove it on refresh."},
      {src: "images/projects/PlanetWine/img6.PNG", caption: "Checkout page form. After having entered a shipping information that pass the validation check, the cart will be cleared."},
      {src: "images/projects/PlanetWine/img7.PNG", caption: "Login page. This and pages like register and contact have some validation but does not provide much functionality partially due to it being front-end only."}
    ],
    name: "PlanetWine",
    desc: (
      <div>
        <p>First big group project of the BCIT software systems developer course built at around Oct. 30, 2020. Done in group of five.</p>
        <p>Although this website is front-end only we use localstorage to pass data between page.</p>
        <p>Product added from the shop page will update in the cart page and checkout page, same for editting the product in the cart page.</p>
        <p>The cart icon have number display on them to show how much product have been added to cart.</p>
        <p>Checkout will clear the item when the shipping information is successfully submitted.</p>
        <p>Images in shop and gallery page can be clicked to display an image modal.</p>
        <p>Images used in gallery page is referenced in the README file.</p>
        <p>Login, register, contact, and checkout form have some kind of validation, but it varies due to being worked on by different group member</p>
        <p>We didn't get around to actually making the register and login do anything.</p>
        <p>Contact also doesn't send anything.</p>
        <p>Links in the footer also don't go anywhere.</p>
        <br/>
        <p>This course is also where I learned to use git and github properly. As this is group project git is used extensively here.</p>
        <p>I was mostly responsible for the shop page and also help out a bit in other things like adding the number on the cart icon.</p>
      </div>
    ),
    links: [
      {name: "Github", link: "https://github.com/Wayl123/PlanetWine"},
    ],
    codes: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "SASS",
      "JQuery",
      "JSON",
      "Git/Github"
    ],
    date: new Date(2020, 10-1, 30)
  },
  {
    id: 4,
    thumbnail: {src: "images/projects/Portfolio/thumbnail.PNG", caption: "Home page or the landing page. Gives a short introduction of myself."},
    images: [],
    name: "Portfolio",
    desc: (
      <div>
        <p>This website basically. This is the front-end framework project of BCIT software systems developer course.</p>
        <p>More information will be fill in as this project get completed.</p>
      </div>
    ),
    links: [
      {name: "Github", link: "https://github.com/Wayl123/Portfolio"},
    ],
    codes: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "ReactJS",
      "Git"
    ],
    date: new Date(2020, 12-1, 18)
  }
]
export const projectFilter = [
  {filterName: "Most Recent", filterContent: "1"},
  {filterName: "Oldest", filterContent: "2"}
]