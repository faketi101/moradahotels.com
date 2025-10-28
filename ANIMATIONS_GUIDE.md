# Framer Motion Animations Guide

This guide explains how to use the animation components in your project.

## Installation

Framer Motion has been installed and is ready to use:
```bash
pnpm add framer-motion
```

## Available Animation Components

### 1. **FadeIn** - Simple fade in effect
```jsx
import { FadeIn } from './components/AnimationWrappers';

<FadeIn>
  <h1>This content fades in</h1>
</FadeIn>

// With delay
<FadeIn delay={0.3}>
  <h1>This fades in after 0.3 seconds</h1>
</FadeIn>
```

### 2. **FadeUp** - Fade in from bottom
```jsx
import { FadeUp } from './components/AnimationWrappers';

<FadeUp>
  <div>This slides up while fading in</div>
</FadeUp>

// With delay
<FadeUp delay={0.5}>
  <div>This slides up after a delay</div>
</FadeUp>
```

### 3. **FadeDown** - Fade in from top
```jsx
import { FadeDown } from './components/AnimationWrappers';

<FadeDown>
  <div>This slides down while fading in</div>
</FadeDown>
```

### 4. **FadeLeft** - Fade in from left
```jsx
import { FadeLeft } from './components/AnimationWrappers';

<FadeLeft>
  <div>This slides in from the left</div>
</FadeLeft>
```

### 5. **FadeRight** - Fade in from right
```jsx
import { FadeRight } from './components/AnimationWrappers';

<FadeRight>
  <div>This slides in from the right</div>
</FadeRight>
```

### 6. **StaggerContainer** - Animate children sequentially
```jsx
import { StaggerContainer, FadeUp } from './components/AnimationWrappers';

<StaggerContainer>
  <FadeUp><div>Item 1</div></FadeUp>
  <FadeUp><div>Item 2</div></FadeUp>
  <FadeUp><div>Item 3</div></FadeUp>
</StaggerContainer>
```

## Component Props

All animation wrapper components accept the following props:

- `children` - The content to animate (required)
- `delay` - Delay before animation starts in seconds (optional, default: 0)
- `className` - Additional CSS classes (optional, default: '')

## Using Animation Variants Directly

If you need more control, you can use the animation variants directly with motion components:

```jsx
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, slideRight } from './utils/animations';

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeUp}
>
  <h1>Custom animated content</h1>
</motion.div>
```

## Available Variants

### Basic Variants
- `fadeIn` - Simple opacity fade
- `fadeUp` - Fade + slide from bottom
- `fadeDown` - Fade + slide from top
- `fadeLeft` - Fade + slide from left
- `fadeRight` - Fade + slide from right
- `scaleIn` - Fade + scale up
- `staggerContainer` - For staggering child animations

### Function-based Variants (with custom delay)
- `slideUp(delay)` - Slide up with custom delay
- `slideDown(delay)` - Slide down with custom delay
- `slideLeft(delay)` - Slide left with custom delay
- `slideRight(delay)` - Slide right with custom delay

## Advanced Examples

### Sequential Animations
```jsx
<div>
  <FadeUp delay={0}>
    <h1>First Element</h1>
  </FadeUp>
  <FadeUp delay={0.2}>
    <p>Second Element</p>
  </FadeUp>
  <FadeUp delay={0.4}>
    <button>Third Element</button>
  </FadeUp>
</div>
```

### Combining with Other Framer Motion Features
```jsx
import { motion } from 'framer-motion';

<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <FadeUp>
    <button>Animated Button</button>
  </FadeUp>
</motion.div>
```

### Grid/List Animations
```jsx
<StaggerContainer className="grid grid-cols-3 gap-4">
  {items.map((item) => (
    <FadeUp key={item.id}>
      <div className="card">{item.name}</div>
    </FadeUp>
  ))}
</StaggerContainer>
```

## Tips

1. **viewport={{ once: true }}** - Animation triggers only once when element enters viewport (default behavior)
2. **amount: 0.3** - Animation triggers when 30% of element is visible (default)
3. **Delay stacking** - Use incremental delays for sequential reveals
4. **Performance** - Animations use GPU-accelerated transforms for smooth performance

## Customization

To customize animation timing, edit `/src/utils/animations.js`:

```js
export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,  // Change this
      ease: "easeOut" // Or this
    }
  }
};
```

## Common Use Cases

### Hero Section
```jsx
<FadeDown>
  <h1>Welcome to Our Hotel</h1>
</FadeDown>
<FadeUp delay={0.3}>
  <p>Experience luxury and comfort</p>
</FadeUp>
```

### Cards/Grid
```jsx
<StaggerContainer className="grid">
  {rooms.map((room, index) => (
    <FadeUp key={room.id} delay={index * 0.1}>
      <RoomCard room={room} />
    </FadeUp>
  ))}
</StaggerContainer>
```

### Alternating Sections
```jsx
<FadeLeft>
  <section>Left content</section>
</FadeLeft>
<FadeRight>
  <section>Right content</section>
</FadeRight>
```

Enjoy animating your components! 🎬✨
