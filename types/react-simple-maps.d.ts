declare module 'react-simple-maps' {
  import { ComponentType, SVGAttributes, MouseEventHandler } from 'react';

  export interface ProjectionConfig {
    rotate?: [number, number, number];
    center?: [number, number];
    scale?: number;
    parallels?: [number, number];
  }

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (args: { geographies: Geography[] }) => React.ReactNode;
  }

  export interface Geography {
    rsmKey: string;
    properties: Record<string, string | number | undefined>;
    [key: string]: unknown;
  }

  export interface GeographyStyle {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    outline?: string;
    cursor?: string;
    transition?: string;
  }

  export interface GeographyProps {
    geography: Geography;
    style?: {
      default?: GeographyStyle;
      hover?: GeographyStyle;
      pressed?: GeographyStyle;
    };
    onMouseEnter?: MouseEventHandler<SVGPathElement>;
    onMouseLeave?: MouseEventHandler<SVGPathElement>;
    onClick?: MouseEventHandler<SVGPathElement>;
    className?: string;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Sphere: ComponentType<SVGAttributes<SVGCircleElement> & { id?: string }>;
  export const Graticule: ComponentType<SVGAttributes<SVGPathElement> & { clipPathId?: string }>;
  export const Marker: ComponentType<{ coordinates: [number, number]; children?: React.ReactNode }>;
  export const ZoomableGroup: ComponentType<{ center?: [number, number]; zoom?: number; children?: React.ReactNode }>;
}
