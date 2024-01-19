"use strict";  // Operate in Strict mode such that variables must be declared before used!
import * as engine from "../engine/main.js";
import SimpleShader from "../engine/simple_shader.js";

class MyGame { 
    constructor(htmlCanvasID) {
        // The shader
        let mShader = null;

        // Step A: Initialize the game engine
        engine.init(htmlCanvasID);

        // create the shader
        mShader = new SimpleShader("src/glsl_shaders/simple_vs.glsl","src/glsl_shaders/simple_fs.glsl")

        // Step B: Clear the canvas
        engine.clearCanvas([1, 0, 0, 1]);

        // Activate the proper shader
        mShader.activate([1, 0, 1, 0.5]);

        // Step C3: Draw with the currently activated geometry and the activated shader
        var gl = engine.getGL();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

};

window.onload = function() {
    new MyGame('GLCanvas');
}