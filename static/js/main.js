document.getElementById('download').addEventListener('click', function() {
    var content = document.querySelector('.container'); // Ensure this selects the correct content
  
    if (!content) {
        console.error('Content not found');
        return;
    }
  
    // Apply reduced font size for the content
    content.style.fontSize = '7px'; // Adjust the font size as needed
  
    var opt = {
        margin: [20, 25], // Increased side margins for better layout
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 }, // High quality images
        html2canvas: { 
            scale: 2, // Higher scale for better quality
            logging: true, // Optional: for debugging
            pagebreak: { mode: ['css', 'legacy'] } // Better control of page breaks
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
  
    // Generate PDF directly from the original content
    html2pdf().from(content).set(opt).save();
  });