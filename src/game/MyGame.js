"use strict";  // Operate in Strict mode such that variables must be declared before used!
import * as engine from "../engine/core/engine_core.js";
import SimpleShader from "../engine/simple_shader.js";
import Renderable from "../engine/renderable.js";

class MyGame { 
    constructor(htmlCanvasID) {

        // Step A: Initialize the game engine
        engine.init(htmlCanvasID);

        // create the shader
        this.mConstColorShader = new SimpleShader("src/glsl_shaders/simple_vs.glsl","src/glsl_shaders/simple_fs.glsl")

         // Step C: Create the Renderable objects:
        this.mWhiteSq = new Renderable(this.mConstColorShader);
        this.mWhiteSq.setColor([1, 1, 1, 1]);
        this.mRedSq = new Renderable(this.mConstColorShader);
        this.mRedSq.setColor([1, 0, 1, 0.5]);

        // Step B: Clear the canvas
        engine.clearCanvas([0, 0, 0, 1]);

        // Step D1: Draw Renderable objects with the white shader
        this.mWhiteSq.draw();
        // Step D2: Draw Renderable objects with the red shader
        this.mRedSq.draw();
    }

};

window.onload = function() {
    new MyGame('GLCanvas');
}