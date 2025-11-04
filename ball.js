// mikarserwe repository
// ball.js - Küçük bir Ball sınıfı

export default class Ball {
  constructor(x = 0, y = 0, radius = 10, color = '#0095DD', vx = 0, vy = 0) {
    this.x = x;
    this.y = y;
    this.radius = Math.max(1, radius);
    this.color = color;
    this.vx = vx;
    this.vy = vy;
  }

  // Canvas 2D bağlamına topu çiz
  draw(ctx) {
    if (!ctx || typeof ctx.beginPath !== 'function') return;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  // Sınırlar içinde konumu güncelle ve duvara çarpınca sek
  update(bounds) {
    // bounds: { width, height }
    if (!bounds || typeof bounds.width !== 'number' || typeof bounds.height !== 'number') return;

    this.x += this.vx;
    this.y += this.vy;

    // X ekseni sınırları
    if (this.x - this.radius < 0) {
      this.x = this.radius;
      this.vx = -this.vx;
    } else if (this.x + this.radius > bounds.width) {
      this.x = bounds.width - this.radius;
      this.vx = -this.vx;
    }

    // Y ekseni sınırları
    if (this.y - this.radius < 0) {
      this.y = this.radius;
      this.vy = -this.vy;
    } else if (this.y + this.radius > bounds.height) {
      this.y = bounds.height - this.radius;
      this.vy = -this.vy;
    }
  }

  setVelocity(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}