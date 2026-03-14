// ========== SUBJECT.JS - SIMPLIFIED VERSION ==========
// Assumes the subject JS file is already loaded

(function() {
    "use strict";

    console.log('🔍 Subject.js started loading...');

    // ========== GET SUBJECT ID FROM URL ==========
    const urlParams = new URLSearchParams(window.location.search);
    const subjectId = urlParams.get('id');
    
    console.log('🔍 Subject ID from URL:', subjectId);
    
    if (!subjectId) {
        document.body.innerHTML = '<div style="padding:50px; text-align:center;"><h2>❌ Subject not specified</h2><a href="index.html" style="display:inline-block; margin-top:20px; padding:12px 30px; background:#efebe2; border-radius:40px; text-decoration:none;">← back to courses</a></div>';
        throw new Error('No subject ID');
    }

    // ========== SUBJECT METADATA ==========
    const subjectMeta = {
        cve: { name: 'CVE 105', timeMin: 10, icon: 'flask', bankSize: 125 },
        che: { name: 'CHE 101', timeMin: 10, icon: 'vial', bankSize: 80 },
        gns101: { name: 'GNS 101', timeMin: 10, icon: 'book', bankSize: 120 },
        gns103: { name: 'GNS 103', timeMin: 10, icon: 'book', bankSize: 80 },
        phy101: { name: 'PHY 101', timeMin: 10, icon: 'rocket', bankSize: 80 },
        phy103: { name: 'PHY 103', timeMin: 10, icon: 'droplet', bankSize: 80 },
        mts: { name: 'MTS 101', timeMin: 20, icon: 'square-root-variable', bankSize: 125 },
        ict101: { name: 'ICT 101', timeMin: 15, icon: 'satellite', bankSize: 50 }
    };

    // Wait for question bank to be available
    function waitForQuestionBank() {
        return new Promise((resolve, reject) => {
            // Check if already available
            if (window.questionBank && window.questionBank[subjectId]) {
                console.log('✅ Question bank already available for:', subjectId);
                resolve(window.questionBank[subjectId]);
                return;
            }
            
            console.log('⏳ Waiting for question bank to load for:', subjectId);
            
            // Check every 100ms for up to 10 seconds
            let attempts = 0;
            const maxAttempts = 100; // 10 seconds
            
            const interval = setInterval(() => {
                attempts++;
                
                console.log(`⏳ Attempt ${attempts}: Checking for question bank...`);
                console.log('window.questionBank exists?', !!window.questionBank);
                if (window.questionBank) {
                    console.log('window.questionBank keys:', Object.keys(window.questionBank));
                }
                
                if (window.questionBank && window.questionBank[subjectId]) {
                    console.log('✅ Question bank loaded after', attempts, 'attempts');
                    clearInterval(interval);
                    resolve(window.questionBank[subjectId]);
                } else if (attempts >= maxAttempts) {
                    clearInterval(interval);
                    console.error('❌ Question bank failed to load after', maxAttempts, 'attempts');
                    reject(new Error(`Question bank for ${subjectId} not found`));
                }
            }, 100);
        });
    }

    // Initialize the subject once we have the question bank
    waitForQuestionBank()
        .then(fullBank => {
            console.log('✅ Successfully loaded', fullBank.length, 'questions for', subjectId);
            initializeSubject(fullBank);
        })
        .catch(error => {
            console.error('❌ Failed to load question bank:', error);
            
            // Show detailed error message
            const errorHtml = `
                <div style="padding:50px; text-align:center; max-width:600px; margin:0 auto;">
                    <h2 style="color:#c44;">❌ Failed to load questions for ${subjectId}</h2>
                    <p style="background:#f5f5f5; padding:20px; border-radius:20px; text-align:left; margin:20px 0;">
                        <strong>Error:</strong> ${error.message}<br><br>
                        <strong>Debug Info:</strong><br>
                        - Subject ID: ${subjectId}<br>
                        - window.questionBank exists: ${!!window.questionBank}<br>
                        ${window.questionBank ? `- Available subjects: ${Object.keys(window.questionBank).join(', ')}` : ''}<br>
                        - Time: ${new Date().toLocaleTimeString()}
                    </p>
                    <p>Please check that the subject JavaScript file (${subjectId}.js) is loaded correctly.</p>
                    <div style="margin:30px 0;">
                        <button onclick="window.location.reload()" style="background:#d4a373; color:white; border:none; padding:12px 30px; border-radius:40px; margin-right:10px; cursor:pointer;">
                            <i class="fas fa-sync-alt"></i> Reload Page
                        </button>
                        <a href="index.html" style="display:inline-block; padding:12px 30px; background:#efebe2; border-radius:40px; text-decoration:none;">
                            ← back to courses
                        </a>
                    </div>
                </div>
            `;
            
            document.body.innerHTML = errorHtml;
        });

    function initializeSubject(fullBank) {
        console.log('🚀 Initializing subject:', subjectId, 'with', fullBank.length, 'questions');
        
        const currentSubjectMeta = subjectMeta[subjectId] || { 
            name: subjectId.toUpperCase(), 
            timeMin: 10, 
            icon: 'book',
            bankSize: fullBank.length 
        };

        // ----- DOM elements -----
        const subjectNameEl = document.getElementById('subjectName');
        const subjectNameHeader = document.getElementById('subjectNameHeader');
        const timerEl = document.getElementById('timerDisplay');
        const modeCbt = document.getElementById('modeCbtBtn');
        const modePractice = document.getElementById('modePracticeBtn');
        const modeCustom = document.getElementById('modeCustomBtn');
        const progressEl = document.getElementById('progressIndicator');
        const questionText = document.getElementById('questionText');
        const optionsDiv = document.getElementById('optionsContainer');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitSubjectBtn');
        const explainBtn = document.getElementById('explainCurrentBtn');
        const correctionContent = document.getElementById('correctionContent');
        const suggestedTopics = document.getElementById('suggestedTopics');
        const shuffleBtn = document.getElementById('shuffleBtn');
        
        // ----- Custom session DOM elements -----
        const customSettingsPanel = document.getElementById('customSettingsPanel');
        const customQuestionCount = document.getElementById('customQuestionCount');
        const customTimeMinutes = document.getElementById('customTimeMinutes');
        const applyCustomSettingsBtn = document.getElementById('applyCustomSettingsBtn');
        const customCountValue = document.getElementById('customCountValue');
        const customTimeValue = document.getElementById('customTimeValue');
        const customQuestionMax = document.getElementById('customQuestionMax');

        // Set the subject name in the UI
        if (subjectNameEl) subjectNameEl.textContent = currentSubjectMeta.name;
        if (subjectNameHeader) subjectNameHeader.textContent = currentSubjectMeta.name;

        // ----- state -----
        let currentQuestions = [];
        let userAnswers = [];
        let currentIndex = 0;
        let timerInterval = null;
        let timeRemaining = 0;
        let subjectActive = false;
        let testSubmitted = false;
        let isPracticeMode = false;
        let isCustomMode = false;
        let quizLocked = false;
        
        // ----- Time selection state -----
        let selectedTimeMinutes = currentSubjectMeta.timeMin || 10;
        
        // ----- Custom session settings -----
        let customQuestionCountValue = 30;
        let customTimeValueMinutes = 30;

        // Update custom question max
        if (customQuestionMax) {
            customQuestionMax.textContent = fullBank.length;
        }
        if (customQuestionCount) {
            customQuestionCount.max = fullBank.length;
            customQuestionCount.value = Math.min(30, fullBank.length);
        }

        // ----- timer functions -----
        function stopTimer() { 
            clearInterval(timerInterval); 
            timerInterval = null; 
        }
        
        function formatTime(s) { 
            let m = Math.floor(s/60); 
            let sec = s % 60; 
            return `${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`; 
        }
        
        function startTimer(minutes) {
            stopTimer();
            quizLocked = false;
            timeRemaining = minutes * 60;
            if (timerEl) timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> ${formatTime(timeRemaining)}`;
            
            timerInterval = setInterval(() => {
                timeRemaining--;
                if (timerEl) timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> ${formatTime(timeRemaining)}`;
                
                if (timeRemaining <= 0) { 
                    stopTimer(); 
                    quizLocked = true;
                    subjectActive = false;
                    testSubmitted = true;
                    
                    if (timerEl) timerEl.innerHTML = `<i class="fas fa-hourglass-end"></i> 00:00 · TIME UP!`;
                    
                    if (optionsDiv) {
                        Array.from(optionsDiv.children).forEach(el => {
                            if (el.classList) {
                                el.style.pointerEvents = 'none';
                                el.style.opacity = '0.7';
                            }
                        });
                    }
                    
                    document.querySelectorAll('input').forEach(input => {
                        input.disabled = true;
                        input.style.background = '#f0f0f0';
                    });
                    
                    if (prevBtn) prevBtn.disabled = true;
                    if (nextBtn) nextBtn.disabled = true;
                    if (shuffleBtn) shuffleBtn.disabled = true;
                    if (explainBtn) explainBtn.style.display = 'none';
                    
                    alert('⏰ TIME IS UP! Your answers are being submitted automatically...'); 
                    submitSubject(); 
                }
            }, 1000);
        }

        // ----- shuffle array -----
        function shuffleArray(arr) {
            for (let i = arr.length-1; i>0; i--) {
                let j = Math.floor(Math.random()*(i+1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        // ----- answer comparison -----
        function isAnswerCorrect(userAns, correctAns) {
            if (userAns === null || userAns === undefined || userAns === '' || userAns === -1) return false;
            
            let userStr = userAns.toString().trim().toLowerCase();
            
            if (Array.isArray(correctAns)) {
                return correctAns.some(ans => 
                    ans.toString().trim().toLowerCase() === userStr
                );
            }
            
            if (!isNaN(parseFloat(correctAns)) && isFinite(correctAns)) {
                let userNum = parseFloat(userStr);
                let correctNum = parseFloat(correctAns);
                return Math.abs(userNum - correctNum) < 0.0001;
            }
            
            return correctAns.toString().trim().toLowerCase() === userStr;
        }

        // ----- render question -----
        function renderQuestion() {
            if (!currentQuestions.length) return;
            
            if (quizLocked) {
                if (optionsDiv) optionsDiv.style.pointerEvents = 'none';
                if (prevBtn) prevBtn.disabled = true;
                if (nextBtn) nextBtn.disabled = true;
                if (shuffleBtn) shuffleBtn.disabled = true;
            }
            
            let q = currentQuestions[currentIndex];
            
            if (questionText) questionText.innerText = `${currentIndex+1}. ${q.q}`;
            
            let html = '';
            
            if (q.type === 'mcq' || q.type === 'tf' || !q.type) {
                let letters = ['A','B','C','D'];
                q.opts.forEach((opt, idx) => {
                    let sel = (userAnswers[currentIndex] === idx) ? 'selected' : '';
                    let disabled = quizLocked ? 'style="pointer-events: none; opacity: 0.7;"' : '';
                    html += `<div class="option-item ${sel}" data-opt-index="${idx}" ${disabled}>
                                <span class="option-prefix">${letters[idx]}</span> ${opt}
                             </div>`;
                });
            } else {
                let currentValue = userAnswers[currentIndex] !== -1 ? userAnswers[currentIndex] : '';
                let disabled = quizLocked ? 'disabled' : '';
                let placeholder = 'Enter your answer...';
                
                if (q.input_type === 'name') placeholder = 'Enter name...';
                else if (q.input_type === 'year') placeholder = 'Enter year (e.g., 1957)';
                
                html += `<div class="input-container" style="margin: 20px 0;">
                            <input type="text" 
                                   id="userInput" 
                                   class="user-input-field" 
                                   placeholder="${placeholder}"
                                   value="${currentValue !== -1 ? currentValue : ''}"
                                   ${disabled}>
                        </div>`;
            }
            
            if (optionsDiv) optionsDiv.innerHTML = html;
            
            if (!quizLocked && q.type !== 'mcq' && q.type !== 'tf') {
                setTimeout(() => {
                    const inputField = document.getElementById('userInput');
                    if (inputField) {
                        inputField.addEventListener('input', function(e) {
                            if (!subjectActive || testSubmitted || quizLocked) return;
                            userAnswers[currentIndex] = e.target.value;
                            updateProgress();
                        });
                    }
                }, 50);
            }
            
            if (!quizLocked && (q.type === 'mcq' || q.type === 'tf' || !q.type)) {
                setTimeout(() => {
                    document.querySelectorAll('.option-item').forEach(opt => {
                        opt.addEventListener('click', function(e) {
                            if (quizLocked || !subjectActive || testSubmitted) return;
                            let idx = parseInt(this.dataset.optIndex);
                            document.querySelectorAll('.option-item').forEach(ch => ch.classList.remove('selected'));
                            this.classList.add('selected');
                            userAnswers[currentIndex] = idx;
                            updateProgress();
                            if (isPracticeMode) showExplanation();
                        });
                    });
                }, 50);
            }
            
            if (prevBtn) prevBtn.disabled = currentIndex === 0 || quizLocked;
            if (nextBtn) nextBtn.disabled = currentIndex === currentQuestions.length-1 || quizLocked;
            
            updateProgress();
        }

        function updateProgress() {
            if (!progressEl) return;
            let answered = userAnswers.filter(a => a !== -1 && a !== '').length;
            progressEl.innerText = `✦ ${currentIndex+1}/${currentQuestions.length}  ✓ ${answered}/${currentQuestions.length}`;
        }

        function showExplanation() {
            if (!currentQuestions.length || !isPracticeMode || quizLocked) return;
            let q = currentQuestions[currentIndex];
            let userAns = userAnswers[currentIndex];
            
            let isCorrect = false;
            let correctDisplay = '';
            
            if (q.type === 'mcq' || q.type === 'tf' || !q.type) {
                isCorrect = userAns === q.ans;
                correctDisplay = q.opts[q.ans];
            } else {
                isCorrect = isAnswerCorrect(userAns, q.ans);
                correctDisplay = Array.isArray(q.ans) ? q.ans.join(' or ') : q.ans;
            }
            
            let userDisplay = '';
            if (userAns === -1 || userAns === '') {
                userDisplay = '—';
            } else if (q.type === 'mcq' || q.type === 'tf' || !q.type) {
                userDisplay = q.opts[userAns];
            } else {
                userDisplay = userAns;
            }
            
            let html = `<h3 style="display:flex;gap:12px;"><i class="fas fa-feather"></i> Explanation</h3>
                <p style="font-weight:600;">${q.q}</p>
                <p>✅ <strong>Correct answer:</strong> ${correctDisplay}</p>
                <p>📌 <strong>Your answer:</strong> ${userDisplay} ${isCorrect ? '✓' : '✗'}</p>
                <div class="explanation-text">💡 ${q.explanation || 'No explanation available'}</div>
                <p style="margin-top:16px;">📚 <strong>Topic:</strong> ${q.topic}</p>`;
                
            if (correctionContent) correctionContent.innerHTML = html;
            if (suggestedTopics) suggestedTopics.innerText = q.topic;
        }

        function applyCustomSettings() {
            let qCount = parseInt(customQuestionCount?.value || '30');
            let tMins = parseInt(customTimeMinutes?.value || '30');
            
            if (isNaN(qCount) || qCount < 1) qCount = 1;
            if (isNaN(tMins) || tMins < 1) tMins = 1;
            if (qCount > fullBank.length) qCount = fullBank.length;
            if (tMins > 180) tMins = 180;
            
            customQuestionCountValue = qCount;
            customTimeValueMinutes = tMins;
            
            if (customCountValue) customCountValue.textContent = qCount;
            if (customTimeValue) customTimeValue.textContent = tMins;
            
            loadCustomQuestions();
        }
        
        function loadCustomQuestions() {
            let shuffled = shuffleArray([...fullBank]);
            currentQuestions = shuffled.slice(0, customQuestionCountValue);
            userAnswers = new Array(currentQuestions.length).fill(-1);
            currentIndex = 0;
            renderQuestion();
            updateProgress();
            startTimer(customTimeValueMinutes);
        }

        function submitSubject() {
            if (isPracticeMode) return;
            
            stopTimer();
            testSubmitted = true;
            subjectActive = false;
            quizLocked = true;
            
            if (optionsDiv) {
                optionsDiv.style.pointerEvents = 'none';
                Array.from(optionsDiv.children).forEach(el => {
                    if (el.classList) {
                        el.style.opacity = '0.7';
                        if (el.classList.contains('option-item')) {
                            el.style.pointerEvents = 'none';
                        }
                    }
                });
            }
            
            document.querySelectorAll('input').forEach(input => {
                input.disabled = true;
                input.style.background = '#f0f0f0';
            });
            
            if (prevBtn) prevBtn.disabled = true;
            if (nextBtn) nextBtn.disabled = true;
            if (shuffleBtn) {
                shuffleBtn.disabled = true;
                shuffleBtn.style.opacity = '0.5';
            }
            if (explainBtn) {
                explainBtn.style.display = 'none';
            }
            
            let score = 0, weak = [];
            currentQuestions.forEach((q, i) => {
                let ans = userAnswers[i];
                let correct = false;
                
                if (q.type === 'mcq' || q.type === 'tf' || !q.type) {
                    correct = ans === q.ans;
                } else {
                    correct = isAnswerCorrect(ans, q.ans);
                }
                
                if (correct) score++; 
                else if (ans !== -1 && ans !== '') weak.push(q.topic);
            });

            const resultsData = {
                subjectId: subjectId,
                subjectName: currentSubjectMeta.name,
                score: score,
                total: currentQuestions.length,
                questions: currentQuestions,
                userAnswers: [...userAnswers],
                weakTopics: weak,
                timestamp: new Date().toISOString(),
                timeUsed: (selectedTimeMinutes * 60) - timeRemaining,
                mode: isCustomMode ? 'custom' : 'cbt'
            };
            sessionStorage.setItem('cbtResults', JSON.stringify(resultsData));

            let html = `<h3 style="display:flex; gap:12px; color:#2a5c4a;">
                            <i class="fas fa-flag-checkered"></i> TEST COMPLETE!
                        </h3>
                        <div style="display:flex; justify-content:space-around; margin:24px 0;">
                            <div style="text-align:center;">
                                <div style="font-size:3rem; font-weight:700;">${score}</div>
                                <div style="color:#6a5e4e;">correct</div>
                            </div>
                            <div style="text-align:center;">
                                <div style="font-size:3rem; font-weight:700;">${currentQuestions.length - score}</div>
                                <div style="color:#6a5e4e;">incorrect/skipped</div>
                            </div>
                            <div style="text-align:center;">
                                <div style="font-size:3rem; font-weight:700;">${Math.round(score/currentQuestions.length*100)}%</div>
                                <div style="color:#6a5e4e;">score</div>
                            </div>
                        </div>`;
            
            if (correctionContent) correctionContent.innerHTML = html;
            
            let freq = {};
            weak.forEach(t => freq[t] = (freq[t]||0)+1);
            let top = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,5).map(e=>e[0]).join(', ') || 'No weak areas - Excellent!';
            if (suggestedTopics) {
                suggestedTopics.innerText = top;
                document.getElementById('topicSuggestionBox')?.classList.remove('hidden');
            }
            
            // FIXED: Show "View Full Results" button with correct link
            const viewResultsContainer = document.getElementById('viewResultsContainer');
            if (viewResultsContainer) {
                viewResultsContainer.classList.remove('hidden');
                const viewBtn = document.getElementById('viewFullResultsBtn');
                if (viewBtn) {
                    viewBtn.href = `results.html?id=${subjectId}`;
                    viewBtn.innerHTML = `<i class="fas fa-chart-simple"></i> view detailed performance report`;
                }
            }
        }

        function setMode(mode) {
            console.log('Setting mode to:', mode);
            isPracticeMode = mode === 'practice';
            isCustomMode = mode === 'custom';
            
            if (modeCbt) modeCbt.classList.toggle('active', mode === 'cbt');
            if (modePractice) modePractice.classList.toggle('active', mode === 'practice');
            if (modeCustom) modeCustom.classList.toggle('active', mode === 'custom');
            
            if (submitBtn) submitBtn.classList.toggle('hidden', isPracticeMode);
            if (explainBtn) explainBtn.classList.toggle('hidden', !isPracticeMode);
            
            if (customSettingsPanel) {
                customSettingsPanel.style.display = isCustomMode ? 'block' : 'none';
            }
            
            document.getElementById('viewResultsContainer')?.classList.add('hidden');
            document.getElementById('topicSuggestionBox')?.classList.add('hidden');
            
            if (isPracticeMode) {
                if (timerEl) {
                    timerEl.innerHTML = `<i class="fas fa-feather"></i> Practice Mode`;
                    stopTimer();
                }
                loadPracticeQuestions();
            } else if (isCustomMode) {
                if (timerEl) {
                    timerEl.style.display = 'inline-flex';
                    timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> 00:00`;
                }
                currentQuestions = [];
                userAnswers = [];
                currentIndex = 0;
                if (questionText) questionText.innerText = 'Configure your custom session above';
                if (optionsDiv) optionsDiv.innerHTML = '';
                if (progressEl) progressEl.innerText = '✦ 0/0  ✓ 0/0';
            } else {
                if (timerEl) {
                    timerEl.style.display = 'inline-flex';
                    timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> 00:00`;
                }
                loadCbtQuestions();
            }
            
            quizLocked = false;
            testSubmitted = false;
            subjectActive = true;
            
            if (correctionContent) correctionContent.innerHTML = `<p style="font-size:1.2rem; color:#685a4a; text-align:center;">
                <i class="fas fa-lock"></i> Complete the test and submit to see your results
            </p>`;
            if (suggestedTopics) suggestedTopics.innerText = '—';
        }

        function loadCbtQuestions() {
            let shuffled = shuffleArray([...fullBank]);
            currentQuestions = shuffled.slice(0, 20);
            userAnswers = new Array(currentQuestions.length).fill(-1);
            currentIndex = 0;
            renderQuestion();
            updateProgress();
            startTimer(selectedTimeMinutes);
        }
        
        function loadPracticeQuestions() {
            currentQuestions = shuffleArray([...fullBank]);
            userAnswers = new Array(currentQuestions.length).fill(-1);
            currentIndex = 0;
            renderQuestion();
            updateProgress();
        }

        // ----- EVENT LISTENERS -----
        if (modeCbt) modeCbt.addEventListener('click', () => setMode('cbt'));
        if (modePractice) modePractice.addEventListener('click', () => setMode('practice'));
        if (modeCustom) modeCustom.addEventListener('click', () => setMode('custom'));

        if (prevBtn) {
            prevBtn.addEventListener('click', () => { 
                if (quizLocked) { 
                    alert('⏰ Time is up - you cannot navigate further'); 
                    return; 
                }
                if (currentIndex > 0) { 
                    currentIndex--; 
                    renderQuestion(); 
                    updateProgress(); 
                } 
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => { 
                if (quizLocked) { 
                    alert('⏰ Time is up - you cannot navigate further'); 
                    return; 
                }
                if (currentIndex < currentQuestions.length-1) { 
                    currentIndex++; 
                    renderQuestion(); 
                    updateProgress(); 
                } 
            });
        }

        if (shuffleBtn) {
            shuffleBtn.addEventListener('click', () => {
                if (quizLocked) { 
                    alert('⏰ Test has ended - cannot reshuffle'); 
                    return; 
                }
                if (!subjectActive) return;
                if (confirm('Reshuffle? Your current answers will be cleared.')) {
                    if (isCustomMode) {
                        loadCustomQuestions();
                    } else if (isPracticeMode) {
                        currentQuestions = shuffleArray(currentQuestions);
                        userAnswers = new Array(currentQuestions.length).fill(-1);
                        currentIndex = 0;
                        renderQuestion(); 
                        updateProgress();
                    } else {
                        currentQuestions = shuffleArray(currentQuestions);
                        userAnswers = new Array(currentQuestions.length).fill(-1);
                        currentIndex = 0;
                        renderQuestion(); 
                        updateProgress();
                        stopTimer();
                        startTimer(selectedTimeMinutes);
                    }
                    if (correctionContent) correctionContent.innerHTML = `<p>🔄 Questions reshuffled</p>`;
                    if (suggestedTopics) suggestedTopics.innerText = '—';
                }
            });
        }

        if (submitBtn) submitBtn.addEventListener('click', submitSubject);
        if (explainBtn) explainBtn.addEventListener('click', showExplanation);

        if (applyCustomSettingsBtn) {
            applyCustomSettingsBtn.addEventListener('click', applyCustomSettings);
        }

        // ----- initial load -----
        console.log('Starting initial load for', subjectId);
        setMode('cbt');
    }
})();