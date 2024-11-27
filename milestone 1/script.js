document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills');
    const skills = document.getElementById('skills');

    toggleButton.addEventListener('click', () => {
        skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
    });
});
