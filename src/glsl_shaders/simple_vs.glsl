// this is the vertex shader
attribute vec3 aVertexPosition; // Expects one vertex position
uniform mat4 uModelTransform;

void main(void) {
    // Convert the vec3 into vec4 for scan conversion and
    // assign to gl_Position to pass vertex to the fragment shader
    gl_Position = uModelTransform * vec4(aVertexPosition, 1.0);
}
// End of vertex shader
