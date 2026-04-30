import type { ImageMetadata } from 'astro'

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpeg,jpg,png,gif,webp,avif,svg}',
  { eager: true },
)

export function resolveImage(path: string | null | undefined): ImageMetadata | null {
  if (!path) return null
  const entry = images[path]
  return entry ? entry.default : null
}
