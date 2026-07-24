varying vec3 vNormal;
varying vec3 vWorldPosition;
uniform vec3 uSunDirection;

void main()
{
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);

    vec3 lightDir = normalize(uSunDirection);

    float fresnel =
        1.0 - max(dot(viewDir, normalize(vNormal)), 0.0);

    float innerGlow = pow(fresnel, 2.0);
    float outerGlow = pow(fresnel, 8.0);

    float glow =
        innerGlow * 0.45 +
        outerGlow * 0.8;

    float sun = dot(normalize(vNormal), lightDir);

    float dayFactor = smoothstep(-0.3, 0.6, sun);

    float scatter = pow(sun, 1.5);

    float intensity =
        glow *
        (0.08 + scatter);

    intensity *= mix(0.15, 1.0, dayFactor);

    vec3 zenithColor =
        vec3(
            0.22,
            0.48,
            0.95
        );

    vec3 horizonColor =
        vec3(
            0.70,
            0.85,
            1.0
        );

    vec3 atmosphere =
        mix(
            zenithColor,
            horizonColor,
            glow
        );

    vec3 sunset = vec3(1.0, 0.45, 0.15);

    float sunsetAmount =
        smoothstep(-0.15, 0.15, sun) *
        (1.0 - smoothstep(0.15, 0.5, sun));

    sunsetAmount *= innerGlow;

    atmosphere =
        mix(
            atmosphere,
            sunset,
            sunsetAmount * 0.5
        );
    atmosphere += vec3(0.0, 0.08, 0.25) * outerGlow;

    gl_FragColor = vec4(
        atmosphere,
        intensity * 0.25
    );
}