// Ad removal based on common ad element selectors.
function removeAds() {
    // List of common ad-related classes, ids, or tags
    const adSelectors = [
        'iframe[src*="ad"]',
        'div[class*="ad"]',
        'img[src*="ad"]',
        'div[id*="ad"]',
        'ins.adsbygoogle',
        'div[data-ad]'
    ];

    // Remove each ad element found by the selector
    adSelectors.forEach(selector => {
        const ads = document.querySelectorAll(selector);
        ads.forEach(ad => ad.remove());
    });
}

// Run the function to remove ads after the page loads
document.addEventListener('DOMContentLoaded', removeAds);