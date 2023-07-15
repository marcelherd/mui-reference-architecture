import Image from "next/image";

type Props = {};

export const BrandLogo: React.FC<Props> = () => {
  return <Image src="/brand.svg" alt="Brand Logo" width={150} height={48} />;
};
