
import Image from 'next/image';
import Link from 'next/link';

const YourComponent = () => (
    <Image
      src="/images/profile.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );

export default function FirstPost() {
    return (
      <>
        <h1>A picture</h1>
        <YourComponent />
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </>
    );
  }

