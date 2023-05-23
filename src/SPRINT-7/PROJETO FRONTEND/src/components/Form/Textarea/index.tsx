import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label?: string,
    error?: FieldError,
}

export const Textarea = forwardRef(({label, error, ...rest}: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => (
    <div className="flex flex-col">
        {label? <label className="text-white mb-[0.875rem]">{label}</label> : null}
        <textarea ref={ref} {...rest} className="resize-none mb-[1.125rem] rounded-[20px] h-[6.25rem] border border-[#3AB8C7] pl-[0.625rem] pt-[0.625rem] bg-transparent autofill:bg-transparent text-white focus:outline-none" />
        {error? <p className="text-white">{error.message}</p> : null}
    </div>
))