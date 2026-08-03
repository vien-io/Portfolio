uniform float uTime;

varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

uniform vec3 uSunDirection;

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

    float n000 = hash(i + vec3(0));
    float n100 = hash(i + vec3(1,0,0));
    float n010 = hash(i + vec3(0,1,0));
    float n110 = hash(i + vec3(1,1,0));

    float n001 = hash(i + vec3(0,0,1));
    float n101 = hash(i + vec3(1,0,1));
    float n011 = hash(i + vec3(0,1,1));
    float n111 = hash(i + vec3(1,1,1));

    float nx00 = mix(n000,n100,f.x);
    float nx10 = mix(n010,n110,f.x);
    float nx01 = mix(n001,n101,f.x);
    float nx11 = mix(n011,n111,f.x);

    float nxy0 = mix(nx00,nx10,f.y);
    float nxy1 = mix(nx01,nx11,f.y);

    return mix(nxy0,nxy1,f.z);
}

float fbm(vec3 p)
{
    float value = 0.0;
    float amp = 0.5;

    for(int i=0;i<5;i++)
    {
        value += amp * noise(p);

        p *= 2.0;
        amp *= 0.5;
    }

    return value;
}

void main()
{
    vec3 p = vPosition;

    // Slowly move the clouds
    p.x += uTime * 0.03;

    float clouds = fbm(p * 3.0);

    // Only keep the brightest parts
    clouds = smoothstep(0.50, 0.68, clouds);
    
    vec3 lightDir = normalize(uSunDirection);

    float sun = max(dot(normalize(vWorldNormal), lightDir), 0.0);

    // Ambient + diffuse
    float lighting = 0.15 + sun * 0.85;

    float alpha = clouds * mix(0.4, 1.0, sun);

    vec3 color = mix(
        vec3(0.85),
        vec3(1.2),
        clouds
    );

    color *= lighting;

    gl_FragColor = vec4(color, alpha);
}