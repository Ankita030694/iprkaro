'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { auth } from '@/lib/firebase';

export default function AuthorityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push('/nullify');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const navItems = [
    {
      name: 'Leads',
      href: '/authority/leads',
      icon: 'fa-users'
    },
    {
      name: 'Search Results',
      href: '/authority/search-results',
      icon: 'fa-search'
    },
    {
      name: 'Blogs',
      href: '/authority/blogs',
      icon: 'fa-blog'
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar for desktop */}
      <aside 
        className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0"
        style={{
          background: 'linear-gradient(to bottom, #0c002b, rgb(25, 10, 60))',
          borderRight: '1px solid rgba(255, 183, 3, 0.2)'
        }}
      >
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center justify-center py-6 px-4 border-b border-white/10">
            <Link href="/" className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 relative">
                <Image
                  src="/logo/iprlogo.svg"
                  alt="IPR Karo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-nunito font-semibold text-sm">Authority Panel</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-nunito ${
                    isActive
                      ? 'bg-[#FFB703] text-[#0C002B] font-semibold'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <i className={`fas ${item.icon} text-lg`}></i>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-white/10 space-y-2">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all font-nunito"
            >
              <i className="fas fa-home text-lg"></i>
              <span>Home</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/20 transition-all font-nunito"
            >
              <i className="fas fa-sign-out-alt text-lg"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/70"
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Sidebar */}
        <aside 
          className={`absolute left-0 top-0 bottom-0 w-64 transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{
            background: 'linear-gradient(to bottom, #0c002b, rgb(25, 10, 60))',
          }}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center justify-between py-6 px-4 border-b border-white/10">
              <Link href="/" className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 relative">
                  <Image
                    src="/logo/iprlogo.svg"
                    alt="IPR Karo Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white font-nunito font-semibold text-sm">Authority Panel</span>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-nunito ${
                      isActive
                        ? 'bg-[#FFB703] text-[#0C002B] font-semibold'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <i className={`fas ${item.icon} text-lg`}></i>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-white/10 space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all font-nunito"
              >
                <i className="fas fa-home text-lg"></i>
                <span>Home</span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/20 transition-all font-nunito"
              >
                <i className="fas fa-sign-out-alt text-lg"></i>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:pl-64">
        {/* Mobile header */}
        <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-4" style={{ background: '#0c002b' }}>
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          <div className="w-12 h-12 relative">
            <Image
              src="/logo/iprlogo.svg"
              alt="IPR Karo Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-6"></div> {/* Spacer for centering */}
        </div>

        {/* Page content */}
        {children}
      </div>

      {/* FontAwesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}

