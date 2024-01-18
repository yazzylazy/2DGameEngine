"use strict";  // Operate in Strict mode such that variables must be declared before used!
import * as vertexBuffer from "./VertexBuffer.js"
import * as simpleShader from "./shader_support.js"

var gGL = null;

function initializeGL() {
    // the "GLCanvas" defined in the index.html file
    var canvas = document.getElementById("GLCanvas");

    // Get standard webgl, or webgl2
    gGL = canvas.getContext("webgl") || canvas.getContext("webgl2");

     // Set clear color to black, fully opaque
    gGL.clearColor(0.0, 0.0, 0.0, 1.0);

    // 1. initialize buffer with vertex positions for the unit square
    vertexBuffer.init(); // function defined in the vertex_buffer.js
    // 2. now load and compile the vertex and fragment shaders
    simpleShader.init("VertexShader", "FragmentShader");
    // the two shaders are defined in the index.html file
    // init() function is defined in shader_support.js file
}

function drawSquare() {
    // Step A: Activate the shader
    simpleShader.activate();
    // Step B. draw with the above settings
    gGL.drawArrays(gGL.TRIANGLE_STRIP, 0, 4);
}

function getGL() { return gGL; }

// Clears the gGL area to the defined color
function clearCanvas() {
    gGL.clear(gGL.COLOR_BUFFER_BIT);      // clear to the color previously set
}

// this is the function that will cause the WebGL drawing
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    initializeGL();   // Binds gGL context to WebGL functionality
    clearCanvas();    // Clears the GL area
    drawSquare();
  });



export{getGL}