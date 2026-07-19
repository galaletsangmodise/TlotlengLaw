import { ImagePlus } from 'lucide-react'


export default function ImagePlaceholder({ label = 'Law1.jpeg', className = '' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed border-mist/40 bg-navy-light/40 text-mist ${className}`}
    >
      <ImagePlus size={32} strokeWidth={1.5} aria-hidden="true" />
      <p className="font-body text-sm text-center px-6">{label}</p>
    </div>
  )
}
