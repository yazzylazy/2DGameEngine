export default function Transform() {
	this.mPosition = glMatrix.vec2.fromValues(0, 0); // translation operator
	this.mScale = glMatrix.vec2.fromValues(1,1);     // Scaling operator
	this.mRotationInRad = 0.0;              // Rotation in radians!
};

// <editor-fold desc="Public Methods">

//<editor-fold desc="Setter/Getter methods">
// // <editor-fold desc="Position setters and getters ">
Transform.prototype.setPosition = function (xPos, yPos) { this.setXPos(xPos); this.setYPos(yPos); };
Transform.prototype.getPosition = function () { return this.mPosition; };
Transform.prototype.getXPos = function () { return this.mPosition[0]; };
Transform.prototype.setXPos = function (xPos) { this.mPosition[0] = xPos; };
Transform.prototype.incXPosBy = function (delta) { this.mPosition[0] += delta; };
Transform.prototype.getYPos = function () { return this.mPosition[1]; };
Transform.prototype.setYPos = function (yPos) { this.mPosition[1] = yPos; };
Transform.prototype.incYPosBy = function (delta) { this.mPosition[1] += delta; };
//</editor-fold>

// <editor-fold desc="size setters and getters">
Transform.prototype.setSize = function (width, height) {
    this.setWidth(width);
    this.setHeight(height);
};
Transform.prototype.getSize = function () { return this.mScale; };
Transform.prototype.incSizeBy = function (delta) {
    this.incWidthBy(delta);
    this.incHeightBy(delta);
};
Transform.prototype.getWidth = function () { return this.mScale[0]; };
Transform.prototype.setWidth = function (width) { this.mScale[0] = width; };
Transform.prototype.incWidthBy = function (delta) { this.mScale[0] += delta; };
Transform.prototype.getHeight = function () { return this.mScale[1]; };
Transform.prototype.setHeight = function (height) { this.mScale[1] = height; };
Transform.prototype.incHeightBy = function (delta) { this.mScale[1] += delta; };
//</editor-fold>

// <editor-fold desc="rotation getters and setters">
Transform.prototype.setRotationInRad = function (rotationInRadians) {
    this.mRotationInRad = rotationInRadians;
    while (this.mRotationInRad > (2 * Math.PI)) {
        this.mRotationInRad -= (2 * Math.PI);
    }
};
Transform.prototype.setRotationInDegree = function (rotationInDegree) {
    this.setRotationInRad(rotationInDegree * Math.PI / 180.0);
};
Transform.prototype.incRotationByDegree = function (deltaDegree) {
    this.incRotationByRad(deltaDegree * Math.PI / 180.0);
};
Transform.prototype.incRotationByRad = function (deltaRad) {
    this.setRotationInRad(this.mRotationInRad + deltaRad);
};
Transform.prototype.getRotationInRad = function () {  return this.mRotationInRad; };
Transform.prototype.getRotationInDegree = function () { return this.mRotationInRad * 180.0 / Math.PI; };
    //</editor-fold>

Transform.prototype.getXform = function() {
	// Creates a blank identity matrix
	var matrix = glMatrix.mat4.create();
	// Step 1: compute translation, for now z is always at 0.0
	glMatrix.mat4.translate(matrix, matrix, glMatrix.vec3.fromValues(this.getXPos(),
	this.getYPos(), 0.0));
	// Step 2: concatenate with rotation.
	glMatrix.mat4.rotateZ(matrix, matrix, this.getRotationInRad());
	// Step 3: concatenate with scaling
	glMatrix.mat4.scale(matrix, matrix,  glMatrix.vec3.fromValues(this.getWidth(),
	this.getHeight(), 1.0));
	return matrix;
};
