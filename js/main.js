function getTemplate() {
  const navBar = `<nav>
  <div class="logo">
    <h4>Welcome</h4>
  </div>
  <ul class="nav-links">
    <li>
      <a href="../html/index.html">Home</a>
    </li>
    <li>
      <a href="../html/onlinecv.html">My online CV</a>
    </li>
    <li>
      <a href="../html/hobbies.html">Hobbies</a>
    </li>
    <li>
      <a href="../html/projects.html">Projects</a>
    </li>
  </ul>
  <div class="burger">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
  </nav>`;
  const footBar = `<footer class="main-footer">
  <h4 class="footer-text">You can find me on:</h4>
  <section class="social-media">
    <a href="https://www.facebook.com/zarnica.stefan/">
      <i class="fab fa-facebook-square fa-2x"></i>
    </a>
    <a href="https://www.instagram.com/szarnica/">
      <i class="fab fa-instagram fa-2x"></i>
    </a>
    <a href="https://www.linkedin.com/in/ștefan-lucian-zărnică-a3aa6599">
      <i class="fab fa-linkedin fa-2x"></i>
    </a>
  </section>
  </footer>`;
  $("body").prepend(navBar);
  $("body").append(footBar);
}

getTemplate();

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //This toggles the nav
    nav.classList.toggle("nav-active");

    //This will give the links animations when clicked on the burger
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //This will animate the handmade burger menu
    burger.classList.toggle("burger-animation");
  });
};

navSlide();

document.querySelector(".next").addEventListener("click", next);
document.querySelector(".back").addEventListener("click", back);

var textIndex = 0;
const text = `Hello! My name is Stefan-Lucian Zarnica and i am a graduate of the
"Front-End Web Development Course" under "Scoala Informala de IT".
Currently, you are seeing one of my graduation projects. Thank you for
taking your time to view it! If you want to know more about me, feel
free to press the "Next" button.`;

const text1 = `Probably you wonder why i have started studying programming, considering the fact that i come from a totally different background (Law School graduate with Masters degree in Forensics). Well, i am trained to answer this question, because i also had to answer it to my parents, friends, girlfriend, random people etc. The answer is pretty simple: "What i used to do did not give me enough satisfaction and i did not feel i can do it for the rest of my life". Yes, studying programming is not a walk in the park and i had some moments i felt discouraged and thought that maybe the challenge is too big. However, i also watch many youtubers online that create educative programming content and everyone says the same thing "I had moments when i wanted to give up. Don't do that. Step by step, one time or another, you will get there". Hearing these words continuously gave me hope and a goal: I want to build a web development career.`;

const text2 =
  `I hesitate to make career plans, because so far my life did not exactly go according to my initial plans and i think this is one of the best parts of our journey. I want to build a competitive portofolio so i can attract potential employers and eventually work as a Junior Web Developer. From that position, i plan to gain new skills, pick up some design tips from the experieced collegues and move to the UX design area of activity. Again, things may not go according to my plan, but whatever the future holds me, i am ready and eager to prove myself.`;

const textArray = [text, text1, text2];

function toggleText() {
  var currentText = document.querySelector(".changeable-text");
  currentText.innerHTML = textArray[textIndex];

  if (textIndex === 2) {
    document.querySelector(".next").setAttribute("disabled", true);
  }

  if (textIndex === 0) {
    document.querySelector(".back").setAttribute("disabled", true);
  }
}

function next() {
  textIndex++;
  toggleText()
  document.querySelector('.back').removeAttribute('disabled');
}

function back() {
  textIndex--;
  toggleText();
  document.querySelector('.next').removeAttribute('disabled');
}

toggleText();


