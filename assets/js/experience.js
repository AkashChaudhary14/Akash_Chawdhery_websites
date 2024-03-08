AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Product Designer Intern",
    cardImage: "assets/images/experience-page/radicalx.jpg",
    place: "Radicalx",
    time: "(Sept, 2022 - Nov 2022)",
    desp: "<li>Led and managed a team of 12 designers to create effective and visually aesthetic website design for a client.</li> <li>Developed customer-specific design framework, reducing site production time by 4 days.</li> <li>Led bi-weekly standup to celebrate teams successes, address weaknesses, and assign tasks.</li>",
  },
  {
    title: "Frontend Web Developer",
    cardImage: "assets/images/experience-page/oasis.jpg",
    place: "Oasis Infobyte",
    time: "(Aug, 2022 - Sept, 2022)",
    desp: "<li>Translated design and wireframes into high-quality code using HTML, CSS, and JavaScript.</li><li>Designed and developed web application using JavaScript framework React.js .</li><li>Ensured the technical feasibility of UI/UX designs.</li>",
  },
  {
    title: "Data Science Intern",
    cardImage: "assets/images/experience-page/lgm.jpg",
    place: "LetsGrowMore",
    time: "(Jul, 2022 - Aug, 2022)",
    desp: "<li>Involved in data management processes: data mining, data processing, data structuring, data visualisation.</li><li>Implemented machine learning techniques and algorithms to model and predict data.</li>",
  },
  {
    title: "Web development Intern",
    cardImage: "assets/images/experience-page/sparks.png",
    place: "The Sparks Foundation",
    time: "(May, 2022 - June, 2022)",
    desp: "<li>Actively engaged in web creative design and development.</li><li>Built responsive, accessible and dynamic web pages to enable user to easily navigate site.</li>",
  },
  {
    title: "Technical Content Writer",
    cardImage: "assets/images/experience-page/gfg.png",
    place: "GeeksforGeeks",
    time: "(Oct, 2021 - Mar, 2022)",
    desp: "<li>Built a knowledge base from the ground up, including 12+ how-to articles for end-users.</li><li> Produced documents with infographics that are engaging, easy-to-read and visually-appealing to readers.</li>",
  }
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2023",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2023",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2023",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
