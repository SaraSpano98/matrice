import { config } from "../config";
const { DEFAULT_PASSWORD_OPTIONS } = config;

export const validatePassword = (password, options = DEFAULT_PASSWORD_OPTIONS) => {
    options = { ...DEFAULT_PASSWORD_OPTIONS, ...options };

    const result = {
        isValid: true,
        errors: [
            {active: false, label: "minLength", message: `Password must be at least ${options.minLength} characters long`},
            {active: false, label: "lowerCase", message: "Password must contain at least one lowercase letter"},
            {active: false, label: "upperCase", message: "Password must contain at least one uppercase letter"},
            {active: false, label: "number", message: "Password must contain at least one number"},
            {active: false, label: "specialDigit", message: "Password must contain at least one special character"},
        ]
    };

    const _setError = (label, active) => {
        const index = result.errors.findIndex(item => item.label === label);
        if(index !== -1) result.errors[index].active = active;
    }

    if(password.length < options.minLength){ result.isValid=false; _setError("minLength", true); }
    if(options.lowerCase && !/[a-z]/.test(password)){ result.isValid=false; _setError("lowerCase", true); }
    if(options.upperCase && !/[A-Z]/.test(password)){ result.isValid=false; _setError("upperCase", true); }
    if(options.number && !/\d/.test(password)){ result.isValid=false; _setError("number", true); }
    if(options.specialDigit && !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)){ result.isValid=false; _setError("specialDigit", true); }

    return result;
};

