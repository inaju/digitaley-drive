import classNames from "classnames";
import { useFeatureStore } from "./store";
import { motion } from "framer-motion";

type Props = {
  id: string;
};

type VisualProps = {
  children: React.ReactNode;
} & Props;

const Visual = ({ children, id }: VisualProps) => {
  return (
    <div
      className={classNames(
        "pointer-events-none fixed inset-0 flex items-center justify-center opacity-0",
        `visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
};

export const MusicVisual = ({ id }: Props) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;

  return (
    <Visual id={id}>
      <img src="/window-spotify.webp" />
      {isFullscreen && (
        <motion.div
          layoutId="spotify-logo"
          className="absolute left-[61.7%] top-[53%] h-48 w-[10px] rounded-[10px] bg-[#1bd761] p-[1px] shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              d="M 38.196 21.276 C 30.46 16.682 17.7 16.26 10.314 18.502 C 9.128 18.862 7.875 18.191 7.515 17.005 C 7.155 15.819 7.826 14.566 9.012 14.206 C 17.49 11.632 31.582 12.13 40.488 17.416 C 41.506 18.07 41.823 19.412 41.205 20.452 C 40.587 21.492 39.257 21.856 38.196 21.276 Z M 37.944 28.082 C 37.402 28.962 36.251 29.237 35.37 28.698 C 28.92 24.734 19.086 23.584 11.454 25.9 C 10.806 26.125 10.086 25.977 9.579 25.514 C 9.072 25.052 8.858 24.349 9.023 23.682 C 9.188 23.016 9.704 22.493 10.368 22.32 C 19.084 19.676 29.92 20.956 37.328 25.51 C 38.208 26.05 38.484 27.204 37.944 28.082 Z M 35.006 34.616 C 34.8 34.955 34.467 35.199 34.082 35.292 C 33.696 35.386 33.288 35.322 32.95 35.114 C 27.314 31.67 20.22 30.892 11.866 32.8 C 11.07 32.961 10.291 32.458 10.111 31.667 C 9.93 30.875 10.413 30.084 11.2 29.884 C 20.342 27.794 28.184 28.694 34.51 32.56 C 34.849 32.767 35.091 33.099 35.184 33.485 C 35.277 33.871 35.213 34.278 35.006 34.616 Z M 24 0 C 10.746 0 0 10.746 0 24 C 0 37.256 10.746 48 24 48 C 37.256 48 48 37.256 48 24 C 48 10.746 37.256 0 24 0 Z"
              fill="hsl(0, 0%, 100%)"
            />
          </svg>
        </motion.div>
      )}
    </Visual>
  );
};

export const OtherVisual = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="/window-spotify.webp" />
    </Visual>
  );
};

export const DataAnalytics = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D" />
    </Visual>
  );
};


export const Frontend = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJvbnRlbmR8ZW58MHx8MHx8fDA%3D" />
    </Visual>
  );
};

export const Backend = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJhY2tlbmQlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D" />
    </Visual>
  );
};

export const BusinessAnalysis = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="https://plus.unsplash.com/premium_photo-1663045533888-dce227a2cc83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjBhbmFseXNpc3xlbnwwfHwwfHx8MA%3D%3D" />
    </Visual>
  );
};

export const DataScience = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="https://plus.unsplash.com/premium_photo-1661270415926-37a9d24aff30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fHww" />
    </Visual>
  );
};

export const AnalyticsEngineering = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="https://plus.unsplash.com/premium_photo-1688821130440-6486c8c9e6cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5hbHl0aWNzJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D" />
    </Visual>
  );
};


export const GameDevelopment = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="https://images.unsplash.com/photo-1556438064-2d7646166914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" />
    </Visual>
  );
};

export const DataEngineering = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="https://plus.unsplash.com/premium_photo-1661277697952-0cacde72c755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRhdGElMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D" />
    </Visual>
  );
};

export const UiDesign = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVpJTIwZGVzaWdufGVufDB8fDB8fHww" />
    </Visual>
  );
};