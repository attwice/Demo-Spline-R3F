import styles from "./Bubble.module.css";
import { useTransition, animated, config } from "@react-spring/web";

export function Bubble({ children, show }) {
  const transitions = useTransition(show, {
    from: { opacity: 0, scale: 0.5, x: 50 },
    enter: { opacity: 1, scale: 1, x: 0 },
    leave: { opacity: 0, scale: 0.5, x: 50 },
    config: config.wobbly
  });
  return transitions(({ opacity, scale, x, y }, item) => {
    return item ? (
      <animated.div class={styles.container} style={{ opacity, scale, x }}>
        {children}
      </animated.div>
    ) : (
      <></>
    );
  });
}
