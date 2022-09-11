import { ValidationError } from "@enversio/commerce/utils/errors";
export const throwUserErrors = (errors)=>{
    if (errors && errors.length) {
        throw new ValidationError({
            errors: errors.map(({ code , message  })=>({
                    code: code ?? "validation_error",
                    message: message || ""
                }))
        });
    }
};
export default throwUserErrors;
