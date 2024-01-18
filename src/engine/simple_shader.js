import * as main from "./main.js"; // access as main module
import * as vertexBuffer from "./engine_vertexBuffer.js"; //vertexBuffer module

export default class SimpleShader{
    //instance variables

    //constructor
    constructor(vertexShaderID, fragmentShaderID) {
       
        // Convention: all instance variables: mVariables
        this.mCompiledShader = null; // ref to compiled shader in webgl
        this.mVertexPositionRef = null; // ref to VertexPosition in shader

        let gl = main.getGL();

        // Step A: load and compile vertex and fragment shaders
        this.mVertexShader = loadAndCompileShader(vertexShaderID,gl.VERTEX_SHADER);
        this.mFragmentShader = loadAndCompileShader(fragmentShaderID,gl.FRAGMENT_SHADER);

        // Step B: Create and link the shaders into a program.
        this.mCompiledShader = gl.createProgram();
        gl.attachShader(this.mCompiledShader, this.mVertexShader);
        gl.attachShader(this.mCompiledShader, this.mFragmentShader);
        gl.linkProgram(this.mCompiledShader);

        // Step C: check for error
        if (!gl.getProgramParameter(this.mCompiledShader, gl.LINK_STATUS)) {
            throw new Error("Error linking shader");
            return null;
        }

        // Step D: reference to aVertexPosition attribute in the shaders
        this.mVertexPositionRef = gl.getAttribLocation(
        this.mCompiledShader, "aVertexPosition");
    }

    activate() {
        let gl = main.getGL();
        gl.useProgram(this.mCompiledShader);
        // bind vertex buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer.get());
        gl.vertexAttribPointer(this.mVertexPositionRef,3,gl.FLOAT,false,0, 0); 
        gl.enableVertexAttribArray(this.mVertexPositionRef);
    }

   
}

function loadAndCompileShader(id, shaderType) {
    let shaderSource = null, compiledShader = null;
    let gl = main.getGL();
    // Step A: Get the shader source from index.html
    let shaderText = document.getElementById(id);
    shaderSource = shaderText.firstChild.textContent;
    // Step B: Create shader based on type: vertex or fragment
    compiledShader = gl.createShader(shaderType);
    // Step C: Compile the created shader
    gl.shaderSource(compiledShader, shaderSource);
    gl.compileShader(compiledShader);
    // Step D: check for errors and return results (null if error)
    // The log info is how shader compilation errors are displayed
    // This is useful for debugging the shaders.
    if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
    throw new Error("A shader compiling error occurred: " +
    gl.getShaderInfoLog(compiledShader));
    }
    return compiledShader;
}

