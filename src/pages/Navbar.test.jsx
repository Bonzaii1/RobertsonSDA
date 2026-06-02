import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar.jsx'

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />)
  })

  it('displays all four navigation items', () => {
    render(<Navbar />)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Connect').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Ministries').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Zoom Groups').length).toBeGreaterThan(0)
  })

  it('displays the Join Us CTA button', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('button', { name: /join us/i }).length).toBeGreaterThan(0)
  })

  it('shows dropdown items on hover', () => {
    render(<Navbar />)
    const initialCount = screen.getAllByText('About 1').length
    fireEvent.mouseOver(screen.getAllByText('About')[0])
    expect(screen.getAllByText('About 1').length).toBeGreaterThan(initialCount)
  })

  it('hides dropdown on mouse leave', () => {
    render(<Navbar />)
    const initialCount = screen.getAllByText('About 1').length
    fireEvent.mouseOver(screen.getAllByText('About')[0])
    expect(screen.getAllByText('About 1').length).toBeGreaterThan(initialCount)
    fireEvent.mouseLeave(screen.getAllByText('About')[0])
    expect(screen.getAllByText('About 1').length).toBe(initialCount)
  })

  it('only one dropdown is open at a time', () => {
    render(<Navbar />)
    fireEvent.mouseOver(screen.getAllByText('About')[0])
    const aboutOpenCount = screen.getAllByText('About 1').length
    fireEvent.mouseOver(screen.getAllByText('Connect')[0])
    expect(screen.getAllByText('About 1').length).toBeLessThan(aboutOpenCount)
  })
})
