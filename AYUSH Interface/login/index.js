const canvas = document.getElementById("leavesCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const leaves = [];
const leafImage = new Image();
leafImage.src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Green_leaf_icon.svg";

const numLeaves = 30; // Number of leaves

for (let i = 0; i < numLeaves; i++) {
    leaves.push({
        x: Math.random() * canvas.width, 
        y: Math.random() * canvas.height, 
        speedY: Math.random() * 2 + 1,  // Falling speed
        speedX: (Math.random() - 0.5) * 2, // Sideways drift
        size: Math.random() * 30 + 10, 
        angle: Math.random() * 360, 
        rotationSpeed: (Math.random() - 0.5) * 2, // Rotation effect
        sway: Math.random() * 2 + 1 // Slight sway effect
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    leaves.forEach(leaf => {
        leaf.y += leaf.speedY;
        leaf.x += Math.sin(leaf.y / 50) * leaf.sway; // Adds swaying effect
        leaf.angle += leaf.rotationSpeed; // Rotates leaves

        if (leaf.y > canvas.height) {
            leaf.y = -10;
            leaf.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate((leaf.angle * Math.PI) / 180);
        ctx.drawImage(leafImage, -leaf.size / 2, -leaf.size / 2, leaf.size, leaf.size);
        ctx.restore();
    });

    requestAnimationFrame(animate);
}

// Start animation once image is loaded
leafImage.onload = () => {
    animate();
};

// Resize canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically validate credentials with your backend
    // This is a simple example - replace with your actual authentication logic
    if (email && password) {
        // Redirect to your dashboard or home page
        window.location.href = '../ayush/ayush.html';
    } else {
        alert('Please enter both email and password');
    }
}
