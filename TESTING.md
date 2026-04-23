# Testing

## Stack

| Tool | Purpose |
|---|---|
| [Vitest](https://vitest.dev/) | Test runner — built on Vite, shares the same config |
| [React Testing Library](https://testing-library.com/react) | Renders components and queries the DOM |
| [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) | Extra matchers like `toBeInTheDocument()` |
| [@testing-library/user-event](https://testing-library.com/docs/user-event/intro) | Simulates realistic user interactions |
| [jsdom](https://github.com/jsdom/jsdom) | Browser-like DOM environment for Node |

CSS is skipped during tests (`css: false` in [vitest.config.js](vitest.config.js)) — Tailwind classes have no effect, which is correct since tests verify behavior and content, not visual styling.

## Commands

```bash
npm test          # Watch mode — re-runs on file changes (development)
npm run test:run  # Single run — exits with pass/fail code (CI)
npm run test:ui   # Opens the Vitest browser UI
```

## File conventions

Test files sit next to the component they test:

```
src/
  components/
    Footer.jsx
    Footer.test.jsx       ← tests for Footer
  pages/
    Navbar.jsx
    Navbar.test.jsx       ← tests for Navbar
    Home.jsx
    Home.test.jsx         ← tests for Home (full page)
```

## What is tested

### Footer ([src/components/Footer.test.jsx](src/components/Footer.test.jsx))
- Renders without error
- All four social icons present (YouTube, Facebook, Instagram, WhatsApp)
- Icons are anchor (`<a>`) elements
- Copyright text is visible

### Navbar ([src/pages/Navbar.test.jsx](src/pages/Navbar.test.jsx))
- Renders without error
- All four nav items present (About, Connect, Ministries, Zoom Groups)
- "Join Us" CTA button present
- Dropdown appears on `mouseOver` and disappears on `mouseLeave`
- Only one dropdown is open at a time

### Home ([src/pages/Home.test.jsx](src/pages/Home.test.jsx))
- Renders without error (includes Navbar + Footer as real children)
- Hero: church name visible
- Hero: service times visible (Sabbath School, Divine Service)
- Welcome section heading visible
- "Watch Live" button present
- All three card items rendered
- Events section and all five events rendered
- Location section with contact info visible
- Google Maps iframe embedded
- Footer social icons present

## Adding new tests

1. Create `ComponentName.test.jsx` next to the component file.
2. Import from `@testing-library/react` — `render` and `screen` cover most cases.
3. Use `userEvent` (from `@testing-library/user-event`) over `fireEvent` for tests that
   simulate real user input (typing, clicking). `fireEvent` is fine for hover/focus events.

```jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MyComponent } from './MyComponent.jsx'

describe('MyComponent', () => {
  it('renders the submit button', () => {
    render(<MyComponent />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('calls onSubmit when button is clicked', async () => {
    const onSubmit = vi.fn()
    render(<MyComponent onSubmit={onSubmit} />)
    await userEvent.click(screen.getByRole('button', { name: /submit/i }))
    expect(onSubmit).toHaveBeenCalledOnce()
  })
})
```

## Philosophy

Tests here check **what the user sees and can do**, not implementation details like
class names, internal state, or which hooks are used. If a test would break from a
pure refactor that doesn't change behavior, it is testing the wrong thing.
