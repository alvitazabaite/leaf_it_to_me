export type mockApiResponseOption = {
  id: number;
  name: string;
  slug: string;
  data: { key: string; value: string }[];
  description: string;
  created_at: string;
  updated_at: string;
  scientific_name: string;
  parent_id: number | null;
  adopter_id: number | null;
  version: number;
  type: string;
  link: string;
  images: {
    thumb: string;
    title: string;
  };
};
