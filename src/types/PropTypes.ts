export type LayoutProps = {
  children?: React.ReactNode;
};

export type AccountViewProps = {
  address: string;
  ensName?: string;
  twitter?: string;
};
import { ReactElement, JSXElementConstructor } from "react";
import { BoxProps, TableContainerProps } from "@chakra-ui/react";

export type LayoutProps = {
  children?: React.ReactNode;
};
export interface ChartWrapperProps {
  title: string;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  sx?: BoxProps;
}
export type ChartValueType = {
  x: string;
  y: number;
  name?: string;
};
/**
 * Props for a re-usable gradient area chart
 * color1 is the start color of the gradient
 * color2 is the end color of the gradient
 * id is a unique identifier for the gradient
 */
export type GradientAreaChartProps = {
  data: ChartValueType[];
  color1: string;
  color2: string;
  id: string;
  hideX?: boolean;
};

export interface TableColumn {
  name: string;
  info: string;
}
export type GeneralTableProps = {
  columns: TableColumn[];
  id: string;
  title: string;
  children?: React.ReactNode | Element;
  sx?: TableContainerProps;
};

export type ComposedBarLineData = {
  x: string;
  line: number;
  bar: number;
}[];
