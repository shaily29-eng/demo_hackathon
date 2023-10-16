document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('createFlowchart').addEventListener('click', fetchData);
});
// Define the fetchData function
async function fetchData() {
  try {
      const response = await fetch('http://localhost:5500/data');
      const data = await response.json();
      const mermaidSyntax = generateFlowchart(data);
      
      .innerHTML = mermaidSyntax;
  } catch (error) {
      console.error(error);
  }
}

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