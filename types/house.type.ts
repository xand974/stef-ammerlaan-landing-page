export type HouseModel = {
  id: string;
  status: "completed" | "underConstruction" | "inProgress";
  missionCompleted: boolean;
  date: Date;
  picture: string;
  description: {
    lan: "fr" | "en";
    content: string;
  }[];
  concepts: string[];
  alt?: string;
};
