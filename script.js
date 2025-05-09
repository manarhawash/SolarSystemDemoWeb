const panel = document.getElementById('panel');
const info  = document.getElementById('labelPlanetInfo');

const center = { x: 250, y: 250 };

const planets = [
  { name: 'mercury', radius: 50, speed: 0.02, size: 30, info: 'عطارد: أقرب كوكب إلى الشمس.' },
  { name: 'venus',   radius: 90, speed: 0.015, size: 30, info: 'الزهرة: غلاف جوي كثيف جداً.' },
  { name: 'earth',   radius: 130,speed: 0.01,  size: 30, info: 'الأرض: الكوكب الوحيد الذي يدعم الحياة.' },
  { name: 'mars',    radius: 170,speed: 0.008, size: 30, info: 'المريخ: يُطلق عليه الكوكب الأحمر.' }
];

// إضافة الشمس
const sun = document.createElement('img');
sun.src = 'images/sun.png';
sun.style.width  = '50px';
sun.style.height = '50px';
sun.style.left   = `${center.x - 25}px`;
sun.style.top    = `${center.y - 25}px`;
panel.appendChild(sun);

// إنشاء كواكب
planets.forEach(p => {
  p.angle = 0;
  const img = document.createElement('img');
  img.src = `images/${p.name}.png`;
  img.style.width  = `${p.size}px`;
  img.style.height = `${p.size}px`;
  img.dataset.name = p.name;
  img.addEventListener('click', () => info.textContent = p.info);
  panel.appendChild(img);
  p.el = img;
});

// تحريك الكواكب
function animate() {
  planets.forEach(p => {
    p.angle += p.speed;
    const x = center.x + p.radius * Math.cos(p.angle) - p.size/2;
    const y = center.y + p.radius * Math.sin(p.angle) - p.size/2;
    p.el.style.left = `${x}px`;
    p.el.style.top  = `${y}px`;
  });
  requestAnimationFrame(animate);
}

animate();
