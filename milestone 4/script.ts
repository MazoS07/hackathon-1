// get refrence to the form and disply area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeEditableElement = document.getElementById('resume-display') as HTMLDivElement;

// handle form subission
form.addEventListener('submit' , (event: Event) => {
    event.preventDefault();  //prevent pg reload

    //collect input values
     const name = (document.getElementById('name') as HTMLInputElement).value
     const email = (document.getElementById('email') as HTMLInputElement).value   
     const phone = (document.getElementById('phone') as HTMLInputElement).value   
     const education = (document.getElementById('education') as HTMLInputElement).value   
     const experience = (document.getElementById('experience') as HTMLInputElement).value   
     const skills = (document.getElementById('skills') as HTMLInputElement).value   
     const project = (document.getElementById('project') as HTMLInputElement).value
     
     // generat the resume content dynamically
     const resumeSS = `
     <h2><b> EditableResume</b></h2>
     <h3>Personal Information</h3>
     <p><b>Name:</b><span contenteditable='true'>${name}</span></P>
     <p><b>Email:</b><span contenteditable='true'>${email}</span></p>
     <p><b>Phone:</b><span contenteditable='true'>${phone}</span</p>

     <h3>Education</h3>
     <p contenteditable='true'>${education}</p>

     <h3>Experience</h3>
     <p contenteditable='true'>${experience}</p>

     <h3>Skills</h3>
     <p contenteditable='true'>${skills}</p>

     <h3>Project</h3>
     <p contenteditable='true'>${project}</p>
     `;

     //display the generated rsume
     if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeSS;

     }else{
        console.error('The resume display element is missing.');
     }


}
);