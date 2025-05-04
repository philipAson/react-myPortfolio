import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const TRAIL_LENGTH = 85;
const DOT_SIZE = 2;
const COOLDOWN_MS = 800;

const BackgroundDotTrail = ({ letterRefs }) => {
    const x = useMotionValue(100);
    const y = useMotionValue(100);
    const velocity = useRef({ x: 1, y: 1 });
    const [trail, setTrail] = useState([]);
    const dotRef = useRef(null);
    const tick = useRef(0);
    const cooldownMap = useRef(new WeakMap());

    useEffect(() => {
        let animationFrame;

        const move = () => {
            const bounds = document.body.getBoundingClientRect();

            let newX = x.get() + velocity.current.x;
            let newY = y.get() + velocity.current.y;

            tick.current += 0.05;
            newY += Math.sin(tick.current) * 0.5;
            newX += Math.cos(tick.current * 0.2) * 1;

            if (newX <= 0 || newX >= bounds.width - DOT_SIZE) {
                velocity.current.x *= -1;
                tick.current += Math.PI;
            }

            if (newY <= 0 || newY >= bounds.height - DOT_SIZE) {
                velocity.current.y *= -1;
                tick.current += Math.PI;
            }

            x.set(newX);
            y.set(newY);

            setTrail((prevTrail) => {
                const next = [...prevTrail, { x: newX, y: newY }];
                return next.length > TRAIL_LENGTH
                    ? next.slice(-TRAIL_LENGTH)
                    : next;
            });

            // 🧠 Kollisionsdetektion med cooldown
            if (letterRefs?.current?.length) {
                letterRefs.current.forEach(({ ref, trigger }) => {
                    if (!ref.current) return;

                    const rect = ref.current.getBoundingClientRect();
                    const inX = newX >= rect.left && newX <= rect.right;
                    const inY = newY >= rect.top && newY <= rect.bottom;

                    if (inX && inY) {
                        const lastHit = cooldownMap.current.get(ref);
                        const now = Date.now();

                        if (!lastHit || now - lastHit > COOLDOWN_MS) {
                            trigger();
                            cooldownMap.current.set(ref, now);
                        }
                    }
                });
            }

            animationFrame = requestAnimationFrame(move);
        };

        animationFrame = requestAnimationFrame(move);
        return () => cancelAnimationFrame(animationFrame);
    }, [letterRefs]);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 2,
                overflow: "hidden",
                pointerEvents: "none",
                opacity: 0.5,
            }}
        >
            {/* Trail dots (utan .dot-klass) */}
            {trail.map((point, index) => (
                <motion.div
                    className="dot"
                    key={index}
                    style={{
                        position: "absolute",
                        left: point.x,
                        top: point.y,
                        width: DOT_SIZE,
                        height: DOT_SIZE,
                        borderRadius: "50%",
                        backgroundColor: "crimson",
                        opacity: index / TRAIL_LENGTH,
                        zIndex: 1,
                    }}
                />
            ))}

            {/* Lilla huvuddoten (visuell) */}
            <motion.div
                ref={dotRef}
                style={{
                    position: "absolute",
                    x,
                    y,
                    width: DOT_SIZE,
                    height: DOT_SIZE,
                    borderRadius: "50%",
                    backgroundColor: "crimson",
                    zIndex: 2,
                }}
            />

            {/* Osynlig repulse-zon runt doten */}
            <div
                className="dot"
                style={{
                    position: "absolute",
                    left: x.get() - 10 + DOT_SIZE / 2,
                    top: y.get() - 10 + DOT_SIZE / 2,
                    width: 100,
                    height: 100,
                    opacity: 0,
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />
        </div>
    );
};

export default BackgroundDotTrail;
