  const marker = document.querySelector('#marcador');
  const button = document.querySelector('#boton1');

marker.addEventListener('markerFound', function() {
    // Show the button
    button.style.display = 'block';
  });

  marker.addEventListener('markerLost', function() {
    // Hide the button
    button.style.display = 'none';
  });

function goURL()
{
 	window.location.href="https://www.linkedin.com/in/robinjulio004";
}