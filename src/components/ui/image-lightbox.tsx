import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ImageLightboxProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState<string | null>(null)
  const [alt, setAlt] = useState<string | undefined>('')
  const [zoomLevel, setZoomLevel] = useState(1)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target) return

      // If clicked element is an image (or inside an img wrapper), open lightbox
      const img = target.tagName === 'IMG' ? (target as HTMLImageElement) : target.querySelector?.('img') ?? null
      if (img instanceof HTMLImageElement) {
        const imageSrc = img.dataset?.lightboxSrc ?? img.src
        if (!imageSrc) return
        e.preventDefault()
        setSrc(imageSrc)
        setAlt(img.alt || '')
        setZoomLevel(1)
        setOpen(true)
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return
      if (e.key === 'Escape') setOpen(false)
      if (e.key === '+' || e.key === '=') setZoomLevel((z) => Math.min(3, z + 0.25))
      if (e.key === '-') setZoomLevel((z) => Math.max(1, z - 0.25))
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      {children}
      {typeof document !== 'undefined' && createPortal(
        <div
          aria-hidden={!open}
          style={{
            display: open ? 'flex' : 'none',
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={() => setOpen(false)}
        >
            <div style={{ position: 'fixed', right: 20, top: 20, display: 'flex', gap: 8 }}>
              <button
                aria-label="Zoom in"
                onClick={(e) => {
                  e.stopPropagation()
                  setZoomLevel((z) => Math.min(3, +(+z + 0.25).toFixed(2)))
                }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 6,
                  padding: '6px 8px',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                +
              </button>
              <button
                aria-label="Zoom out"
                onClick={(e) => {
                  e.stopPropagation()
                  setZoomLevel((z) => Math.max(1, +(+z - 0.25).toFixed(2)))
                }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 6,
                  padding: '6px 8px',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                −
              </button>
              <button
                aria-label="Cerrar"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen(false)
                }}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: 'none',
                  fontSize: 28,
                  cursor: 'pointer',
                }}
              >
                ×
              </button>
            </div>

          <img
            src={src ?? undefined}
            alt={alt}
            onClick={(e) => {
              e.stopPropagation()
              setZoomLevel((z) => (z === 1 ? 2 : 1))
            }}
            style={{
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
              cursor: zoomLevel === 1 ? 'zoom-in' : 'zoom-out',
              transition: 'transform 180ms ease',
              maxHeight: 'calc(100vh - 120px)',
              maxWidth: 'calc(100vw - 120px)',
              width: 'auto',
              height: 'auto',
              transform: zoomLevel > 1 ? `scale(${zoomLevel})` : 'none',
              transformOrigin: 'center center',
            }}
          />
        </div>,
        document.body,
      )}
    </>
  )
}
