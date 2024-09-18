document.querySelector(".section-hero");

// ========================================
// creating a responsive navbar component
// ========================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
    headerElem.classList.toggle("active");
});

// ========================================
// creating a sticky responsive navbar component
// ========================================

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting
            ? document.body.classList.add("sticky")
            : document.body.classList.remove("sticky");
    },
    {
        root: null,
        threshold: 0,
    }
);

// observer.observes("");

// ========================================
// creating a portfolio tabbed component
// ========================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn")) return;

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    // to find the number in data attr
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-acitve"));

    img_active.forEach((curElem) =>
        curElem.classList.remove("p-image-not-acitve")
    );
});

// swiper js code

new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const myJsmedia = (widthSize) => {
    if (widthSize.matches) {
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
        });
    } else {
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
        });
    }
};

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myJsmedia(widthSize);
// Attach listener function on state changes
widthSize.addEventListener("change", myJsmedia);

// scrooll to top button

const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
};

scroollElement.addEventListener("click", scrollTop);

// smooth scrolling effects

const portfolioSec = document.querySelector(".section-portfolio");
const contactSec = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", () => {
    portfolioSec.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
    e.preventDefault();
    contactSec.scrollIntoView({ behavior: "smooth" });
});

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
    (entries, observer) => {
        const [entry] = entries;
        // console.log(entry);

        // if (entry.isIntersecting == false)
        if (!entry.isIntersecting) return;

        // animate number counter

        const counterNum = document.querySelectorAll(".counter-numbers");

        const speed = 200;

        counterNum.forEach((curElem) => {
            const updateNumber = () => {
                const targetNumber = parseInt(curElem.dataset.number);
                // console.log(targetNumber);
                const initialNum = parseInt(curElem.innerText);
                console.log(initialNum);

                const incrementNumber = Math.trunc(targetNumber / speed);
                console.log(incrementNumber);

                if (initialNum < targetNumber) {
                    curElem.innerText = `${initialNum + incrementNumber}+`;
                    setTimeout(updateNumber, 10);
                }
            };

            updateNumber();
        });

        observer.unobserve(workSection);
    },
    {
        root: null,
        threshold: 0,
    }
);


console.log("object")



// ///////////// first show texts /
function showText() {
    var hiddenText = document.getElementById("hiddenText");
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }
}



function toggleText() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Read More";
    }
};

//////////////////////////////
document.getElementById('search-btn').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value;
    const resultsDiv = document.getElementById('results');

    if (query) {
        try {
            // Replace 'YOUR_API_ENDPOINT' with your API endpoint
            const response = await fetch(`https://api.example.com/search?query=${encodeURIComponent(query)}`);
            const data = await response.json();

            // Process and display results
            resultsDiv.innerHTML = `
        <h2>Search Results:</h2>
        <ul>
            ${data.results.map(item => `<li>${item.name}</li>`).join('')}
        </ul>
    `;
        } catch (error) {
            resultsDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
        }
    } else {
        resultsDiv.innerHTML = '<p>Please enter a search query.</p>';
    }
});


// my bio data button 
// Get all the buttons that will trigger the hidden text
const buttons = document.querySelectorAll('.btn');

// Get the hidden text element
const hiddenText = document.getElementById('hiddenText');

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the visibility of the hidden text
        if (hiddenText.style.display === "none") {
            hiddenText.style.display = "block"; // Show the hidden text
        } else {
            hiddenText.style.display = "none"; // Hide the hidden text
        }
    });
});

{

    ///
    //sectionservices button 
    // Get all the buttons that will trigger the hidden text
    const buttons = document.querySelectorAll('.btn');

    // Get the hidden text element
    const hiddenText = document.getElementById('sectionservices');

    // Add event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle the visibility of the hidden text
            if (hiddenText.style.display === "none") {
                hiddenText.style.display = "block"; // Show the hidden text
            } else {
                hiddenText.style.display = "none"; // Hide the hidden text
            }
        });
    });
}


// SEARCHING BAR 







