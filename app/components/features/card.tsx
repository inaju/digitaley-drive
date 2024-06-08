import classNames from "classnames";
import { useFeatureStore } from "./store";
import { motion } from "framer-motion";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
  url: string;
} & CardProps;

type CardProps = {
  id: string;
  img: string;
};

const FeatureCard = ({ gradient, children, id, url }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl transition- ",
        inViewFeature === id
          ? "active-card opacity-100 mt-[70px]"
          : "pointer-events-none opacity-0"
      )}
    >
      <img src={url} className="h-auto rounded-2xl w-[100%] object-contain" />
    </div>
  );
};

export const ScrollCard = ({ id, img }: CardProps) => {
  return (
    <FeatureCard
      img=""
      id={id}
      gradient="from-[#fff7f5] to-[#ffd8ad]"
      url={img}
    >
      <img
        src={img}
        className="h-[20rem] lg:h-[100%] bg-gray-100 object-cover max-w-[100%]"
      />
    </FeatureCard>
  );
};
