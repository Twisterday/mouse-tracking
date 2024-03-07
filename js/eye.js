function getRandomPosition(containerWidth, containerHeight, eyeWidth, eyeHeight, minDistance) {
	var x = Math.random() * (containerWidth - eyeWidth - minDistance * 2) + minDistance;
	var y = Math.random() * (containerHeight - eyeHeight - minDistance * 2) + minDistance;
	return { x: x, y: y };
}

function getRandomRotation() {
	var rotation = Math.random() * 360;
	return rotation;
}

const glitchContainer = document.getElementById("glitchContainer");

function movePupils(e) {
	const pupils = document.querySelectorAll(".eye .eye__center");

	pupils.forEach((pupil) => {
		var rect = pupil.getBoundingClientRect();
		var x = (e.pageX - rect.left) / 30 + "px";
		var y = (e.pageY - rect.top) / 30 + "px";
		pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
	});
}

document.addEventListener("mousemove", movePupils);

document.addEventListener("DOMContentLoaded", function () {
	var containerWidth = glitchContainer.offsetWidth;
	var containerHeight = glitchContainer.offsetHeight;

	var eyesCount = 50;
	var minDistance = 30;

	for (var i = 0; i < eyesCount; i++) {
		var eye = document.createElement("div");
		eye.classList.add("eye");
		eye.style.width = "80px";
		eye.style.height = "60px";
		eye.style.position = "absolute";

		var position = getRandomPosition(containerWidth, containerHeight, 80, 60, minDistance);
		var rotation = getRandomRotation();

		eye.style.left = position.x + "px";
		eye.style.top = position.y + "px";
		eye.style.transform = "rotate(" + rotation + "deg)";

		var eyeCenter = document.createElement("div");
		eyeCenter.classList.add("eye__center");
		eye.appendChild(eyeCenter);

		glitchContainer.appendChild(eye);
	}
});
