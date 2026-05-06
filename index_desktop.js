// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileToggle.addEventListener('click', function () {
  const isOpen = mobileMenu.style.display === 'block';
  mobileMenu.style.display = isOpen ? 'none' : 'block';
  mobileToggle.innerHTML = isOpen ? '&#9776;' : '&#10005;';
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
    mobileToggle.innerHTML = '&#9776;';
  });
});

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.parentElement;
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(function (el) {
    el.classList.remove('open');
    el.querySelector('.faq-answer').style.maxHeight = null;
  });

  // Open clicked (if it was closed)
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// Account form handler
document.getElementById('accountForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var acct = document.getElementById('accountNumber').value.trim();
  var name = document.getElementById('lastName').value.trim();
  if (!acct || !name) {
    alert('Please enter both your account number and last name.');
    return;
  }
  alert('Account lookup is not yet connected to a backend. Please contact us for assistance.');
});
