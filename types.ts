// import CSS from 'csstype'
import { CardVariant } from './src/Styles/ComponentStyle'
import React from 'react'
import { AxiosInstance } from 'axios'

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
  name: string,
  phone: string,
  email: string,
  message: string
}

export interface FormContactPageType {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>)=> void,
  confirmSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

export interface Data{
  specialty: string | null,
  professional: string | null,
  appointmentId: Date | string | null,
  appointment: Date | string | null
}
export type PartialData = Partial<Data> | null

// Type for useAxios parameters
export interface AxiosCfg {
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  axiosInstance: AxiosInstance
}

// Type for API response
export interface ApiResponse{
  data: [],
  error: boolean,
  statusCode: number
}
// Used for type returning of useAxios
export type ErrorUseAxios = string | false
export type LoadingUseAxios = boolean

export type ReturnUseAxios = [ApiResponse['data'], ErrorUseAxios, LoadingUseAxios]

// Response's type for 'data' at /specialties endpoint
export interface SpecialtyData {
  _id: string,
  description: string,
  img: string,
  imgSvg: string,
  summary: string
}

// Response's type for 'data' at /professionals endpoint
export interface ProfessionalData {
  _id: string,
  img: string,
  name: string,
  specialtyId: string
}
// Response's type for 'data' at /appointments endpoint
export interface AppointmentsData {
  _id: string,
  date: Date,
  dayName: string
}
// Response's type for 'data' at /appointments/:id endpoint
export interface FormAppointmentData {
  acknowledged: boolean
}

// Returned type from useAxios, when fetching /specialties endpoint
export type FetchedSpecialtyStep = [SpecialtyData[], ErrorUseAxios, LoadingUseAxios]
// Returned type from useAxios, when fetching /professionals endpoint
export type FetchedProfessionalStep = [ProfessionalData[], ErrorUseAxios, LoadingUseAxios]
// Returned type from useAxios, when fetching /appointments endpoint
export type FetchedAppointmentsStep = [AppointmentsData[], ErrorUseAxios, LoadingUseAxios]

// --------------- Types used at useAxiosFunction -----------------

export interface PutAppointmentAPI {
  professionalId: string,
  specialtyId: string,
  user: {
    dni: string | number,
    email: string,
    fullName: string,
    phone: string
  }
}

export interface PostContactMessageAPI {
  name: string,
  phone: string,
  email: string,
  message: string
}

export interface AxiosFetchParams{
  axiosInstance:AxiosInstance,
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  requestConfig?:PutAppointmentAPI | PostContactMessageAPI
}
export interface ResPutAppointmentAPI {
    data: {
      acknowledged: boolean
  },
  error: boolean,
  statusCode: number
}
export type ReturnRespUseAxiosFn = ResPutAppointmentAPI & FormAppointmentData
  & AppointmentsData[] & ProfessionalData[] & SpecialtyData[]
export type ReturnErrUseAxiosFn = string | false
export type ReturnLoadUseAxiosFn = boolean
export type CtrlUseAxiosFn = AbortController
export type ReturnUseAxiosFn = (configObj: AxiosFetchParams) => Promise<void>
export type ReturnUseAxiosFunction = [
    ReturnRespUseAxiosFn,
    ReturnErrUseAxiosFn,
    ReturnLoadUseAxiosFn,
    ReturnUseAxiosFn
  ]

// Returned type from useAxiosFunction, when fetching /appointments/:id endpoint
export type FetchedFormAppointmentStep = [
  ResPutAppointmentAPI,
  ReturnErrUseAxiosFn,
  ReturnLoadUseAxiosFn,
  ReturnUseAxiosFn
]
export type FetchedFormContactPage = [
  ResPutAppointmentAPI,
  ReturnErrUseAxiosFn,
  ReturnLoadUseAxiosFn,
  ReturnUseAxiosFn
]
