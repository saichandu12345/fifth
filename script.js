document.getElementById('convert-btn').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    
    if (textInput.trim() === '') {
        alert('Please enter some text.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(textInput);
    const synth = window.speechSynthesis;

    // Set pitch and rate (optional)
    utterance.pitch = 1;  // Range: 0 to 2
    utterance.rate = 1;   // Range: 0.1 to 10

    // Speak the text
    synth.speak(utterance);
});
