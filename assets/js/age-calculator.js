// Calculate Finn's age based on birth date
function calculateFinnAge() {
  // Finn's birth date: July 13, 2013
  const birthDate = new Date(2013, 6, 13); // Month is 0-indexed, so 6 = July
  const today = new Date();
  
  // Start with simple year difference
  let age = today.getFullYear() - birthDate.getFullYear();
  
  // Check if birthday has occurred this year
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  // If we haven't reached the birthday month yet, or we're in the month but before the day, subtract 1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const ageElement = document.getElementById('finn-age');
  if (ageElement) {
    ageElement.textContent = calculateFinnAge();
  }
});
