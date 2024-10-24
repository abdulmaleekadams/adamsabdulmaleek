/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet" | "number" | "roman";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  _type: "image";
  _key: string;
}>;

export type Skills = {
  _id: string;
  _type: "skills";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  icon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  name?: string;
};

export type WorkExp = {
  _id: string;
  _type: "workExp";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  role?: string;
  contribution?: BlockContent;
  company?: string;
};

export type Exp = {
  _id: string;
  _type: "exp";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  year?: string;
  works?: Array<{
    role?: string;
    contribution?: BlockContent;
    company?: string;
    _type: "workExp";
    _key: string;
  }>;
};

export type Projects = {
  _id: string;
  _type: "projects";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  desc?: BlockContent;
  stack?: string;
  type?: string;
  previewLink?: string;
  previewImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  repoLink?: string;
  responsive?: string;
  status?: string;
  tags?: Array<string>;
};

export type About = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  key?: string;
  title?: string;
  content?: BlockContent;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Slug | BlockContent | Skills | WorkExp | Exp | Projects | About | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/sanity.queries.ts
// Variable: projectsQuery
// Query: *[_type == "projects"] | order(_createdAt desc)
export type ProjectsQueryResult = Array<{
  _id: string;
  _type: "projects";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  desc?: BlockContent;
  stack?: string;
  type?: string;
  previewLink?: string;
  previewImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  repoLink?: string;
  responsive?: string;
  status?: string;
  tags?: Array<string>;
}>;
// Variable: aboutQuery
// Query: *[_type == "about"] | order(_createdAt desc)
export type AboutQueryResult = Array<{
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  key?: string;
  title?: string;
  content?: BlockContent;
}>;
// Variable: expQuery
// Query: *[_type == "exp"] | order(_createdAt desc)
export type ExpQueryResult = Array<{
  _id: string;
  _type: "exp";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  year?: string;
  works?: Array<{
    role?: string;
    contribution?: BlockContent;
    company?: string;
    _type: "workExp";
    _key: string;
  }>;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"projects\"] | order(_createdAt desc)": ProjectsQueryResult;
    "*[_type == \"about\"] | order(_createdAt desc)": AboutQueryResult;
    "*[_type == \"exp\"] | order(_createdAt desc)": ExpQueryResult;
  }
}
