document.getElementById('year')?.append(String(new Date().getFullYear()));
const menuButton=document.querySelector('.menu-button');
const navLinks=document.querySelector('.nav-links');
menuButton?.addEventListener('click',()=>{const opened=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(opened));});
navLinks?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const form=document.getElementById('contactForm');
form?.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent(data.get('subject'));
  const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
  window.location.href=`mailto:edutechtejas@gmail.com?subject=${subject}&body=${body}`;
});
