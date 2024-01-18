"use strict";
import * as main from "./main.js"

let mGLVertexBuffer = null;
function get() {return mGLVertexBuffer;}

let mVerticesOfSquare = [
    0.5, 0.5, 0.0,
    -0.5, 0.5, 0.0,
    0.5, -0.5, 0.0,
    -0.5, -0.5, 0.0
   ];

function init(){
    let gl = main.getGL();

    // create a buffer of vertex positions
    mGLVertexBuffer = gl.createBuffer();

    // Activate vertexBuffer
    gl.bindBuffer(gl.ARRAY_BUFFER,mGLVertexBuffer);

    //loads vertices into buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mVerticesOfSquare),gl.STATIC_DRAW);

}

export{init,get}