const explosives = [];
const particles = [];

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

class Particle {
  constructor(x, y) {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'aqua', 'white'];

    this.x = x;
    this.y = y;
    this.lifeSpan = (Math.random() * (500 - 150) + 150);

    this.velocity = Math.random() * 2 + 1;
    this.angle = Math.random() * 2 * Math.PI;

    this.newx = Math.cos(this.angle) * this.velocity;
    this.newy = Math.sin(this.angle) * this.velocity;

    this.color = colors[parseInt(Math.random() * colors.length)];

    this.z = document.createElement('div');
    this.z.className = 'particle';
    this.z.style.left = this.x + 'px';
    this.z.style.top = this.y + 'px';
    this.z.style.backgroundColor = this.color;
    document.body.appendChild(this.z);

    setTimeout(() => {
      this.z.remove();
      particles.splice(particles.indexOf(this), 1);
    }, this.lifeSpan);
  }

  update() {
    this.x += this.newx;
    this.y += this.newy;
    this.z.style.left = this.x + 'px';
    this.z.style.top = this.y + 'px';
  }
}

class Explosive {
  constructor() {

    this.x = window.innerWidth / 2;
    this.y = window.innerHeight;
    this.lifeSpan = 750;

    this.numberOfParticlesToSpawn = 150;

    this.velocity = (Math.random() * (23 - 5) + 5);
    this.angle = (Math.random() * Math.PI) / 2 + Math.PI / 4;

    this.newx = Math.cos(this.angle) * this.velocity;
    this.newy = -Math.sin(this.angle) * this.velocity;

    this.z = document.createElement('div');
    this.z.className = 'explosive';
    this.z.style.left = this.x + 'px';
    this.z.style.top = this.y + 'px';
    document.body.appendChild(this.z);

    setTimeout(() => {
      this.explode();
      this.z.remove();
      explosives.splice(explosives.indexOf(this), 1);
    }, this.lifeSpan);
  }

  explode() {
    for (
      let i = 0;
      i < this.numberOfParticlesToSpawn;
      i++
    ) {
      const particle = new Particle(this.x, this.y);
      particles.push(particle);
    }
  }

  update() {
    this.x += this.newx;
    this.y += this.newy;
    this.newy += 0.2;
    this.z.style.left = this.x + 'px';
    this.z.style.top = this.y + 'px';
  }
}

setInterval(() => {
  const explosive = new Explosive();
  explosives.push(explosive);
}, 100);

setInterval(() => {
  explosives.forEach(explosive => {
    explosive.update();
  });
  particles.forEach(particle => {
    particle.update();
  });
}, 10);

addEventListener('click', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY

  const numberOfParticlesToSpawn = 150;

  const velocity = (Math.random() * (23 - 5) + 5);
  const angle = (Math.random() * Math.PI) / 2 + Math.PI / 4;

  const colors = ['red', 'blue', 'green', 'orange', 'purple', 'aqua', 'white'];
  const color = colors[parseInt(Math.random() * colors.length)];

  for (let i = 0; i < numberOfParticlesToSpawn; i++) {
    particles.push(
      new Particle(mouse.x, mouse.y), {
      })
    }
  })