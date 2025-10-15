'use client';

import { useState, FormEvent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to authority leads page on successful login
      router.push('/authority/leads');
    } catch (err: any) {
      // Handle specific Firebase errors
      if (err.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (err.code === 'auth/user-disabled') {
        setError('This account has been disabled.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later.');
      } else {
        setError('Failed to login. Please try again.');
      }
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130),rgb(91, 88, 88))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <div className="w-full max-w-md relative z-10">
        {/* Logo/Brand section */}
        <div className="text-center mt-15 mb-8">
          <Link href="/" className="inline-block mb-6">
            <div className="flex items-center justify-center">
              <div className="w-26 h-26 sm:w-26 sm:h-26 relative">
                <Image
                  src="/logo/iprlogo.svg"
                  alt="IPR Karo Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Link>
        
        </div>

        {/* Login form card */}
        <div 
          className="rounded-2xl p-8 shadow-2xl -mt-12"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
            boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
            backdropFilter: 'blur(31.7px)',
            WebkitBackdropFilter: 'blur(31.7px)'
          }}
        >
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2 font-nunito">
                <i className="fas fa-envelope mr-2 text-[#FFB703]"></i>
                Email Address
              </label>
              <div 
                className="rounded-lg"
                style={{ background: 'rgba(255, 255, 255, 0.15)' }}
              >
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent text-white placeholder-white/60 border-0 outline-0 font-nunito"
                  placeholder="Enter your email"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2 font-nunito">
                <i className="fas fa-lock mr-2 text-[#FFB703]"></i>
                Password
              </label>
              <div 
                className="rounded-lg relative"
                style={{ background: 'rgba(255, 255, 255, 0.15)' }}
              >
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent text-white placeholder-white/60 border-0 outline-0 font-nunito pr-12"
                  placeholder="Enter your password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  tabIndex={-1}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg flex items-start gap-3">
                <i className="fas fa-exclamation-circle mt-0.5"></i>
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Forgot password link */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-white/70 cursor-pointer font-nunito">
                <input type="checkbox" className="rounded border-white/30" />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-[#FFB703] hover:text-[#e6a602] transition-colors font-nunito">
                Forgot password?
              </Link>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-lg font-medium text-[#0C002B] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 font-nunito"
              style={{
                background: loading ? 'rgba(255, 183, 3, 0.5)' : '#FFB703'
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.background = '#e6a602')}
              onMouseLeave={(e) => !loading && (e.currentTarget.style.background = '#FFB703')}
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Signing in...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-in-alt"></i>
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-white/70 font-nunito" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                OR
              </span>
            </div>
          </div>

          {/* Sign up link */}
          <div className="text-center text-sm text-white/70 font-nunito">
            Don't have an account?{' '}
            <Link href="/signup" className="text-[#FFB703] hover:text-[#e6a602] font-medium transition-colors">
              Create one now
            </Link>
          </div>
        </div>

        {/* Additional links */}
        <div className="mt-6 text-center text-sm text-white/70 font-nunito">
          <Link href="/" className="hover:text-white transition-colors">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Home
          </Link>
        </div>
      </div>

      {/* FontAwesome icons (Add this to your layout if not already included) */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}

