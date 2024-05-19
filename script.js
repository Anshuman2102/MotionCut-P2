function togglePassword(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);
    
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }
  
  // Add password strength checker and form disable/enable functionality
  
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const submitButton = document.querySelector('.btn-primary');
  
  confirmPasswordInput.addEventListener('input', checkPasswordsMatch);
  passwordInput.addEventListener('input', checkPasswordsMatch);
  
  function checkPasswordsMatch() {
    if (passwordInput.value === confirmPasswordInput.value) {
      submitButton.disabled = false;
      submitButton.style.backgroundColor = '#3498db';
    } else {
      submitButton.disabled = true;
      submitButton.style.backgroundColor = '#ccc';
    }
  }
  
  // Password strength meter
  passwordInput.addEventListener('input', function() {
    const strength = checkPasswordStrength(this.value);
    updatePasswordMeter(strength);
    updateProgressBar(strength);
  });
  
  function checkPasswordStrength(password) {
    let strength = 'weak';
    if (password.length >= 8) {
      strength = 'medium';
    }
    if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
      strength = 'strong';
    }
    return strength;
  }
  
  function updatePasswordMeter(strength) {
    const meter = document.querySelector('.password-strength');
    meter.classList.remove('weak', 'medium', 'strong');
    meter.classList.add(strength);
  }
  
  function updateProgressBar(strength) {
    const progressBar = document.querySelector('.progress-bar');
    let progress = 0;
    if (strength === 'medium') {
      progress = 50;
    } else if (strength === 'strong') {
      progress = 100;
    }
    progressBar.style.width = `${progress}%`;
  }
  