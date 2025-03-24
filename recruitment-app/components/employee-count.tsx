"use client"

import { useState, useEffect, type FC } from "react"

interface EmployeeCountProps {
  className?: string
}

// This component will be exposed to the HR system
const EmployeeCount: FC<EmployeeCountProps> = ({ className }) => {
  const [count, setCount] = useState<number>(156)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setLoading(false)

        // Set up interval for live updates
        const interval = setInterval(() => {
          // Random fluctuation to simulate real data
          setCount((prev) => prev + Math.floor(Math.random() * 3) - 1)
        }, 5000)

        return () => clearInterval(interval)
      } catch (error) {
        console.error("Error fetching employee count:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className={className}>Loading employee data...</div>
  }

  return (
    <div className={className}>
      <div className="text-2xl font-bold">{count}</div>
      <p className="text-xs text-muted-foreground mt-1">From Recruitment System</p>
    </div>
  )
}

export default EmployeeCount

