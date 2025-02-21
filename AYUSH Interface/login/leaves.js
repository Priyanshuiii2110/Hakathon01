class Leaf {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = -20;
        this.size = Math.random() * 15 + 10;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 + 1;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
        this.x += this.speedX + Math.sin(this.y / 50) * 0.5;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.y > this.canvas.height + 20) {
            this.reset();
        }
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate((this.rotation * Math.PI) / 180);
        this.ctx.fillStyle = `rgba(34, 139, 34, ${this.opacity})`;
        
        // Draw leaf shape
        this.ctx.beginPath();
        this.ctx.moveTo(0, -this.size/2);
        this.ctx.bezierCurveTo(
            this.size/2, -this.size/2,
            this.size/2, this.size/2,
            0, this.size/2
        );
        this.ctx.bezierCurveTo(
            -this.size/2, this.size/2,
            -this.size/2, -this.size/2,
            0, -this.size/2
        );
        this.ctx.fill();
        this.ctx.restore();
    }
}

function initLeaves() {
    const canvas = document.getElementById('leavesCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const leaves = Array.from({ length: 50 }, () => new Leaf(canvas));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        leaves.forEach(leaf => {
            leaf.update();
            leaf.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

document.addEventListener('DOMContentLoaded', initLeaves); 