function checkWord() {
    var inputWord = document.getElementById('wordInput').value;

    if (inputWord.length === 7) {
        // Show the video container
        document.getElementById('video-container').style.display = 'block';
    } else {
        // Print a message for a new word
        document.getElementById('wrong').style.display = 'block';
    }
}

function resetPage() {
    // Reload the page
    location.reload();
}