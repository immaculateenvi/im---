// ========== INDEX.JS ==========
// Main page: renders subject cards, handles navigation to subject.html
(function() {
    "use strict";

    // Get subject data from embedded JSON
    const subjectDataElement = document.getElementById('subjectData');
    if (!subjectDataElement) return;
    
    let subjects = [];
    try {
        subjects = JSON.parse(subjectDataElement.textContent);
    } catch (e) {
        console.error('Failed to parse subject data', e);
        return;
    }

    const dashboardEl = document.getElementById('subjectDashboard');

    // Render subject cards as clickable links
    function renderCards() {
        if (!dashboardEl) return;
        let html = '';
        subjects.forEach(sub => {
            // Each card links to subject.html with id parameter
            html += `<a href="subject.html?id=${sub.id}" class="subject-card" data-sub-id="${sub.id}">
                <div class="subject-icon"><i class="fas fa-${sub.icon}"></i></div>
                <div class="subject-name">${sub.name}</div>
                <div class="meta-info">
                    <span>${sub.bankSize}+ Q</span> 
                    <span><i class="far fa-clock"></i> ${sub.timeMin}min</span>
                </div>
            </a>`;
        });
        dashboardEl.innerHTML = html;
    }

    renderCards();
})();