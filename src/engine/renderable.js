import * as engine from "../engine/core/engine_core.js";
import Transform from "./transform.js"

export default function Renderable(shader) {
	this.mShader = shader; // the shader for shading this object
	this.mColor = [1, 0, 1, 1];  // Color for fragment shader
	this.mXform = new Transform(); // transform operator for the object
}



Renderable.prototype.setColor = function(color) { this.mColor = color; };
Renderable.prototype.getColor = function() { return this.mColor; };

Renderable.prototype.getXform = function() { return this.mXform; }

Renderable.prototype.draw = function() {
	var gl = engine.getGL();
	this.mShader.activate(this.mColor);
	this.mShader.loadObjectTransform(this.mXform.getXform());
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};

