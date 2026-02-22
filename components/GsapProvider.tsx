"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Register GSAP plugins globally on client-side
        gsap.registerPlugin(ScrollTrigger);

        // Optional: Set default eases or global configurations here
        gsap.defaults({
            ease: "power2.out",
        });

        // Cleanup ScrollTriggers on unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return <>{children}</>;
}
