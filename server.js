const express = require('express');
const app = express();
const port = process.env.PORT || 5500; // Use a defined port or a default

const axios = require('axios');
const { config } = require('dotenv'); // For reading environment variables

config(); // Load environment variables from .env

app.use(express.json());

app.post('/generateFlowchart', (req, res) => {
    const userDescription = req.body.description;

    // Make an API call to OpenAI
    axios({
        method: 'post',
        url: 'https://api.openai.com/v1/engines/davinci/completions',
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Use the environment variable
            'Content-Type': 'application/json'
        },
        data: {
            prompt: userDescription,
            max_tokens: 100
        }
    })
    .then(response => {
        const openaiResponse = response.data;
        const generatedFlowchartText = generateFlowchartText(openaiResponse);

        res.json({ generatedFlowchart: generatedFlowchartText });
    })
    .catch(error => {
        console.error('OpenAI API Error:', error);
        res.status(500).json({ error: 'Failed to generate the flowchart' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function generateFlowchartText(openaiResponse) {
    // Your logic to generate flowchart text from the OpenAI response
    // This logic will depend on your specific requirements
    return "flowchart: TD\n  A(Start) --> B(Action 1)\n  B --> C(Action 2)\n  C --> D(End)";
}
