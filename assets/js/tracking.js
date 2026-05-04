// AI Growth — Event Tracking
// ใส่ GA4 Measurement ID ใน gtag ด้านล่างก่อน deploy

function trackLineClick(location) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click_line', {
      event_category: 'conversion',
      event_label: location,
    });
  }
  console.log('[Track] click_line from:', location);
}

// Track ทุก link ที่ชี้ไป LINE
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href*="line.me"]').forEach(function (el) {
    el.addEventListener('click', function () {
      var loc = el.dataset.trackLocation || el.closest('[data-section]')?.dataset.section || 'unknown';
      trackLineClick(loc);
    });
  });
});
