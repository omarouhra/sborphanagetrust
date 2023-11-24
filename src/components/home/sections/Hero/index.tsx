import Button from '@/components/core/Button';
import CustomImage from '@/components/core/CustomImage';
import Heading from '@/components/core/Heading';
import Paragraph from '@/components/core/Paragraph';
import HeartIcon from '@/icons/home/heartIcon';
import heroBg from '@/public/assets/home/hero-bg.png';

export default function Hero() {
  return (
    <div className="md:px-3">
      <div className="mx-auto flex max-w-[1200px] text-white md:mt-8 md:rounded-xl">
        <div className="relative h-full">
          <CustomImage src={heroBg} alt="hero" className="rounded-lg" />
          <div className="absolute inset-0 flex h-full w-full flex-col items-start justify-end p-8">
            <div className="w-full max-w-[800px]">
              <Heading
                text="Empower Orphaned Children through Education and Hope"
                className="mb-4"
              />
              <Paragraph
                text="Your Compassionate Donation Can Make a Profound Difference: Join Us in Our Mission to Transform Lives and Give Hope to Children in Need of a Brighter Future"
                className="mb-4"
              />
            </div>
            <Button
              icon={<HeartIcon />}
              label="Donate Now"
              className="duration-200 hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
