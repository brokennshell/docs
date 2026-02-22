import { gsap } from "gsap";

export function fadeInUp(
    element: Element | Element[],
    options?: { delay?: number; duration?: number; y?: number }
) {
    const { delay = 0, duration = 0.8, y = 30 } = options ?? {};
    return gsap.fromTo(
        element,
        { opacity: 0, y },
        {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
        }
    );
}

export function staggerFadeIn(
    elements: Element[] | NodeListOf<Element>,
    options?: { stagger?: number; delay?: number; duration?: number; y?: number }
) {
    const { stagger = 0.1, delay = 0, duration = 0.6, y = 20 } = options ?? {};
    return gsap.fromTo(
        elements,
        { opacity: 0, y },
        {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: "power3.out",
        }
    );
}

export function fadeIn(
    element: Element | Element[],
    options?: { delay?: number; duration?: number }
) {
    const { delay = 0, duration = 0.6 } = options ?? {};
    return gsap.fromTo(
        element,
        { opacity: 0 },
        {
            opacity: 1,
            duration,
            delay,
            ease: "power2.out",
        }
    );
}
