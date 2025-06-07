    // Define the 10 grid challenges
        const allChallenges = [
          {
            id: 1,
            question: "Challenge: Create a 3x3 grid (3 columns, 3 rows) where the grid content stretches to fill the container both horizontally and vertically. All items should be centered within their cells. Requirements: justify-content: stretch, align-content: stretch.",
            numItems: 9,
            gap: "10px",
            correctAnswers: {
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr",
              justifyContent: "stretch",
              alignContent: "stretch",
              justifyItems: "center",
              alignItems: "center",
            },
          },
          {
            id: 2,
            question: "Challenge: Create a grid with two columns (2 columns, 2 rows): the first 100px wide, and the second taking the remaining space. Ensure the grid content is spaced with equal space around each track along the main axis. Requirements: align-content: stretch, justify-items: stretch, align-items: stretch.",
            numItems: 4,
            gap: "20px",
            correctAnswers: {
              gridTemplateColumns: "100px 1fr",
              gridTemplateRows: "1fr 1fr",
              justifyContent: "space-around",
              alignContent: "stretch",
              justifyItems: "stretch",
              alignItems: "stretch",
            },
          },
          {
            id: 3,
            question: "Challenge: Design a grid with two columns and three rows (2 columns, 3 rows) of equal height. All items should be aligned to the bottom of their respective cells. Requirements: justify-content: stretch, align-content: stretch, justify-items: stretch.",
            numItems: 6,
            gap: "30px",
            correctAnswers: {
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr",
              justifyContent: "stretch",
              alignContent: "stretch",
              justifyItems: "stretch",
              alignItems: "end",
            },
          },
          {
            id: 4,
            question: "Challenge: Configure a 2x2 grid (2 columns, 2 rows) so that the grid content stretches to fill the container both horizontally and vertically. All grid items are perfectly centered both horizontally and vertically within their cells, and there should be no gaps between the grid tracks. Requirements: justify-content: stretch, align-content: stretch.",
            numItems: 4,
            gap: "0px",
            correctAnswers: {
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              justifyContent: "stretch",
              alignContent: "stretch",
              justifyItems: "center",
              alignItems: "center",
            },
          },
          {
            id: 5,
            question: "Challenge: Configure a 3x2 grid (3 columns, 2 rows) so that the overall grid content is spaced evenly within the container along both the horizontal and vertical axes. Requirements: justify-items: stretch, align-items: stretch.",
            numItems: 6,
            gap: "10px",
            correctAnswers: {
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              justifyContent: "space-evenly",
              alignContent: "space-evenly",
              justifyItems: "stretch",
              alignItems: "stretch",
            },
          },
          {
            id: 6,
            question: "Challenge: Set up a 2x2 grid (2 columns, 2 rows) where the grid content stretches to fill the container horizontally, but aligns to the end vertically. Individual grid items are aligned to the start of their cells horizontally. Requirements: justify-content: stretch, align-items: stretch.",
            numItems: 4,
            gap: "20px",
            correctAnswers: {
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              justifyContent: "stretch",
              alignContent: "end",
              justifyItems: "start",
              alignItems: "stretch",
            },
          },
          {
            id: 7,
            question: "Challenge: Create a grid with a single column (1 column, 2 rows) that takes up all available space. The grid should have two rows, each 100px tall. All grid items should be centered both horizontally and vertically. Requirements: justify-content: stretch, align-content: stretch.",
            numItems: 2,
            gap: "30px",
            correctAnswers: {
              gridTemplateColumns: "1fr",
              gridTemplateRows: "100px 100px",
              justifyContent: "stretch",
              alignContent: "stretch",
              justifyItems: "center",
              alignItems: "center",
            },
          },
          {
            id: 8,
            question: "Challenge: Design a grid with two columns (2 columns, auto rows), each 150px wide. Rows should size themselves automatically based on content. Ensure there is space between the grid tracks along the main axis. Requirements: align-content: stretch, justify-items: stretch, align-items: stretch.",
            numItems: 4,
            gap: "10px",
            correctAnswers: {
              gridTemplateColumns: "150px 150px",
              gridTemplateRows: "auto auto",
              justifyContent: "space-between",
              alignContent: "stretch",
              justifyItems: "stretch",
              alignItems: "stretch",
            },
          },
          {
            id: 9,
            question: "Challenge: Create a grid with three columns (3 columns, 2 rows): the first 50px, the second taking 2 units of remaining space, and the third taking 1 unit of remaining space. All grid items should be aligned to the start of their cells in both directions. Requirements: justify-content: stretch, align-content: stretch.",
            numItems: 6,
            gap: "20px",
            correctAnswers: {
              gridTemplateColumns: "50px 2fr 1fr",
              gridTemplateRows: "1fr 1fr",
              justifyContent: "stretch",
              alignContent: "stretch",
              justifyItems: "start",
              alignItems: "start",
            },
          },
          {
            id: 10,
            question: "Challenge: Set up a grid with two columns and three rows (2 columns, 3 rows) where the overall grid content is distributed evenly along the main axis, and the rows are distributed with space around them vertically. Requirements: justify-items: stretch, align-items: stretch.",
            numItems: 5,
            gap: "30px",
            correctAnswers: {
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr",
              justifyContent: "space-evenly",
              alignContent: "space-around",
              justifyItems: "stretch",
              alignItems: "stretch",
            },
          },
        ];

        // Helper to shuffle an array (Fisher-Yates algorithm)
        const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };

        // State variables
        let score = 0;
        let shuffledChallenges = [];
        let currentChallengeIndex = 0;
        let answeredCorrectlyForCurrentChallenge = false;

        // DOM elements
        const scoreDisplay = document.getElementById('score-display');
        const challengeCounter = document.getElementById('challenge-counter');
        const challengeQuestion = document.getElementById('challenge-question');
        const gridPreview = document.getElementById('grid-preview');
        const checkAnswerBtn = document.getElementById('check-answer-btn');
        const showSolutionBtn = document.getElementById('show-solution-btn');
        const nextChallengeBtn = document.getElementById('next-challenge-btn');
        const feedbackMessageDiv = document.getElementById('feedback-message');
        const solutionDetailsDiv = document.getElementById('solution-details');
        const solutionCodePre = document.getElementById('solution-code');

        // Select controls
        const gtcSelect = document.getElementById('gridTemplateColumns');
        const gtrSelect = document.getElementById('gridTemplateRows');
        const justifyContentSelect = document.getElementById('justifyContent');
        const alignContentSelect = document.getElementById('alignContent');
        const justifyItemsSelect = document.getElementById('justifyItems');
        const alignItemsSelect = document.getElementById('alignItems');
        const gapSelect = document.getElementById('gap');

        // Options for select dropdowns (must be comprehensive)
        const gridTemplateColumnOptions = [
          { label: "Select...", value: "" },
          { label: "1fr 1fr", value: "1fr 1fr" },
          { label: "1fr 1fr 1fr", value: "1fr 1fr 1fr" },
          { label: "100px 1fr", value: "100px 1fr" },
          { label: "1fr", value: "1fr" },
          { label: "150px 150px", value: "150px 150px" },
          { label: "50px 2fr 1fr", value: "50px 2fr 1fr" },
        ];

        const gridTemplateRowOptions = [
          { label: "Select...", value: "" },
          { label: "1fr 1fr", value: "1fr 1fr" },
          { label: "1fr 1fr 1fr", value: "1fr 1fr 1fr" },
          { label: "100px 100px", value: "100px 100px" },
          { label: "auto auto", value: "auto auto" },
        ];

        const justifyContentOptions = [
          { label: "Select...", value: "" },
          { label: "stretch", value: "stretch" },
          { label: "start", value: "start" },
          { label: "end", value: "end" },
          { label: "center", value: "center" },
          { label: "space-between", value: "space-between" },
          { label: "space-around", value: "space-around" },
          { label: "space-evenly", value: "space-evenly" },
        ];

        const alignContentOptions = [
          { label: "Select...", value: "" },
          { label: "stretch", value: "stretch" },
          { label: "start", value: "start" },
          { label: "end", value: "end" },
          { label: "center", value: "center" },
          { label: "space-between", value: "space-between" },
          { label: "space-around", value: "space-around" },
          { label: "space-evenly", value: "space-evenly" },
        ];

        const justifyItemsOptions = [
          { label: "Select...", value: "" },
          { label: "stretch", value: "stretch" },
          { label: "start", value: "start" },
          { label: "end", value: "end" },
          { label: "center", value: "center" },
        ];

        const alignItemsOptions = [
          { label: "Select...", value: "" },
          { label: "stretch", value: "stretch" },
          { label: "start", value: "start" },
          { label: "end", value: "end" },
          { label: "center", value: "center" },
        ];

        const gapOptions = [
          { label: "0px", value: "0px" },
          { label: "10px", value: "10px" },
          { label: "20px", value: "20px" },
          { label: "30px", value: "30px" },
        ];

        /**
         * Populates a select element with options.
         * @param {HTMLElement} selectElement - The select element to populate.
         * @param {Array<Object>} options - An array of { label, value } objects.
         * @param {string} selectedValue - The value to mark as selected.
         */
        function populateSelect(selectElement, options, selectedValue = "") {
            selectElement.innerHTML = ''; // Clear existing options
            options.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.textContent = optionData.label;
                if (optionData.value === selectedValue) {
                    option.selected = true;
                }
                selectElement.appendChild(option);
            });
        }

        /**
         * Updates the score display.
         * @param {number} delta - The amount to add to the score.
         */
        function updateScore(delta) {
            score += delta;
            scoreDisplay.textContent = `Score: ${score.toFixed(2)}`;
        }

        /**
         * Renders the specified number of grid items in the preview.
         * @param {number} numItems - The number of grid items to render.
         */
        function renderGridItems(numItems) {
            gridPreview.innerHTML = '';
            for (let i = 1; i <= numItems; i++) {
                const item = document.createElement('div');
                item.classList.add('grid-item');
                item.textContent = i;
                gridPreview.appendChild(item);
            }
        }

        /**
         * Applies the selected CSS grid styles to the grid preview.
         */
        function applyGridStyles() {
            gridPreview.style.gridTemplateColumns = gtcSelect.value;
            gridPreview.style.gridTemplateRows = gtrSelect.value;
            gridPreview.style.justifyContent = justifyContentSelect.value;
            gridPreview.style.alignContent = alignContentSelect.value;
            gridPreview.style.justifyItems = justifyItemsSelect.value;
            gridPreview.style.alignItems = alignItemsSelect.value;
            gridPreview.style.gap = gapSelect.value; // Gap is set by question, but user's selection reflects it
        }

        /**
         * Loads a new challenge into the UI.
         * @param {Object} challenge - The challenge object to load.
         */
        function loadChallenge(challenge) {
            // Updated to remove challenge number and use "Challenge" only
            const questionText = challenge.question.replace(/^Challenge \d+: /, 'Challenge: ');
            challengeQuestion.innerHTML = `<p>${questionText}</p>
                                          <p class="mt-2 text-base italic text-blue-700">
                                            (Required gap: ${challenge.gap})
                                          </p>`;
            challengeCounter.textContent = `Challenge ${currentChallengeIndex + 1} / ${allChallenges.length}`;
            renderGridItems(challenge.numItems);

            // Populate and set initial selected values for controls to "Select..." (empty string)
            populateSelect(gtcSelect, gridTemplateColumnOptions, "");
            populateSelect(gtrSelect, gridTemplateRowOptions, "");
            populateSelect(justifyContentSelect, justifyContentOptions, "");
            populateSelect(alignContentSelect, alignContentOptions, "");
            populateSelect(justifyItemsSelect, justifyItemsOptions, "");
            populateSelect(alignItemsSelect, alignItemsOptions, "");
            populateSelect(gapSelect, gapOptions, challenge.gap); // Gap is pre-selected and disabled

            applyGridStyles(); // Apply initial styles including the gap
            feedbackMessageDiv.classList.add('hidden');
            solutionDetailsDiv.classList.add('hidden');
            answeredCorrectlyForCurrentChallenge = false;
        }

        /**
         * Checks the user's answer against the correct solution.
         */
        function checkAnswer() {
            const currentChallenge = shuffledChallenges[currentChallengeIndex];
            if (!currentChallenge) return; // Guard

            if (answeredCorrectlyForCurrentChallenge) {
                setFeedback("You've already answered this correctly!", "yellow");
                return;
            }

            let isCorrect = true;
            // Properties that default to 'stretch' and should accept empty string as correct
            const stretchDefaultProperties = ['justifyContent', 'alignContent', 'justifyItems', 'alignItems'];

            for (const prop in currentChallenge.correctAnswers) {
                let userAnswer = document.getElementById(prop).value;
                let correctAnswer = currentChallenge.correctAnswers[prop];

                if (stretchDefaultProperties.includes(prop) && correctAnswer === "stretch") {
                    // If the correct answer is 'stretch' and user's answer is '' or 'stretch', it's correct
                    if (!(userAnswer === "" || userAnswer === "stretch")) {
                        isCorrect = false;
                        break;
                    }
                } else {
                    // For other properties or non-'stretch' correct answers, exact match is required
                    if (userAnswer !== correctAnswer) {
                        isCorrect = false;
                        break;
                    }
                }
            }

            // Check gap explicitly, even though it's disabled for user input
            if (gapSelect.value !== currentChallenge.gap) {
                isCorrect = false;
            }

            if (isCorrect) {
                updateScore(1);
                setFeedback("Correct! Well done!", "green");
                answeredCorrectlyForCurrentChallenge = true;
                solutionDetailsDiv.classList.add('hidden'); // Hide solution if it was shown
            } else {
                updateScore(-0.25); // Deduct 0.25 marks for incorrect answer
                setFeedback("Incorrect. Try again!", "red");
            }
        }

        /**
         * Displays the correct solution and applies a score penalty.
         */
        function showSolution() {
            const currentChallenge = shuffledChallenges[currentChallengeIndex];
            if (!currentChallenge) return; // Guard

            updateScore(-0.5);
            setFeedback("Solution revealed!", "yellow");

            // Display solution code
            solutionCodePre.textContent = `display: grid;
  grid-template-columns: ${currentChallenge.correctAnswers.gridTemplateColumns};
  grid-template-rows: ${currentChallenge.correctAnswers.gridTemplateRows};
  justify-content: ${currentChallenge.correctAnswers.justifyContent};
  align-content: ${currentChallenge.correctAnswers.alignContent};
  justify-items: ${currentChallenge.correctAnswers.justifyItems};
  align-items: ${currentChallenge.correctAnswers.alignItems};
  gap: ${currentChallenge.gap};`;
            solutionDetailsDiv.classList.remove('hidden');

            // Apply solution styles to the preview
            gtcSelect.value = currentChallenge.correctAnswers.gridTemplateColumns;
            gtrSelect.value = currentChallenge.correctAnswers.gridTemplateRows;
            justifyContentSelect.value = currentChallenge.correctAnswers.justifyContent;
            alignContentSelect.value = currentChallenge.correctAnswers.alignContent;
            justifyItemsSelect.value = currentChallenge.correctAnswers.justifyItems;
            alignItemsSelect.value = currentChallenge.correctAnswers.alignItems;
            gapSelect.value = currentChallenge.gap; // Ensure gap is also set to correct
            applyGridStyles(); // Update the preview with solution styles
        }

        /**
         * Moves to the next challenge in the shuffled list.
         */
        function nextChallenge() {
            currentChallengeIndex = (currentChallengeIndex + 1) % shuffledChallenges.length;
            loadChallenge(shuffledChallenges[currentChallengeIndex]);
        }

        /**
         * Sets the feedback message and its styling.
         * @param {string} message - The message to display.
         * @param {'green'|'red'|'yellow'} type - The type of feedback for styling.
         */
        function setFeedback(message, type) {
            feedbackMessageDiv.textContent = message;
            feedbackMessageDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'border-green-300',
                                                    'bg-red-100', 'text-red-800', 'border-red-300',
                                                    'bg-yellow-100', 'text-yellow-800', 'border-yellow-300');

            if (type === 'green') {
                feedbackMessageDiv.classList.add('bg-green-100', 'text-green-800', 'border', 'border-green-300');
            } else if (type === 'red') {
                feedbackMessageDiv.classList.add('bg-red-100', 'text-red-800', 'border', 'border-red-300');
            } else if (type === 'yellow') {
                feedbackMessageDiv.classList.add('bg-yellow-100', 'text-yellow-800', 'border', 'border-yellow-300');
            }
        }

        /**
         * Initializes the application.
         */
        function initializeApp() {
            shuffledChallenges = shuffleArray([...allChallenges]); // Deep copy to ensure original array is not mutated
            currentChallengeIndex = 0;
            loadChallenge(shuffledChallenges[currentChallengeIndex]);

            // Add event listeners
            checkAnswerBtn.addEventListener('click', checkAnswer);
            showSolutionBtn.addEventListener('click', showSolution);
            nextChallengeBtn.addEventListener('click', nextChallenge);

            // Add change listeners for all select controls to update the grid preview live
            [gtcSelect, gtrSelect, justifyContentSelect, alignContentSelect, justifyItemsSelect, alignItemsSelect, gapSelect].forEach(control => {
                control.addEventListener('change', applyGridStyles);
            });
        }

        // Initialize the app when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', initializeApp);