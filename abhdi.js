function hackingtext() {
  let hacktext = document.getElementById('hackingtext');
  setInterval(() => {
    hacktext.innerText += ' ..';
    setTimeout(() => {
      hacktext.innerText = 'Hacking Into Target';
    }, 1000);
  }, 2000);
}

hackingtext();

function access() {
  setTimeout(() => {
    let loading = getElementById('loading');
    loading.style.display = 'none';
  }, 14000);
}

access();

let tl = gsap.timeline();

tl.to('#loading', {
  top: '-100vh',
  delay: 14,
  duration: 1,
  display: 'none',
});
