document.getElementById('createFlowchart').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputFlowchart = document.getElementById('outputFlowchart');

    fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
    // Call the generateFlowchart function to create the Mermaid syntax
    const mermaidSyntax = generateFlowchart(data);

    // Display the Mermaid syntax in your HTML element
    outputFlowchart.textContent = mermaidSyntax;
    })
    .catch(error => console.error(error));


// Replace this function with code that generates a flowchart based on the input
function generateFlowchart(data) {
    const { flow } = data;
  
    if (!flow || !Array.isArray(flow)) {
      return ''; // Handle invalid data
    }
  
    // Initialize the Mermaid syntax
    let mermaidSyntax = 'graph TD;\n';
  
    // Add nodes and edges for each step in the flow
    flow.forEach((step, index) => {
      // Format step text and node name
      const formattedStep = step.replace(/"/g, '\\"');
      const nodeName = `step${index}`;
  
      // Add the step to the Mermaid syntax
      mermaidSyntax += `${nodeName}["${formattedStep}"]`;
  
      // Connect the step to the previous step (if not the first step)
      if (index > 0) {
        mermaidSyntax += ` --> ${nodeName}`;
      }
  
      mermaidSyntax += ';\n';
    });
  
    return mermaidSyntax;
  }
})
