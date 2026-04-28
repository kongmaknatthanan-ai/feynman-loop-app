import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { Subjects } from "@/components/dashboard/subjects"
import { FocusPoints } from "@/components/dashboard/focus-points"
import { DailyMission } from "@/components/dashboard/daily-mission"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-4 lg:p-6">
      <div className="flex gap-6 max-w-[1600px] mx-auto">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden lg:block shrink-0">
          <div className="sticky top-6">
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 space-y-6 pb-20 lg:pb-0">
          <Header />
          <StatsCards />
          <Subjects />
          <FocusPoints />
        </main>

        {/* Right Sidebar - Hidden on smaller screens */}
        <div className="hidden xl:block w-80 shrink-0">
          <div className="sticky top-6">
            <DailyMission />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  )
}

function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-2 safe-area-inset-bottom">
      <div className="flex items-center justify-around">
        <button className="flex flex-col items-center gap-1 p-2 text-primary">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs font-medium">หน้าหลัก</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span className="text-xs">Road map</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-xs">เรียน</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-xs">สถิติ</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs">โปรไฟล์</span>
        </button>
      </div>
    </nav>
  )
}
