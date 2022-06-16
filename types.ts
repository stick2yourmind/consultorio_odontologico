// import CSS from 'csstype'
import { CardVariant } from './src/Styles/ComponentStyle'
import React from 'react'

export interface CardType {
  img: string;
  title:string;
  desc?: string;
  className?: string;
  _id?: string;
}
export type MCardType<T> = CardType & {
  variant: CardVariant;
  onClick?: React.MouseEventHandler<T> | undefined
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

export interface TextFieldProps{
  label: string,
  name: string,
  type: string,
  placeholder: string,
  inputmode?: string,
  focus?: boolean
}

export interface FormValues{
  fullName: string,
  dni: string,
  phone: string,
  email: string
}
export interface FormContactPageValues{
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  message: string
}

export interface FormContactPageType {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>)=> void
}

export interface Data{
  specialty: string | null,
  professional: string | null,
  appointment: string | null
}
export type PartialData = Partial<Data> | null
