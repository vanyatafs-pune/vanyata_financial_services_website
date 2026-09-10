import { urlFor } from '@/sanity/lib/client'

const WIDTHS = [320, 480, 640, 768, 1024, 1280, 1536, 1920]

// Renders a responsive image from a Sanity image object.
// Uses Sanity's image URL builder to generate a width-based srcSet and honours
// crop/hotspot. Intrinsic width/height are set from asset metadata to reserve
// space and minimise layout shift.
export default function SanityImage({
  image,
  sizes = '100vw',
  className = '',
  priority = false,
  maxWidth = 1920,
}) {
  if (!image?.asset) return null

  const dims = image.asset?.metadata?.dimensions

  const widths = WIDTHS.filter((w) => w <= maxWidth)
  if (widths.length === 0 || widths[widths.length - 1] !== maxWidth) {
    widths.push(maxWidth)
  }

  const base = urlFor(image).auto('format').fit('max')
  const src = base.width(Math.min(1024, maxWidth)).url()
  const srcSet = widths.map((w) => `${base.width(w).url()} ${w}w`).join(', ')

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={image.alt || ''}
      width={dims?.width || undefined}
      height={dims?.height || undefined}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  )
}
