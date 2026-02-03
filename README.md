# Rhode Island Child Tax Credit Calculator Webinar

PolicyEngine presentation for the Rhode Island Child Tax Credit Calculator webinar.

## Webinar Details

**Title**: PolicyEngine in Rhode Island: Governor Dan McKee's Child Tax Credit Proposal
**Date**: February 5, 2026, 2:00 PM Eastern
**Speakers**: David Trimmer & Pavel Makarchuk

### Description

Join PolicyEngine for a live demonstration of our Rhode Island Child Tax Credit Calculator. We'll show how Governor Dan McKee's office used the Niskanen Center-commissioned tool to help design the $325 Child Tax Credit proposed in his FY2027 budget, walk through the calculator's features, and discuss what's next for Rhode Island tax policy analysis. Q&A to follow.

### Resources

- **Calculator**: [policyengine.org/us/rhode-island-ctc-calculator](https://policyengine.org/us/rhode-island-ctc-calculator)
- **Analysis**: [policyengine.org/us/research/ri-governor-mckee-child-tax-credit](https://policyengine.org/us/research/ri-governor-mckee-child-tax-credit)
- **Full story**: [policyengine.org/us/research/ri-ctc-calculator-press-release](https://policyengine.org/us/research/ri-ctc-calculator-press-release)

### Topics Covered

- Introduction to PolicyEngine
- How we built the Rhode Island CTC Calculator
- Governor McKee's child tax credit proposal ($325/child, fully refundable)
- Live demonstration of the calculator
- What's next for Rhode Island tax policy analysis

## Viewing the Slides

Visit: https://policyengine.github.io/ri-ctc-calculator-webinar

## Development

### Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the slides.

### Building for Production

```bash
npm run build
```

Output will be in the `out/` directory.

### Adding Slides

See `CLAUDE.md` for detailed instructions on creating and editing slides with Claude Code.

## Project Structure

```
├── app/                          # Next.js app directory
│   ├── [slideshow]/page.tsx     # Dynamic slideshow viewer
│   ├── page.tsx                 # Menu page
│   └── layout.tsx
├── components/                   # Shared slide components
│   ├── Slide.tsx
│   ├── SlideTitle.tsx
│   └── SlideContent.tsx
├── slideshows/                  # Presentations
│   └── ri-ctc-webinar-2026/
│       ├── config.ts            # Slideshow configuration
│       └── slides/              # Individual slide components
├── lib/                         # Utilities
│   ├── slideshows.ts           # Slideshow registry
│   └── types.ts                # TypeScript types
└── public/
    └── logos/                   # Logo files
```

## Deployment

The slides are automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Governor McKee's Proposal Summary

- **Credit amount**: $325 per child, fully refundable
- **Eligibility**: Children under 19 years old
- **Phase-out**: Begins at $261,000 for all filing statuses
- **Integration**: Replaces existing personal exemption for dependent children under 19
- **Net cost**: $35.2 million (2026)
- **Families benefiting**: 36.5%
- **Children affected**: ~180,000
