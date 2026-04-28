"use client"

import { Atom, FlaskConical, Calculator, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const focusPoints = [
  {
    icon: Atom,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "แรงแม่เหล็กคืออะไร?",
    subject: "ฟิสิกส์",
    progress: 25,
    wrongAttempts: 5,
    progressColor: "bg-pink"
  },
  {
    icon: FlaskConical,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "พันธะโคเวเลนต์",
    subject: "เคมี",
    progress: 40,
    wrongAttempts: 3,
    progressColor: "bg-blue"
  },
  {
    icon: Calculator,
    iconBg: "bg-orange/20",
    iconColor: "text-orange",
    title: "สมการกำลังสอง",
    subject: "คณิตศาสตร์",
    progress: 60,
    wrongAttempts: 2,
    progressColor: "bg-orange"
  }
]

export function FocusPoints() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground mb-4">จุดที่ต้องโฟกัส</h2>
      
      <div className="space-y-3">
        {focusPoints.map((point, index) => (
          <Card 
            key={index}
            className="p-3 lg:p-4 bg-card border border-border/50 rounded-2xl hover:shadow-md transition-all cursor-pointer group hover:border-primary/30"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl ${point.iconBg} flex items-center justify-center shrink-0`}>
                  <point.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${point.iconColor}`} />
                </div>
                
                <div className="flex-1 min-w-0 sm:hidden">
                  <h3 className="font-semibold text-foreground truncate text-sm">{point.title}</h3>
                  <p className="text-xs text-muted-foreground">{point.subject}</p>
                </div>
              </div>

              <div className="hidden sm:block flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">{point.title}</h3>
                <p className="text-xs text-muted-foreground">{point.subject}</p>
              </div>
              
              <div className="flex-1 sm:max-w-40">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">เข้าใจแล้ว {point.progress}%</span>
                </div>
                <Progress 
                  value={point.progress} 
                  className="h-2 bg-muted"
                />
                <p className="text-xs text-pink mt-1">ผิด {point.wrongAttempts} ครั้ง</p>
              </div>
              
              <button className="w-full sm:w-auto px-4 py-2 bg-green-50 text-green-600 rounded-xl text-sm font-medium flex items-center justify-center gap-1 hover:bg-green-100 transition-colors shrink-0">
                ฝึกต่อ <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 border border-border rounded-xl text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors flex items-center justify-center gap-1">
        ดูจุดที่ต้องโฟกัสทั้งหมด <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
