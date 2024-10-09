function handleInput(event) {
    if (event.key === "Enter") {
        const inputField = document.getElementById("input");
        const outputDiv = document.getElementById("output");

        const userInput = inputField.value.trim();

        if (userInput.length === 0) {
            return; // Ignore empty input
        }

        const newPrompt = document.createElement("div");
        newPrompt.innerHTML = `<span>Juliana@MacBook-Pro ~ % ${userInput}</span>`;
        outputDiv.appendChild(newPrompt);

        if (userInput === "help") {
            const response = document.createElement("div");
            response.innerHTML = "Available commands: <br>- help: Display available commands<br>- clear: Clear the terminal<br>- download resume: Download a copy of the resume";
            outputDiv.appendChild(response);
        } else if (userInput === "clear") {
            outputDiv.innerHTML = "";
        } else if (userInput === "download resume") {
            showTerminalLoadingBar(); // Show terminal-style loading bar and message
        } else {
            const response = document.createElement("div");
            response.innerHTML = `Command not found: ${userInput}`;
            outputDiv.appendChild(response);
        }

        outputDiv.appendChild(document.createElement("br"));

        inputField.value = "";
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
}

function showTerminalLoadingBar() {
    const outputDiv = document.getElementById("output");

    // Create the terminal-style loading bar
    const loadingText = document.createElement("div");
    loadingText.className = "loading-text";
    loadingText.innerHTML = "Loading: [                    ]"; // Initial empty loading bar
    outputDiv.appendChild(loadingText);

    const totalLength = 20; // Length of the loading bar (number of "=" to display)
    let progress = 0;

    const interval = setInterval(() => {
        progress++;
        const bar = "=".repeat(progress); // Add one "=" each time
        loadingText.innerHTML = `Loading: [${bar.padEnd(totalLength, ' ')}]`; // Update loading bar

        if (progress === totalLength) {
            clearInterval(interval); // Stop the loading bar when it’s full

            // Show completion message and open resume in new tab
            setTimeout(() => {
                openResumeInNewTab();
                const message = document.createElement("div");
                message.innerHTML = "Download complete! Please check the newly opened window for your resume.";
                outputDiv.appendChild(message);

                outputDiv.appendChild(document.createElement("br"));
                outputDiv.scrollTop = outputDiv.scrollHeight;
            }, 500); // Small delay before showing the completion message
        }
    }, 100); // Simulate loading progress every 100ms
}

function openResumeInNewTab() {
    window.open("resume.pdf", "_blank"); // Open resume in a new tab
}

function openGymTracker() {
    window.open("https://docs.google.com/spreadsheets/d/1cJZek1Dd8l5Lgt7hSBZOejgulQTuhMa2gkdUwZa9S7U/edit?usp=sharing", "_blank");
  }

function openRecipe1() {
    window.open("https://docs.google.com/document/d/1u5NxvS46Ww0g2ECPy474PylLs2fMoQfjVAGnVEBfOv4/edit?usp=sharing", "_blank");
  }

function openRecipe2() {
    window.open("https://docs.google.com/document/d/1CLEpHmjVxxczmq5HwUv5YNcGiAmk7r6uH44-TUbvMYQ/edit?usp=sharing", "_blank");
  }

function openRecipe3() {
    window.open("https://docs.google.com/document/d/1pCgQxv0Lx9Lw2QI9ql08xY5V8cTHrFpbj4b0a-q3iOA/edit?usp=sharing", "_blank");
  }
