import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar.jsx'

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />)
  })

  it('displays all four navigation items', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Connect')).toBeInTheDocument()
    expect(screen.getByText('Ministries')).toBeInTheDocument()
    expect(screen.getByText('Zoom Groups')).toBeInTheDocument()
  })

  it('displays the Join Us CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /join us/i })).toBeInTheDocument()
  })

  it('shows dropdown items on hover', () => {
    render(<Navbar />)
    fireEvent.mouseOver(screen.getByText('About'))
    expect(screen.getByText('About 1')).toBeInTheDocument()
    expect(screen.getByText('About 2')).toBeInTheDocument()
    expect(screen.getByText('About 3')).toBeInTheDocument()
  })

  it('hides dropdown on mouse leave', () => {
    render(<Navbar />)
    fireEvent.mouseOver(screen.getByText('About'))
    expect(screen.getByText('About 1')).toBeInTheDocument()
    fireEvent.mouseLeave(screen.getByText('About'))
    expect(screen.queryByText('About 1')).not.toBeInTheDocument()
  })

  it('only one dropdown is open at a time', () => {
    render(<Navbar />)
    fireEvent.mouseOver(screen.getByText('About'))
    expect(screen.getByText('About 1')).toBeInTheDocument()
    fireEvent.mouseOver(screen.getByText('Connect'))
    expect(screen.queryByText('About 1')).not.toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })
})
