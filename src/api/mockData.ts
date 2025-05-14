import { mockApiResponseOption } from "@/api/types.ts";
import { PlantOption } from "@/components/SearchCombobox/types.ts";

export const plantsData: PlantOption[] = [
  {
    value: "American persimmon",
    label: "American persimmon",
  },
  {
    value: "Gray dogwood",
    label: "Gray dogwood",
  },
  {
    value: "Japanese Maple",
    label: "Japanese Maple",
  },
  {
    value: "Moosewood",
    label: "Moosewood",
  },
];

export const apiResponseData: Record<string, mockApiResponseOption> = {
  "American persimmon": {
    id: 66,
    name: "American persimmon",
    slug: "diospyros-virginiana-american-persimmon",
    data: [
      {
        key: "Wikipedia",
        value: "https://en.wikipedia.org/wiki/Diospyros_virginiana",
      },
      {
        key: "Edible",
        value: "true",
      },
      {
        key: "Growth",
        value: "Medium",
      },
      {
        key: "Water requirement",
        value: "Moist",
      },
      {
        key: "Light requirement",
        value: "Full sun, Partial sun/shade",
      },
      {
        key: "USDA Hardiness zone",
        value: "4-8",
      },
      {
        key: "Layer",
        value: "Trees",
      },
      {
        key: "Alternate name",
        value: "Common persimmon, persimmon",
      },
      {
        key: "Soil type",
        value: "Light (sandy), Medium, Heavy (clay)",
      },
      {
        key: "Family",
        value: "Ebenaceae",
      },
      {
        key: "Height",
        value: "20.0",
      },
      {
        key: "German name",
        value: "Amerikanischen persimone",
      },
      {
        key: "Edible uses",
        value: "Oil",
      },
      {
        key: "Utility",
        value: "Animal feed, Hedgerow, Wildlife habitat",
      },
      {
        key: "Edible parts",
        value: "Fruit",
      },
      {
        key: "Life cycle",
        value: "Perennial",
      },
      {
        key: "Leaves",
        value: "Deciduous",
      },
      {
        key: "Plants For A Future",
        value:
          "https://pfaf.org/User/Plant.aspx?LatinName=Diospyros virginiana",
      },
      {
        key: "Native to",
        value:
          "Alabama, Arkansas, Connecticut, Delaware, Florida, Georgia, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maryland, Mississippi, Missouri, New Jersey, New York, North Carolina, Ohio, Oklahoma, Pennsylvania, South Carolina, Tennessee, Texas, Virginia, West Virginia",
      },
      {
        key: "Introduced into",
        value: "Bermuda, California, Palestine, Transcaucasus",
      },
      {
        key: "Plants of the World Online",
        value:
          "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:323180-1",
      },
    ],
    description: "",
    created_at: "2020-08-11T16:09:44.387Z",
    updated_at: "2023-09-22T16:11:46.711Z",
    scientific_name: "Diospyros virginiana",
    parent_id: null,
    adopter_id: null,
    version: 17,
    type: "Plant",
    link: "/plants/diospyros-virginiana-american-persimmon",
    images: {
      thumb: "https://cdn.permapeople.org/t6dh774rrv4yq9a5raso1nv2eoct",
      title: "https://cdn.permapeople.org/b5cpx66xjt9od8eaczuamjlo30fm",
    },
  },
  "Gray dogwood": {
    id: 8936,
    name: "Gray dogwood",
    slug: "cornus-gray-dogwood",
    data: [
      {
        key: "Common name",
        value: "Gray dogwood",
      },
    ],
    description:
      "Gray dogwood is a native deciduous, rhizomatous shrub in the Cornaceae or Dogwood Family. It may grow up from 4 to 15 feet high as a shrub and up to 27 feet tall as a small tree. It is frequently planted for its showy flowers and fruits and colorful fall foliage. This plant spreads rapidly by growing suckers and is best used in naturalized settings. It will also serve to control erosion near ponds or embankments.\r\n\r\nThe Gray Dogwood is native to the Central and Eastern parts of Canada and the United States.",
    created_at: "2024-07-14T19:14:19.476Z",
    updated_at: "2024-07-18T01:05:29.648Z",
    scientific_name: "Cornus",
    parent_id: null,
    adopter_id: null,
    version: 2,
    type: "Plant",
    link: "/plants/cornus-gray-dogwood",
    images: {
      thumb:
        "https://cdn.permapeople.org/permapeople-permaculture-plant-database-blank.jpg",
      title:
        "https://cdn.permapeople.org/permapeople-permaculture-plant-database-blank.jpg",
    },
  },
  "Japanese Maple": {
    id: 8447,
    name: "Japanese Maple",
    slug: "acer-palmatum-japanese-maple",
    data: [
      {
        key: "Wikipedia",
        value: "https://en.wikipedia.org/wiki/Acer_palmatum",
      },
      {
        key: "Edible",
        value: "true",
      },
      {
        key: "Growth",
        value: "Slow",
      },
      {
        key: "Water requirement",
        value: "Moist",
      },
      {
        key: "Light requirement",
        value: "Full sun, Partial sun/shade",
      },
      {
        key: "USDA Hardiness zone",
        value: "6-8",
      },
      {
        key: "Layer",
        value: "Trees",
      },
      {
        key: "Soil type",
        value: "Light (sandy), Medium, Heavy (clay)",
      },
      {
        key: "Family",
        value: "Aceraceae",
      },
      {
        key: "Height",
        value: "8.0",
      },
      {
        key: "Edible parts",
        value: "Leaves, Sap",
      },
      {
        key: "Plants For A Future",
        value: "https://pfaf.org/User/Plant.aspx?LatinName=Acer palmatum",
      },
      {
        key: "1000 Seed Weight (g)",
        value: "40",
      },
      {
        key: "Native to",
        value: "Japan, Korea",
      },
      {
        key: "Introduced into",
        value: "China North-Central, Illinois, Maryland, New York",
      },
      {
        key: "Plants of the World Online",
        value:
          "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:927504-1",
      },
    ],
    description: "",
    created_at: "2020-11-13T19:16:56.684Z",
    updated_at: "2023-09-22T16:05:09.692Z",
    scientific_name: "Acer palmatum",
    parent_id: null,
    adopter_id: null,
    version: 12,
    type: "Plant",
    link: "/plants/acer-palmatum-japanese-maple",
    images: {
      thumb: "https://cdn.permapeople.org/cg0oah1rzsa3drd1jwg5t5rjgce1",
      title: "https://cdn.permapeople.org/48rtaw1rzjfe3bjgkuk1yob9tqwr",
    },
  },

  Moosewood: {
    id: 8449,
    name: "Moosewood",
    slug: "acer-pensylvanicum-moosewood",
    data: [
      {
        key: "Wikipedia",
        value: "https://en.wikipedia.org/wiki/Acer_pensylvanicum",
      },
      {
        key: "Alternate name",
        value: "Striped maple, pennsylvania maple",
      },
      {
        key: "Water requirement",
        value: "Moist",
      },
      {
        key: "Light requirement",
        value: "Full sun",
      },
      {
        key: "Soil type",
        value: "Light (sandy), Medium, Heavy (clay)",
      },
      {
        key: "Family",
        value: "Aceraceae",
      },
      {
        key: "Height",
        value: "4.5",
      },
      {
        key: "USDA Hardiness zone",
        value: "3-7",
      },
      {
        key: "Layer",
        value: "Trees",
      },
      {
        key: "Plants For A Future",
        value: "https://pfaf.org/User/Plant.aspx?LatinName=Acer pensylvanicum",
      },
      {
        key: "Native to",
        value:
          "Georgia, Indiana, Kentucky, Maryland, Minnesota, New York, Nova Scotia, Ohio, Tennessee, Vermont, Wisconsin",
      },
      {
        key: "Plants of the World Online",
        value:
          "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:781446-1",
      },
    ],
    description: "",
    created_at: "2020-11-13T19:16:57.422Z",
    updated_at: "2023-09-22T15:56:49.722Z",
    scientific_name: "Acer pensylvanicum",
    parent_id: null,
    adopter_id: null,
    version: 9,
    type: "Plant",
    link: "/plants/acer-pensylvanicum-moosewood",
    images: {
      thumb: "https://cdn.permapeople.org/nlzwszw8aya3zd044tg4r2f95r6p",
      title: "https://cdn.permapeople.org/wec2o1v3fdrrcaa0iqefiqf5gs5p",
    },
  },
};
