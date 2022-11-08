import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './Button.module.scss'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    title: string
    primary?: boolean
    secondary?: boolean
    type?: string
}

export const Button: React.FC<SuperButtonPropsType> = ({type,primary, className, secondary, ...restProps}) => {
    let finalClassName = `${primary && style.button_primary} 
                          ${className} 
                          ${style.button}
                          ${secondary && style.button_secondary}`
    finalClassName = `${restProps.disabled ? style.disabled : finalClassName} ${style.button}`

    return (
        <button type={type} className={finalClassName}{...restProps}>{restProps.title}</button>
    )
}