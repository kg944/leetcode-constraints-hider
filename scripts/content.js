/*
 * Hide the 'Constraints' section of a Leetcode problem.
 *
 * This is because the Constraints can often divulge clues to how efficient
 * (or not) the acceptible submissions should be, i.e. an input size up to
 * 10^6 may imply a O(n) or O(nlogn) answer, while an input size <= 1000 may
 * imply that only brute force or less efficient algorithms are the only
 * solution.
 *
 * Made by Killian Greene
 */

const descriptionClass = '.elfjS'; // TODO: create manual override or get automatically
const hideText = '[removed by Leetcode Constraints Hider]';
const constraintsText = 'Constraints:';

const observer = new MutationObserver(function (mutationsList, observer) {
    const paragraphs = document.querySelectorAll(descriptionClass + ' p'); // Find all <p> tags inside the div

    paragraphs.forEach(p => {
        if (p.textContent.trim() === constraintsText) {
            // Find the next sibling element, which should be a <ul>
            const ul = p.nextElementSibling;
            if (ul && ul.tagName.toLowerCase() === 'ul') {
                ul.innerHTML = '<li>' + hideText + '</li>'; // Set to redact string
                observer.disconnect(); // Stop observing once the element is found and modified
            }
        }
    });
});

// Start observing the document for changes in the body (e.g., DOM mutations)
observer.observe(document.body, { childList: true, subtree: true });

