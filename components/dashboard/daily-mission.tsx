"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function DailyMission() {
  const current = 2
  const total = 3
  const progressPercent = (current / total) * 100

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">ภารกิจวันนี้</h2>
      
      {/* Mission Card with Mascot Background */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <Image 
          src="/images/mascot-reading-bg.png" 
          alt="มาสคอตกำลังอ่านหนังสือ"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
              เป้าหมายวันนี้
            </span>
            <h3 className="text-xl font-bold text-white mt-3 drop-shadow-md">
              เรียนให้เข้าใจ<br/>อย่างน้อย {total} จุด!
            </h3>
          </div>
          
          <div className="max-w-[50%]">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-bold text-yellow-300 drop-shadow-md">{current}</span>
              <span className="text-white/90 text-sm">/ {total} จุด</span>
            </div>
            <Progress 
              value={progressPercent} 
              className="h-2.5 bg-white/30"
            />
          </div>
        </div>
      </div>
      
      {/* Start Button */}
      <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg">
        <Play className="w-5 h-5 fill-current" />
        เริ่มเรียนเลย!
      </button>
      
      {/* Motivational Quote */}
      <div className="relative rounded-2xl overflow-hidden min-h-[160px]">
        <Image 
          src="/images/mascot-cheering-bg.png" 
          alt="มาสคอต - ให้กำลังใจ"
          width={500}
          height={200}
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="relative z-10 p-5">
          <span className="text-4xl text-green-700/30 font-serif">&ldquo;</span>
          <p className="text-sm text-green-800 -mt-4 ml-6">
            ความพยายามในวันนี้<br/>
            คือความสำเร็จในวันพรุ่งนี้
          </p>
          <p className="text-lg font-bold text-green-700 mt-3">สู้ๆ นะ โบ๊ท!</p>
        </div>
      </div>
    </div>
  )
}
