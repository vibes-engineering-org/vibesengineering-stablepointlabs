import { ImageResponse } from '@vercel/og';

export const alt = 'StablePointLabs - Advanced blockchain analytics and insights platform';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1e40af 0%, transparent 50%), radial-gradient(circle at 75% 75%, #7c3aed 0%, transparent 50%)',
          position: 'relative',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '80px',
            maxWidth: '1000px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Main title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: '1.1',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            StablePointLabs
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: '500',
              color: '#e5e7eb',
              lineHeight: '1.4',
              marginBottom: '32px',
              maxWidth: '800px',
            }}
          >
            Advanced blockchain analytics and insights platform
          </div>

          {/* Analytics visualization elements */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            {/* Chart bars representation */}
            <div style={{ display: 'flex', alignItems: 'end', gap: '4px' }}>
              {[60, 80, 45, 90, 75, 65].map((height, i) => (
                <div
                  key={i}
                  style={{
                    width: '8px',
                    height: `${height}px`,
                    backgroundColor: i % 2 === 0 ? '#3b82f6' : '#8b5cf6',
                    borderRadius: '2px',
                  }}
                />
              ))}
            </div>

            {/* Separator */}
            <div
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '1px',
              }}
            />

            {/* Data points representation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#06b6d4',
                }}
              />
              <div
                style={{
                  fontSize: '18px',
                  color: '#9ca3af',
                  fontWeight: '600',
                }}
              >
                Real-time Analytics
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}