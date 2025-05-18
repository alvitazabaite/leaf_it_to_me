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
  {
    value: "Silver Fir",
    label: "Silver Fir",
  },
  {
    value: "Slender Willow Meadow willow",
    label: "Slender Willow Meadow willow",
  },
  {
    value: "Yanang",
    label: "Yanang",
  },
  {
    value: "Wild Garlic",
    label: "Wild Garlic",
  },
];

export const apiResponseData: Record<string, mockApiResponseOption> = {
  Yanang: {
    id: 9029,
    name: "Yanang",
    slug: "tiliacora-triandra-yanang",
    data: [],
    description: "",
    created_at: "2025-02-15T01:40:30.982Z",
    updated_at: "2025-02-15T01:40:30.982Z",
    scientific_name: "Tiliacora triandra",
    parent_id: null,
    adopter_id: null,
    version: 1,
    type: "Plant",
    link: "/plants/tiliacora-triandra-yanang",
    images: {
      thumb:
        "https://cdn.permapeople.org/permapeople-permaculture-plant-database-blank.jpg",
      title:
        "https://cdn.permapeople.org/permapeople-permaculture-plant-database-blank.jpg",
    },
  },
  "Slender Willow Meadow willow": {
    id: 428,
    name: "Slender Willow Meadow willow",
    slug: "salix-petiolaris-slender-willow-meadow-willow",
    data: [
      {
        key: "Wikipedia",
        value: "https://en.wikipedia.org/wiki/Salix_petiolaris",
      },
      {
        key: "Growth",
        value: "Fast",
      },
      {
        key: "Water requirement",
        value: "Moist, Wet",
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
        value: "Salicaceae",
      },
      {
        key: "Height",
        value: "3.0",
      },
      {
        key: "Layer",
        value: "Shrubs",
      },
      {
        key: "Plants For A Future",
        value: "https://pfaf.org/User/Plant.aspx?LatinName=Salix petiolaris",
      },
      {
        key: "Native to",
        value:
          "Alberta, British Columbia, Colorado, Connecticut, Illinois, Indiana, Iowa, Maine, Manitoba, Massachusetts, Michigan, Minnesota, Nebraska, New Brunswick, New Hampshire, New Jersey, New York, North Dakota, Northwest Territorie, Nova Scotia, Ohio, Ontario, Pennsylvania, Prince Edward I., Québec, Saskatchewan, South Dakota, Vermont, Wisconsin",
      },
      {
        key: "Plants of the World Online",
        value:
          "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:778471-1",
      },
    ],
    description: "",
    created_at: "2020-11-13T18:50:17.626Z",
    updated_at: "2023-09-22T16:15:36.207Z",
    scientific_name: "Salix petiolaris",
    parent_id: null,
    adopter_id: null,
    version: 11,
    type: "Plant",
    link: "/plants/salix-petiolaris-slender-willow-meadow-willow",
    images: {
      thumb: "https://cdn.permapeople.org/ckghy6ic7kw3b9swkd76bbkzexow",
      title: "https://cdn.permapeople.org/hbn9za7fwbm3fy8fqnbfdjnnlz8i",
    },
  },
  "Wild Garlic": {
    id: 707,
    name: "Wild Garlic",
    slug: "allium-ursinum-wild-garlic",
    data: [
      {
        key: "USDA Hardiness zone",
        value: "4-8",
      },
      {
        key: "Light requirement",
        value: "Full sun, Partial sun/shade, Full shade",
      },
      {
        key: "Water requirement",
        value: "Moist",
      },
      {
        key: "Soil type",
        value: "Light (sandy), Medium",
      },
      {
        key: "Height",
        value: "0.3",
      },
      {
        key: "Width",
        value: "0.2",
      },
      {
        key: "Life cycle",
        value: "Perennial",
      },
      {
        key: "Layer",
        value: "Herbs",
      },
      {
        key: "Spacing",
        value: "20 cm",
      },
      {
        key: "Propagation method",
        value: "Seed - direct sow",
      },
      {
        key: "Germination time",
        value: "1 week",
      },
      {
        key: "Germination temperature",
        value: "15-20 °c",
      },
      {
        key: "Utility",
        value: "Wildlife forage",
      },
      {
        key: "Edible",
        value: "True",
      },
      {
        key: "Edible parts",
        value: "Bulb, Flowers, Leaves, Root",
      },
      {
        key: "Alternate name",
        value:
          "Wild cowleek, Ramsons, Buckrams, Broad-leaved garlic, Wood garlic, Bear leek, Bears garlic",
      },
      {
        key: "German name",
        value: "Bärlauch",
      },
      {
        key: "Dutch name",
        value: "Daslook",
      },
      {
        key: "Danish name",
        value: "Ramsløg",
      },
      {
        key: "Family",
        value: "Alliaceae",
      },
      {
        key: "Native to",
        value:
          "Europe, Asia, Austria, Baltic States, Belarus, Belgium, Bulgaria, Central European Rus, Corse, Czechoslovakia, Denmark, Finland, France, Germany, Great Britain, Greece, Hungary, Ireland, Italy, Netherlands, North Caucasus, North European Russi, Northwest European R, Norway, Poland, Portugal, Sicilia, Spain, Sweden, Switzerland, Transcaucasus, Ukraine",
      },
      {
        key: "Wikipedia",
        value: "https://en.wikipedia.org/wiki/Allium_ursinum",
      },
      {
        key: "Plants For A Future",
        value: "https://pfaf.org/User/Plant.aspx?LatinName=Allium ursinum",
      },
      {
        key: "Plants of the World Online",
        value:
          "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:529088-1",
      },
      {
        key: "Warning",
        value: "Might be mistaken for poisonous plants",
      },
      {
        key: "French name",
        value: "Ail des ours",
      },
    ],
    description:
      "In Europe, it is usually foraged from parks and forests in early spring. It starts growing and flowering before deciduous trees get their leaves.\r\n\r\nWild garlic (Allium ursinum) is a perennial plant that is native to Europe and Asia. It typically grows in damp, shady woodlands and is commonly found in the understory of deciduous forests.\r\n\r\nWild garlic has broad, flat leaves that are usually about 8-12 inches long and 1-2 inches wide. The leaves are dark green in color and have a distinctive garlic-like aroma when crushed or bruised. The plant also produces small, white, star-shaped flowers that are borne on thin stalks.\r\n\r\nIn terms of size, wild garlic typically grows to be about 6-12 inches tall. It is a fast-growing plant and can quickly spread to form large colonies.\r\n\r\nTo cultivate wild garlic, it is best to plant the bulbs in the fall in a damp, shaded area with rich, well-draining soil. The plant prefers cool temperatures and moist soil, and it is important to keep the soil evenly moist throughout the growing season. Wild garlic can also be propagated through division of established colonies in the spring.\r\n\r\nWild garlic is edible and can be used in a variety of dishes. The leaves and bulbs of the plant can be eaten raw or cooked and are often used as a flavorful herb in soups, salads, and other dishes. The bulbs can also be pickled or preserved in oil.\r\n\r\nIn addition to being edible, wild garlic also has a number of other uses. The plant is known to have medicinal properties and has been used in herbal remedies to treat a variety of ailments. It can also be used as a natural insect repellent, and its strong aroma is said to help deter animals from eating garden plants. Wild garlic is also a valuable food source for many species of wildlife, including deer, rabbits, and birds.\r\n\r\n## Warning\r\n\r\nWild garlic is pretty similar to the following poisonous plants: \r\n[Lily of the Valley](https://permapeople.org/plants/convallaria-majalis-lily-of-the-valley), \r\n[Autumn Crocus](https://permapeople.org/plants/colchicum-autumnale-autumn-crocus),\r\n[Cuckoo Pint](https://permapeople.org/plants/arum-maculatum-cuckoo-pint),\r\n[Indian Poke](https://permapeople.org/plants/veratrum-viride-indian-poke),\r\n[White Hellebore](https://permapeople.org/plants/veratrum-album-white-hellebore)\r\n\r\nRubbing the leaves between the hands and smell is helping but be aware that the garlic smell stays on the hands and might not help by identifying subsequent plants.\r\n\r\n## Propagation\r\n\r\nSeeds need cold stratification.\r\n",
    created_at: "2020-11-13T18:50:41.227Z",
    updated_at: "2024-02-13T20:12:14.697Z",
    scientific_name: "Allium ursinum",
    parent_id: null,
    adopter_id: null,
    version: 18,
    type: "Plant",
    link: "/plants/allium-ursinum-wild-garlic",
    images: {
      thumb: "https://cdn.permapeople.org/xl8fr3e881hlgjubv4k20l90tqua",
      title: "https://cdn.permapeople.org/cqq3ydzfb7a3swgy8e32su8kld9v",
    },
  },
  "Silver Fir": {
    id: 8408,
    name: "Silver Fir",
    slug: "abies-alba-silver-fir",
    data: [
      {
        key: "USDA Hardiness zone",
        value: "5-8",
      },
      {
        key: "Light requirement",
        value: "Full sun, Partial sun/shade, Full shade",
      },
      {
        key: "Water requirement",
        value: "Moist",
      },
      {
        key: "Soil type",
        value: "Light (sandy), Medium, Heavy (clay)",
      },
      {
        key: "Height",
        value: "45.0",
      },
      {
        key: "Layer",
        value: "Tall trees",
      },
      {
        key: "Edible",
        value: "true",
      },
      {
        key: "Edible parts",
        value: "Inner bark",
      },
      {
        key: "Wikipedia",
        value: "https://en.wikipedia.org/wiki/Abies_alba",
      },
      {
        key: "Growth",
        value: "Fast",
      },
      {
        key: "Alternate name",
        value: "Christmas tree fir, european silver fir, silver",
      },
      {
        key: "Family",
        value: "Pinaceae",
      },
      {
        key: "Plants For A Future",
        value: "https://pfaf.org/User/Plant.aspx?LatinName=Abies alba",
      },
      {
        key: "Native to",
        value:
          "Albania, Austria, Belarus, Bulgaria, Corse, Czechoslovakia, France, Germany, Greece, Hungary, Italy, Poland, Romania, Spain, Switzerland, Turkey-in-Europe, Ukraine, Yugoslavia",
      },
      {
        key: "Introduced into",
        value:
          "Belgium, Denmark, Finland, Føroyar, Great Britain, Ireland, Norway, Portugal, Sweden",
      },
      {
        key: "Plants of the World Online",
        value:
          "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:60468511-2",
      },
    ],
    description:
      "Abies alba, commonly known as Silver Fir, is an evergreen coniferous tree species belonging to the Pinaceae family. This tall and narrow tree can grow up to 60 meters in height and 2 meters in diameter at breast height. The crown of the tree is conical, with a straight trunk and smooth bark that is initially greyish-brown, turning into a reddish-brown color with age.\r\n\r\nThe species is native to mountainous regions of Europe, where it thrives in cool and humid climates with well-drained soils. Silver Fir is well-known for its ecological benefits, including its ability to reduce soil erosion, protect watersheds, and provide habitat for a variety of wildlife species.\r\n\r\nIn terms of uses, Silver Fir has long been recognized for its medicinal properties, such as its ability to treat respiratory ailments, as well as its use as a diuretic, expectorant, and antiseptic. Additionally, the tree is valued for its timber, which is used in construction, and for its essential oils, which are extracted from the needles and used in various products such as perfumes, cosmetics, and cleaning agents. Overall, Abies alba is a highly versatile and ecologically important species of coniferous tree that plays a significant role in both natural and human environments.",
    created_at: "2020-11-13T19:16:44.214Z",
    updated_at: "2023-09-22T16:58:30.738Z",
    scientific_name: "Abies alba",
    parent_id: null,
    adopter_id: null,
    version: 13,
    type: "Plant",
    link: "/plants/abies-alba-silver-fir",
    images: {
      thumb: "https://cdn.permapeople.org/ixufuynxd6liqzbltg23l1iylmzl",
      title: "https://cdn.permapeople.org/kt7ei1whaslwhfhhsnj5inm2217e",
    },
  },
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
