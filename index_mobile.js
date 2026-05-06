// index_mobile.js

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('open');

    mobileMenu.classList.toggle('open');
    mobileToggle.innerHTML = isOpen ? '&#9776;' : '&#10005;';
    mobileToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close mobile menu when a menu link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      mobileToggle.innerHTML = '&#9776;';
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Close menu if screen rotates or resizes wider
window.addEventListener('resize', function () {
  if (window.innerWidth > 768 && mobileMenu && mobileToggle) {
    mobileMenu.classList.remove('open');
    mobileToggle.innerHTML = '&#9776;';
    mobileToggle.setAttribute('aria-expanded', 'false');
  }
});

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.parentElement;
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');

  document.querySelectorAll('.faq-item').forEach(function (faqItem) {
    faqItem.classList.remove('open');

    const faqAnswer = faqItem.querySelector('.faq-answer');
    if (faqAnswer) {
      faqAnswer.style.maxHeight = null;
    }
  });

  if (!isOpen && answer) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// Make toggleFaq available for inline onclick buttons
window.toggleFaq = toggleFaq;

// Account form handler
const accountForm = document.getElementById('accountForm');

if (accountForm) {
  accountForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const accountInput = document.getElementById('accountNumber');
    const lastNameInput = document.getElementById('lastName');

    const accountNumber = accountInput ? accountInput.value.trim() : '';
    const lastName = lastNameInput ? lastNameInput.value.trim() : '';

    if (!accountNumber || !lastName) {
      alert('Please enter both your account number and last name.');
      return;
    }

    alert('Account lookup is not yet connected to a backend. Please contact us for assistance.');
  });
}

// Smooth close mobile menu after hash navigation
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function () {
    if (mobileMenu && mobileToggle) {
      mobileMenu.classList.remove('open');
      mobileToggle.innerHTML = '&#9776;';
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
