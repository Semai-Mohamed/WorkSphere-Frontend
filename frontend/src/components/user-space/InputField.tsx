import React from 'react'
import { useForm } from 'react-hook-form'

type Props = {
type : string,
placeholder : string,
name : string ,
register:any;
onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
value : string
}

export const InputField = ({type , placeholder , name,register, value,onChange } : Props) => {
  return (
<input type={type} placeholder={placeholder} {...register(name)} onChange={onChange} value={value} className="col-span-full resize-none"/>
  )
}
