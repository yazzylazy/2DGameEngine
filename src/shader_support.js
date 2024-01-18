"use strict"; // Variables must be declared before used!
import * as main from "./main.js"; // access as main module
import * as vertexBuffer from "./VertexBuffer.js"; //vertexBuffer module

let mCompiledShader = null;
let mVertexPositionRef = null;

function loadAndCompileShader(id, shaderType) {
    let shaderSource = null, compiledShader = null;
    // Step A: Get the shader source from index.html
    let shaderText = document.getElementById(id);
    shaderSource = shaderText.firstChild.textContent;
    let gl = main.getGL();
    // Step B: Create shader based on type: vertex or fragment
    compiledShader = gl.createShader(shaderType);
    // Step C: Compile the created shader
    gl.shaderSource(compiledShader, shaderSource);
    gl.compileShader(compiledShader);
    // Step D: check for errors and return results (null if error)
    // The log info is how shader compilation errors are displayed.
    // This is useful for debugging the shaders.
    if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
    throw new Error("A shader compiling error occurred: " +
    gl.getShaderInfoLog(compiledShader));
    }
    return compiledShader;
}

function init(vertexShaderID, fragmentShaderID) {
    let gl = main.getGL();
    // Step A: load and compile vertex and fragment shaders
    let vertexShader = loadAndCompileShader(vertexShaderID,
    gl.VERTEX_SHADER);
    let fragmentShader = loadAndCompileShader(fragmentShaderID,
    gl.FRAGMENT_SHADER);
    // Step B: Create and link the shaders into a program.
    mCompiledShader = gl.createProgram();
    gl.attachShader(mCompiledShader, vertexShader);
    gl.attachShader(mCompiledShader, fragmentShader);
    gl.linkProgram(mCompiledShader);
    // Step C: check for error
    if (!gl.getProgramParameter(mCompiledShader, gl.LINK_STATUS)) {
        throw new Error("Error linking shader");
        return null;
    }
    // Step D: Gets reference to aVertexPosition attribute in the shader
    mVertexPositionRef = gl.getAttribLocation(mCompiledShader,"aVertexPosition");
}

function activate() {
    // Step A: access to the webgl context
    let gl = main.getGL();
    // Step B: identify the compiled shader to use
    gl.useProgram(mCompiledShader);
    // Step C: bind vertex buffer to attribute defined in vertex shader
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer.get());
    gl.vertexAttribPointer(this.mVertexPositionRef,3, gl.FLOAT, false, 0, 0); 
    gl.enableVertexAttribArray(this.mVertexPositionRef);
   }

   export{init, activate}