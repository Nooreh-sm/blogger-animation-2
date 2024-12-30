const slices = document.querySelectorAll('.slice');
const tooltip = document.querySelector('.tooltip');
const modal = document.getElementById('details-modal');
const modalContent = document.querySelector('.modal-content');
const toolName = document.getElementById('tool-name');
const toolDescription = document.getElementById('tool-description');
const closeModal = document.querySelector('.close');

// Tool details
const toolDetails = {
    Socratic: "An AI-powered tutor that helps students learn through questions and answers.",
    Duolingo: "A fun and interactive app to learn languages with AI-driven lessons.",
    Milo: "An AI assistant designed to help kids with emotional and learning challenges.",
    "Khan Academy": "Free educational platform with AI-driven personalized learning.",
    Quizlet: "Flashcards and learning games powered by smart algorithms.",
    Photomath: "Solves math problems using AI and explains step-by-step solutions."
};

// Show tooltip on hover
slices.forEach(slice => {
    slice.addEventListener('mouseenter', (e) => {
        const tool = e.target.dataset.tool;
        tooltip.innerText = toolDetails[tool];
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.clientX}px`;
        tooltip.style.top = `${e.clientY - 20}px`;
    });

    slice.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    // Show modal on click
    slice.addEventListener('click', (e) => {
        const tool = e.target.dataset.tool;
        toolName.innerText = tool;
        toolDescription.innerText = toolDetails[tool];
        modal.style.display = 'flex';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
