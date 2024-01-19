import * as engine from "../engine/core/engine_core.js";

export default function Renderable(shader) {
	this.mShader = shader; // the shader for shading this object
	this.mColor = [1, 0, 1, 1];  // Color for fragment shader
}

Renderable.prototype.setColor = function(color) { this.mColor = color; };
Renderable.prototype.getColor = function() { return this.mColor; };

Renderable.prototype.draw = function() {
	var gl = engine.getGL();
	this.mShader.activate(this.mColor);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};