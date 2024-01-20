"use strict";  // Operate in Strict mode such that variables must be declared before used!
import * as engine from "../engine/core/engine_core.js";
import SimpleShader from "../engine/simple_shader.js";
import Renderable from "../engine/renderable.js";
//import glMatrix from 'https://cdn.jsdelivr.net/npm/gl-matrix@3.4.3/+esm'

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

        // create a new identify transform operator
        var xform = glMatrix.mat4.create();

        // Step E: compute the white square transform
        glMatrix.mat4.translate(xform, xform, glMatrix.vec3.fromValues(-0.25, 0.25, 0.0));
        glMatrix.mat4.rotateZ(xform, xform, 0.2);      // rotation is in radian
        glMatrix.mat4.scale(xform, xform, glMatrix.vec3.fromValues(1.2, 1.2, 1.0));

        // Step F: draw the white square with the computed transform
        this.mWhiteSq.draw(xform);

        // Step G: compute the red square transform
        glMatrix.mat4.identity(xform); // restart
        glMatrix.mat4.translate(xform, xform, glMatrix.vec3.fromValues(0.25, -0.25, 0.0));
        glMatrix.mat4.rotateZ(xform, xform, -0.785);   // rotation of about -45-degrees
        glMatrix.mat4.scale(xform, xform, glMatrix.vec3.fromValues(0.4, 0.4, 1.0));

        // Step H: draw the red square with the computed transform
        this.mRedSq.draw(xform);
    }

};

window.onload = function() {
    new MyGame('GLCanvas');
}