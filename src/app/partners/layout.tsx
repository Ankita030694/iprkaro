import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function PartnerLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Mock user for UI consistency after Clerk removal
  const user = { firstName: 'Partner' };
  const signOut = async () => { router.push('/partner/login'); };

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Failed to sign out', error);
    }
  };

  const navItems = [
    {
      name: 'TM Search',
      href: '/partners/tm-search',
      icon: 'fa-search'
    },
    {
      name: 'Search History',
      href: '/partners/searchResults',
      icon: 'fa-history'
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar for desktop */}
      <aside 
        className="hidden lg:flex lg:flex-col lg:w-48 lg:fixed lg:inset-y-0"
        style={{
          background: 'linear-gradient(to bottom, #0c002b, rgb(25, 10, 60))',
          borderRight: '1px solid rgba(255, 183, 3, 0.2)'
        }}
      >
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center justify-center py-4 px-3 border-b border-white/10">
            <Link href="/" className="flex flex-col items-center gap-1.5">
              <div className="w-16 h-16 relative">
                <Image
                  src="/logo/iprlogo.svg"
                  alt="IPR Karo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-nunito font-semibold text-xs">Partner Panel</span>
            </Link>
          </div>

          {/* User Info */}
          {user && (
            <div className="px-3 py-4 border-b border-white/10">
              <div className="text-white/70 font-nunito text-xs mb-1">Welcome,</div>
              <div className="text-white font-nunito font-semibold text-sm truncate">
                Partner
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all font-nunito ${
                    isActive
                      ? 'bg-[#FFB703] text-[#0C002B] font-semibold'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <i className={`fas ${item.icon} text-sm`}></i>
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="p-3 border-t border-white/10 space-y-1.5">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all font-nunito"
            >
              <i className="fas fa-home text-sm"></i>
              <span className="text-sm">Home</span>
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all font-nunito"
            >
              <i className="fas fa-arrow-right-from-bracket text-sm"></i>
              <span className="text-sm">Logout</span>
            </button>
            <div className="flex items-center justify-center pt-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white/70">
                <i className="fas fa-user-circle"></i>
              </div>
            </div>
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
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Sidebar */}
        <aside 
          className={`absolute left-0 top-0 bottom-0 w-[280px] transition-transform duration-300 shadow-2xl ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{
            background: 'linear-gradient(to bottom, #0c002b, rgb(25, 10, 60))',
          }}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Header with Logo and Close */}
            <div className="flex items-center justify-between py-4 px-5 border-b border-white/10 sticky top-0 z-10 bg-[#0c002b]">
              <Link href="/" className="flex items-center gap-3" onClick={() => setSidebarOpen(false)}>
                <div className="w-10 h-10 relative flex-shrink-0">
                  <Image
                    src="/logo/iprlogo.svg"
                    alt="IPR Karo Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-nunito font-bold text-base">IPR Karo</span>
                  <span className="text-[#FFB703] font-nunito text-xs">Partner Panel</span>
                </div>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white/70 hover:text-white active:text-[#FFB703] transition-colors p-2 -mr-2"
                aria-label="Close menu"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            {/* User Info */}
              <div className="px-5 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white/70">
                    <i className="fas fa-user-circle text-2xl"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white/60 font-nunito text-xs mb-0.5">Welcome back,</div>
                    <div className="text-white font-nunito font-semibold text-sm truncate">
                      Partner
                    </div>
                  </div>
                </div>
              </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-5 space-y-2">
              <div className="text-white/40 font-nunito text-xs uppercase tracking-wider px-3 mb-3">
                Menu
              </div>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-nunito text-base active:scale-95 ${
                      isActive
                        ? 'bg-[#FFB703] text-[#0C002B] font-bold shadow-lg'
                        : 'text-white/80 hover:bg-white/10 hover:text-white active:bg-white/20'
                    }`}
                  >
                    <i className={`fas ${item.icon} text-lg w-5 text-center`}></i>
                    <span>{item.name}</span>
                    {isActive && <i className="fas fa-chevron-right ml-auto text-sm"></i>}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-white/10 space-y-2 bg-white/5">
              <div className="text-white/40 font-nunito text-xs uppercase tracking-wider px-3 mb-3">
                Quick Links
              </div>
              <Link
                href="/"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-white/80 hover:bg-white/10 hover:text-white active:bg-white/20 active:scale-95 transition-all font-nunito text-base"
              >
                <i className="fas fa-home text-lg w-5 text-center"></i>
                <span>Home</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSidebarOpen(false);
                  handleSignOut();
                }}
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-white/80 hover:bg-white/10 hover:text-white active:bg-red-500/20 active:scale-95 transition-all font-nunito text-base"
              >
                <i className="fas fa-arrow-right-from-bracket text-lg w-5 text-center"></i>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:pl-48 flex flex-col">
        {/* Mobile header */}
        <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 shadow-lg border-b border-[#FFB703]/30 backdrop-blur-md" style={{ background: 'linear-gradient(to right, #0c002b 0%, rgb(25, 10, 60) 100%)' }}>
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white hover:text-[#FFB703] active:scale-95 transition-all p-2.5 -ml-2 rounded-lg active:bg-white/10 flex items-center justify-center"
            aria-label="Open menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-9 h-9 relative">
              <Image
                src="/logo/iprlogo.svg"
                alt="IPR Karo Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white font-nunito font-bold text-base">IPR Karo</span>
          </div>
          <div className="w-9 h-9"></div>
        </div>

        {/* Page content */}
        <div className="flex-1 lg:pb-0 pb-20">
          {children}
        </div>

        {/* Mobile bottom navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-[#FFB703]/30 shadow-2xl backdrop-blur-md" style={{ background: 'linear-gradient(to top, #0c002b 0%, rgb(25, 10, 60) 100%)' }}>
          <nav className="flex items-center justify-around px-2 py-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-lg transition-all active:scale-95 min-w-[70px] ${
                    isActive
                      ? 'text-[#FFB703]'
                      : 'text-white/60 active:text-white'
                  }`}
                >
                  <i className={`fas ${item.icon} text-xl`}></i>
                  <span className="text-xs font-nunito font-medium">{item.name}</span>
                  {isActive && (
                    <div className="w-1 h-1 rounded-full bg-[#FFB703]"></div>
                  )}
                </Link>
              );
            })}
            <Link
              href="/"
              className="flex flex-col items-center gap-1.5 px-4 py-2 rounded-lg transition-all text-white/60 active:text-white active:scale-95 min-w-[70px]"
            >
              <i className="fas fa-home text-xl"></i>
              <span className="text-xs font-nunito font-medium">Home</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex flex-col items-center gap-1.5 px-4 py-2 rounded-lg transition-all text-white/60 active:text-white active:scale-95 min-w-[70px]"
            >
              <i className="fas fa-bars text-xl"></i>
              <span className="text-xs font-nunito font-medium">More</span>
            </button>
          </nav>
        </div>
      </div>

      {/* FontAwesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PartnerLayoutContent>{children}</PartnerLayoutContent>
  );
}

