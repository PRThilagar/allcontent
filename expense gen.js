var observer = new IntersectionObserver(function(entries) {
    let ele = document.querySelector(".cmp-teaser");
    ele.classList.remove('.no-animation');
    ele.classList.add('.with-animation');
}, { root: null, threshold: [0.9] });

// first target
observer.observe(document.querySelector(".cmp-teaser"));