// import CSS from 'csstype'
import { CardVariant } from './src/Styles/ComponentStyle'
export interface CardType {
  img: string;
  title:string;
  desc?: string;
  className?: string;
  _id?: string;
}
export type MCardType = CardType & {
  variant: CardVariant;
}

/** The URL interface represents an object providing static methods used for creating object URLs. */
export interface URL {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  toString(): string;
  readonly origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  readonly searchParams: URLSearchParams;
  username: string;
  toJSON(): string;
}
