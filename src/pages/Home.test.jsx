import { render, screen } from '@testing-library/react'
import { Home } from './Home.jsx'

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
  })

  it('displays church name in the hero section', () => {
    render(<Home />)
    expect(screen.getByText('Robertson SDA')).toBeInTheDocument()
  })

  it('displays Saturday service times', () => {
    render(<Home />)
    expect(screen.getAllByText(/Sabbath School/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Divine Service/i).length).toBeGreaterThan(0)
  })

  it('displays the welcome section heading', () => {
    render(<Home />)
    expect(screen.getByText(/Robertson Seventh-day Adventist Church/i)).toBeInTheDocument()
  })

  it('renders the Watch Live button', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /watch live/i })).toBeInTheDocument()
  })

  it('renders all three card items', () => {
    render(<Home />)
    expect(screen.getByText('Card Title One')).toBeInTheDocument()
    expect(screen.getByText('Card Title Two')).toBeInTheDocument()
    expect(screen.getByText('Card Title Three')).toBeInTheDocument()
  })

  it('renders the events section with event list', () => {
    render(<Home />)
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('Event 1')).toBeInTheDocument()
    expect(screen.getByText('Event 5')).toBeInTheDocument()
  })

  it('renders the location section with contact info', () => {
    render(<Home />)
    expect(screen.getByText('Robertson SDA Church')).toBeInTheDocument()
    expect(screen.getByText(/Service Times/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
  })

  it('embeds a Google Maps iframe', () => {
    render(<Home />)
    const iframe = document.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe.src).toContain('maps.google.com')
  })

  it('renders the footer', () => {
    render(<Home />)
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })
})
