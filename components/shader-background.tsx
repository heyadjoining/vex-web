"use client";

import { GrainGradient } from "@paper-design/shaders-react";

export function ShaderBackground() {
    return (
        <div className="shader-bg absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: 0.2 }}>
            <GrainGradient
                style={{ width: "100%", height: "100%" }}
                colors={["#e70000"]}
                colorBack="#000000"
                softness={0.05}
                intensity={0.33}
                noise={1}
                shape="blob"
                speed={1}
            />
        </div>
    );
}
