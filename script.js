const gmail = document.getElementById("gmail-link");

gmail.addEventListener("click", async function (event) {
    event.preventDefault();

    // Use Clipboard API if supported
    if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText("clffrdkyl@gmail.com");

            // Trigger a copy event
            document.dispatchEvent(new Event("copy"));

            // alert("Email copied to clipboard!"); // Feedback for user
            return;
        } catch (error) {
            console.error("Clipboard API failed, trying fallback method...", error);
        }
    }

    // Fallback method for older browsers and mobile devices
    const textArea = document.createElement("textarea");
    textArea.value = "clffrdkyl@gmail.com";
    document.body.appendChild(textArea);

    // Select and copy text
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy"); // Fallback for older browsers

    document.body.removeChild(textArea); // Clean up

    // alert("Email copied to clipboard!"); // Feedback
});


const downloadCVBtn = document.getElementById('downloadCVBtn');
downloadCVBtn.addEventListener('click', () => { 
    const link = document.createElement('a')
    link.href = "resources/Demafelis_CV.pdf"
    link.download = "Demafelis_CV.pdf"
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
})

const sections = document.querySelectorAll(".section");

let options = {
    threshold: 0.6, // Detects when 60% of a section is visible
};

let observer = new IntersectionObserver((entries) => {
    let visibleSection = entries.find(entry => entry.isIntersecting);
    
    if (visibleSection) {
        window.scrollTo({
            top: visibleSection.target.offsetTop,
            behavior: "smooth"
        });
    }
}, options);

sections.forEach(section => observer.observe(section));
