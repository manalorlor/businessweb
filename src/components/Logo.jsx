import logoImg from '@/logo.jpg';

/**
 * Renders the official Manatech logo image.
 * size     — pixel width/height of the containing box
 * rounded  — if true, clips to a circle (good for Navbar/Footer pill containers)
 * className — extra classes for the img element
 */
export default function Logo({ size = 40, rounded = false, className = '' }) {
  return (
    <img
      src={logoImg}
      alt="Manatech logo"
      width={size}
      height={size}
      className={`object-contain ${rounded ? 'rounded-full' : ''} ${className}`}
      draggable={false}
    />
  );
}
