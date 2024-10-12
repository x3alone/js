
export function pick() {
    // Create a div to display the HSL value
    const hslContainer = document.createElement("div");
    hslContainer.setAttribute('class', 'color-display hsl-value');

    // Create a text node for the initial HSL value
    const initialHSL = document.createTextNode('hsl(0, 50%, 0%)');
    hslContainer.appendChild(initialHSL);
    const referenceDiv = document.getElementById("referenceDiv");
    document.body.insertBefore(hslContainer, referenceDiv);

    // Create a div to display the hue value
    const hueDisplay = document.createElement("div");
    hueDisplay.setAttribute('class', 'text hue-display');
    hueDisplay.setAttribute('style', 'position: absolute;');
    let hueText = document.createTextNode(`Hue: 0`);
    hueDisplay.appendChild(hueText);
    document.body.insertBefore(hueDisplay, referenceDiv);

    // Create a div to display the luminosity value
    const luminosityDisplay = document.createElement("div");
    luminosityDisplay.setAttribute('class', 'text luminosity-display');
    luminosityDisplay.setAttribute('style', 'position: absolute;');
    const luminosityText = document.createTextNode('Luminosity: 0');
    luminosityDisplay.appendChild(luminosityText);
    document.body.insertBefore(luminosityDisplay, referenceDiv);
  
    // Create the SVG for the crosshairs
    const svgCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgCanvas.setAttribute('height', window.innerHeight);
    svgCanvas.setAttribute('width', window.innerWidth);

    // Create the line for the X axis (horizontal)
    const lineX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineX.setAttribute('id', 'crosshairY');
    lineX.setAttribute('x1', 0);
    lineX.setAttribute('x2', 0);
    lineX.setAttribute('y1', 0);
    lineX.setAttribute('y2', 0);

    // Create the line for the Y axis (vertical)
    const lineY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineY.setAttribute('id', 'crosshairX');
    lineY.setAttribute('y1', 0);
    lineY.setAttribute('y2', 0);
    lineY.setAttribute('x1', 0);
    lineY.setAttribute('x2', 0);
    
    // Style the lines
    lineX.style.stroke = 'white';
    lineX.style.strokeWidth = '1';
    lineY.style.stroke = 'white';
    lineY.style.strokeWidth = '1';

    // Append lines to the SVG
    svgCanvas.append(lineX, lineY);
    document.body.append(svgCanvas);

    // Mouse movement event listener
    document.addEventListener("mousemove", event => {
        // Get the mouse position
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Calculate hue and luminosity based on mouse position
        const hue = Math.round((mouseX / width) * 360);
        const luminosity = Math.round((1 - mouseY / height) * 100);

        // Update the displayed values
        hueDisplay.textContent = `Hue: ${hue}`;
        luminosityDisplay.textContent = `Luminosity: ${luminosity}`;
        hslContainer.textContent = `hsl(${hue}, 50%, ${luminosity}%)`;
        document.body.style.background = `hsl(${hue}, 50%, ${luminosity}%)`;

        // Update the SVG lines
        lineX.setAttribute('x1', 0);
        lineX.setAttribute('x2', width);
        lineX.setAttribute('y1', mouseY);
        lineX.setAttribute('y2', mouseY);
        
        lineY.setAttribute('y1', 0);
        lineY.setAttribute('y2', height);
        lineY.setAttribute('x1', mouseX);
        lineY.setAttribute('x2', mouseX);
    });

    // Click event to copy the HSL value to clipboard
    document.addEventListener('click', () => {
        const copyHSL = hslContainer.innerHTML;
        navigator.clipboard.writeText(copyHSL).then(() => {
            console.log('HSL value copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
}



// export function pick() {
//     const hslDiv = document.createElement("div");
//     hslDiv.className = 'hsl';
//     hslDiv.textContent = 'hsl(0, 50%, 0%)';
//     hslDiv.style.position = 'absolute';
//     hslDiv.style.top = '50%';
//     hslDiv.style.left = '50%';
//     hslDiv.style.transform = 'translate(-50%, -50%)';
//     document.body.appendChild(hslDiv);

//     const hueDiv = document.createElement("div");
//     hueDiv.className = 'hue';
//     hueDiv.style.position = 'absolute';
//     document.body.appendChild(hueDiv);

//     const lumDiv = document.createElement("div");
//     lumDiv.className = 'luminosity';
//     lumDiv.style.position = 'absolute';
//     document.body.appendChild(lumDiv);

//     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     svg.setAttributeNS(null, 'height', window.innerHeight);
//     svg.setAttributeNS(null, 'width', window.innerWidth);

//     const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//     axisY.setAttributeNS(null, 'id', 'axisY');
//     axisY.style.stroke = 'white';
//     axisY.style.strokeWidth = '1';

//     const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//     axisX.setAttributeNS(null, 'id', 'axisX');
//     axisX.style.stroke = 'white';
//     axisX.style.strokeWidth = '1';

//     svg.append(axisX, axisY);
//     document.body.append(svg);

//     document.addEventListener("mousemove", event => {
//         const windowWidth = document.documentElement.clientWidth;
//         const windowHeight = document.documentElement.clientHeight;
//         const x = event.clientX;
//         const y = event.clientY;

//         const hue = Math.round((x / windowWidth) * 360);
//         const lum = Math.round((1 - y / windowHeight) * 100);

//         hueDiv.textContent = `Hue: ${hue}`;
//         lumDiv.textContent = `Luminosity: ${lum}`;
//         hslDiv.textContent = `hsl(${hue}, 50%, ${lum}%)`;
//         document.body.style.backgroundColor = `hsl(${hue}, 50%, ${lum}%)`;

//         axisY.setAttributeNS(null, 'x1', 0);
//         axisY.setAttributeNS(null, 'x2', windowWidth);
//         axisY.setAttributeNS(null, 'y1', y);
//         axisY.setAttributeNS(null, 'y2', y);
        
//         axisX.setAttributeNS(null, 'y1', 0);
//         axisX.setAttributeNS(null, 'y2', windowHeight);
//         axisX.setAttributeNS(null, 'x1', x);
//         axisX.setAttributeNS(null, 'x2', x);
//     });

//     document.addEventListener('click', () => {
//         const copyValue = hslDiv.textContent;
//         navigator.clipboard.writeText(copyValue).then(() => {
//             console.log('HSL value copied to clipboard!');
//         }).catch(err => {
//             console.error('Could not copy text: ', err);
//         });
//     });
// }
