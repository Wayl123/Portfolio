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
    thumbnail: {src: "images/projects/YelpCamp/thumbnail.PNG", caption: "1"},
    images: [
      {src: "images/projects/YelpCamp/img1.PNG", caption: "2"},
      {src: "images/projects/YelpCamp/img2.PNG", caption: "3"}
    ],
    name: "YelpCamp",
    desc: (
      <div>
        <p>YelpCamp app made during Oct. 11, 2019 according to Udemy web development bootcamp course.</p>
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
    ]
  },
  {
    id: 2,
    thumbnail: "",
    images: [],
    name: "Placeholder Name",
    desc: "",
    links: [],
    codes: []
  },
  {
    id: 3,
    thumbnail: "",
    images: [],
    name: "Placeholder Name",
    desc: "",
    links: [],
    codes: []
  },
  {
    id: 4,
    thumbnail: "",
    images: [],
    name: "Placeholder Name",
    desc: "",
    links: [],
    codes: []
  }
]