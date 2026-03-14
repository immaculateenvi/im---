// ========== INDEX.JS - UPDATED WITH RESPONSIVE FEATURES ==========
// Main page: renders subject cards with semester organization
(function() {
    "use strict";

    // Get subject data from embedded JSON
    const subjectDataElement = document.getElementById('subjectData');
    if (!subjectDataElement) return;
    
    let subjects = [];
    try {
        subjects = JSON.parse(subjectDataElement.textContent);
        // Update bank sizes for display
        subjects = subjects.map(sub => ({
            ...sub,
            bankSize: sub.id === 'cve' ? 125 : 
                     (sub.id === 'mts' ? 125 : 
                     (sub.id === 'gns101' ? 120 : 80))
        }));
    } catch (e) {
        console.error('Failed to parse subject data', e);
        return;
    }

    // Define coming soon courses by semester
    const comingSoonCourses = {
        '100lvl2': [
            { id: 'che102', name: 'CHE 102', icon: 'flask', timeMin: 10, bankSize: 80 },
            { id: 'che104', name: 'CHE 104', icon: 'vial', timeMin: 10, bankSize: 80 },
            { id: 'csc102', name: 'CSC 102', icon: 'code', timeMin: 10, bankSize: 80 },
            { id: 'gns102', name: 'GNS 102', icon: 'book', timeMin: 10, bankSize: 80 },
            { id: 'gns106', name: 'GNS 106', icon: 'book', timeMin: 10, bankSize: 80 },
            { id: 'mee102', name: 'MEE 102', icon: 'gear', timeMin: 10, bankSize: 80 },
            { id: 'mts102', name: 'MTS 102', icon: 'square-root-variable', timeMin: 10, bankSize: 80 },
            { id: 'mts104', name: 'MTS 104', icon: 'square-root-variable', timeMin: 10, bankSize: 80 },
            { id: 'phy102', name: 'PHY 102', icon: 'rocket', timeMin: 10, bankSize: 80 },
            { id: 'phy108', name: 'PHY 108', icon: 'atom', timeMin: 10, bankSize: 80 }
        ],
        '200lvl1': [
            { id: 'csp201', name: 'CSP 201', icon: 'computer', timeMin: 10, bankSize: 80 },
            { id: 'csc201', name: 'CSC 201', icon: 'code', timeMin: 10, bankSize: 80 },
            { id: 'mee201', name: 'MEE 201', icon: 'gear', timeMin: 10, bankSize: 80 },
            { id: 'mee207', name: 'MEE 207', icon: 'cogs', timeMin: 10, bankSize: 80 },
            { id: 'mme205', name: 'MME 205', icon: 'microchip', timeMin: 10, bankSize: 80 },
            { id: 'mne203', name: 'MNE 203', icon: 'robot', timeMin: 10, bankSize: 80 },
            { id: 'mts201', name: 'MTS 201', icon: 'square-root-variable', timeMin: 10, bankSize: 80 }
        ],
        '200lvl2': [
            { id: 'cve202', name: 'CVE 202', icon: 'mountain', timeMin: 10, bankSize: 80 },
            { id: 'mee202', name: 'MEE 202', icon: 'gear', timeMin: 10, bankSize: 80 },
            { id: 'mee206', name: 'MEE 206', icon: 'cogs', timeMin: 10, bankSize: 80 },
            { id: 'mts202', name: 'MTS 202', icon: 'square-root-variable', timeMin: 10, bankSize: 80 }
        ],
        '300lvl1': [
            { id: 'age301', name: 'AGE 301', icon: 'tractor', timeMin: 10, bankSize: 80 },
            { id: 'ent301', name: 'ENT 301', icon: 'briefcase', timeMin: 10, bankSize: 80 },
            { id: 'mts315', name: 'MTS 315', icon: 'square-root-variable', timeMin: 10, bankSize: 80 }
        ],
        '300lvl2': [
            { id: 'ent302', name: 'ENT 302', icon: 'briefcase', timeMin: 10, bankSize: 80 },
            { id: 'mne314', name: 'MNE 314', icon: 'robot', timeMin: 10, bankSize: 80 },
            { id: 'mts316', name: 'MTS 316', icon: 'square-root-variable', timeMin: 10, bankSize: 80 }
        ]
    };

    // ICT/EEE courses - ALL courses coming soon (including ICT 101)
    const ictComingSoonCourses = [
        { id: 'ict101', name: 'ICT 101', icon: 'satellite', timeMin: 15, bankSize: 50, description: 'Intro to ICT' },
        { id: 'eee201', name: 'EEE 201', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'ict201', name: 'ICT 201', icon: 'network-wired', timeMin: 10, bankSize: 80 },
        { id: 'eee203', name: 'EEE 203', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'ict202', name: 'ICT 202', icon: 'network-wired', timeMin: 10, bankSize: 80 },
        { id: 'ict204', name: 'ICT 204', icon: 'code', timeMin: 10, bankSize: 80 },
        { id: 'ict301', name: 'ICT 301', icon: 'satellite', timeMin: 10, bankSize: 80 },
        { id: 'ict303', name: 'ICT 303', icon: 'network-wired', timeMin: 10, bankSize: 80 },
        { id: 'ict305', name: 'ICT 305', icon: 'microchip', timeMin: 10, bankSize: 80 },
        { id: 'eee301', name: 'EEE 301', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'eee305', name: 'EEE 305', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'eee311', name: 'EEE 311', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'eee302', name: 'EEE 302', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'eee308', name: 'EEE 308', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'eee312', name: 'EEE 312', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'ict302', name: 'ICT 302', icon: 'network-wired', timeMin: 10, bankSize: 80 },
        { id: 'ict304', name: 'ICT 304', icon: 'code', timeMin: 10, bankSize: 80 },
        { id: 'ict306', name: 'ICT 306', icon: 'microchip', timeMin: 10, bankSize: 80 },
        { id: 'eee401', name: 'EEE 401', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'eee405', name: 'EEE 405', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'eee419', name: 'EEE 419', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'ict401', name: 'ICT 401', icon: 'satellite', timeMin: 10, bankSize: 80 },
        { id: 'ict403', name: 'ICT 403', icon: 'network-wired', timeMin: 10, bankSize: 80 },
        { id: 'ict405', name: 'ICT 405', icon: 'code', timeMin: 10, bankSize: 80 },
        { id: 'ict407', name: 'ICT 407', icon: 'microchip', timeMin: 10, bankSize: 80 },
        { id: 'ict409', name: 'ICT 409', icon: 'network-wired', timeMin: 10, bankSize: 80 },
        { id: 'ict415', name: 'ICT 415', icon: 'satellite', timeMin: 10, bankSize: 80 },
        { id: 'eee505', name: 'EEE 505', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'ict501', name: 'ICT 501', icon: 'network-wired', timeMin: 10, bankSize: 80 },
        { id: 'ict503', name: 'ICT 503', icon: 'code', timeMin: 10, bankSize: 80 },
        { id: 'ict505', name: 'ICT 505', icon: 'microchip', timeMin: 10, bankSize: 80 },
        { id: 'ict507', name: 'ICT 507', icon: 'satellite', timeMin: 10, bankSize: 80 },
        { id: 'ict599', name: 'ICT 599', icon: 'project-diagram', timeMin: 10, bankSize: 80 },
        { id: 'ict509', name: 'ICT 509', icon: 'network-wired', timeMin: 10, bankSize: 80 },
        { id: 'ict513', name: 'ICT 513', icon: 'code', timeMin: 10, bankSize: 80 },
        { id: 'eee506', name: 'EEE 506', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'eee508', name: 'EEE 508', icon: 'bolt', timeMin: 10, bankSize: 80 },
        { id: 'ict502', name: 'ICT 502', icon: 'network-wired', timeMin: 10, bankSize: 80 },
        { id: 'ict504', name: 'ICT 504', icon: 'code', timeMin: 10, bankSize: 80 },
        { id: 'ict506', name: 'ICT 506', icon: 'microchip', timeMin: 10, bankSize: 80 },
        { id: 'ict508', name: 'ICT 508', icon: 'satellite', timeMin: 10, bankSize: 80 },
        { id: 'ict510', name: 'ICT 510', icon: 'network-wired', timeMin: 10, bankSize: 80 },
        { id: 'ict516', name: 'ICT 516', icon: 'code', timeMin: 10, bankSize: 80 }
    ];

    // Render subject cards (responsive grid)
    function renderCards(containerId, courseList, isComingSoon = false) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        let html = '';
        courseList.forEach(course => {
            if (isComingSoon) {
                html += `<div class="subject-card coming-soon-card" data-coming-soon="true" data-course-name="${course.name}">
                    <div class="subject-icon"><i class="fas fa-${course.icon}"></i></div>
                    <div class="subject-name">${course.name}</div>
                    <div class="meta-info">
                        <span>${course.bankSize}+ Q</span> 
                        <span><i class="far fa-clock"></i> ${course.timeMin}min</span>
                    </div>
                    <div style="margin-top: 8px; font-size: 0.8rem; color: #d4a373;"><i class="fas fa-hourglass-half"></i> Coming Soon</div>
                </div>`;
            } else {
                html += `<a href="${course.file}?id=${course.id}" class="subject-card" data-sub-id="${course.id}">
                    <div class="subject-icon"><i class="fas fa-${course.icon}"></i></div>
                    <div class="subject-name">${course.name}</div>
                    <div class="meta-info">
                        <span>${course.bankSize}+ Q</span> 
                        <span><i class="far fa-clock"></i> ${course.timeMin}min</span>
                    </div>
                </a>`;
            }
        });
        container.innerHTML = html;
    }

    // Filter subjects by semester
    const subjectsBySemester = {
        '100lvl1': subjects.filter(s => s.semester === '100lvl1')
    };

    // Render 100 Level First Semester (active courses)
    renderCards('dashboard-100lvl1', subjectsBySemester['100lvl1']);

    // Render coming soon semesters
    renderCards('dashboard-100lvl2', comingSoonCourses['100lvl2'], true);
    renderCards('dashboard-200lvl1', comingSoonCourses['200lvl1'], true);
    renderCards('dashboard-200lvl2', comingSoonCourses['200lvl2'], true);
    renderCards('dashboard-300lvl1', comingSoonCourses['300lvl1'], true);
    renderCards('dashboard-300lvl2', comingSoonCourses['300lvl2'], true);

    // Render ICT/EEE section (all coming soon)
    renderCards('dashboard-ict-coming', ictComingSoonCourses, true);

    // Add click handlers for coming soon cards
    document.querySelectorAll('.coming-soon-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const courseName = this.dataset.courseName || 'This course';
            // Create custom alert
            const alert = document.createElement('div');
            alert.style.cssText = `
                position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                background: white; padding: 30px; border-radius: 40px; 
                box-shadow: 0 20px 40px rgba(0,0,0,0.2); z-index: 10000;
                text-align: center; max-width: 300px;
                border: 1px solid #ffeede;
            `;
            alert.innerHTML = `
                <i class="fas fa-hourglass-half" style="font-size: 3rem; color: #d4a373; margin-bottom: 15px;"></i>
                <h3 style="margin-bottom: 10px; color: #3d514b;">Coming Soon!</h3>
                <p style="color: #6f5e4e; margin-bottom: 20px;">${courseName} is under development. Check back for updates.</p>
                <button onclick="this.parentElement.remove()" style="background: #d4a373; color: white; border: none; padding: 10px 30px; border-radius: 40px; font-weight: 600; cursor: pointer;">
                    Got it
                </button>
            `;
            document.body.appendChild(alert);
            
            // Remove after 5 seconds
            setTimeout(() => {
                if (alert.parentNode) alert.remove();
            }, 5000);
        });
    });

    // Check screen size and adjust card layout if needed
    function adjustCardLayout() {
        const cards = document.querySelectorAll('.subject-dashboard');
        cards.forEach(container => {
            if (window.innerWidth <= 480) {
                container.style.justifyContent = 'center';
            } else {
                container.style.justifyContent = 'flex-start';
            }
        });
    }

    window.addEventListener('resize', adjustCardLayout);
    adjustCardLayout();

    console.log('Engineering-focused CBT platform initialized with dropdown semesters');
})();