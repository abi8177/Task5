document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the active class on the button
        button.classList.toggle('active');
        
        // Get the associated content div
        const content = button.nextElementSibling;

        // Check if the content is already open
        if (content.style.maxHeight) {
            // Content is open, so close it
            content.style.maxHeight = null;
        } else {
            // Content is closed, so open it
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
