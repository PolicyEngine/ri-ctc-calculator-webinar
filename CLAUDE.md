# Rhode Island CTC Calculator Webinar - Development Guidelines

## Slide Development

This presentation uses the same slide framework as the PolicyEngine UK Event 2025.

### Adding New Slides

1. Create a new slide component in `slideshows/ri-ctc-webinar-2026/slides/`:

```tsx
// slideshows/ri-ctc-webinar-2026/slides/YourSlide.tsx
import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function YourSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Your slide title</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <p>Your content here</p>
        </SlideContent>
      </div>
    </Slide>
  );
}
```

2. Import and add it to `slideshows/ri-ctc-webinar-2026/config.ts`:

```tsx
import YourSlide from './slides/YourSlide';

export const riCtcWebinar2026Config: SlideshowConfig = {
  // ...
  slides: [
    CoverSlide,
    IntroSlide,
    YourSlide,  // Add here
    EndSlide,
  ],
};
```

### Slide Components

- **SlideContent sizes**: `"sm"`, `"md"`, `"lg"` for different text sizes
- **Two-column layout**: Use `<SlideContent columns={2}>`
- **Lists**: Always use `text-left` for alignment

### Design Guidelines

- **Font**: Inter (automatically applied)
- **Alignment**: Left-align all content except cover/end slides
- **Colors**:
  - Teal: `text-pe-teal` (#319795)
  - Dark teal: `text-pe-dark` (#1D4044)
- **Logo**: Appears automatically on slides

### Testing

```bash
npm run dev
```

Open http://localhost:3000 to preview slides.

### Building

```bash
npm run build
```

## PolicyEngine Writing Style

- **Avoid subjective adjectives** unless backed by quantifiable data
- **Be neutral on policies**: PolicyEngine takes no position on policy reforms
- **Focus on facts**: Use specific numbers and verifiable claims

## Key Policy Details

Governor McKee's CTC Proposal:
- $325 per child, fully refundable
- Children under 19 years old
- Phase-out begins at $261,000
- Replaces existing personal exemption
- Net cost: $35.2 million
- 36.5% of families benefit
