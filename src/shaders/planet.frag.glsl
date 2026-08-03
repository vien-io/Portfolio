uniform float uTime;
uniform vec3 uSunDirection;

varying vec3 vPosition;
varying vec3 vNormal;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

float hash(vec3 p)
{
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;

    return fract(
        p.x * p.y * p.z *
        (p.x + p.y + p.z)
    );
}

float noise(vec3 x)
{
    vec3 i = floor(x);
    vec3 f = fract(x);

    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash(i + vec3(0,0,0));
    float n100 = hash(i + vec3(1,0,0));
    float n010 = hash(i + vec3(0,1,0));
    float n110 = hash(i + vec3(1,1,0));

    float n001 = hash(i + vec3(0,0,1));
    float n101 = hash(i + vec3(1,0,1));
    float n011 = hash(i + vec3(0,1,1));
    float n111 = hash(i + vec3(1,1,1));

    float nx00 = mix(n000, n100, f.x);
    float nx10 = mix(n010, n110, f.x);
    float nx01 = mix(n001, n101, f.x);
    float nx11 = mix(n011, n111, f.x);

    float nxy0 = mix(nx00, nx10, f.y);
    float nxy1 = mix(nx01, nx11, f.y);

    return mix(nxy0, nxy1, f.z);
}

float fbm(vec3 p)
{
    float value = 0.0;
    float amplitude = 0.5;

    for(int i = 0; i < 7; i++)
    {
        value += amplitude * noise(p);

        p *= 2.0;
        amplitude *= 0.5;
    }

    return value;
}

void main()
{
    //==========================================================
    // 1. TERRAIN GENERATION
    //==========================================================

    // Domain warp
    vec3 warp = vec3(
        fbm(vPosition * 1.2 + vec3(17.3, 4.1, 9.7)),
        fbm(vPosition * 1.2 + vec3(3.8, 28.4, 14.6)),
        fbm(vPosition * 1.2 + vec3(22.7, 8.3, 1.9))
    );

    warp = (warp - 0.5) * 3.0;

    vec3 continentPos = vPosition + warp;

    // Rotate sampling coordinates
    mat3 rot = mat3(
        0.36, -0.48,  0.80,
        0.80,  0.60,  0.00,
        -0.48,  0.64,  0.60
    );

    vec3 p = rot * continentPos;

    // Sample using rotated coordinates
    float continentBase = fbm(p * 0.55);
    float coastDetail   = fbm(p * 4.0);
    float continent2 = fbm((p + vec3(12.4, 5.7, 19.2)) * 0.9);
    float continent =
        continentBase * 0.7 +
        continent2 * 0.3 +
        (coastDetail - 0.5) * 0.08;
    float seaLevel = 0.25;

    // Determines where land exists
    float landMask =
    smoothstep(
        seaLevel,
        seaLevel + 0.15,
        continent
    );

    float mountainNoise = fbm((p + warp * 0.5) * 8.0);
    float mountains =
        landMask *
        pow(mountainNoise, 2.0) *
        0.25;

    float elevation =
            continent + mountains;

    float terrain =
        elevation - seaLevel;

    //==========================================================
    // POPULATION DISTRIBUTION
    //==========================================================

    // Large regions that can support cities
    float population =
        fbm(vPosition * 2.5);

    // Only keep a few large regions
    population =
        smoothstep(
            0.60,
            0.75,
            population
        );
        
    //==========================================================
    // CITY DETAIL
    //==========================================================

    // Small-scale city pattern
    float cityNoise =
        fbm(vPosition * 45.0);

    cityNoise =
        smoothstep(
            0.45,
            0.60,
            cityNoise
        );

    cityNoise = pow(cityNoise, 3.0);

    float cityMask =
        population *
        cityNoise;

    cityMask *= landMask;
    cityMask *= (1.0 - mountains * 2.0);


    //==========================================================
    // 2. CLIMATE DATA
    //==========================================================

    // Latitude from equator (0) to poles (1)
    float latitude = abs(normalize(vPosition).y);

    // Extra noise to make snow edges irregular
    float snowNoise = fbm(vPosition * 18.0);


    //==========================================================
    // 3. SNOW MASK
    //==========================================================

    // Snow caused by elevation
    float altitudeSnow =
        smoothstep(
            0.72,
            0.90,
            terrain + (snowNoise - 0.5) * 0.04
        );

    altitudeSnow *= smoothstep(
        0.05,
        0.18,
        mountains
    );

    float polarVariation =
        fbm(vPosition * 12.0);

    float polarSnow =
        smoothstep(
            0.82,
            0.95,
            latitude + (polarVariation - 0.5) * 0.08
        );

    // Combine mountain snow and polar snow
    float snowMask =
        max(
            altitudeSnow * landMask,
            polarSnow * landMask
        );

    float snowBreakup =
        fbm(vPosition * 6.0);

    float breakup =
    smoothstep(0.35, 0.65, snowBreakup);

    snowMask *= mix(
        0.75,
        1.0,
        breakup
    );


    //==========================================================
    // 4. BIOME COLORS
    //==========================================================

    vec3 deepOcean = vec3(0.02, 0.10, 0.35);
    vec3 ocean     = vec3(0.05, 0.25, 0.65);
    vec3 shallow   = vec3(0.15, 0.55, 0.85);

    vec3 beach = vec3(0.72, 0.67, 0.50);

    vec3 grass     = vec3(0.18, 0.55, 0.20);
    vec3 forest    = vec3(0.08, 0.35, 0.10);

    vec3 mountain  = vec3(0.38, 0.37, 0.36);
    vec3 rock      = vec3(0.45, 0.42, 0.40);
    vec3 snow      = vec3(0.96, 0.97, 1.00);

    vec3 cityColor = vec3(
        1.0,
        0.88,
        0.55
    );

    vec3 color;

    if (terrain < 0.35)
    {
        float t = smoothstep(0.0, 0.35, terrain);
        color = mix(deepOcean, ocean, t);
    }
    else if (terrain < 0.42)
    {
        float t = smoothstep(0.35, 0.42, terrain);
        color = mix(ocean, shallow, t);
    }
    else if (terrain < 0.45)
    {
        float t = smoothstep(0.42, 0.45, terrain);
        color = mix(shallow, beach, t);
    }
    else if (terrain < 0.65)
    {
        float t = smoothstep(0.45, 0.65, terrain);
        color = mix(grass, forest, t);
    }
    else if (terrain < 0.78)
    {
        float t = smoothstep(0.65, 0.78, terrain);
        color = mix(forest, mountain, t);
    }
    else
    {
        float t = smoothstep(0.78, 1.0, terrain);
        color = mix(mountain, rock, t);
    }


    //==========================================================
    // 5. LIGHTING
    //==========================================================

    vec3 lightDir = normalize(uSunDirection);
    float sun = max(dot(normalize(vWorldNormal), lightDir), 0.0);
    float nightMask = 1.0 - smoothstep(0.0, 0.20, sun);

    float diffuse =
        max(dot(normalize(vWorldNormal), lightDir), 0.0);

    float ambient = 0.18;

    float lighting = ambient + sun * 0.82;

    //==========================================================
    // 6. SURFACE OVERLAYS
    //==========================================================

    // Blend snow over terrain
    float snowStrength = snowMask * 0.85;

    color = mix(
        color,
        mix(rock, snow, 0.75),
        snowMask
    );

    color *= lighting;

    // Finally add city lights
    color += cityColor * cityMask * nightMask * 0.5;


    //==========================================================
    // 7. FINAL OUTPUT
    //==========================================================

    gl_FragColor = vec4(color, 1.0);
}