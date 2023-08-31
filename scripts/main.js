document.addEventListener('DOMContentLoaded', function() {
  const linkInput = document.getElementById('linkInput');
  const viewButton = document.getElementById('viewButton');

  viewButton.addEventListener('click', function() {
    let link = linkInput.value;
    
    if (link.startsWith('https://')) {
      link = link.substring(8); // Remove 'https://'
    } else if (link.startsWith('http://')) {
      link = link.substring(7); // Remove 'http://'
    }

    if (link) {
      const newWindow = window.open('about:blank', '_blank');
      newWindow.document.write(`<iframe src="https://${link}" style="width: 100%; height: 100vh; border: none;"></iframe>`);
    }
  });
});
