/**
 * Animation Examples
 *
 * This file demonstrates how to use the animation components in your project.
 * You can copy these examples and use them in your actual components.
 */

import {
  FadeIn,
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  StaggerContainer,
} from "./AnimationWrappers";
import { fadeUp } from "../utils/animations";
import { motion } from "framer-motion"; // eslint-disable-line

const AnimationExamples = () => {
  return (
    <div className="animation-examples" style={{ padding: "50px" }}>
      {/* Example 1: Simple Fade In */}
      <FadeIn>
        <h1>This fades in</h1>
      </FadeIn>

      {/* Example 2: Fade Up with delay */}
      <FadeUp delay={0.2}>
        <p>This fades up from below with a 0.2s delay</p>
      </FadeUp>

      {/* Example 3: Fade Down */}
      <FadeDown>
        <p>This fades down from above</p>
      </FadeDown>

      {/* Example 4: Fade Left */}
      <FadeLeft delay={0.3}>
        <p>This fades in from the left with a 0.3s delay</p>
      </FadeLeft>

      {/* Example 5: Fade Right */}
      <FadeRight>
        <p>This fades in from the right</p>
      </FadeRight>

      {/* Example 6: Stagger Container - animates children one by one */}
      <StaggerContainer>
        <FadeUp>
          <div className="card">Card 1</div>
        </FadeUp>
        <FadeUp>
          <div className="card">Card 2</div>
        </FadeUp>
        <FadeUp>
          <div className="card">Card 3</div>
        </FadeUp>
      </StaggerContainer>

      {/* Example 7: Direct use with motion and variants */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2>Direct motion.div usage</h2>
      </motion.div>

      {/* Example 8: Multiple elements with different delays */}
      <div>
        <FadeUp delay={0}>
          <h2>Title (no delay)</h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p>Paragraph 1 (0.2s delay)</p>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p>Paragraph 2 (0.4s delay)</p>
        </FadeUp>
      </div>

      {/* Example 9: Combining animations on hover */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <FadeUp>
          <button>Animated Button</button>
        </FadeUp>
      </motion.div>
    </div>
  );
};

export default AnimationExamples;
