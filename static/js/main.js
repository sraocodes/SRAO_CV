document.getElementById('download').addEventListener('click', function() {
    var content = document.querySelector('.container'); // Assuming .container has the content you want to export

    var opt = {
      margin:       10,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(content).set(opt).save();
});
