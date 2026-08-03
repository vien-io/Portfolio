varying vec3 vPosition;
varying vec3 vNormal;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main()
{
    // Object-space (used for procedural clouds)
    vPosition = position;
    vNormal = normal;

    // World-space (used for lighting)
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);

    gl_Position =
        projectionMatrix *
        viewMatrix *
        worldPosition;
}