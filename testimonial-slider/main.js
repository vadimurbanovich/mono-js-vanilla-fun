const testimonials = [
  {
    name: "Emily Carter",
    testimonial:
      "Samsung's latest phone is absolutely incredible. The vibrant display and lightning-fast performance have made it an essential part of my daily life. Highly recommended for tech enthusiasts!",
    photo:
      "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  },
  {
    name: "Michael Thompson",
    testimonial:
      "Using this laptop has completely transformed the way I work. The battery life is outstanding, and the performance is flawless. Perfect for professionals on the go!",
    photo:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Sophia Brown",
    testimonial:
      "I've never been happier with a smartwatch. The features are intuitive, the design is stunning, and it keeps me motivated to stay active. Definitely worth every penny!",
    photo:
      "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  },
  {
    name: "Lucas White",
    testimonial:
      "This gaming console is a dream come true. The graphics are next-level, and the library of games is unmatched. Great for casual and hardcore gamers alike.",
    photo:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Olivia Green",
    testimonial:
      "This tablet is perfect for both work and play. The screen resolution is amazing, and the multitasking features save me so much time. A must-have for busy professionals!",
    photo:
      "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  },
  {
    name: "James Wilson",
    testimonial:
      "The noise-canceling headphones are a game changer. The sound quality is phenomenal, and I can finally enjoy music without distractions. Highly recommend these!",
    photo:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ava Taylor",
    testimonial:
      "This e-reader has reignited my love for reading. The lightweight design and long battery life make it easy to carry everywhere. I can’t imagine traveling without it!",
    photo:
      "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  },
  {
    name: "Ethan Martinez",
    testimonial:
      "This fitness tracker is exactly what I needed to stay on top of my health. The detailed metrics and sleek design are perfect for anyone serious about fitness.",
    photo:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Mia Anderson",
    testimonial:
      "This smart speaker has become an integral part of my home. The sound quality is excellent, and the voice assistant is so helpful. Highly recommended for any household!",
    photo:
      "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  },
  {
    name: "William Harris",
    testimonial:
      "I’ve tried many phones, but this one takes the crown. The user interface is smooth, the camera is incredible, and it handles multitasking with ease. Simply the best!",
    photo:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const imageEl = document.querySelector(".testimonial__image");
const testimonialTextEl = document.querySelector(".testimonial__text");
const nameEl = document.querySelector(".testimonial__name");
const testimonialEl = document.querySelector(".testimonial__container");

let i = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, testimonial, photo } = testimonials[i];

  imageEl.src = photo;
  testimonialTextEl.innerText = testimonial;
  nameEl.innerText = name;
  i++;
  if (i >= testimonials.length) {
    i = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}

testimonialEl.addEventListener("click", updateTestimonial);
