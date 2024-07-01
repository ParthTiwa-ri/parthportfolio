import React from "react";

export type TechStackItem = {
  id: number;
  title: string;
  link: string;
  icon: string;
};

export type TechStackDetailType = TechStackItem[];

export type SocialDetail = {
  id: number;
  title: string;
  link: string;
  icon: React.ReactElement;
};

export type SocialsDetailType = SocialDetail[];
