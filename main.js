"use strict";  // Operate in Strict mode such that variables must be declared before used!

var gGL = null;

function initializeGL() {
    // the "GLCanvas" defined in the index.html file
    var canvas = document.getElementById("GLCanvas");

    // Get standard webgl, or webgl2
    gGL = canvas.getContext("webgl") || canvas.getContext("webgl2");

     // Set clear color to black, fully opaque
    gGL.clearColor(0.0, 0.0, 0.0, 1.0);
     // Clear the color buffer with specified clear color
    gGL.clear(gGL.COLOR_BUFFER_BIT);

}

// Clears the gGL area to the defined color
function clearCanvas() {
    gGL.clear(gGL.COLOR_BUFFER_BIT);      // clear to the color previously set
}

// this is the function that will cause the WebGL drawing
function doGLDraw() {
    initializeGL();   // Binds gGL context to WebGL functionality
    //clearCanvas();    // Clears the GL area
}