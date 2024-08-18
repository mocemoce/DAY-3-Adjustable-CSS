const inputs = document.querySelectorAll(".controls input")

function handleUpdates(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(inputs => inputs.addEventListener("change",handleUpdates));
inputs.forEach(inputs => inputs.addEventListener("mousemove",handleUpdates));