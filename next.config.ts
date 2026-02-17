import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    reactCompiler: false,
  },
}

export default withPayload(nextConfig)
