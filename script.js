// document.addEventListener("DOMContentLoaded", () => {
//   const animatedSections = document.querySelectorAll(
//     ".about-section, .project-card, .contact-section"
//   );

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show-section");
//         }
//       });
//     },
//     {
//       threshold: 0.2,
//     }
//   );

//   animatedSections.forEach((section) => {
//     observer.observe(section);
//   });
// });
// // Fade-in effect when in viewport
// const skills = document.querySelectorAll('.skill-box');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('fade-in');
//     }
//   });
// });

// skills.forEach(skill => {
//   observer.observe(skill);
// });
document.addEventListener("DOMContentLoaded", () => {
  // Observe main sections for fade-in
  const animatedSections = document.querySelectorAll(
    ".about-section, .project-card, .contact-section"
  );

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedSections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Fade-in effect for each skill box
  const skills = document.querySelectorAll(".skill-box");

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, {
    threshold: 0.2,
  });

  skills.forEach((skill) => {
    skillObserver.observe(skill);
  });
});