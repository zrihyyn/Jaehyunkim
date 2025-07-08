const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.section');

let activeSection = null;

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.dataset.section;
    const targetSection = document.getElementById(targetId);

    if (activeSection === targetSection) {
      targetSection.classList.remove('active');
      activeSection = null;
    } else {
      sections.forEach(section => section.classList.remove('active'));
      targetSection.classList.add('active');
      activeSection = targetSection;
    }
  });
});

const topBorder = document.querySelector('.top-border');

const borderColors = [
  'darkgreen',
  '#FF6347',   
  '#4169E1',   
  '#FF1493',   
  '#FFD700',   
  '#8A2BE2',   
  '#00CED1',   
  '#DC143C'    
];

const randomColor = borderColors[Math.floor(Math.random() * borderColors.length)];
if (topBorder) {
  topBorder.style.backgroundColor = randomColor;
}
