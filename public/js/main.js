document.getElementById('download').addEventListener('click', function() {
  var content = document.querySelector('.container'); // Original content

  // Clone the content
  var clonedContent = content.cloneNode(true);
  document.body.appendChild(clonedContent);
  clonedContent.style.visibility = 'hidden'; // Hide the clone
  clonedContent.style.position = 'absolute'; // Avoid affecting layout
  clonedContent.style.left = '-9999px'; // Move it off-screen

  // Reduce font size in the clone
  clonedContent.style.fontSize = '6px'; // Adjust this value as needed

  var opt = {
    margin:       10,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 1 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Generate PDF from the cloned content
  html2pdf().from(clonedContent).set(opt).save().then(function() {
      // Remove the cloned content after saving PDF
      document.body.removeChild(clonedContent);
  });
});
