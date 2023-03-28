var gradeSystem = {

  subjects : ["Web System", "Database", "Programming", "OOP", "FDS", "Elective", "SIA"],
  min : 0, max: 200,

  init : () => {
    let form = document.getElementById("gradeForm");
    form.onsubmit = () => gradeSystem.calc();

    let element;
    for (let s of gradeSystem.subjects) {

      element = document.createElement("label");
      element.innerHTML = s;
      form.appendChild(element);

      element = document.createElement("div");
      element.name = s;
      element.className = "row";
      element.innerHTML = `<div class="grade"></div><input type="number" min="${gradeSystem.min}" max="${gradeSystem.max}" required>`;
      form.appendChild(element);
    }
    element = document.createElement("input");
    element.type = "submit";
    element.value = "Calculate";
    form.appendChild(element);
  },

  calc : () => {
    let gradingScale, remarks, descriptor, average = 0, total = 0,
        subjects = document.querySelectorAll("#gradeForm input[type=number]");

    for (let s of subjects) {
      gradingScale = parseInt(s.value);
      total += gradingScale;

      if (gradingScale>=101) {
        remarks = "Does not exist!";
        descriptor = "Does not exist!" 
      }
      else if (gradingScale>=90) {
        remarks = "Passed";
        descriptor = "Outstanding"  
      }
      else if (gradingScale>=85) {
        remarks = "Passed";
        descriptor = "Very Satisfactory"  
      }
      else if (gradingScale>=80) {
        remarks = "Passed";
        descriptor = "Satisfactory"  
      }
      else if (gradingScale>=75) {
        remarks = "Passed";
        descriptor = "Fairly Satisfactory"  
      }
      else if (gradingScale>=0) { 
        remarks = "Failed";
        descriptor = "Did not meet expectations"  
      }
      s.previousSibling.innerHTML = remarks;
    }
    document.getElementById("gradeAverage").innerHTML = (total / subjects.length).toFixed(2);
    document.getElementById("gradeRemarks").innerHTML = (remarks);
    document.getElementById("gradeDescriptor").innerHTML = (descriptor);
    return false;
  }
};
window.onload = gradeSystem.init;