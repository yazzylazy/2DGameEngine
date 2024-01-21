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

        // Step E: sets the white Renderable object's transform
        this.mWhiteSq.getXform().setPosition(-0.25, 0.25);
        this.mWhiteSq.getXform().setRotationInRad(0.2); // In Radians
        this.mWhiteSq.getXform().setSize(1.2, 1.2);
        // Step F: draws the white square (transform behavior in the object)
        this.mWhiteSq.draw();

        // Step G: sets the red square transform
        this.mRedSq.getXform().setXPos(0.25);    // to show alternative to setPosition
        this.mRedSq.getXform().setYPos(-0.25);   // it is possible to setX/Y separately
        this.mRedSq.getXform().setRotationInDegree(45);  // this is in Degree
        this.mRedSq.getXform().setWidth(0.4);     // to show alternative to setSize
        this.mRedSq.getXform().setHeight(0.4);    // that it is possible to width/height separately
        // Step H: draw the red square (transform in the object)
        this.mRedSq.draw();
    }

};

window.onload = function() {
    new MyGame('GLCanvas');
}