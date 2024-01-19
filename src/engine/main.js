"use strict";  // Operate in Strict mode such that variables must be declared before used!
import * as vertexBuffer from "./engine_vertexBuffer.js"
import SimpleShader from "./simple_shader.js"

var gGL = null;

function initializeGL() {
    // the "GLCanvas" defined in the index.html file
    var canvas = document.getElementById("GLCanvas");

    // Get standard webgl, or webgl2
    gGL = canvas.getContext("webgl") || canvas.getContext("webgl2");

}

function drawSquare() {
    // Step A: Activate the shader
    mShader.activate();
    // Step B. draw with the above settings
    gGL.drawArrays(gGL.TRIANGLE_STRIP, 0, 4);
}

function getGL() { return gGL; }

// Clears the gGL area to the defined color
function clearCanvas(color) {
    gGL.clearColor(color[0], color[1], color[2], color[3]);
    gGL.clear(gGL.COLOR_BUFFER_BIT); // clear to the color set   // clear to the color previously set
}

// this is the function that will cause the WebGL drawing
function init(htmlCanvasID) {
    initializeGL();    // setup mGL
    vertexBuffer.init()  // setup mGLVertexBuff   
  };



export{getGL,init,clearCanvas,drawSquare}