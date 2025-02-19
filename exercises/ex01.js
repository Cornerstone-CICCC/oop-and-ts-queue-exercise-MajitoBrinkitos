// Create a function called processApplicants which processes a queue of applicants and remove those who do not meet all the requirements.
// Requirements:
// yearsExperience >= 2
// techStack = needs to have at least React experience
// Make sure to implement FIFO (First-In, First-Out)

const Queue = require('../lib/Queue')

function processApplicants(queue) {
  //Process a queue of applicants, remove those who don´t meet requirements
  //Requirements: yearsExperience, techStack
  const size = queue.items.length; //initial size of the queue

  //Dequeue the first applicant
  for(let i=0; i< size; i++){
    const applicant = queue.dequeue();

    //Applicant meet requirements
    if(applicant.yearsExperience >=2 && applicant.techStack.includes('React')){
      queue.enqueue(applicant); //Reincorporates applicant that meets all requirements
    }
  }
}

const applicants = new Queue()
applicants.enqueue({ name: "John Smith", yearsExperience: 3, techStack: ['Angular', 'Node'] })
applicants.enqueue({ name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] })
applicants.enqueue({ name: "Joe Smith", yearsExperience: 1, techStack: ['React', 'Node'] })
applicants.enqueue({ name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] })

processApplicants(applicants)
console.log(applicants.printQueue());
// Expected output:
// { name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] }
// { name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] }
