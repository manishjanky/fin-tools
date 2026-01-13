import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import Back from './Back';

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="border-b backdrop-blur-md sticky top-0 z-50"
        style={{
          backgroundColor: 'var(--color-bg-primary)',
          borderColor: 'var(--color-border-main)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:opacity-80 transition"
              style={{
                backgroundColor: 'transparent'
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'var(--color-primary-main)',
                }}
              >
                <span
                  className="font-bold text-2xl"
                  style={{ color: 'var(--color-text-inverse)' }}
                >
                  ₹
                </span>
              </div>
              <h1
                className="text-lg font-bold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                fin2ools
              </h1>
            </button>

            <nav className="hidden md:flex space-x-8">
              <Link
                to="/fd"
                className="transition"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                FD
              </Link>
              <Link
                to="/mutual-funds/my-funds"
                className="transition"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                My Funds
              </Link>
               <Link
                to="/mutual-funds/explore-funds"
                className="transition"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                Explore Funds
              </Link>
              <Link
                to="/ppf"
                className="transition"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                PPF
              </Link>
            </nav>

            {/* Hamburger Menu Button - Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1 p-2 rounded-lg transition"
              style={{
                backgroundColor: isMenuOpen ? 'var(--color-bg-secondary)' : 'transparent',
              }}
            >
              <span
                className="w-6 h-0.5 transition-all"
                style={{
                  backgroundColor: 'var(--color-text-primary)',
                  transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'rotate(0)',
                }}
              />
              <span
                className="w-6 h-0.5 transition-all"
                style={{
                  backgroundColor: 'var(--color-text-primary)',
                  opacity: isMenuOpen ? '0' : '1',
                }}
              />
              <span
                className="w-6 h-0.5 transition-all"
                style={{
                  backgroundColor: 'var(--color-text-primary)',
                  transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0)',
                }}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav
              className="md:hidden mt-4 pt-4 border-t space-y-3"
              style={{ borderColor: 'var(--color-border-main)' }}
            >
              <Link
                to="/fd"
                className="block py-2 px-3 rounded-lg transition"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)';
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                FD
              </Link>
              <Link
                to="/mutual-funds/my-funds"
                className="block py-2 px-3 rounded-lg transition"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)';
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                My Funds
              </Link>
              <Link
                to="/mutual-funds/explore-funds"
                className="block py-2 px-3 rounded-lg transition"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)';
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Explore Funds
              </Link>
              <Link
                to="/ppf"
                className="block py-2 px-3 rounded-lg transition"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)';
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                PPF
              </Link>
            </nav>
          )}
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 pt-2">
        <Back navigate={navigate} />
      </div>
    </>
  );
}
