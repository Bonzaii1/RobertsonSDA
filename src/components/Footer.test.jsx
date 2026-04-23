import { render, screen } from '@testing-library/react'
import { Footer } from './Footer.jsx'

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />)
  })

  it('displays all four social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('WhatsApp')).toBeInTheDocument()
  })

  it('social icons are anchor links', () => {
    render(<Footer />)
    const icons = ['YouTube', 'Facebook', 'Instagram', 'WhatsApp']
    icons.forEach(label => {
      expect(screen.getByLabelText(label).tagName).toBe('A')
    })
  })

  it('displays copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/@Some copyright stuff/i)).toBeInTheDocument()
  })
})
