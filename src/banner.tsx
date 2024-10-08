import { HTMLAttributes } from "react";

interface IBannerProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

export const Banner = ({ id, ...props }: IBannerProps) => {
  return (
    <div data-cb-campaign-id={id} data-cb-embedded="banner" {...props}></div>
  );
};
