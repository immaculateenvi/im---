// ========== RESULTS.JS ==========
// Detailed results page - shows full correction with explanations
(function() {
    "use strict";

    // Load saved results from sessionStorage
    const resultsData = JSON.parse(sessionStorage.getItem('cbtResults') || 'null');
    
    if (!resultsData) {
        document.getElementById('resultsContainer').innerHTML = `
            <div style="text-align: center; padding: 80px 20px;">
                <i class="fas fa-circle-exclamation fa-4x" style="color: #c49a6c;"></i>
                <h2 style="margin: 30px 0; color: #5e4b3a;">no results found</h2>
                <p>complete a CBT test first to see your performance report</p>
                <a href="index.html" class="community-link" style="display: inline-block; margin-top: 30px;">
                    <i class="fas fa-home"></i> return to courses
                </a>
            </div>
        `;
        return;
    }

    const { subjectId, subjectName, score, total, questions, userAnswers, weakTopics } = resultsData;
    const percentage = Math.round((score / total) * 100);
    
    // Copy the exact answer comparison function from subject.js
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
            return userNum === correctNum;
        }
        
        return correctAns.toString().trim().toLowerCase() === userStr;
    }

    function formatCorrectAnswer(q) {
        if (q.type === 'mcq' || q.type === 'tf' || !q.type) {
            return `${String.fromCharCode(65 + q.ans)}. ${q.opts[q.ans]}`;
        } else {
            // Date, name, numeric
            if (Array.isArray(q.ans)) {
                return q.ans.join(' or ');
            }
            return q.ans;
        }
    }

    function formatUserAnswer(q, userAns) {
        if (userAns === -1 || userAns === '' || userAns === null || userAns === undefined) {
            return '— not answered';
        }
        
        if (q.type === 'mcq' || q.type === 'tf' || !q.type) {
            return `${String.fromCharCode(65 + userAns)}. ${q.opts[userAns]}`;
        } else {
            return userAns;
        }
    }

    let html = `
        <div class="results-header">
            <h1 style="font-size: 2.4rem; color: #3d514b;">${subjectName}</h1>
            <p style="font-size: 1.3rem; color: #7a6a58;"><i class="fas fa-check-circle"></i> CBT complete · ${total} questions</p>
            
            <div class="score-circle">
                <span class="score-number">${score}/${total}</span>
            </div>
            <div style="font-size: 2rem; font-weight: 600; color: ${percentage >= 70 ? '#2e7d5e' : '#b36b4a'};">
                ${percentage}% · ${percentage >= 70 ? 'passed' : 'keep practicing'}
            </div>
        </div>
    `;

    // Topic analysis
    html += `<div style="background: #fcf9f4; border-radius: 56px; padding: 36px; margin-bottom: 40px;">`;
    html += `<h2 style="margin-bottom: 24px;"><i class="fas fa-chart-pie"></i> topic performance</h2>`;
    
    if (weakTopics && weakTopics.length > 0) {
        let topicCounts = {};
        weakTopics.forEach(t => topicCounts[t] = (topicCounts[t] || 0) + 1);
        
        html += `<p style="margin-bottom: 20px;"><strong>📌 areas needing review:</strong></p>`;
        Object.entries(topicCounts).sort((a,b) => b[1] - a[1]).forEach(([topic, count]) => {
            html += `<span class="topic-badge" style="background: #ffe6d5;">${topic} (${count} missed)</span>`;
        });
    } else {
        html += `<p style="color: #2e7d5e;"><i class="fas fa-star"></i> excellent! no weak topics identified</p>`;
    }
    html += `</div>`;

    // Full question review
    html += `<h2 style="margin-bottom: 24px;"><i class="fas fa-clipboard-list"></i> detailed correction</h2>`;
    
    questions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        const isCorrect = isAnswerCorrect(userAns, q.ans);
        const statusIcon = isCorrect ? '✅' : (userAns === -1 || userAns === '' ? '⏭️' : '❌');
        const statusClass = isCorrect ? 'correct-answer' : (userAns === -1 || userAns === '' ? '' : 'wrong-answer');
        const statusText = isCorrect ? 'correct' : (userAns === -1 || userAns === '' ? 'skipped' : 'incorrect');
        
        html += `<div class="question-review">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <span style="font-size: 1.2rem; font-weight: 700;">Q${idx+1}. ${q.q}</span>
                <span class="${statusClass}" style="padding: 8px 20px; border-radius: 40px;">${statusIcon} ${statusText}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 16px;">
                <div style="background: #f6f3ef; padding: 18px; border-radius: 24px;">
                    <p style="font-weight: 600; color: #3d5e3d;"><i class="fas fa-check"></i> correct answer:</p>
                    <p style="font-size: 1.1rem;">${formatCorrectAnswer(q)}</p>
                </div>
                <div style="background: #f3ede8; padding: 18px; border-radius: 24px;">
                    <p style="font-weight: 600; color: #5e4d3a;"><i class="fas fa-user"></i> your answer:</p>
                    <p style="font-size: 1.1rem;">${formatUserAnswer(q, userAns)}</p>
                </div>
            </div>
            
            <div style="margin-top: 20px; background: #fff9e8; padding: 20px; border-radius: 24px; border-left: 8px solid #dba97a;">
                <p style="font-weight: 600;"><i class="fas fa-lightbulb"></i> explanation:</p>
                <p style="font-size: 1.05rem;">${q.explanation || 'no explanation available'}</p>
                <p style="margin-top: 14px;"><strong>📚 topic:</strong> ${q.topic || 'general'}</p>
            </div>
        </div>`;
    });

    html += `<div style="text-align: center; margin-top: 50px;">
        <a href="subject.html?id=${subjectId}" class="community-link" style="display: inline-block; padding: 16px 48px; text-decoration: none; background: #e8dfd1; border-radius: 60px; color: #3a2e26;">
            <i class="fas fa-arrow-rotate-left"></i> retake ${subjectName}
        </a>
        <a href="index.html" class="community-link" style="display: inline-block; padding: 16px 48px; margin-left: 20px; text-decoration: none; background: #d1c4b4; border-radius: 60px; color: #3a2e26;">
            <i class="fas fa-home"></i> dashboard
        </a>
    </div>`;

    document.getElementById('resultsContainer').innerHTML = html;
    
    // Trigger MathJax if available
    if (window.MathJax) {
        setTimeout(() => MathJax.typesetPromise?.(), 100);
    }
})();