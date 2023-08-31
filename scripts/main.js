document.addEventListener('DOMContentLoaded', function() {
  const linkInput = document.getElementById('linkInput');
  const viewButton = document.getElementById('viewButton');

  viewButton.addEventListener('click', function() {
    const link = linkInput.value;
    if (link) {
      const newWindow = window.open('about:blank', '_blank');
      newWindow.document.write(`<iframe src="${link}" style="width: 100%; height: 100vh; border: none;"></iframe>`);
    }
  });
});
