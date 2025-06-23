interface BannerProps {
  title?: string;
}

export default function Banner({ title }: BannerProps) {
  return (
    <div className="bg-theme px-4 font-semibold text-2xl lg:text-4xl text-white py-10 text-center">
      {title}
    </div>
  );
}
