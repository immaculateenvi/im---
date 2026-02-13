// ========== VERSION.JS - COMPLETE VERSION CHECKER ==========
const APP_VERSION = '3.0.0'; // Update this with every release
const VERSION_CHECK_URL = 'https://yourdomain.com/version.json?t=' + Date.now(); // Add timestamp to avoid cache

// Store version in localStorage for comparison
localStorage.setItem('app_version', APP_VERSION);

// Check for updates on page load
document.addEventListener('DOMContentLoaded', function() {
    checkForUpdates();
    
    // Also check when coming back online
    window.addEventListener('online', checkForUpdates);
});

async function checkForUpdates(manual = false) {
    // Only check if online
    if (!navigator.onLine) {
        console.log('Offline - version check skipped');
        return;
    }

    try {
        // Try to fetch latest version info
        const response = await fetch(VERSION_CHECK_URL);
        const data = await response.json();
        
        const currentVersion = localStorage.getItem('app_version');
        const lastUpdateCheck = localStorage.getItem('last_update_check');
        const now = Date.now();
        
        // Check if update is available (once per day maximum, unless manual)
        if (data.version !== currentVersion) {
            if (manual || !lastUpdateCheck || now - parseInt(lastUpdateCheck) > 86400000) {
                localStorage.setItem('last_update_check', now.toString());
                showUpdateNotification(data.version, data.changes || []);
            }
        } else {
            if (manual) {
                showToast('✓ You have the latest version', 'success');
            }
        }
    } catch (error) {
        console.log('Version check failed:', error);
        if (manual) {
            showToast('⚠ Could not check for updates', 'error');
        }
    }
}

function showUpdateNotification(newVersion, changes) {
    // Create update notification banner
    const notification = document.createElement('div');
    notification.id = 'update-notification';
    notification.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px; background: #2a5c4a; color: white; padding: 20px 24px; border-radius: 60px; box-shadow: 0 4px 20px rgba(0,0,0,0.2); z-index: 9999; max-width: 400px; animation: slideIn 0.3s;">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: ${changes.length ? '12px' : '0'};">
                <div style="background: rgba(255,255,255,0.2); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-download" style="font-size: 1.5rem;"></i>
                </div>
                <div style="flex: 1;">
                    <strong style="font-size: 1.2rem;">New version available!</strong>
                    <div style="font-size: 0.9rem; opacity: 0.9;">Version ${newVersion}</div>
                </div>
            </div>
            ${changes.length ? `
                <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 40px; margin: 12px 0; font-size: 0.9rem;">
                    <ul style="margin: 0; padding-left: 20px;">
                        ${changes.map(change => `<li>${change}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button onclick="dismissUpdate()" style="background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); padding: 8px 20px; border-radius: 40px; cursor: pointer; font-weight: 600;">
                    Later
                </button>
                <button onclick="updateApp()" style="background: white; color: #2a5c4a; border: none; padding: 8px 20px; border-radius: 40px; font-weight: 600; cursor: pointer;">
                    Update Now
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(notification);
    
    // Add animation keyframes if not present
    if (!document.querySelector('#update-animation')) {
        const style = document.createElement('style');
        style.id = 'update-animation';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(20px); }
            }
        `;
        document.head.appendChild(style);
    }
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 20px; right: 20px; background: ${type === 'success' ? '#4CAF50' : '#f44336'}; 
        color: white; padding: 12px 24px; border-radius: 60px; z-index: 9999; animation: slideIn 0.3s;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    toast.innerHTML = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Global functions
window.updateApp = function() {
    const notification = document.getElementById('update-notification');
    if (notification) notification.remove();
    
    // Show progress
    const progress = document.createElement('div');
    progress.id = 'update-progress';
    progress.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px; background: #2a5c4a; color: white; padding: 20px 30px; border-radius: 60px; z-index: 9999; display: flex; align-items: center; gap: 15px;">
            <i class="fas fa-spinner fa-spin fa-2x"></i>
            <div>
                <div style="font-weight: bold;">Updating application...</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">Clearing old cache</div>
            </div>
        </div>
    `;
    document.body.appendChild(progress);
    
    // Clear old cache and reload
    if ('caches' in window) {
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== 'envilinks-cache-v3') {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Unregister old service workers
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(registrations => {
                    for (let registration of registrations) {
                        registration.unregister();
                    }
                });
            }
            // Clear localStorage except version
            const version = localStorage.getItem('app_version');
            localStorage.clear();
            if (version) localStorage.setItem('app_version', version);
            
            // Force reload from server
            window.location.reload(true);
        });
    } else {
        window.location.reload(true);
    }
};

window.dismissUpdate = function() {
    const notification = document.getElementById('update-notification');
    if (notification) notification.remove();
    localStorage.setItem('update_dismissed', Date.now().toString());
};
// Add to version.js - force update for critical changes
async function checkForUpdates(manual = false) {
    if (!navigator.onLine) return;

    try {
        const response = await fetch(VERSION_CHECK_URL);
        const data = await response.json();
        
        const currentVersion = localStorage.getItem('app_version');
        
        if (data.version !== currentVersion) {
            if (data.forceUpdate) {
                // Force update immediately without asking
                showForceUpdateNotification(data.version, data.changes);
            } else {
                showUpdateNotification(data.version, data.changes);
            }
        }
    } catch (error) {
        console.log('Version check failed:', error);
    }
}

function showForceUpdateNotification(newVersion, changes) {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="update-history-modal" style="text-align: center;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ff6b6b; margin-bottom: 20px;"></i>
            <h3>Critical Update Required</h3>
            <p>A new version (${newVersion}) is available with important fixes.</p>
            ${changes.length ? `
                <div style="background: #f5f5f5; padding: 15px; border-radius: 20px; margin: 20px 0; text-align: left;">
                    <strong>What's new:</strong>
                    <ul style="margin: 10px 0 0;">
                        ${changes.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            <p>The app will now update to ensure proper functionality.</p>
            <button onclick="updateApp()" style="background: #2a5c4a; color: white; border: none; padding: 12px 40px; border-radius: 40px; font-weight: 600; cursor: pointer;">
                Update Now
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}