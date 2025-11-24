import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ENHANCED COMPONENT: PREMIUM BLUE SMOKE PLANET
 * Improvements:
 * - Multi-layer volumetric smoke with depth
 * - Side atmospheric effects & premium blue gradient layers
 * - Enhanced shader with better smoke definition
 * - Optimized particle systems
 * - Professional depth of field effects
 */
export default function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const animationIdRef = useRef<number | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- ENHANCED PREMIUM BLUE PALETTE ---
        const PALETTE = {
            bg: 0x020814,
            deepSpace: 0x0a0e1a,

            // Main Planet - Enhanced Blues
            planetCore: new THREE.Color(0x0c1e3d),
            smoke1: new THREE.Color(0x1e3a8a),      // Deep Blue
            smoke2: new THREE.Color(0x3b82f6),      // Royal Blue
            smoke3: new THREE.Color(0x60a5fa),      // Light Blue
            highlight: new THREE.Color(0xbfdbfe),   // Sky Blue
            rim: new THREE.Color(0x93c5fd),         // Bright Rim
            glow: new THREE.Color(0x3b82f6),

            // Side atmospheric layers
            sideGlow1: new THREE.Color(0x1e40af),
            sideGlow2: new THREE.Color(0x2563eb),

            // Orbiting bodies
            planets: [
                { size: 0.6, dist: 18, speed: 0.007, color: 0xdbeafe, glow: 0x93c5fd },
                { size: 0.9, dist: 26, speed: 0.005, color: 0xbfdbfe, glow: 0x60a5fa },
                { size: 0.75, dist: 36, speed: 0.004, color: 0xe0f2fe, glow: 0x7dd3fc },
            ],
        };

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(PALETTE.bg, 0.008);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            55,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 12, 48);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(PALETTE.bg, 1);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        containerRef.current.appendChild(renderer.domElement);

        // --- ENHANCED LIGHTING ---
        const ambientLight = new THREE.AmbientLight(0x334155, 0.4);
        scene.add(ambientLight);

        const mainLight = new THREE.DirectionalLight(0xe0f2fe, 2.0);
        mainLight.position.set(15, 15, 25);
        scene.add(mainLight);

        const rimLight1 = new THREE.DirectionalLight(0x60a5fa, 1.5);
        rimLight1.position.set(-12, 8, -15);
        scene.add(rimLight1);

        const rimLight2 = new THREE.DirectionalLight(0x3b82f6, 1.2);
        rimLight2.position.set(10, -8, -12);
        scene.add(rimLight2);

        const accentLight = new THREE.PointLight(0x93c5fd, 1.5, 50);
        accentLight.position.set(0, 0, 20);
        scene.add(accentLight);

        // --- ENHANCED SMOKE SHADER ---
        const enhancedSmokeShader = {
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vPosition;
                varying vec3 vWorldPosition;
                
                void main() {
                    vUv = uv;
                    vNormal = normalize(normalMatrix * normal);
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    vPosition = mvPosition.xyz;
                    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vPosition;
                varying vec3 vWorldPosition;
                
                uniform float time;
                uniform vec3 color1;
                uniform vec3 color2;
                uniform vec3 color3;
                uniform vec3 highlight;
                uniform vec3 rimColor;

                // Enhanced Simplex Noise (kept from original)
                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
                vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

                float snoise(vec3 v) {
                    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
                    
                    vec3 i  = floor(v + dot(v, C.yyy));
                    vec3 x0 = v - i + dot(i, C.xxx);
                    
                    vec3 g = step(x0.yzx, x0.xyz);
                    vec3 l = 1.0 - g;
                    vec3 i1 = min(g.xyz, l.zxy);
                    vec3 i2 = max(g.xyz, l.zxy);
                    
                    vec3 x1 = x0 - i1 + C.xxx;
                    vec3 x2 = x0 - i2 + C.yyy;
                    vec3 x3 = x0 - D.yyy;
                    
                    i = mod289(i);
                    vec4 p = permute(permute(permute(
                        i.z + vec4(0.0, i1.z, i2.z, 1.0))
                        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
                    
                    float n_ = 0.142857142857;
                    vec3 ns = n_ * D.wyz - D.xzx;
                    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
                    vec4 x_ = floor(j * ns.z);
                    vec4 y_ = floor(j - 7.0 * x_);
                    vec4 x = x_ * ns.x + ns.yyyy;
                    vec4 y = y_ * ns.x + ns.yyyy;
                    vec4 h = 1.0 - abs(x) - abs(y);
                    
                    vec4 b0 = vec4(x.xy, y.xy);
                    vec4 b1 = vec4(x.zw, y.zw);
                    vec4 s0 = floor(b0)*2.0 + 1.0;
                    vec4 s1 = floor(b1)*2.0 + 1.0;
                    vec4 sh = -step(h, vec4(0.0));
                    
                    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
                    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
                    
                    vec3 p0 = vec3(a0.xy,h.x);
                    vec3 p1 = vec3(a0.zw,h.y);
                    vec3 p2 = vec3(a1.xy,h.z);
                    vec3 p3 = vec3(a1.zw,h.w);
                    
                    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
                    p0 *= norm.x;
                    p1 *= norm.y;
                    p2 *= norm.z;
                    p3 *= norm.w;
                    
                    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                    m = m * m;
                    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
                }

                void main() {
                    // Multi-layer smoke with better depth
                    float n1 = snoise(vWorldPosition * 0.6 + vec3(time * 0.12, time * 0.08, 0.0));
                    float n2 = snoise(vWorldPosition * 1.2 - vec3(0.0, time * 0.18, time * 0.09));
                    float n3 = snoise(vWorldPosition * 2.0 + vec3(time * 0.05, 0.0, time * 0.15));
                    
                    // Combine noise layers for depth
                    float smoke = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
                    float smokeDetail = n3 * 0.6 + n2 * 0.4;
                    
                    // Enhanced color mixing
                    vec3 baseColor = mix(color1, color2, smoothstep(-0.6, 0.4, smoke));
                    baseColor = mix(baseColor, color3, smoothstep(0.2, 0.7, smoke));
                    
                    // Sharp highlights for clarity
                    float highlightMask = smoothstep(0.3, 0.85, smokeDetail);
                    vec3 finalColor = mix(baseColor, highlight, highlightMask * 0.6);
                    
                    // Enhanced Fresnel with color variation
                    vec3 viewDir = normalize(-vPosition);
                    float fresnel = pow(1.0 - dot(vNormal, viewDir), 2.8);
                    float fresnelSoft = pow(1.0 - dot(vNormal, viewDir), 4.0);
                    
                    // Multi-layer rim lighting
                    finalColor += rimColor * fresnel * 1.5;
                    finalColor += color3 * fresnelSoft * 0.8;
                    
                    // Add depth-based darkening
                    float depth = length(vPosition) / 10.0;
                    finalColor *= (1.0 - depth * 0.1);
                    
                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `
        };

        // --- MAIN PLANET (Higher Quality) ---
        const planetGeo = new THREE.SphereGeometry(6.0, 256, 256);
        const planetMat = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color1: { value: PALETTE.smoke1 },
                color2: { value: PALETTE.smoke2 },
                color3: { value: PALETTE.smoke3 },
                highlight: { value: PALETTE.highlight },
                rimColor: { value: PALETTE.rim }
            },
            vertexShader: enhancedSmokeShader.vertexShader,
            fragmentShader: enhancedSmokeShader.fragmentShader,
        });
        const planetMesh = new THREE.Mesh(planetGeo, planetMat);
        scene.add(planetMesh);

        // --- INNER ATMOSPHERE LAYER ---
        const innerAtmoGeo = new THREE.SphereGeometry(6.5, 64, 64);
        const innerAtmoMat = new THREE.MeshBasicMaterial({
            color: PALETTE.smoke2,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending
        });
        const innerAtmo = new THREE.Mesh(innerAtmoGeo, innerAtmoMat);
        scene.add(innerAtmo);

        // --- OUTER GLOW (Enhanced) ---
        const glowTexture = new THREE.TextureLoader().load(
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/glow.png'
        );
        const glowMat = new THREE.SpriteMaterial({
            map: glowTexture,
            color: PALETTE.glow,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending
        });
        const glowSprite = new THREE.Sprite(glowMat);
        glowSprite.scale.set(26, 26, 1);
        scene.add(glowSprite);

        // --- SIDE ATMOSPHERIC LAYERS (NEW) ---
        const sideGlows: THREE.Mesh[] = [];

        // Left side glow
        const leftGlowGeo = new THREE.PlaneGeometry(40, 60);
        const leftGlowMat = new THREE.MeshBasicMaterial({
            color: PALETTE.sideGlow1,
            transparent: true,
            opacity: 0.08,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide
        });
        const leftGlow = new THREE.Mesh(leftGlowGeo, leftGlowMat);
        leftGlow.position.set(-30, 0, -10);
        leftGlow.rotation.y = Math.PI / 6;
        scene.add(leftGlow);
        sideGlows.push(leftGlow);

        // Right side glow
        const rightGlowGeo = new THREE.PlaneGeometry(40, 60);
        const rightGlowMat = new THREE.MeshBasicMaterial({
            color: PALETTE.sideGlow2,
            transparent: true,
            opacity: 0.06,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide
        });
        const rightGlow = new THREE.Mesh(rightGlowGeo, rightGlowMat);
        rightGlow.position.set(30, 0, -10);
        rightGlow.rotation.y = -Math.PI / 6;
        scene.add(rightGlow);
        sideGlows.push(rightGlow);

        // --- ORBITING PLANETS (Enhanced) ---
        const planets: {
            mesh: THREE.Mesh,
            glow: THREE.Sprite,
            dist: number,
            speed: number,
            angle: number
        }[] = [];

        PALETTE.planets.forEach((p, idx) => {
            // Orbit ring
            const orbitGeo = new THREE.RingGeometry(p.dist - 0.05, p.dist + 0.05, 256);
            const orbitMat = new THREE.MeshBasicMaterial({
                color: 0x60a5fa,
                transparent: true,
                opacity: 0.06,
                side: THREE.DoubleSide
            });
            const orbit = new THREE.Mesh(orbitGeo, orbitMat);
            orbit.rotation.x = Math.PI / 2;
            scene.add(orbit);

            // Planet body with enhanced material
            const pGeo = new THREE.SphereGeometry(p.size, 64, 64);
            const pMat = new THREE.MeshStandardMaterial({
                color: p.color,
                roughness: 0.3,
                metalness: 0.6,
                emissive: p.glow,
                emissiveIntensity: 0.3,
            });
            const pMesh = new THREE.Mesh(pGeo, pMat);
            scene.add(pMesh);

            // Planet glow
            const pGlowMat = new THREE.SpriteMaterial({
                map: glowTexture,
                color: p.glow,
                transparent: true,
                opacity: 0.4,
                blending: THREE.AdditiveBlending
            });
            const pGlow = new THREE.Sprite(pGlowMat);
            pGlow.scale.set(p.size * 4, p.size * 4, 1);
            scene.add(pGlow);

            planets.push({
                mesh: pMesh,
                glow: pGlow,
                dist: p.dist,
                speed: p.speed,
                angle: (idx / PALETTE.planets.length) * Math.PI * 2
            });
        });

        // --- ENHANCED STAR FIELD ---
        const starsGeo = new THREE.BufferGeometry();
        const starsCount = 3000;
        const starsPos = new Float32Array(starsCount * 3);
        const starsSizes = new Float32Array(starsCount);
        const starsColors = new Float32Array(starsCount * 3);

        const blueShades = [
            new THREE.Color(0x93c5fd),
            new THREE.Color(0x60a5fa),
            new THREE.Color(0xbfdbfe),
            new THREE.Color(0xe0f2fe),
            new THREE.Color(0x94a3b8),
        ];

        for (let i = 0; i < starsCount; i++) {
            const r = 90 + Math.random() * 250;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            starsPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            starsPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            starsPos[i * 3 + 2] = r * Math.cos(phi);

            starsSizes[i] = Math.random() * 0.4 + 0.1;

            const color = blueShades[Math.floor(Math.random() * blueShades.length)];
            starsColors[i * 3] = color.r;
            starsColors[i * 3 + 1] = color.g;
            starsColors[i * 3 + 2] = color.b;
        }

        starsGeo.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));
        starsGeo.setAttribute('size', new THREE.BufferAttribute(starsSizes, 1));
        starsGeo.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));

        const starsMat = new THREE.PointsMaterial({
            size: 0.3,
            transparent: true,
            opacity: 0.7,
            vertexColors: true,
            sizeAttenuation: true,
        });
        const starField = new THREE.Points(starsGeo, starsMat);
        scene.add(starField);

        // --- SMOKE PARTICLES (NEW) ---
        const smokeParticlesGeo = new THREE.BufferGeometry();
        const smokeCount = 150;
        const smokePos = new Float32Array(smokeCount * 3);
        const smokeVelocity: THREE.Vector3[] = [];

        for (let i = 0; i < smokeCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 8 + Math.random() * 15;
            const height = (Math.random() - 0.5) * 20;

            smokePos[i * 3] = Math.cos(angle) * radius;
            smokePos[i * 3 + 1] = height;
            smokePos[i * 3 + 2] = Math.sin(angle) * radius;

            smokeVelocity.push(new THREE.Vector3(
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02
            ));
        }

        smokeParticlesGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3));

        const smokeParticlesMat = new THREE.PointsMaterial({
            color: 0x60a5fa,
            size: 0.8,
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending,
        });
        const smokeParticles = new THREE.Points(smokeParticlesGeo, smokeParticlesMat);
        scene.add(smokeParticles);

        // --- ANIMATION LOOP ---
        let time = 0;
        const animate = () => {
            time += 0.005;

            // Update main planet shader
            planetMat.uniforms.time.value = time;
            planetMesh.rotation.y = time * 0.015;

            // Rotate inner atmosphere
            innerAtmo.rotation.y = -time * 0.02;
            innerAtmo.rotation.x = Math.sin(time * 0.3) * 0.1;

            // Animate side glows
            sideGlows.forEach((glow, idx) => {
                (glow.material as THREE.MeshBasicMaterial).opacity = 0.04 + Math.sin(time * 0.5 + idx * Math.PI) * 0.04;
            });

            // Update orbiting planets
            planets.forEach(p => {
                p.angle += p.speed;
                const x = Math.cos(p.angle) * p.dist;
                const z = Math.sin(p.angle) * p.dist;

                p.mesh.position.set(x, 0, z);
                p.mesh.rotation.y += 0.012;

                p.glow.position.set(x, 0, z);
            });

            // Animate smoke particles
            const positions = smokeParticlesGeo.attributes.position.array as Float32Array;
            for (let i = 0; i < smokeCount; i++) {
                positions[i * 3] += smokeVelocity[i].x;
                positions[i * 3 + 1] += smokeVelocity[i].y;
                positions[i * 3 + 2] += smokeVelocity[i].z;

                // Reset particle if too far
                const dist = Math.sqrt(
                    positions[i * 3] ** 2 +
                    positions[i * 3 + 1] ** 2 +
                    positions[i * 3 + 2] ** 2
                );

                if (dist > 25) {
                    const angle = Math.random() * Math.PI * 2;
                    const radius = 8 + Math.random() * 5;
                    positions[i * 3] = Math.cos(angle) * radius;
                    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
                    positions[i * 3 + 2] = Math.sin(angle) * radius;
                }
            }
            smokeParticlesGeo.attributes.position.needsUpdate = true;

            // Rotate star field
            starField.rotation.y = time * 0.001;
            starField.rotation.x = Math.sin(time * 0.2) * 0.05;

            // Enhanced camera movement
            camera.position.x = Math.sin(time * 0.04) * 6;
            camera.position.y = 12 + Math.sin(time * 0.06) * 3;
            camera.position.z = 48 + Math.cos(time * 0.04) * 6;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
            animationIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        // --- RESIZE HANDLER ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // --- CLEANUP ---
        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            planetGeo.dispose();
            planetMat.dispose();
            innerAtmoGeo.dispose();
            innerAtmoMat.dispose();
            starsGeo.dispose();
            starsMat.dispose();
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden z-0 bg-[#020814]">
            <div ref={containerRef} className="absolute inset-0" />

            {/* Enhanced Premium Overlays with Side Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,8,20,0.5)_70%,rgba(2,8,20,0.9)_100%)] pointer-events-none" />

            {/* Side Blue Smoke Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-[#1e3a8a]/10 via-[#1e3a8a]/5 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#2563eb]/10 via-[#2563eb]/5 to-transparent pointer-events-none" />

            {/* Top/Bottom Depth Fades */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#020814] via-[#020814]/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-[#020814] via-[#020814]/70 to-transparent pointer-events-none" />

            {/* Corner Accent Glows */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none" />
        </div>
    );
}
