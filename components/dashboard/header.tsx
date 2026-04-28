"use client"

import { Bell, Settings, Flame, Diamond } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-foreground flex items-center gap-2">
          สวัสดีครับ โบ๊ท <span className="text-xl lg:text-2xl">👋</span>
        </h1>
        <p className="text-sm lg:text-base text-muted-foreground">วันนี้ โบ๊ท อยากสอนอะไรหนูหรอ</p>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        {/* Streak */}
        <div className="hidden sm:flex items-center gap-2 bg-card px-3 lg:px-4 py-2 rounded-xl border border-border/50">
          <Flame className="w-5 h-5 text-orange" />
          <div className="text-right">
            <p className="text-base lg:text-lg font-bold text-foreground">7</p>
            <p className="text-xs text-muted-foreground">สตรีค</p>
          </div>
        </div>

        {/* Gems */}
        <div className="hidden sm:flex items-center gap-2 bg-card px-3 lg:px-4 py-2 rounded-xl border border-border/50">
          <Diamond className="w-5 h-5 text-green-500" />
          <div className="text-right">
            <p className="text-base lg:text-lg font-bold text-foreground">120</p>
            <p className="text-xs text-muted-foreground">เพชร</p>
          </div>
        </div>

        {/* Notifications */}
        <button className="w-10 h-10 bg-card rounded-xl flex items-center justify-center border border-border/50 hover:bg-muted transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Settings */}
        <button className="w-10 h-10 bg-card rounded-xl flex items-center justify-center border border-border/50 hover:bg-muted transition-colors">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* User Avatar */}
        <Avatar className="w-10 h-10 border-2 border-green-300">
          <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kuAfIgsb7YIgrwMLXuxNZKrH7nhY3E.png" />
          <AvatarFallback className="bg-green-100 text-green-700">BT</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
