/**
 * Vital Healthcare Services - Standalone Script
 * Clean, lightweight, dependency-free vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = '#09090b';
        navMenu.style.padding = '20px';
        navMenu.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
        }
      });
    });
  }

  // Header background shade on scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.borderBottomColor = 'rgba(249, 115, 22, 0.25)';
    } else {
      header.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
    }
  });

  // Placement Referral Form Handler
  const referralForm = document.getElementById('referralForm');
  const referralSuccess = document.getElementById('referralSuccess');
  const submitBtn = document.getElementById('submitReferralBtn');

  if (referralForm) {
    referralForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form values
      const formData = new FormData(referralForm);
      const name = formData.get('name');
      const org = formData.get('organization');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const service = formData.get('service');
      const urgency = formData.get('urgency');
      const notes = formData.get('notes');

      // Visual feedback
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitting Referral...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.style.display = 'none';
        }
        if (referralSuccess) {
          referralSuccess.style.display = 'flex';
          referralSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        referralForm.reset();
      }, 700);
    });
  }
});
