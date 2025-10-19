// Courses mapped by branch
const coursesByBranch = {
  'Applied Sciences': ['Engineering', 'Physics', 'Computer Science'],
  'Creative Arts': ['Graphic Design', 'Music Theory', 'Film Production'],
  'Global Studies': ['Economics', 'History', 'Foreign Languages']
};

const branchOptions = document.getElementById('branchOptions');
const courseOptions = document.getElementById('courseOptions');
const courseQuestion = document.getElementById('courseQuestion');
const selectedBranchSpan = document.getElementById('selectedBranch');
const nextBtnWrapper = document.getElementById('nextBtnWrapper');
const nextBtn = document.getElementById('nextBtn');

let selectedCourse = null;

// Handler for choosing branch
branchOptions.addEventListener('click', e => {
  if (e.target.classList.contains('option-btn')) {
    const branch = e.target.getAttribute('data-branch');
    selectedBranchSpan.textContent = branch;
    courseOptions.innerHTML = '';

    coursesByBranch[branch].forEach(course => {
      const btn = document.createElement('button');
      btn.classList.add('option-btn');
      btn.textContent = course;
      btn.setAttribute('data-course', course);
      courseOptions.appendChild(btn);
    });

    courseQuestion.classList.remove('hidden');
    courseOptions.classList.remove('hidden');
    nextBtnWrapper.classList.add('hidden');
    // Optional: Scroll to courses section
    courseQuestion.scrollIntoView({ behavior: 'smooth' });
  }
});

// Handler for choosing course
courseOptions.addEventListener('click', e => {
  if (e.target.classList.contains('option-btn')) {
    // Remove selected highlight from all buttons
    Array.from(courseOptions.children).forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    selectedCourse = e.target.getAttribute('data-course');
    nextBtnWrapper.classList.remove('hidden');
    nextBtnWrapper.scrollIntoView({ behavior: 'smooth' });
  }
});

// Handler for next button
nextBtn.addEventListener('click', () => {
  if (selectedCourse) {
    alert(`You selected: ${selectedBranchSpan.textContent} / ${selectedCourse}`);
    // Implement logic for the next step (e.g., go to next question/page)
  }
});
