varying vec3 vPosition;
varying vec3 vNormal;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main() {

    // Object-space values for procedural texturing
    vPosition = position;
    vNormal = normal;

    // World-space values for lighting
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);

    gl_Position =
        projectionMatrix *
        viewMatrix *
        worldPosition;
}