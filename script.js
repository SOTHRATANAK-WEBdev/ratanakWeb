const text = "A passionate developer who loves building modern web experiences.";
let index = 0;
const speed = 50;

function typingEffect() {
    if (index < text.length) {
        document.querySelector(".typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, speed);
    }
    
}


//ACTIVITIES JAVA CODE SECTION 
document.addEventListener("DOMContentLoaded", function () {
    // =========================
// CONTACT FORM SUBMISSION & THANK YOU MESSAGE
// =========================
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYouMessage');

if (form && thankYou) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent page reload

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.style.display = 'none';     // Hide the form
                thankYou.style.display = 'block'; // Show Thank You message
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Oops! Something went wrong. Please try again.");
        }
    });
}
// ============END=============//

    const activities = [
        "FRONTEND WEB DEVELOPER",
        "BACKEND WEB DEVELOPER",
        "COMPUTER TECHNICIAN",
        "IT SUPPORT",
        "CONTENT CREATOR",
        "PROBLEM SOLVING",
        "ADVENTURE ACTIVITIES",
        "CREATIVITY"
    ];

    let index = 0;
    const activity = document.getElementById("activity-word");

    if (!activity) return;

    // Show first activity immediately
    activity.classList.add("show");

    setInterval(() => {
        // hide current
        activity.classList.remove("show");
        activity.classList.add("hide");

        setTimeout(() => {
            // change text
            index = (index + 1) % activities.length;
            activity.textContent = activities[index];

            // show new text
            activity.classList.remove("hide");
            activity.classList.add("show");
        }, 500); // wait for hide animation
    }, 2500); // change every 2.5s
});


// MUSIC JAVA CODE SECTION
document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("music-btn");
  const musicList = document.getElementById("music-list");
  const musicPlayer = document.getElementById("bg-music");

  let isPlaying = false;

  // Button click
  musicBtn.addEventListener("click", () => {

    // If music is playing → STOP it
    if (isPlaying) {
      musicPlayer.pause();
      musicPlayer.currentTime = 0; // reset
      isPlaying = false;
      musicBtn.textContent = "MUSIC";
      musicList.classList.remove("show");
      return;
    }

    // If not playing → toggle music list
    musicList.classList.toggle("show");
  });

  // Click a song
  document.querySelectorAll("#music-list li").forEach(item => {
    item.addEventListener("click", () => {
      const src = item.getAttribute("data-src");
      if (!src) return;

      // Highlight selected song
      document.querySelectorAll("#music-list li")
        .forEach(li => li.classList.remove("playing"));
      item.classList.add("playing");

      // Play song
      musicPlayer.src = src;
      musicPlayer.play();
      isPlaying = true;
      musicBtn.textContent = "STOP";

      // Hide list after selecting
      musicList.classList.remove("show");
    });
  });
  // =========================
// PROJECT SLIDER LOGIC
// =========================
const projects = [
  {
    title: "1. Online Clothing Store",
    video: "img/website1.mp4",
    desc: "This project is a frontend only clothing store website created to demonstrate UI/UX design skills. It features a clean and responsive layout, attractive buttons, and interactive elements. The website does not include backend functionality",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "2. Online Game Top-Up",
    video: "img/website2.mp4",
    desc: "This is a frontend only game top-up website with multiple pages and input forms. Users can browse available games, select top-up options, and fill in required fields. The focus of the project is on design, layout, and user interaction rather than backend functionality.",
    tech: ["HTML", "CSS", "PHP", "JavaScript", "Bootstrap"]
  }
];

let currentProject = 0;

const videoEl = document.getElementById("projectVideo");
const titleEl = document.getElementById("projectTitle");
const descEl = document.getElementById("projectDesc");
const techEl = document.getElementById("projectTech");

function loadProject(index) {
  const project = projects[index];

  videoEl.pause();
  videoEl.src = project.video;
  videoEl.load();

  titleEl.textContent = project.title;
  descEl.textContent = project.desc;

  techEl.innerHTML = "";
  project.tech.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    techEl.appendChild(li);
  });
}

// Next Project button
document.getElementById("nextProject").addEventListener("click", () => {
  currentProject = (currentProject + 1) % projects.length;
  loadProject(currentProject);
});

// Load first project
loadProject(currentProject);

  // =========================
// END PROJECT SLIDER LOGIC
// =========================

});
typingEffect();