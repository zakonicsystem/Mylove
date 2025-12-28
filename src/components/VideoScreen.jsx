"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function VideoScreen() {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play()
        }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
        >
            <video ref={videoRef} className="w-auto h-auto object-cover" autoPlay muted={false} playsInline>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </motion.div>
    )
}
