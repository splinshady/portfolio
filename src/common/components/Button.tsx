import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './Button.module.scss'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    title: string
    primary?: boolean
}

export const Button: React.FC<SuperButtonPropsType> = ({primary, className, ...restProps}) => {
    let finalClassName = `${primary && style.button_primary} ${className} ${style.button}`
    finalClassName = `${restProps.disabled ? style.disabled : finalClassName} ${style.button}`

    return (
        <button className={finalClassName}{...restProps}>{restProps.title}</button>
    )
}