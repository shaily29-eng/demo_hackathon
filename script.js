document.getElementById('createFlowchart').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputFlowchart = document.getElementById('outputFlowchart');
    
    // Replace this part with code that converts input to a flowchart
    const flowchartData = generateFlowchart(inputText);
    
    // For simplicity, we're displaying the flowchart data as JSON here
    outputFlowchart.textContent = JSON.stringify(flowchartData, null, 2);
});

// Replace this function with code that generates a flowchart based on the input
function generateFlowchart(inputText) {
    // You would need to parse the input and create a flowchart data structure here.
    // This can be a complex task depending on the specific requirements.
    // You may want to use a library or create your own logic for generating flowcharts.
    // For simplicity, we're just returning a sample JSON object.

    return {
        nodes: [
            { id: 1, text: "Start" },
            { id: 2, text: "Action 1" },
            { id: 3, text: "Action 2" },
            { id: 4, text: "End" }
        ],
        edges: [
            { source: 1, target: 2 },
            { source: 2, target: 3 },
            { source: 3, target: 4 }
        ]
    };
}

// document.getElementById('createFlowchart').addEventListener('click', function() {
//     const inputText = document.getElementById('inputText').value;
//     const outputFlowchart = document.getElementById('outputFlowchart');

//     // Make an API call to OpenAI
//     fetch('/generateFlowchart', {
//         method: 'POST',
//         body: JSON.stringify({ description: inputText }),
//         headers: { 'Content-Type': 'application/json' }
//     })
//     .then(response => response.json())
//     .then(data => {
//         const generatedFlowchartText = data.generatedFlowchart; // Get the flowchart text from the API response
        
//         // Render the flowchart using Mermaid
//         mermaid.mermaidAPI.initialize({
//             startOnLoad: true
//         });
//         mermaid.mermaidAPI.render('outputFlowchart', generatedFlowchartText, function(svgCode, bindFunctions) {
//             outputFlowchart.innerHTML = svgCode;
//         });
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });
